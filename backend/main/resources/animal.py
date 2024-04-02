from flask_restful import Resource
from flask import request

ANIMALES = {
    1:{'nombre':'Max', 'raza':'ovejero' ,'edad': '21'},
    2:{'nombre':'Mac', 'raza':'golden' ,'edad': '23'},
    3:{'nombre':'Emi', 'raza':'caniche' ,'edad': '26'},
    4:{'nombre':'Franco', 'raza':'chihua' ,'edad': '28'}

}

class Animal(Resource):
    #obtener animal
    def get(self,id):
        if int(id) in ANIMALES:
            return ANIMALES[int(id)]
        #si no existe
        return 'no existe el id',404
    #Eliminar animal
    def delete(self,id):
        if int(id) in ANIMALES:
            del ANIMALES[int(id)]
            return 'animal eliminado', 204
        #si no existe
        return 'no existe el id',404
    #actualizar animal
    def put(self,id):
        if int(id) in ANIMALES:
            animal = ANIMALES[int(id)]
            data = request.get_json()
            animal.update(data)
            return 'Actualizamos la info', 201
        #si no existe
        return 'no existe el id',404
    
class Animales(Resource):
    #obtener lista de animales
    def get(self):
        return ANIMALES
    #Agregar animal
    def post(self):
        animal = request.get_json()
        id = int(max(ANIMALES.keys())) + 1
        ANIMALES[id] = animal
        return ANIMALES[id] , 201