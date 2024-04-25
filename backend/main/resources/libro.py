from flask_restful import Resource
from flask import request, jsonify
from .. import db   
from main.models import LibroModel,AutorModel

class Libro(Resource):

    def get(self,id):
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
    
    def delete(self,id):
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
        autores_ids = request.get_json().get('autores')
        libro = LibroModel.from_json(request.get_json())
        
        if autores_ids:
            # Obtener las instancias de autor basadas en las ids recibidas
            autores = AutorModel.query.filter(AutorModel.id.in_(autores_ids)).all()
            # Agregar las instancias de autor aa la lista de autores del libro
            libro.autores.extend(autores)
            
        db.session.add(libro)
        db.session.commit()
        return libro.to_json(),    