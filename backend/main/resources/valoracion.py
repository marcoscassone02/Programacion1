from flask_restful import Resource
from flask import request , jsonify
from .. import db
from main.models import ValoracionModel
from flask_jwt_extended import jwt_required, get_jwt_identity
from main.auth.decorators import role_required
class Valoraciones(Resource):
    def get(self):
        usuario_id = request.args.get("usuario_id")
        libro_id = request.args.get("libro_id")

        if usuario_id and libro_id:
            valoracion = db.session.query(ValoracionModel).filter_by(
                usuario_id=usuario_id, libro_id=libro_id
            ).first()
            if valoracion:
                return jsonify({"valoracionId": valoracion.id}), 200
            else:
                return {"error": "Valoración no encontrada"}, 404
        
        page = 1
        per_page = 10

       
        listado_valoraciones = db.session.query(ValoracionModel)
        if request.args.get("valoracion"):
            listado_valoraciones=listado_valoraciones.filter(ValoracionModel.valoracion.like(request.args.get('valoracion')))
        
        listado_valoraciones = listado_valoraciones.paginate(page=page, per_page=per_page, error_out=True)
        return jsonify({'listado_valoraciones':[valoracion.to_json() for valoracion in listado_valoraciones],'total':listado_valoraciones.total, 'page': page, 'per_page': per_page})

    @role_required(roles=['user', 'admin'])
    def post(self):
        valoracion_data = request.get_json()
        usuario_id = get_jwt_identity()
        libro_id = valoracion_data.get("libro_id")
        if not libro_id:
            return {"error": "El campo 'libro_id' es obligatorio."}, 400

        valoracion_existente = db.session.query(ValoracionModel).filter_by(
            usuario_id=usuario_id,
            libro_id=libro_id
        ).first()

        if valoracion_existente:
            return {"error": "Ya has valorado este libro."}, 400

        nueva_valoracion = ValoracionModel.from_json(valoracion_data)
        nueva_valoracion.usuario_id = usuario_id 

        db.session.add(nueva_valoracion)
        db.session.commit()

        return nueva_valoracion.to_json(), 201


class Valoracion(Resource):
    def get(self,id):
        valoracion = db.session.query(ValoracionModel).get_or_404(id)
        return valoracion.to_json()   
    @role_required(roles=['user', 'admin'])
    def delete(self,id):
        valoracion = db.session.query(ValoracionModel).get_or_404(id)
        db.session.delete(valoracion)
        db.session.commit()
        return 'Valoracion eliminada'
