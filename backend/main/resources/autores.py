from flask_restful import Resource
from flask import request, jsonify
from .. import db   
from main.models import AutorModel

# Autores con nombre, apellido, id, y libro_id
AUTORES = {
    1: {'nombre': 'Daniel', 'apellido': 'Golleman', 'biografia': 'Psicologo'},
    2: {'nombre': 'Stephen', 'apellido': 'King', 'biografia': 'Escritor de exitosas novelas'},
    3: {'nombre': 'Barry', 'apellido': 'Parker', 'biografia': 'Escritor'},

}

class Autor(Resource):

    def get(self,id):
        autor = db.session.query(AutorModel).get_or_404(id)
        return autor.to_json()
        # if int(id) in AUTORES:
        #    return AUTORES[int(id)]
        # return 'no existe ese libro' , 404
        # # autor = db.session.query(AutorModel).get_or_404(id)
        
    def put(self,id):
        data = request.get_json()
        autor = db.session.query(AutorModel).get_or_404(id)
        for key, value in data.items():
            setattr(autor, key, value)
        db.session.add(autor)
        db.session.commit()
        return autor.to_json(), 201
        # if int(id) in AUTORES:
        #     autor = AUTORES[int(id)]
        #     data = request.get_json()
        #     autor.update(data)
        #     return 'Actualizamos el autor' , 201
        # return 'no existe el autor' , 404
    
    def delete(self,id):
        autor = db.session.query(AutorModel).get_or_404(id)
        db.session.delete(autor)
        db.session.commit()
        return 'Autor eliminado'
        # if int(id) in AUTORES:
        #     del AUTORES[int(id)]
        #     return 'el autor ha sido eliminado' , 204
        # return 'no existe el autor' , 404


class Autores(Resource):
    def get(self):
        # return AUTORES
        listado_autores = db.session.query(AutorModel).all()
        autores = jsonify([autor.to_json() for autor in listado_autores])
        return autores
    
    def post(self):
        autor = request.get_json()
        nuevo_autor = AutorModel.from_json(autor)
        db.session.add(nuevo_autor)
        db.session.commit()
        return nuevo_autor.to_json(), 201
        # autor = request.get_json()
        # id = int(max(AUTORES.keys()))+1
        # AUTORES[id] = autor
        # return AUTORES[id], 201

    