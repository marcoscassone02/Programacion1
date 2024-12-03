from flask_restful import Resource
from flask import request, jsonify
from .. import db
from main.models import PrestamoModel
from flask_jwt_extended import jwt_required, get_jwt_identity
from main.auth.decorators import role_required
class Prestamo(Resource):
    @role_required(roles=['admin','user'])
    def get(self,id):
        prestamo = db.session.query(PrestamoModel).get_or_404(id)
        return prestamo.to_json()
        

    #Modificar el recurso
    @role_required(roles=['admin'])
    def put(self, id):
        prestamo = db.session.query(PrestamoModel).get_or_404(id)
        data = request.get_json().items()
        for key, value in data:
            setattr(prestamo, key, value)
        db.session.add(prestamo)
        db.session.commit()
        return prestamo.to_json() , 201
    
    #Eliminar recurso
    @role_required(roles=['admin'])
    def delete(self, id):
        prestamo = db.session.query(PrestamoModel).get_or_404(id)
        db.session.delete(prestamo)
        db.session.commit()
        return "Prestamo eliminado"

class Prestamos(Resource):
    @role_required(roles=['admin'])
    #obtener todos los usuarios
    def get(self):
        # Pagina inicial
        page = 1
        # Cantidad de elementos por pagina
        per_page = 1000

        prestamos = db.session.query(PrestamoModel)

        if request.args.get('page'):
            page = int(request.args.get('page'))
        if request.args.get('per_page'):
            per_page = int(request.args.get('per_page'))

        #filtros
        if request.args.get('usuario_id'):
            prestamos =  prestamos.filter(PrestamoModel.usuario_id.like(request.args.get('usuario_id')))
        if request.args.get('estado'):
            prestamos =  prestamos.filter(PrestamoModel.estado.like("%"+request.args.get('estado')+"%"))
        if request.args.get('fecha_prestamo'):
            prestamos = prestamos.filter(PrestamoModel.fecha_prestamo.like('%'+request.args.get('fecha_prestamo')+ '%'))
        if request.args.get('fecha_devolucion'):
            prestamos = prestamos.filter(PrestamoModel.fecha_devolucion.like('%'+request.args.get('fecha_devolucion')+ '%'))
        
        prestamos = prestamos.paginate(page=page, per_page=per_page, error_out=True)
        
        return jsonify({'prestamos':[prestamo.to_json() for prestamo in prestamos],'total':prestamos.total, 'page': page, 'per_page': per_page})
        
    #insertar recurso
    @role_required(roles=['admin'])
    def post(self):
        prestamo = PrestamoModel.from_json(request.get_json())
        db.session.add(prestamo)
        db.session.commit()
        return prestamo.to_json(), 201
                