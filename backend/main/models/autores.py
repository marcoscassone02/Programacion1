from .. import db

class Libro(db.Model):
    # Crea un usuario con un usuario con un id, un nombre, un apellido, un correo y un telefono
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100),nullable=False)
    autor = db.Column(db.String(100),nullable=False)
    publicacion = db.Column(db.Integer,nullable=False)
    genero = db.Column(db.String(100),nullable=False)
    editorial = db.Column(db.String(100),nullable=False)
    idioma = db.Column(db.String(100),nullable=False)

    #Convertir objeto en JSON
    def to_json(self):
        Libro_json = {
            'id': self.id,
            'nombre': str(self.nombre),
            'autor':str(self.autor),
            'publicacion':self.publicacion,
            'genero': str(self.genero),
            'editorial': str(self.editorial),
            'idioma' : str(self.idioma)
        }
        return Libro_json
    