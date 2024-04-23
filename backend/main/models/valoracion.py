from .. import db
from datetime import datetime

class Valoracion(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    valoracion= db.Column(db.Integer,nullable=False)
    comentario = db.Column(db.String(100),nullable=False)
    fecha= db.Column(db.DateTime,nullable=False)
    #relacion
    usuario_id = db.Column(db.Integer, db.ForeignKey('usuario.id'),nullable=False)
    usuario = db.relationship('Usuario',uselist=False, back_populates='valoracion',cascade="all, delete-orphan",single_parent=True)
    libro_id = db.Column(db.Integer, db.ForeignKey('libro.id'),nullable=False)
    libro = db.relationship('Libro',uselist=False, back_populates='valoraciones',single_parent=True)
    #Convertir objeto en JSON
    def to_json(self):
        valoracion_json = {
            'id': self.id,
            'valoracion':self.valoracion,
            'comentario': str(self.comentario),
            'fecha': str(self.fecha.strftime("%Y-%m-%d")),
            'libro_id': self.libro_id,
            'usuario_id': self.usuario_id

        }
        return valoracion_json 
    
    def to_json_sin_libro_id(self):
        valoracion_json = {
            'id': self.id,
            'valoracion':self.valoracion,
            'comentario': str(self.comentario),
            'fecha': str(self.fecha.strftime("%Y-%m-%d")),
            'usuario_id': self.usuario_id

        }
        return valoracion_json 
    
    def from_json(valoracion_json):
        id = valoracion_json.get('id')
        valoracion = valoracion_json.get('valoracion')
        comentario = valoracion_json.get('comentario')
        fecha = datetime.strptime(valoracion_json.get('fecha'), '%Y-%m-%d')
        libro_id = valoracion_json.get('libro_id')
        usuario_id = valoracion_json.get('usuario_id')
        return Valoracion(id=id,
                comentario=comentario,
                valoracion=valoracion,
                fecha=fecha,
                libro_id=libro_id,
                usuario_id=usuario_id
                )