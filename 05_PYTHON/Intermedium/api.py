""" 

  =====APIs=====

    import request                (Permite hacer peticiones a una api (url) con diferentes tipos de metodos).


    -----Methods-----

      .get                        (Permite obtener los datos de la url).

      .post                       (Permite crear nuevos datos de una url).

      .put                        (Permite actualizar los datos de una url).

      .patch                      (Permite modificar campos especificos de una url sin enviar el objeto completo).

      .delete                     (Permite eliminar datos de una url).

      .json                       (Permite obtener un formato json (Diccionario con claves y valores) de la url a la que estamos llamando).

  
    .status_code                  (Permite acceder al codigo de estado usando variable.status_code).
      
    headers                       (Permite enviar metadatos adicionales en la petición HTTP).

    params                        (Permite enviar datos en la URL sin construila manualmente. Es la forma correcta de trabajar con query parameters en request).

    json                          (Funciona para enviar datos en formato JSON en el cuerpo de la petición).


    -----Parameters-----

      http://miurl_random52cdas4.com/api/languaje?popularity=high&limit=1

      ?                           (Es un parametro de consulta. Funciona para ordenar o modificar la respuesta sin cambiar el recurso base).

      =                           (Es un par clave=valor).

      &                           (Permite encadenar multiples parámetros de consulta juntos separándolos con un &).


    -----Status codes-----

      200                         (Significa que la solicitud fue exitosa).

      201                         (La solicitud ha tenido exito y se ha creado un nuevo recurso como resutado).

      202                         (La solicitud ha sido aceptada para procesamiento. Pero el procesamiento no ha sido completado).

      204                         (La solicitud ha tenido exito, peor hay contenido que enviar en la respuesta).

      300                         (Indica que hay varias opciones para el recurso, por ejemplo n recurso que esta disponible en diferentes formatos (JSON, XML, etc..)).

      301                         (Indica que el recurso solicitado se ha movido de forma permanente a una nueva URL).

      302                         (Indica que el el recurso solicitado se encuentra temporalmente en una URL diferente, la solicitud es temporal durante el proceso del mantenimiento del sitio).

      304                         (Indica que el recurso no ha cambiado desde la ultima vez que el cliente lo solicito).

      400                         (Significa que el servidor no pudo entender nuestra solicitud debido a una sintaxis invalida. Como un error tipografico en nuestra URL).

      401                         (Aparece cuando el cliente solicita un recurso que no esta disponible sin iniciar sesion).

      403                         (Indica que el cliente no tiene permiso para acceder al recurso, incluso si esta autenticado).

      404                         (Significa que el servidor no pudo encontrar los datos que el cliente solicito).

      500                         (Significa que son errores del servidor).

      503                         (Indica que el servidor no esta disponible temporalmente, posiblemente debido a sobrecarga o mantenimiento).

          ______________________   ___________________________    _____________________    ________________________________
          |   Codigo de estado |   |     Codigos de estado    |   | Errores de cliente |   |       Errores del server      |
          |       200-299      |   |         300-399          |   |       400-499      |   | 500-599 Internal Server Error |
          |       200 OK       |   |   300 Multiple Choices   |   |   400 Bad Request  |   |   500 Internal Server Error   |
          |     201 Created    |   |  301 Moved Permananently |   |   401 Unauthorized |   |    503 Service Unavaliable    |
          |     202 Accepted   |   |        302 Found         |   |   403 Forbidden    |   |_______________________________|
          |    204 No Content  |   |      303 See other       |   |   404 Not Found    |
          |____________________|   |     304 Not Modified     |   |____________________|
                                   |__________________________|

"""
import requests

url = "http://miurl_random52cdas4.com"


# Get api
res = requests
res.get(url, headers={"api-key": "MY_SECRET_KEY"})



# Alternative api
# GET
response = requests.get(url)
data = response.json()          # Obtenemos el formato json de la url
print(data)                     # Muestra el formato json de la url
print(data["name"])             # Muestra solo la clave que tenga el formato json


headers={
  "Authorization": "Bearer HERE_TOKEN",
  "Content-Type": "application/json"
}
params={
  "page": 3,
  "popularity": "high",
  "limit": 1,
}
data={
  "my-message": "I was here!"
}
# POST
responses = requests.post(url, headers=headers, json=data, params=params)   # Hace una petición a la url
print(responses.content)        # Devuelve el contenido de la respuesta
print(responses.status_code)    # Muestra el codigo de estado de la petición



# for
resp = requests.get("https://pokedex.com/api/pokemon")
data = resp.json()
for pokemon in data:
  print(f"Name: {pokemon["name"]}, ID: {pokemon["id"]}")
""" 
  Name: bulbasaur, ID: 1
  Name: ivysaur, ID: 2
  Name: venusaur, ID: 3
  etc...
"""