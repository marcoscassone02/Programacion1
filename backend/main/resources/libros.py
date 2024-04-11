from flask_restful import Resource
from flask import request
from .. import db   
from main.models import LibroModel

LIBROS = {
    1:{'Nombre':'El resplandor', 'Publicacion':'1977', 'genero': 'Terror', 'editorial':'Debolsillo', 'Idioma':'Español'},
    2:{'Nombre':'Inteligencia Emocional', 'Publicacion':'1995', 'genero': 'Autoayuda', 'editorial':'Kairos', 'Idioma':'Español'},
    3:{'Nombre':'Einstein', 'Publicacion':'2016', 'genero': 'Biografia', 'editorial':'Ateneo', 'Idioma':'Español'},
}

class Libro(Resource):

    def get(self,id):
        #if int(id) in LIBROS:
        #    return LIBROS[int(id)]
        #return 'no existe ese libro' , 404
        libro = db.session.query(LibroModel).get_or_404(id)
        return libro.to_json()
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
        return 'Libro creado correctamente', 201
    