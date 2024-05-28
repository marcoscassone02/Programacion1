from flask import Flask
from dotenv import load_dotenv
from flask_restful import Api
from flask_sqlalchemy import SQLAlchemy
import os
from flask_jwt_extended import JWTManager
from flask_migrate import Migrate
import main.auth

# inicializar SQLAlchemy
db = SQLAlchemy()
# iniciamos restful
api = Api()
# este metodo inicializa la app y todos sus modulos

#Inicializar Migrate
migrate = Migrate()
#inicializar JWT
jwt = JWTManager()
def create_app():
    app = Flask(__name__)
    load_dotenv()
    #Si no existe el archivo de base de datos crearlo (solo valido si se utiliza SQLite)
    if not os.path.exists(os.getenv('DATABASE_PATH')+os.getenv('DATABASE_NAME')):
        os.mknod(os.getenv('DATABASE_PATH')+os.getenv('DATABASE_NAME'))
        
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    #Url de configuracion de base de datos
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////'+os.getenv('DATABASE_PATH')+os.getenv('DATABASE_NAME')
    db.init_app(app)
    
    import main.resources as resources
    #libros 
    api.add_resource(resources.LibrosResources, '/libros')
    api.add_resource(resources.LibroResources, '/libro/<id>')
    #prestamos
    api.add_resource(resources.PrestamosResources, '/prestamos')
    api.add_resource(resources.PrestamoResources, '/prestamo/<id>')
    #login
    api.add_resource(resources.LoginResources, '/login')
    # api.add_resource(resources.SignupResources, '/signup')
    #usuarios
    api.add_resource(resources.UsuariosResource, '/usuarios')
    api.add_resource(resources.UsuarioResource, '/usuario/<id>')
    #autores
    api.add_resource(resources.AutoresResources, '/autores')
    api.add_resource(resources.AutorResources, '/autor/<id>')
    #notificacion
    api.add_resource(resources.NotificacionResources, '/notificacion')
    #valoracion y comentario
    api.add_resource(resources.ValoracionesResources, '/valoraciones')
    api.add_resource(resources.ValoracionResources, '/valoracion/<id>')
    #configuracion
    api.add_resource(resources.ConfiguracionResources, '/configuracion/<id>')
    #Por ultimo retornamos la aplicacion inicializada
    api.init_app(app)

    #Cargar clave secreta
    app.config['JWT_SECRET_KEY'] = os.getenv('JWT_SECRET_KEY')
    #Cargar tiempo de expiración de los tokens
    app.config['JWT_ACCESS_TOKEN_EXPIRES'] = int(os.getenv('JWT_ACCESS_TOKEN_EXPIRES'))
    jwt.init_app(app)

    from main.auth import routes
    #Importar blueprint
    app.register_blueprint(routes.auth)
    
    return app