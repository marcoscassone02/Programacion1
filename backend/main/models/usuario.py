from .. import db

class Usuario(db.Model):
    # Crea un usuario con un usuario con un id, un nombre, un apellido, un correo, un telefono y una contraseña
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100),nullable=False)
    apellido = db.Column(db.String(100),nullable=False)
    correo = db.Column(db.String(100),nullable=False)
    telefono = db.Column(db.Integer, nullable=False)
    contraseña = db.Column(db.String(100),nullable=False)
    rol = db.Column(db.String(100),nullable=False)
    #Convertir objeto en JSON
    def to_json(self):
        usuario_json = {
            'id': self.id,
            'nombre': str(self.nombre),
            'apellido':str(self.apellido),
            'correo': str(self.correo),
            'telefono': self.telefono,
            'contraseña':str(self.contraseña),
            'rol':str(self.rol),

        }
        return usuario_json