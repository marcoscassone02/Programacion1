from flask import Flask
from dotenv import load_dotenv
from flask_restful import Api
#Importo dir de recursos 
import main.resources as resources


# iniciamos restful
api = Api()

# este metodo inicializa la app y todos sus modulos
def create_app():
    app = Flask(__name__)

    #variables de entorno
    load_dotenv()

    #cargar a la API el recurso Animales y especificar la ruta 
    #es para que la aplicacion de flask funcione como API

    #libros 
    api.add_resource(resources.LibrosResources, '/libros')
    api.add_resource(resources.LibroResources, '/libro/<id>')

    #prestamos
    api.add_resource(resources.PrestamosResources, '/prestamos')
    api.add_resource(resources.PrestamoResources, '/prestamo/<id>')
        #login
    api.add_resource(resources.LoginResources, '/login')
    #usuarios
    api.add_resource(resources.UsuariosResource, '/usuarios')
    api.add_resource(resources.UsuarioResource, '/usuario/<id>')
    #notificacion
    api.add_resource(resources.NotificacionResources, '/notificacion')
    #comentarios
    api.add_resource(resources.ComentariosResources, '/comentarios')
    #valoracion
    api.add_resource(resources.ValoracionResources, '/valoracion/<id>')
    api.init_app(app)
    #Por ultimo retornamos la aplicacion inicializada
    return app