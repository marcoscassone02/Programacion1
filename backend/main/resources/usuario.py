from flask_restful import Resource
from flask import request, jsonify
from .. import db
from main.models import UsuarioModel
from sqlalchemy import func, desc , asc
from flask_jwt_extended import jwt_required, get_jwt_identity
from main.auth.decorators import role_required

class Usuarios(Resource): #A la clase usuario le indico que va a ser del tipo recurso(Resource)
    #obtener todos los usuarios
    @role_required(roles=['admin'])
    def get(self):
        page = 1        
        
        per_page = 1000
        
        usuarios = db.session.query(UsuarioModel)

        if request.args.get('page'):
            page = int(request.args.get('page'))
        if request.args.get('per_page'):
            per_page = int(request.args.get('per_page'))

    
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

        usuarios = usuarios.paginate(page=page, per_page=per_page, error_out=True)
        
        return jsonify({'usuarios':[usuario.to_json() for usuario in usuarios],'total':usuarios.total, 'page': page, 'per_page': per_page})

    #insertar recurso 
    #creo que se elimina este post ya q el usuario deberia de registrarse el mismo (preguntar al profe )
    def post(self):
        usuario = UsuarioModel.from_json(request.get_json())
        db.session.add(usuario)
        db.session.commit()
        return usuario.to_json(), 201

        
class Usuario(Resource):
    @jwt_required(optional=True)
    def get(self,id):
        usuario = db.session.query(UsuarioModel).get_or_404(id)
        current_identity = get_jwt_identity()
        if current_identity:
            return usuario.to_json()
        else:
            return usuario.to_json_short()
        
    #Modificar el recurso
    @role_required(roles=['admin','user'])
    def put(self, id):
        usuario = db.session.query(UsuarioModel).get_or_404(id)
        data = request.get_json().items()
        for key, value in data:
            setattr(usuario, key, value)
        db.session.add(usuario)
        db.session.commit()
        return usuario.to_json() , 201
    #Eliminar recurso
    @role_required(roles=['admin','user'])
    def delete(self, id):
        usuario = db.session.query(UsuarioModel).get_or_404(id)
        db.session.delete(usuario)
        db.session.commit()
        return usuario.to_json(), 204