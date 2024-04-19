from flask_restful import Resource
from flask import request, jsonify
from .. import db   
from main.models import LibroModel

LIBROS = {
    1:{'nombre':'El resplandor', 'publicacion':'1977', 'genero': 'Terror', 'editorial':'Debolsillo', 'idioma':'Español'},
    2:{'nombre':'Inteligencia Emocional', 'publicacion':'1995', 'genero': 'Autoayuda', 'editorial':'Kairos', 'idioma':'Español'},
    3:{'nombre':'Einstein', 'publicacion':'2016', 'genero': 'Biografia', 'editorial':'Ateneo', 'idioma':'Español'},
}

class Libro(Resource):

    def get(self,id):
        #if int(id) in LIBROS:
        #    return LIBROS[int(id)]
        #return 'no existe ese libro' , 404
        libro = db.session.query(LibroModel).get_or_404(id)
        return libro.to_json()
    
    def put(self, id):
        data = request.get_json()
        libro = db.session.query(LibroModel).get_or_404(id)
        for key, value in data.items():
            setattr(libro, key, value)
        db.session.add(libro)
        db.session.commit()
        return libro.to_json(), 201
    #     # if int(id) in LIBROS:
    #     #     libro = LIBROS[int(id)]
    #     #     data = request.get_json()
    #     #     libro.update(data)
    #     #     return 'Actualizamos el libro' , 201
    #     libro = db.session.query(LibroModel).put_or_404(id)
    #     return libro.to_json()
    
    def delete(self,id):
        # if int(id) in LIBROS:
        #     del LIBROS[int(id)]
        #     return 'el libro ha sido eliminado' , 204
        # return 'no existe el libro' , 404

        libro = db.session.query(LibroModel).get_or_404(id)
        db.session.delete(libro)
        db.session.commit()
        return 'Libro eliminado'

class Libros(Resource):
    def get(self):
        listado_libros = db.session.query(LibroModel).all()
        libros = jsonify([libro.to_json() for libro in listado_libros])
        return libros


    def post(self):
        libro = request.get_json()
        # nuevo_libro = LibroModel(libro['nombre'], libro['publicacion'], ['genero'], ['editorial'], libro['idioma'])
        nuevo_libro = LibroModel.from_json(libro)
        db.session.add(nuevo_libro)
        db.session.commit()
        return nuevo_libro.to_json(), 201
        # id = int(max(LIBROS.keys()))+1
        # LIBROS[id] = libro
        # return LIBROS[id], 201
    
