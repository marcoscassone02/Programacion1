from flask_restful import Resource
from flask import request , jsonify
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
        configuaracion = db.session.query(ConfiguracionModel).get_or_404(id)
        return configuaracion.to_json()
    
    def put(self,id):
        # if int(id) in CONFIGURACION:
        #     configuracion = CONFIGURACION[int(id)]
        #     data = request.get_json()
        #     configuracion.update(data)
        #     return 'Actualizamos la configuracion' , 201
        # return 'no existe la configuracion' , 404
        data = request.get_json()
        configuracion = db.session.query(ConfiguracionModel).get_or_404(id)
        for key, value in data.items():
            setattr(configuracion, key, value)
        db.session.add(configuracion)
        db.session.commit()
        return configuracion.to_json(), 201
   