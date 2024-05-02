from flask_restful import Resource
from flask import request, jsonify
from .. import db
from main.models import UsuarioModel, NotificacionModel
from sqlalchemy import func, desc , asc

class Usuarios(Resource): #A la clase usuario le indico que va a ser del tipo recurso(Resource)
    #obtener todos los usuarios
    def get(self):
        usuarios = db.session.query(UsuarioModel)

    
        #Filtros
        if request.args.get('nombre'):
            usuarios=usuarios.filter(UsuarioModel.nombre.like("%"+request.args.get('nombre')+"%"))

        if request.args.get('apellido'):
            usuarios=usuarios.filter(UsuarioModel.nombre.like("%"+request.args.get('apellido')+"%"))
        

        if request.args.get('telefono'):
            usuarios=usuarios.filter(UsuarioModel.telefono.like(request.args.get('telefono')+"%"))

        
        if request.args.get('nombre_orderby') == 'asc':
            usuarios = usuarios.order_by(UsuarioModel.nombre.asc())
        if request.args.get('nombre_orderby') == 'desc':
            usuarios = usuarios.order_by(UsuarioModel.nombre.desc())
        if request.args.get('apellido_orderby') == 'asc':
            usuarios = usuarios.order_by(UsuarioModel.apellido.asc())
        if request.args.get('apellido_orderby') == 'desc':
            usuarios = usuarios.order_by(UsuarioModel.apellido.desc())

            print(usuarios)



        return jsonify([usuario.to_json() for usuario in usuarios])

    #insertar recurso 
    def post(self):
        usuario = UsuarioModel.from_json(request.get_json())
        db.session.add(usuario)
        db.session.commit()
        return usuario.to_json(), 201

        
class Usuario(Resource):
    def get(self,id):
        usuario = db.session.query(UsuarioModel).get_or_404(id)
        return usuario.to_json()
    #Modificar el recurso
    def put(self, id):
        usuario = db.session.query(UsuarioModel).get_or_404(id)
        data = request.get_json().items()
        for key, value in data:
            setattr(usuario, key, value)
        db.session.add(usuario)
        db.session.commit()
        return usuario.to_json() , 201
    #Eliminar recurso
    def delete(self, id):
        usuario = db.session.query(UsuarioModel).get_or_404(id)
        db.session.delete(usuario)
        db.session.commit()
        return usuario.to_json(), 204