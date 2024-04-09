from main import create_app
import os
#llamamos a la funcion create_app() que se encuentra en el archivo main/__init__.py
app=create_app()
app.app_context().push()    
from main import db
if __name__ == '__main__':
    db.create_all()
    app.run(debug=True,port=os.getenv('PORT'))
