""" 

  =====Strings=====

    strg = "cadena"             (Las cadenas funcionan para insertar o traer texto sin que salten errores en el codigo).

    
    -----Methods-----

      .split()                  (Permite dividir cadenas y almacenar los valores individuales dentro de una lista).

      .replace()                (Permite reemplazar una parte de una cadena primero añadimos la parte que queremos remplzar y luego el nuevo valor).

"""
print("-----String-----")
print("--split--")
strg = "Cadena de valores"
print(strg)
print(strg.split())

strg2 = "Cadena, separada, por, comas"
print(strg2)
print(strg2.split(","))


print("--replace--")
strg3 = "Today's special is pasta"
print(strg3)
print(strg3.replace("pasta", "pizza"))