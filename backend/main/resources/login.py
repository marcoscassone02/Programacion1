from flask_restful import Resource
from flask import request
from .. import db
from main.models import UsuarioModel

# USUARIOS = {
#     1: {'usuario':'Maxxo', 'contraseña':'Maxxo20'},
#     2: {'usuario':'Emi', 'contraseña':'lia_no@'},
#     3: {'usuario':'Marca', 'contraseña':'Akme3'},
#     4: {'usuario':'Steffan0', 'contraseña':'Fano20'}
# }

class Login(Resource):
    def put(self):
        logdata = request.get_json()
        # Obtener datos del formulario
        correo = logdata.get('correo')
        contraseña = logdata.get('contraseña')

        # Realizar la consulta para obtener el usuario correspondiente al correo
        usuario = UsuarioModel.query.filter_by(correo=correo).first()

        # Verificar si el usuario existe y la contraseña es correcta
        if usuario and usuario.contraseña == contraseña:
            if usuario.rol == "admin":
                return {'message': 'Inicio de sesión como administrador exitoso'}, 200
            else:
                return {'message': 'Inicio de sesión exitoso'}, 200
        else:
            return {'message': 'Credenciales inválidas'}, 401

        
# class Signup(Resource):
#     def post(self):
#         logdata = request.get_json()
#         # Obtener datos del formulario
#         username = logdata.get('username')
#         password = logdata.get('password')

#         # Verificar si el nombre de usuario ya existe
#         USUARIOS = db.session.query(UsuarioModel.correo, UsuarioModel.contraseña).all()
#         for usuario in USUARIOS.values():
#             if usuario['usuario'] == username:
#                 return {'message': 'El nombre de usuario ya existe'}, 400
#         # Si el nombre de usuario es único, añadir nuevo usuario al diccionario
#         id = int(max(USUARIOS.keys()))+1
#         USUARIOS[id] = {'usuario': username, 'contraseña': password}
#         return {'message': 'Usuario creado correctamente'}, 201
