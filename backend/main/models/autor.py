from .. import db

class Autor(db.Model):
    # Crea un usuario con un usuario con un id, un nombre, un apellido, un correo y un telefono
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100),nullable=False)
    apellido = db.Column(db.String(100),nullable=False)
    libro_id = db.Column(db.Integer(100),nullable=False)
    
    #Convertir objeto en JSON
    def to_json(self):
        autor_json = {
            'id': self.id,
            'nombre': str(self.nombre),
            'apellido':str(self.apellido),
            'libros': str(self.libros)
        }
        return autor_json
    