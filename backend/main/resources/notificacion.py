from flask_restful import Resource
from flask import request
from .. import db
from main.models import NotificacionModel,UsuarioModel
from flask_jwt_extended import jwt_required, get_jwt_identity
from main.auth.decorators import role_required
class Notificacion(Resource):
    @role_required(roles=['admin'])
    def post(self):
        usuarios_ids = request.get_json().get('usuarios')
        notificacion = NotificacionModel.from_json(request.get_json())
        
        if usuarios_ids:
            usuarios = UsuarioModel.query.filter(UsuarioModel.id.in_(usuarios_ids)).all()
            notificacion.usuarios.extend(usuarios)
        db.session.add(notificacion)
        db.session.commit()
        return notificacion.to_json(),      