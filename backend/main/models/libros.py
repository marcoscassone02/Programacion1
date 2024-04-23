from .. import db

class Libro(db.Model):
    # Crea un usuario con un usuario con un id, un nombre, un apellido, un correo y un telefono
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100),nullable=False)
    publicacion = db.Column(db.Integer,nullable=False)
    genero = db.Column(db.String(100),nullable=False)
    editorial = db.Column(db.String(100),nullable=False)
    idioma = db.Column(db.String(100),nullable=False)
    #relacion 
    valoraciones=db.relationship('Valoracion', back_populates='libro',cascade="all, delete-orphan")

    #Convertir objeto en JSON
    def to_json(self):
        valoraciones=[valoracion.to_json() for valoracion in self.valoraciones]
        libro_json = {
            'id': self.id,
            'nombre': str(self.nombre),
            'publicacion':self.publicacion,
            'genero': str(self.genero),
            'editorial': str(self.editorial),
            'idioma' : str(self.idioma),
            'valoraciones':valoraciones
        }
        return libro_json
    
    #Convertir JSON a objeto
    def from_json(libro_json):
        id = libro_json.get('id')
        nombre = libro_json.get('nombre')
        publicacion = libro_json.get('publicacion')
        genero = libro_json.get('genero')
        editorial = libro_json.get('editorial')
        idioma = libro_json.get('idioma')
        return Libro(id=id,
                    nombre=nombre,
                    publicacion=publicacion,
                    genero=genero,
                    editorial=editorial,
                    idioma=idioma)
    