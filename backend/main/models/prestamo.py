from .. import db

class Prestamo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    libro_id = db.Column(db.Integer,nullable=False)
    usuario_id = db.Column(db.Integer,nullable=False)
    fecha_prestamo = db.Column(db.Integer,nullable=False)
    fecha_devolucion = db.Column(db.Integer,nullable=False)
    estado = db.Column(db.String(100),nullable=False)
#Convertir objeto en JSON
    def to_json(self):
        prestamo_json = {
            'id': self.id,
            'libro_id': self.libro_id,
            'usuario_id': self.usuario_id,
            'fecha_prestamo':self.fecha_prestamo,
            'fecha_devolucion': self.fecha_devolucion,
            'estado': str(self.estado)
        }
        return prestamo_json