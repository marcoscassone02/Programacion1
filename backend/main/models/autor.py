from .. import db
#tabla intermedia
Autores_Libros = db.Table('Autores_Libros',
db.Column("autor_id",db.Integer, db.ForeignKey('Autores.id'), primary_key=True),
db.Column("libro_id",db.Integer, db.ForeignKey('Libros.id'), primary_key=True)
)

class Autor(db.Model):
    __tablename__ = "Autores"
    # Crea un usuario con un usuario con un id, un nombre, un apellido, un correo y un telefono
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100),nullable=False)
    apellido = db.Column(db.String(100),nullable=False)
    biografia = db.Column(db.String(100),nullable=False)
    libros = db.relationship('Libro', secondary=Autores_Libros, backref=db.backref('autores', lazy='dynamic'))
    #Convertir objeto en JSON
    def to_json(self):
        autor_json = {
            'id': self.id,
            'nombre': str(self.nombre),
            'apellido':str(self.apellido),
            'biografia': str(self.biografia),
            'libros' : [libro.to_json() for libro in self.libros]
        }
        return autor_json
    
    #Convertir JSON a objeto
    def from_json(autor_json):
        id = autor_json.get('id')
        nombre = autor_json.get('nombre')
        apellido = autor_json.get('apellido')
        biografia = autor_json.get('biografia')
        
        return Autor(id=id,
                    nombre=nombre,
                    apellido=apellido,
                    biografia=biografia
                    )