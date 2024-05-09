from flask_restful import Resource
from flask import request, jsonify
from .. import db   
from main.models import AutorModel
from sqlalchemy import asc,desc

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
        # Pagina inicial
        page = 1
        # Cantidad de elementos por pagina
        per_page = 10

        # PAGINACIONES
        listado_autores = db.session.query(AutorModel)
        if request.args.get('page'):
            page = int(request.args.get('page'))
        if request.args.get('per_page'):
            per_page = int(request.args.get('per_page'))

        if request.args.get("nombre"):
            listado_autores=listado_autores.filter(AutorModel.nombre.like("%"+request.args.get("nombre")+"%"))
        if request.args.get("apellido"):
            listado_autores=listado_autores.filter(AutorModel.apellido.like("%"+request.args.get("apellido")+"%"))
        if request.args.get('nombre_orderby') == 'asc':
            listado_autores =listado_autores.order_by(AutorModel.nombre.asc())
        if request.args.get('nombre_orderby') == 'desc':
            listado_autores=listado_autores.order_by(AutorModel.nombre.desc())
        if request.args.get('apellido_orderby') == 'asc':
            listado_autores =listado_autores.order_by(AutorModel.apellido.asc())
        if request.args.get('apellido_orderby') == 'desc':
            listado_autores=listado_autores.order_by(AutorModel.apellido.desc())
            
        listado_autores = listado_autores.paginate(page=page, per_page=per_page, error_out=True)
        
        return jsonify({'autores':[autor.to_json() for autor in listado_autores],'total':listado_autores.total, 'page': page, 'per_page': per_page})
    
    def post(self):
        autor = request.get_json()
        nuevo_autor = AutorModel.from_json(autor)
        db.session.add(nuevo_autor)
        db.session.commit()
        return nuevo_autor.to_json(), 201

