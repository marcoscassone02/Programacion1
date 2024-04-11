from .. import db

class Notificacion(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    mensaje = db.Column(db.String(100),nullable=False)
    #Convertir objeto en JSON
    def to_json(self):
        notificacion_json = {
            'id': self.id,
            'mensaje': str(self.mensaje),
        }
        return notificacion_json