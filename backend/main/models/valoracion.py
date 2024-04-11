from .. import db

class Valoracion(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    libro_id = db.Column(db.Integer,nullable=False)
    usuario_id = db.Column(db.Integer,nullable=False)
    valoracion= db.Column(db.Integer,nullable=False)
    comentario = db.Column(db.String(100),nullable=False)
    fecha= db.Column(db.Integer,nullable=False)
    #Convertir objeto en JSON
    def to_json(self):
        usuario_json = {
            'id': self.id,
            'libro_id': self.libro_id,
            'usuario_id': self.usuario_id,
            'valoracion':self.valoracion,
            'comentario': str(self.comentario),
            'fecha': self.fecha
        }
        return usuario_json