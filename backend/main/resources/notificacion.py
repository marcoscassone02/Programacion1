from flask_restful import Resource
from flask import request
from .. import db
from main.models import NotificacionModel

NOTIFICACIONES = {
    1:{'mensaje': 'Nueva promoción de libros disponibles', 'fecha': '2024-03-28'},
    2:{'mensaje': 'Recordatorio: Devolución de libros prestados', 'fecha': '2024-03-30'},
    3:{'mensaje': 'Evento literario este fin de semana', 'fecha': '2024-04-01'}
}

class Notificacion(Resource):

    def post(self):
        notificacion = request.get_json()
        nueva_notificacion = NotificacionModel.from_json(notificacion)
        db.session.add(nueva_notificacion)
        db.session.commit()
        return nueva_notificacion.to_json(), 201
        # libro = request.get_json()
        # id = int(max(NOTIFICACIONES.keys()))+1
        # NOTIFICACIONES[id] = libro
        # return NOTIFICACIONES[id], 201