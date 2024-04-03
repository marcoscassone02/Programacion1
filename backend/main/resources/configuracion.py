from flask_restful import Resource
from flask import request

CONFIGURACION = {
    1:{'visualizacion':'Dia', 'idioma':"Español" ,'pais': "Argentina"},
    2:{'visualizacion':'Noche', 'idioma':"Ingles" ,'pais': "Estados Unidos"}
}

class Configuracion(Resource):
    def get(self,id):
        if int(id) in CONFIGURACION:
            return CONFIGURACION[int(id)]
        return 'no existe la configuracion' , 404
    
    def put(self,id):
        if int(id) in CONFIGURACION:
            configuracion = CONFIGURACION[int(id)]
            data = request.get_json()
            configuracion.update(data)
            return 'Actualizamos la configuracion' , 201
        return 'no existe la configuracion' , 404