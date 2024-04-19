from flask_restful import Resource
from flask import request
from .. import db
from main.models import NotificacionModel

class Notificacion(Resource):
    def post(self):
        notificacion = request.get_json()
        nueva_notificacion = NotificacionModel.from_json(notificacion)
        db.session.add(nueva_notificacion)
        db.session.commit()
        return nueva_notificacion.to_json(), 201
