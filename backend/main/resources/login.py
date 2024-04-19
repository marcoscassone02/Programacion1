from flask_restful import Resource
from flask import request
from .. import db
from main.models import UsuarioModel

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