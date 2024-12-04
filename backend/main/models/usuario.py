from .. import db
from datetime import datetime

#Importamos de python 2 funciones
from werkzeug.security import generate_password_hash, check_password_hash
class Usuario(db.Model):
    __tablename__ = "Usuarios"
    #Defino el nombre de la tabla
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100),nullable=False)
    apellido = db.Column(db.String(100),nullable=False)
    #correo como nombre de usuario
    correo = db.Column(db.String(100), unique=True,nullable=False)
    telefono = db.Column(db.Integer, nullable=False)
    #Contraseña encriptada
    contraseña = db.Column(db.String(100),nullable=False)
    rol = db.Column(db.String(100),nullable=False, server_default='users')
    #relacion
    prestamo = db.relationship('Prestamo', uselist=True, back_populates='usuario',cascade="all, delete-orphan",single_parent=True)
    valoracion = db.relationship('Valoracion', uselist=False, back_populates='usuario',cascade="all, delete-orphan",single_parent=True)
    #Getter de la contraseña plana no permite leerla
    @property
    def plain_password(self):
        raise AttributeError('Password cant be read')
    #Setter de la contraseña toma un valor en texto plano
    # calcula el hash y lo guarda en el atributo contraseña
    @plain_password.setter
    def plain_password(self, contraseña):
        self.contraseña = generate_password_hash(contraseña)
    #Método que compara una contraseña en texto plano con el hash guardado en la db
    def validate_pass(self,contraseña):
        return check_password_hash(self.contraseña, contraseña)
    #Convertir objeto en JSON
    def to_json(self):
        usuario_json = {
            'id': self.id,
            'nombre': str(self.nombre),
            'apellido':str(self.apellido),
            'correo': str(self.correo),
            'telefono': self.telefono,
            'rol': str(self.rol),
            'contraseña':self.contraseña
        }
        return usuario_json    
    #Convertir objeto en JSON corto
    def to_json_short(self):
        usuario_json = {
            'id': self.id,
            'nombre': str(self.nombre),
            'apellido':str(self.apellido),
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
                    plain_password=contraseña,
                    rol=rol
                    )