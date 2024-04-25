from .. import db

class Configuracion(db.Model):
    __tablename__ = "Configuraciones"
    id = db.Column(db.Integer, primary_key=True)
    visualizacion = db.Column(db.String(100),nullable=False)
    idioma = db.Column(db.String(100),nullable=False)
    pais = db.Column(db.String(100),nullable=False)
    #relacion
    usuario_id = db.Column(db.Integer, db.ForeignKey('Usuarios.id'))
    usuario=db.relationship('Usuario',uselist=False, back_populates='configuracion',cascade="all, delete-orphan",single_parent=True)
    #Convertir objeto en JSON
    def to_json(self):
        configuracion_json = {
            'id': self.id,
            'visualizacion': str(self.visualizacion),
            'idioma':str(self.idioma),
            'pais': str(self.pais),
            'usuario_id': self.usuario_id
        }
        return configuracion_json 
    
    def from_json(configuracion_json):
        id = configuracion_json.get('id')
        visualizacion = configuracion_json.get('visualizacion')
        idioma = configuracion_json.get('idioma')
        pais = configuracion_json.get('pais')
        usuario_id = configuracion_json.get('usuario_id')
        return Configuracion(id=id,
                    visualizacion=visualizacion,
                    idioma=idioma,
                    pais=pais,
                    usuario_id=usuario_id
                    )