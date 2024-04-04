from flask_restful import Resource
from flask import request

USUARIOS = {
    1:{'Nombre':'Ramiro', 'Apellido':'Perez', 'Correo':'RamiPe15@outlook.com.ar', 'Telefono':'2613485490'},
    2:{'Nombre':'Sofia', 'Apellido':'Dalmante', 'Correo':'sofi_dalmante02@gmail.com', 'Telefono':'2613846570'},
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
            return 'actualizamos el usuario', 201
        return 'el usuario no existe', 404
    
    def delete(self,id):
        if int(id) in USUARIOS:
            del USUARIOS[int(id)]
            return 'usuario eliminado', 204
        return 'usuario no existente', 404