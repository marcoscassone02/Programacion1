from flask_restful import Resource
from flask import request
from .. import db
from main.models import UsuarioModel

USUARIOS = {
    1: {'usuario':'Maxxo', 'contraseña':'Maxxo20'},
    2: {'usuario':'Emi', 'contraseña':'lia_no@'},
    3: {'usuario':'Marca', 'contraseña':'Akme3'},
    4: {'usuario':'Steffan0', 'contraseña':'Fano20'}
}

class Login(Resource):
    def put(self):
        logdata = request.get_json()
        # Obtener datos del formulario
        username = logdata.get('username')
        password = logdata.get('password')

        # Validar usuario y contraseña
        for usuario in USUARIOS.values():
            if "admin" == username and "admin" == password:
                return {'message': 'Inicio de sesion como administrador exitoso'}, 200
            elif usuario['usuario'] == username and usuario['contraseña'] == password:
                return {'message': 'Inicio de sesion exitoso'}, 200
        else:
            print (username,password)
            print (usuario['usuario'])
            return {'message': 'Credenciales invalidas'}, 401
        
class Signup(Resource):
    def post(self):
        logdata = request.get_json()
        # Obtener datos del formulario
        username = logdata.get('username')
        password = logdata.get('password')

        # Verificar si el nombre de usuario ya existe
        for usuario in USUARIOS.values():
            if usuario['usuario'] == username:
                return {'message': 'El nombre de usuario ya existe'}, 400
        # Si el nombre de usuario es único, añadir nuevo usuario al diccionario
        id = int(max(USUARIOS.keys()))+1
        USUARIOS[id] = {'usuario': username, 'contraseña': password}
        return {'message': 'Usuario creado correctamente'}, 201
