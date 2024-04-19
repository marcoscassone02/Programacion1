from flask_restful import Resource
from flask import request , jsonify
from.. import db
from main.models import ConfiguracionModel

class Configuracion(Resource):
    def get(self,id):
        configuaracion = db.session.query(ConfiguracionModel).get_or_404(id)
        return configuaracion.to_json()
    
    def put(self,id):
        data = request.get_json()
        configuracion = db.session.query(ConfiguracionModel).get_or_404(id)
        for key, value in data.items():
            setattr(configuracion, key, value)
        db.session.add(configuracion)
        db.session.commit()
        return configuracion.to_json(), 201
