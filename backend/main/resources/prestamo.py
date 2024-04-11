from flask_restful import Resource
from flask import request
from .. import db
from main.models import PrestamoModel

PRESTAMOS = {
    1: {'libro_id': 1, 'usuario_id': 1, 'fecha_prestamo': '2024-03-25', 'fecha_devolucion': '2024-04-25', 'estado':'en prestamo'},
    2: {'libro_id': 2, 'usuario_id': 1, 'fecha_prestamo': '2024-03-23', 'fecha_devolucion': '2024-04-23', 'estado':'en prestamo'},
    3: {'libro_id': 3, 'usuario_id': 2, 'fecha_prestamo': '2024-03-20', 'fecha_devolucion': '2024-04-20', 'estado':'en prestamo'}
}

class Prestamo(Resource):
    def get(self,id):
        #if int(id) in PRESTAMOS:
        #    return PRESTAMOS[int(id)]
        #return 'no existe el prestamo' , 404
        prestamo = db.session.query(PrestamoModel).get_or_404(id)
        return prestamo.to_json()

    def put(self,id):
        if int(id) in PRESTAMOS:
            prestamo = PRESTAMOS[int(id)]
            data = request.get_json()
            prestamo.update(data)
            return 'Actualizamos el prestamo' , 201
        return 'no existe el prestamo' , 404
    
    def delete(self,id):
        if int(id) in PRESTAMOS:
            del PRESTAMOS[int(id)]
            return 'el prestamo ha sido eliminado' , 204
        return 'no existe el prestamo' , 404

class Prestamos(Resource):
    def get(self):
        return PRESTAMOS

    def post(self):
        prestamo = request.get_json()
        id = int(max(PRESTAMOS.keys()))+1
        PRESTAMOS[id] = prestamo
        return PRESTAMOS[id], 201 