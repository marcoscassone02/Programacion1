from .. import db

class Configuracion(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    visualizacion = db.Column(db.String(100),nullable=False)
    idioma = db.Column(db.String(100),nullable=False)
    pais = db.Column(db.String(100),nullable=False)
    #Convertir objeto en JSON
    def to_json(self):
        usuario_json = {
            'id': self.id,
            'visualizacion': str(self.visualizacion),
            'idioma':str(self.idioma),
            'pais': str(self.pais),
        }
        return usuario_json