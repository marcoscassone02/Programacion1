from .. import db
from datetime import datetime
from main.models import UsuarioModel

class Prestamo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    fecha_prestamo = db.Column(db.DateTime,nullable=False)
    fecha_devolucion = db.Column(db.DateTime,nullable=False)
    estado = db.Column(db.String(100),nullable=False)
    #relacion
    usuario_id = db.Column(db.Integer, db.ForeignKey('usuario.id'), nullable=False)
    usuario = db.relationship('Usuario',uselist=False, back_populates='prestamo',cascade="all, delete-orphan",single_parent=True)

#Convertir objeto en JSON
    def to_json(self):
        self.usuario=db.session.query(UsuarioModel).get_or_404(self.usuario_id)
        prestamo_json = {
            'id': self.id,
            'fecha_prestamo':str(self.fecha_prestamo.strftime("%Y-%m-%d")),
            'fecha_devolucion': str(self.fecha_devolucion.strftime("%Y-%m-%d")),
            'estado': str(self.estado),
            'usuario_id': self.usuario_id
            
        }
        return prestamo_json

    @staticmethod
    #Convertir JSON a objeto
    def from_json(prestamo_json):
        id = prestamo_json.get('id')
        fecha_prestamo = datetime.strptime(prestamo_json.get('fecha_prestamo'), '%Y-%m-%d')
        fecha_devolucion = datetime.strptime(prestamo_json.get('fecha_devolucion'), '%Y-%m-%d')
        estado = prestamo_json.get('estado')    
        usuario_id = prestamo_json.get('usuario_id')

        return Prestamo(id=id,
                    fecha_prestamo=fecha_prestamo,
                    fecha_devolucion=fecha_devolucion,
                    estado=estado,
                    usuario_id=usuario_id
                    )