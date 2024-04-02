from flask_restful import Resource
from flask import request

PRESTAMOS = {
    1: {'libro_id': 1, 'usuario_id': 1, 'fecha_prestamo': '2024-03-25', 'fecha_devolucion': '2024-04-25'},
    2: {'libro_id': 2, 'usuario_id': 1, 'fecha_prestamo': '2024-03-23', 'fecha_devolucion': '2024-04-23'},
    3: {'libro_id': 3, 'usuario_id': 2, 'fecha_prestamo': '2024-03-20', 'fecha_devolucion': '2024-04-20'}
}

class Prestamo(Resource):
    def get(self,id):
        if int(id) in PRESTAMOS:
            return PRESTAMOS[int(id)]
        return 'no existe el prestamo' , 404

    def put(self,id):
        if int(id) in PRESTAMOS:
            prestamo = PRESTAMOS[int(id)]
            data = request.get_json()
            prestamo.update(data)
            return 'Actualizamos el libro' , 201
        return 'no existe el libro' , 404
    
    def delete(self,id):
        if int(id) in PRESTAMOS:
            del PRESTAMOS[int(id)]
            self.ordenar_coleccion()
            return 'el prestamo ha sido eliminado' , 204
        return 'no existe el prestamo' , 404

    def ordenar_coleccion(self):
        coleccion = {}
        nuevo_id = 1
        for libro_id, libro in PRESTAMOS.items():
            coleccion[nuevo_id] = libro
            nuevo_id += 1
        PRESTAMOS.clear()
        PRESTAMOS.update(coleccion)

class Prestamos(Resource):
    def get(self):
        return PRESTAMOS

    def post(self):
        prestamo = request.get_json()
        id = int(max(PRESTAMOS.keys()))+1
        PRESTAMOS[id] = prestamo
        return PRESTAMOS[id], 201 