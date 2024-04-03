from flask_restful import Resource
from flask import request

VALORACIONES = {
    1: {'nombre': 'Game of thrones', 'ISBN': 1234567890, 'valoraciones': [1,10]},
    2: {'nombre': 'Lord of the rings', 'ISBN': 8364228104, 'valoraciones': [2,3]},
    3: {'nombre': 'Maze runner', 'ISBN': 24462834651, 'valoraciones': [5,6]},
    4: {'nombre': 'Manso libreto', 'ISBN': 6420094771, 'valoraciones': [2,7]}
}

class Valoracion(Resource):
    def post(self, id):
        if int(id) in VALORACIONES:
            data = request.get_json()
            if 'valoracion' in data:
                VALORACIONES[int(id)]['valoraciones'].append(data['valoracion'])
                return 'Valoración agregada al libro', 201
            else:
                return 'Falta el campo "valoracion"', 400
        return 'No existe ese libro', 404

    def get(self, id):
        if int(id) in VALORACIONES:
            return VALORACIONES[int(id)]
        return 'No existe ese libro', 404