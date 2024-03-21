from flask import Flask
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

<<<<<<< HEAD
if __name__ == '__main__':
    app.run(debug=True,port=os.getenv('PORT'))
=======
if __name__ == "__main__":
    app.run(debug=True,port=os.getenv("PORT"))
>>>>>>> 1795c196f023a3d7f423849a61f253d8f565cfeb
