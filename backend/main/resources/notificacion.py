from flask_restful import Resource
from flask import request

NOTIFICACIONES = {
    1:{'mensaje': 'Nueva promoción de libros disponibles', 'fecha': '2024-03-28'},
    2:{'mensaje': 'Recordatorio: Devolución de libros prestados', 'fecha': '2024-03-30'},
    3:{'mensaje': 'Evento literario este fin de semana', 'fecha': '2024-04-01'}
}

class Notificacion(Resource):

    def post(self):
        libro = request.get_json()
        id = int(max(NOTIFICACIONES.keys()))+1
        NOTIFICACIONES[id] = libro
        return NOTIFICACIONES[id], 201