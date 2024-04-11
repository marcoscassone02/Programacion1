from flask_restful import Resource
from flask import request
from .. import db   
from main.models import autorModel

# Autores con nombre, apellido, id, y libro_id
AUTORES = {
    1: {'nombre': 'Daniel', 'apellido': 'Golleman', 'libro_id': 1},
    2: {'nombre': 'Stephen', 'apellido': 'King', 'libro_id': 2},
    3: {'nombre': 'Barry', 'apellido': 'Parker', 'libro_id': 3}

}

class Autor(Resource):

    def get(self,id):
        #if int(id) in LIBROS:
        #    return LIBROS[int(id)]
        #return 'no existe ese libro' , 404
        autor = db.session.query(autorModel).get_or_404(id)
        return autor.to_json()
    def put(self,id):
        if int(id) in AUTORES:
            libro = AUTORES[int(id)]
            data = request.get_json()
            libro.update(data)
            return 'Actualizamos el autor' , 201
        return 'no existe el autor' , 404
    
    def delete(self,id):
        if int(id) in AUTORES:
            del AUTORES[int(id)]
            return 'el autor ha sido eliminado' , 204
        return 'no existe el autor' , 404

class Autores(Resource):
    def get(self):
        return AUTORES
    def post(self):
        autor = request.get_json()
        id = int(max(AUTORES.keys()))+1
        AUTORES[id] = autor
        return AUTORES[id], 201
        return 'Autor creado correctamente', 201
    