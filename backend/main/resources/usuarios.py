from flask_restful import Resource
from flask import request

USUARIOS = {
    1:{'nombre':'Carlos','apellido':'Lopez'},
    2:{'nombre':'Lionel','apellido':'Messi'},
    3:{'nombre':'Fideo','apellido':'Di Maria'}
}

USUARIOS_ADMIN = {
    1:{'nombre':'Rosa','apellido':'Grande'},
    2:{'nombre':'Tuli','apellido':'Pan'},
    3:{'nombre':'Tuma','apellido':'Chito'}
}

USUARIOS_BIBLIOTECARIOS = {
    1:{'nombre':'Mica','apellido':'Sita'},
    2:{'nombre':'Tuca','apellido':'Sita'},
    3:{'nombre':'Pia','apellido':'Mor'}
}

#Defino el recurso usuario
class Usuarios(Resource): #A la clase usuario le indico que va a ser del tipo recurso(Resource)
    #obtener recurso
    def get(self):
        #obtener todos los usuarios
        return USUARIOS
    
    def post(self):
        usuario = request.get_json()
        id = int(max(USUARIOS.keys())) + 1
        USUARIOS[id] = usuario
        return USUARIOS[id], 201
        
class Usuario(Resource):
    def get(self,id):
        #Verifico que exista el usuario
        if int(id) in USUARIOS:
            #retorno usuario
            return USUARIOS[int(id)] 
        #si no existe
        return 'el usuario no existe' , 404
    
    def put(self,id):
        if int(id) in USUARIOS:
            client = USUARIOS[int(id)]
            data = request.get_json()
            client.update(data)
            return 'actualizams el usuario', 201
        return 'el usuario no existe', 404
    
    def delete(self,id):
        if int(id) in USUARIOS:
            del USUARIOS[int(id)]
            return 'usuario eliminado', 204
        return 'usuario no existente', 404