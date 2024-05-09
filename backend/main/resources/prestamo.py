from flask_restful import Resource
from flask import request, jsonify
from .. import db
from main.models import PrestamoModel

class Prestamo(Resource):
    def get(self,id):
        prestamo = db.session.query(PrestamoModel).get_or_404(id)
        return prestamo.to_json()
        

    #Modificar el recurso
    def put(self, id):
        prestamo = db.session.query(PrestamoModel).get_or_404(id)
        data = request.get_json().items()
        for key, value in data:
            setattr(prestamo, key, value)
        db.session.add(prestamo)
        db.session.commit()
        return prestamo.to_json() , 201
    
    #Eliminar recurso
    def delete(self, id):
        prestamo = db.session.query(PrestamoModel).get_or_404(id)
        db.session.delete(prestamo)
        db.session.commit()
        return prestamo.to_json(), 204

class Prestamos(Resource):
    #obtener todos los usuarios
    def get(self):
        # Pagina inicial
        page = 1
        # Cantidad de elementos por pagina
        per_page = 10

        prestamos = db.session.query(PrestamoModel)

        if request.args.get('page'):
            page = int(request.args.get('page'))
        if request.args.get('per_page'):
            per_page = int(request.args.get('per_page'))


        #filtro
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
    def post(self):
        prestamo = PrestamoModel.from_json(request.get_json())
        db.session.add(prestamo)
        db.session.commit()
        return prestamo.to_json(), 201
                