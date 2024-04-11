from .. import db

class Signup(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    usuario = db.Column(db.String(100),nullable=False)
    contraseña = db.Column(db.String(100),nullable=False)
    #Convertir objeto en JSON
    def to_json(self):
        usuario_json = {
            'id': self.id,
            'usuario': str(self.usuario),
            'contraseña':str(self.contraseña),
        }
        return usuario_json