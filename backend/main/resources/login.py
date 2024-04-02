from flask_restful import Resource
from flask import request

USUARIOS = {
    1: {'usuario':'Maxxo', 'contraseña':'Maxxo20'},
    1: {'usuario':'Emi', 'contraseña':'lia_no@'},
    1: {'usuario':'Marca', 'contraseña':'Akme3'}
}

class Login(Resource):
    def post(self):
        # Obtener datos del formulario
        username = request.form['username']
        password = request.form['password']

        # Validar usuario y contraseña
        for usuario in USUARIOS.values():
            if usuario['usuario'] == username and usuario['contraseña'] == password:
                return {'message': 'Inicio de sesión exitoso'}, 200
        else:
            return {'message': 'Credenciales inválidas'}, 401
        
class Signin(Resource):
    def post(self):
        # Obtener datos del formulario
        username = request.form['username']
        password = request.form['password']

        # Verificar si el nombre de usuario ya existe
        for usuario in USUARIOS.values():
            if usuario['usuario'] == username:
                return {'message': 'El nombre de usuario ya existe'}, 400
        
        # Si el nombre de usuario es único, añadir nuevo usuario al diccionario
        user_id = len(USUARIOS) + 1
        USUARIOS[user_id] = {'usuario': username, 'contraseña': password}
        
        return {'message': 'Usuario creado correctamente'}, 201
