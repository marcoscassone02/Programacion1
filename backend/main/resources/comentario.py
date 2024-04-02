from flask_restful import Resource
from flask import request

COMENTARIO = {
    1:{'nombre':'Game of thrones',"comentario":"Buen libro"},
    2:{'nombre':'Lord of the rings', "comentario":"Excelente libro"},
    3:{'nombre':'Maze runner', "comentario":"Muy mal libro"},
    4:{'nombre':'Manso libreto', "comentario":"Muy buen libro"}
}

class Comentarios(Resource):
    def get(self):
        return COMENTARIO
    def post(self):
        comentario = request.get_json()
        id = int(max(COMENTARIO.keys()))+1
        COMENTARIO[id] = comentario
        return COMENTARIO[id], 201