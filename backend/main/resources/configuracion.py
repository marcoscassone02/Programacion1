from flask_restful import Resource
from flask import request , jsonify
from.. import db
from main.models import ConfiguracionModel
from flask_jwt_extended import jwt_required, get_jwt_identity
from main.auth.decorators import role_required
class Configuracion(Resource):
    @role_required(roles=['admin,user'])
    def get(self,id):
        configuaracion = db.session.query(ConfiguracionModel).get_or_404(id)
        return configuaracion.to_json()
    @role_required(roles=['admin,user'])
    def put(self,id):
        data = request.get_json()
        configuracion = db.session.query(ConfiguracionModel).get_or_404(id)
        for key, value in data.items():
            setattr(configuracion, key, value)
        db.session.add(configuracion)
        db.session.commit()
        return configuracion.to_json(), 201
