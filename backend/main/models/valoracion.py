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
        valoracion_json = {
            'id': self.id,
            'libro_id': self.libro_id,
            'usuario_id': self.usuario_id,
            'valoracion':self.valoracion,
            'comentario': str(self.comentario),
            'fecha': self.fecha
        }
        return valoracion_json 
    
    def from_json(valoracion_json):
        id = valoracion_json.get('id')
        libro_id = valoracion_json.get('libro_id')
        usuario_id = valoracion_json.get('usuario_id')
        valoracion = valoracion_json.get('valoracion')
        comentario = valoracion_json.get('comentario')
        fecha = valoracion_json.get('fecha')
        
        return Valoracion(id=id,
                libro_id=libro_id,
                usuario_id=usuario_id,
                comentario=comentario,
                valoracion=valoracion,
                fecha=fecha
                )