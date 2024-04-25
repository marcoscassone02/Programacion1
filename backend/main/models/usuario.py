from .. import db

class Usuario(db.Model):
    __tablename__ = "Usuarios"
    #Defino el nombre de la tabla
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100),nullable=False)
    apellido = db.Column(db.String(100),nullable=False)
    correo = db.Column(db.String(100),nullable=False)
    telefono = db.Column(db.Integer, nullable=False)
    contraseña = db.Column(db.String(100),nullable=False)
    rol = db.Column(db.String(100),nullable=False)
    #relacion
    prestamo = db.relationship('Prestamo', uselist=False, back_populates='usuario',cascade="all, delete-orphan",single_parent=True)
    valoracion = db.relationship('Valoracion', uselist=False, back_populates='usuario',cascade="all, delete-orphan",single_parent=True)
    configuracion = db.relationship('Configuracion', uselist=False, back_populates='usuario',cascade="all, delete-orphan",single_parent=True)
    #Convertir objeto en JSON
    def to_json(self):
        usuario_json = {
            'id': self.id,
            'nombre': str(self.nombre),
            'apellido':str(self.apellido),
            'correo': str(self.correo),
            'telefono': self.telefono,
            'contraseña': str(self.contraseña),
            'rol': str(self.rol),
        }
        return usuario_json
    @staticmethod
    #Convertir JSON a objeto
    def from_json(usuario_json):
        id = usuario_json.get('id')
        nombre = usuario_json.get('nombre')
        apellido = usuario_json.get('apellido')
        correo = usuario_json.get('correo')
        telefono = usuario_json.get('telefono')
        contraseña = usuario_json.get('contraseña')
        rol = usuario_json.get('rol')

        return Usuario(id=id,
                    nombre=nombre,
                    apellido=apellido,
                    correo=correo,
                    telefono=telefono,
                    contraseña=contraseña,
                    rol=rol
                    )