from flask import Flask
from dotenv import load_dotenv
from flask_restful import Api
import main.resources as resources
# iniciamos restful
api = Api()
# este metodo inicializa la app y todos sus modulos
def create_app():
    app = Flask(__name__)
    load_dotenv()
    #libros 
    api.add_resource(resources.LibrosResources, '/libros')
    api.add_resource(resources.LibroResources, '/libro/<id>')
    #prestamos
    api.add_resource(resources.PrestamosResources, '/prestamos')
    api.add_resource(resources.PrestamoResources, '/prestamo/<id>')
    #login
    api.add_resource(resources.LoginResources, '/login')
    api.add_resource(resources.SignupResources, '/signup')
    #usuarios
    api.add_resource(resources.UsuariosResource, '/usuarios')
    api.add_resource(resources.UsuarioResource, '/usuario/<id>')
    #notificacion
    api.add_resource(resources.NotificacionResources, '/notificacion')
    #valoracion y comentario
    api.add_resource(resources.ValoracionesResources, '/valoraciones')
    api.add_resource(resources.ValoracionResources, '/valoracion/<id>')
    #configuracion
    api.add_resource(resources.ConfiguracionResources, '/configuracion/<id>')
    #Por ultimo retornamos la aplicacion inicializada
    api.init_app(app)
    return app