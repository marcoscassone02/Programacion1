from flask_restful import Resource
from flask import request

LIBROS = {
    1:{'nombre':'Game of thrones', 'ISBN':1234567890 ,'stock': 3},
    2:{'nombre':'Lord of the rings', 'ISBN':8364228104 ,'stock': 5},
    3:{'nombre':'Maze runner', 'ISBN':24462834651 ,'stock': 0},
    4:{'nombre':'Manso libreto', 'ISBN':6420094771 ,'stock': 8}
}

class Libro(Resource):

    def get(self,id):
        if int(id) in LIBROS:
            return LIBROS[int(id)]
        return 'no existe ese libro' , 404
    
    def put(self,id):
        if int(id) in LIBROS:
            libro = LIBROS[int(id)]
            data = request.get_json()
            libro.update(data)
            return 'Actualizamos el libro' , 201
        return 'no existe el libro' , 404
    
    def delete(self,id):
        if int(id) in LIBROS:
            del LIBROS[int(id)]
            self.ordenar_coleccion()
            return 'el libro ha sido eliminado' , 204
        return 'no existe el libro' , 404

class Libros(Resource):
    def get(self):
        return LIBROS
    def post(self):
        libro = request.get_json()
        id = int(max(LIBROS.keys()))+1
        LIBROS[id] = libro
        return LIBROS[id], 201