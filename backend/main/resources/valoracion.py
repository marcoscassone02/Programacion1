from flask_restful import Resource
from flask import request , jsonify
from .. import db
from main.models import ValoracionModel
from flask_jwt_extended import jwt_required, get_jwt_identity
from main.auth.decorators import role_required
class Valoraciones(Resource):
    def get(self):
        page = 1
        per_page = 10

       
        listado_valoraciones = db.session.query(ValoracionModel)
        if request.args.get("valoracion"):
            listado_valoraciones=listado_valoraciones.filter(ValoracionModel.valoracion.like(request.args.get('valoracion')))
        
        listado_valoraciones = listado_valoraciones.paginate(page=page, per_page=per_page, error_out=True)
        return jsonify({'listado_valoraciones':[valoracion.to_json() for valoracion in listado_valoraciones],'total':listado_valoraciones.total, 'page': page, 'per_page': per_page})

    @role_required(roles=['user'])
    def post(self):
        valoracion = request.get_json()
        nuevo_valoracion = ValoracionModel.from_json(valoracion)
        db.session.add(nuevo_valoracion)
        db.session.commit()
        return nuevo_valoracion.to_json(), 201

class Valoracion(Resource):
    def get(self,id):
        valoracion = db.session.query(ValoracionModel).get_or_404(id)
        return valoracion.to_json()   
    @role_required(roles=['user']) 
    def delete(self,id):
        valoracion = db.session.query(ValoracionModel).get_or_404(id)
        db.session.delete(valoracion)
        db.session.commit()
        return 'Autor eliminado'
