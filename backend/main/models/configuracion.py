from .. import db

class Configuracion(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    visualizacion = db.Column(db.String(100),nullable=False)
    idioma = db.Column(db.String(100),nullable=False)
    pais = db.Column(db.String(100),nullable=False)
    #Convertir objeto en JSON
    def to_json(self):
        configuracion_json = {
            'id': self.id,
            'visualizacion': str(self.visualizacion),
            'idioma':str(self.idioma),
            'pais': str(self.pais),
        }
        return configuracion_json 
    
    def from_json(configuracion_json):
        id = configuracion_json.get('id')
        visualizacion = configuracion_json.get('visualizacion')
        idioma = configuracion_json.get('idioma')
        pais = configuracion_json.get('pais')
         
        return Configuracion(id=id,
                    visualizacion=visualizacion,
                    idioma=idioma,
                    pais=pais
                    )