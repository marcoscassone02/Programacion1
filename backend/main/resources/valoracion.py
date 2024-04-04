from flask_restful import Resource
from flask import request

VALORACIONES = {
    1:{'libro_id': 2, 'usuario_id':2, 'valoracion':4.5, 'comentario':'Muy buen libro, lo recomiendo', 'fecha':'15/04/2024'},
    2:{'libro_id': 3, 'usuario_id':1, 'valoracion':4.8, 'comentario':'Excelente libro, muy interesante', 'fecha':'29/04/2024'},
    3:{'libro_id': 2, 'usuario_id':2, 'valoracion':3.5, 'comentario':'no era lo que esperaba pero me gusto', 'fecha':'15/05/2024'},
}

class Valoraciones(Resource):
    def get(self):
        return VALORACIONES, 200
    
    def post(self):
        usuario = request.get_json()
        id = int(max(VALORACIONES.keys()))+1
        VALORACIONES[id] = usuario
        return VALORACIONES[id], 201

class Valoracion(Resource):
    def get(self,id):
        if int(id) in VALORACIONES:
            return VALORACIONES[int(id)]
        
        #En caso de que no exista
        return 'No existe el id', 404
    
    def delete(self,id):
        if int(id) in VALORACIONES:  # Verifica que exista el id de usuario recibido en la tabla de Usuarios
            del VALORACIONES[int(id)]
            return 'Valoracion eliminada exitosamente',204
        #Si no existe
        return 'No existe el id', 404
    
