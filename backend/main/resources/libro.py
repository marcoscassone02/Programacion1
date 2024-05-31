from flask_restful import Resource
from flask import request, jsonify
from .. import db   
from main.models import LibroModel,AutorModel,ValoracionModel
from sqlalchemy import asc,desc,func
from flask_jwt_extended import jwt_required, get_jwt_identity
from main.auth.decorators import role_required
class Libro(Resource):

    def get(self,id):
        libro = db.session.query(LibroModel).get_or_404(id)
        return libro.to_json()
    @role_required(roles=['admin'])
    def put(self, id):
        data = request.get_json()
        libro = db.session.query(LibroModel).get_or_404(id)
        for key, value in data.items():
            setattr(libro, key, value)
        db.session.add(libro)
        db.session.commit()
        return libro.to_json(), 201
    @role_required(roles=['admin'])
    def delete(self,id):
        libro = db.session.query(LibroModel).get_or_404(id)
        db.session.delete(libro)
        db.session.commit()
        return 'Libro eliminado'

class Libros(Resource):
    def get(self):
        # Pagina inicial
        page = 1
        # Cantidad de elementos por pagina
        per_page = 10

        listado_libros = db.session.query(LibroModel)

        if request.args.get('page'):
            page = int(request.args.get('page'))
        if request.args.get('per_page'):
            per_page = int(request.args.get('per_page'))

        #filtros
        if request.args.get("genero"):
            listado_libros=listado_libros.filter(LibroModel.genero.like("%"+request.args.get('genero')+"%")) 
        if request.args.get("nombre"):
            listado_libros=listado_libros.filter(LibroModel.nombre.like("%"+request.args.get('nombre')+"%"))
        if request.args.get("idioma"):
            listado_libros=listado_libros.filter(LibroModel.idioma.like("%"+request.args.get('idioma')+"%"))
        if request.args.get("editorial"):
            listado_libros=listado_libros.filter(LibroModel.editorial.like("%"+request.args.get('editorial')+"%"))
        if request.args.get("publicacion"):
            listado_libros=listado_libros.filter(LibroModel.publicacion==request.args.get('publicacion'))
        if request.args.get("prestamo_id"):
            listado_libros=listado_libros.filter(LibroModel.prestamo_id==request.args.get('prestamo_id'))
        if request.args.get('nombre_orderby') == 'asc':
            listado_libros =listado_libros.order_by(LibroModel.nombre.asc())
        if request.args.get('nombre_orderby') == 'desc':
            listado_libros=listado_libros.order_by(LibroModel.nombre.desc())
        #Obtener valor paginado
        listado_libros = listado_libros.paginate(page=page, per_page=per_page, error_out=True)
        #joins
        #fijarse de hacer un filtrado con la tabla de autor
        #fijarse de hacer un promedio para hacer la busqueda por valoracion sino no tiene sentido buscar por valoracion individual 
        #if request.args.get("valoracion"):
        #    listado_libros=listado_libros.join(ValoracionModel).filter(ValoracionModel.valoracion==request.args.get('valoracion')) 
        return jsonify({'libros':[libro.to_json() for libro in listado_libros],'total':listado_libros.total, 'page': page, 'per_page': per_page})
    @role_required(roles=['admin'])
    def post(self):
        autores_ids = request.get_json().get('autores')
        libro = LibroModel.from_json(request.get_json())
        
        if autores_ids:
            # Obtener las instancias de autor basadas en las ids recibidas
            autores = AutorModel.query.filter(AutorModel.id.in_(autores_ids)).all()
            # Agregar las instancias de autor aa la lista de autores del libro
            libro.autores.extend(autores)
            
        db.session.add(libro)
        db.session.commit()
        return libro.to_json()