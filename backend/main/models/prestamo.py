from .. import db
from datetime import datetime

class Prestamo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    fecha_prestamo = db.Column(db.DateTime,nullable=False)
    fecha_devolucion = db.Column(db.DateTime,nullable=False)
    estado = db.Column(db.String(100),nullable=False)
#Convertir objeto en JSON
    def to_json(self):
        prestamo_json = {
            'id': self.id,
            'fecha_prestamo':str(self.fecha_prestamo.strftime("%Y-%m-%d")),
            'fecha_devolucion': str(self.fecha_devolucion.strftime("%Y-%m-%d")),
            'estado': str(self.estado)
        }
        return prestamo_json
    def to_json_short(self):
        prestamo_json = {
            'id': self.id,
            'fecha_prestamo':str(self.fecha_prestamo.strptime("%Y-%m-%d")),
            'fecha_devolucion': str(self.fecha_devolucion.strptime("%Y-%m-%d")),
            'estado': str(self.estado)
        }
        return prestamo_json

    @staticmethod
    #Convertir JSON a objeto
    def from_json(prestamo_json):
        id = prestamo_json.get('id')
        fecha_prestamo = datetime.strptime(prestamo_json.get('fecha_prestamo'), '%Y-%m-%d')
        fecha_devolucion = datetime.strptime(prestamo_json.get('fecha_devolucion'), '%Y-%m-%d')
        estado = prestamo_json.get('estado')

        return Prestamo(id=id,
                    fecha_prestamo=fecha_prestamo,
                    fecha_devolucion=fecha_devolucion,
                    estado=estado
                    )