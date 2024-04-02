from main import create_app
import os
#llamamos a la funcion create_app() que se encuentra en el archivo main/__init__.py
app=create_app()
app.app_context().push()    
if __name__ == '__main__':
    app.run(debug=True,port=os.getenv('PORT'))

