from .. import db

class Notificacion(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    mensaje = db.Column(db.String(100),nullable=False)
    fecha = db.Column(db.String(100),nullable=False)
    #Convertir objeto en JSON
    def to_json(self):
        notificacion_json = {
            'id': self.id,
            'mensaje': str(self.mensaje),
            'fecha': str(self.fecha)
        }
        return notificacion_json
    
    #Convertir JSON a objeto
    def from_json(notificacion_json):
        id = notificacion_json.get('id')
        mensaje = notificacion_json.get('mensaje')
        fecha = notificacion_json.get('fecha')
        
        
        return Notificacion(id=id,
                    mensaje=mensaje,
                    fecha=fecha,
                    )