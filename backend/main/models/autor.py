from .. import db

class Autor(db.Model):
    # Crea un usuario con un usuario con un id, un nombre, un apellido, un correo y un telefono
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100),nullable=False)
    apellido = db.Column(db.String(100),nullable=False)
    biografia = db.Column(db.String(100),nullable=False)
    
    #Convertir objeto en JSON
    def to_json(self):
        autor_json = {
            'id': self.id,
            'nombre': str(self.nombre),
            'apellido':str(self.apellido),
            'biografia': str(self.biografia)
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