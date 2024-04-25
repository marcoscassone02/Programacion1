from flask_restful import Resource
from flask import request, jsonify
from .. import db   
from main.models import AutorModel

class Autor(Resource):
    def get(self,id):
        autor = db.session.query(AutorModel).get_or_404(id)
        return autor.to_json()
        
    def put(self,id):
        data = request.get_json()
        autor = db.session.query(AutorModel).get_or_404(id)
        for key, value in data.items():
            setattr(autor, key, value)
        db.session.add(autor)
        db.session.commit()
        return autor.to_json(), 201

    def delete(self,id):
        autor = db.session.query(AutorModel).get_or_404(id)
        db.session.delete(autor)
        db.session.commit()
        return 'Autor eliminado'

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

