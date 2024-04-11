from flask_restful import Resource
from flask import request
from.. import db
from main.models import ConfiguracionModel

CONFIGURACION = {
    1:{'visualizacion':'Dia', 'idioma':"Español" ,'pais': "Argentina"},
    2:{'visualizacion':'Noche', 'idioma':"Ingles" ,'pais': "Estados Unidos"}
}

class Configuracion(Resource):
    def get(self,id):
        #if int(id) in CONFIGURACION:
        #    return CONFIGURACION[int(id)]
        #return 'no existe la configuracion' , 404
        configuracion = db.session.query(ConfiguracionModel).get_or_404(id)
        return configuracion.to_json()
    def put(self,id):
        if int(id) in CONFIGURACION:
            configuracion = CONFIGURACION[int(id)]
            data = request.get_json()
            configuracion.update(data)
            return 'Actualizamos la configuracion' , 201
        return 'no existe la configuracion' , 404