from .. import db
from datetime import datetime
#tabla intermedia
Notificaciones_Usuarios = db.Table('Notificaciones_Usuarios',
db.Column("notificacion_id",db.Integer, db.ForeignKey('Notificaciones.id'), primary_key=True),
db.Column("usuario_id",db.Integer, db.ForeignKey('Usuarios.id'), primary_key=True)
)
class Notificacion(db.Model):
    __tablename__ = "Notificaciones"
    id = db.Column(db.Integer, primary_key=True)
    mensaje = db.Column(db.String(100),nullable=False)
    fecha = db.Column(db.Date,nullable=False)
    usuarios = db.relationship('Usuario', secondary=Notificaciones_Usuarios, backref=db.backref('notificaciones', lazy='dynamic'))
    #Convertir objeto en JSON
    def to_json(self):
        notificacion_json = {
            'id': self.id,
            'mensaje': str(self.mensaje),
            'fecha': datetime.strftime(self.fecha, '%Y-%m-%d'),
            'usuarios' : [usuario.to_json() for usuario in self.usuarios]
        }
        return notificacion_json
    
    #Convertir JSON a objeto
    def from_json(notificacion_json):
        id = notificacion_json.get('id')
        mensaje = notificacion_json.get('mensaje')
        fecha_str = notificacion_json.get('fecha')
    # Convertir el string de fecha a objeto datetime
        fecha = datetime.strptime(fecha_str, '%Y-%m-%d').date()
        return Notificacion(id=id,
                    mensaje=mensaje,
                    fecha=fecha,
                    )