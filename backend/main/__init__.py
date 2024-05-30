from flask import Flask
from dotenv import load_dotenv
from flask_restful import Api
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager
from flask_mail import Mail
import os

# inicializar SQLAlchemy
db = SQLAlchemy()
# iniciamos restful
api = Api()
#iniciamos jwt
jwt = JWTManager()
#Inicializar mail
mailsender = Mail()
# este metodo inicializa la app y todos sus modulos
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
    #añadir recursos a la app
    api.init_app(app)
    #Cargar clave secreta
    app.config['JWT_SECRET_KEY'] = os.getenv('JWT_SECRET_KEY')
    #Cargar tiempo de expiración de los tokens
    app.config['JWT_ACCESS_TOKEN_EXPIRES'] = int(os.getenv('JWT_ACCESS_TOKEN_EXPIRES'))
    jwt.init_app(app)

    from main.auth import routes
    #Importar blueprint
    app.register_blueprint(routes.auth)

    #Configuración de mail
    app.config['MAIL_HOSTNAME'] = os.getenv('MAIL_HOSTNAME')
    app.config['MAIL_SERVER'] = os.getenv('MAIL_SERVER')
    app.config['MAIL_PORT'] = os.getenv('MAIL_PORT')
    app.config['MAIL_USE_TLS'] = os.getenv('MAIL_USE_TLS')
    app.config['MAIL_USERNAME'] = os.getenv('MAIL_USERNAME')
    app.config['MAIL_PASSWORD'] = os.getenv('MAIL_PASSWORD')
    app.config['FLASKY_MAIL_SENDER'] = os.getenv('FLASKY_MAIL_SENDER')
    #Inicializar en app
    mailsender.init_app(app)
    
    return app