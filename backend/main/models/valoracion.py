from .. import db
from datetime import datetime
class Valoracion(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    valoracion= db.Column(db.Integer,nullable=False)
    comentario = db.Column(db.String(100),nullable=False)
    fecha= db.Column(db.DateTime,nullable=False)
    #Convertir objeto en JSON
    def to_json(self):
        valoracion_json = {
            'id': self.id,
            'valoracion':self.valoracion,
            'comentario': str(self.comentario),
            'fecha': str(self.fecha.strftime("%d-%m-%Y"))
        }
        return valoracion_json 
    
    def from_json(valoracion_json):
        id = valoracion_json.get('id')
        valoracion = valoracion_json.get('valoracion')
        comentario = valoracion_json.get('comentario')
        fecha = datetime.strptime(valoracion_json.get('fecha'), '%d-%m-%Y')
        return Valoracion(id=id,
                comentario=comentario,
                valoracion=valoracion,
                fecha=fecha
                )