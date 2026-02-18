""" 

  =====env=====

    dotenv                    (Permite cargar el modulo dotenv para leer un archivo .env y coloca sus valores dentro del entorno del proceso).

    os                        (Permite manejar archivos y variables de entorno).


    -----Methods-----

      .load_dotenv()          (Funciona para cargar las variables de entorno de dotenv en .env).

      .getenv("MY_API_KEY")   (Funciona para obtener la key que tenemos guardada en .env).

      .environ["MY_API_KEY"]  (Permite obtener las keys donde esas variables quedan almacenadas en memoria. 
                               expone las variables de entorno que el proceso Python heredó al iniciarse).

"""
import dotenv
import os

dotenv.load_dotenv()
apikey = os.getenv("API_KEY1")

print(apikey)
print(os.environ["API_KEY2"])