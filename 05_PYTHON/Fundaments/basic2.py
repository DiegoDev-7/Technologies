""" 

  =====Conditions=====

    if condition:         (Permite aceptar (True) o negar (False) una condicion independientemente de lo que haya en la condición).

    else:                 (Permite mostrar un contenido alternativo si la condición if no cumple con lo requerido).

    elif condition:       (Permite mostrar una segunda opcion si la primera condicion if no cumple con lo requerido).


    -----Operators-----

      and                 (Permite anidar otro contenido en una condición afirmando que tambien se necesita la segunda condición).

      or                  (Permite anidar otro contenido en una condicion si ambas condiciones son False el codigo se omite = False).

      
    -----AutoAssignment-----

      wallet = 3
      wallet = wallet + 5 (Permite asignar mas valor a una variable sin tener que cambiar su valor).

      money = 5000
      money += 5000       (Permite asignar el mismo valor pero sin reescribir el nombre de la variable sumando el nuevo valor).
      money -= 5000       (Permite asignar el mismo valor pero sin reescribir el nombre de la variable restando el nuevo valor).

      
    -----Bucles-----

      while condition:    (Permite ejecutar repetidas veces el mismo comando independientemente de lo que tenga la condición).

      for i in range ():  (Permite podemos especificar cuantas veces queremos ejecutar el codigo con "range").

        continue          (Se utiliza para saltar el bloque actual y pasar a la siguiente iteración).

        break             (Se utiliza para salir del bloque por completo es como una barrera no permite ejecutar nada mas despues de invocarla).

"""
print("-----If-else-elif-and-or-----")
variable1 = True
if variable1 == True:
  print("Verdadero")

print("--If--")
variable2 = 800
if variable2 >= 500:
  print(f"Puntaje: {variable2}")

print("--else--")
if variable2 >= 850:
  print(f"Puntaje: {variable2}")
else:
  print("El puntaje es inferior a 850")

print("--elif--")
if variable2 >= 850:
  print(f"Puntaje: {variable2}")
elif variable2 >= 800:
  print(f"El puntaje es exactamente igual a {variable2}")


print("--and--")
num1 = 10
num2 = 20
if num2 > num1 and num1 < num2:
  print("Ambas condiciones son correctas")


print("--or--")
if num2 < num1 or num1 > num2:
  print("Ambas operaciones son correctas")
else:
  print("Hay un error en las condiciones")



print("-----AutoAssignment-----")
print("--=--")
wallet = 3
wallet = str(wallet) + "ola"
print(wallet)

print("--+=--")
money = 5000
money += 5000
print(money)



print("-----While-----")
est = True
while est == True:
  print("Condicion correcta")
  est = False
  print("Una vez más")
  
count1 = 1
while count1 <= 5:
  print(count1)
  count1 += 1

count0 = 0
while count0 < 5:
  print(count0)
  count0 += 1



print("-----for-----")
counter = 0
for counter in range (4):
  print("*********--------")
for couter in range (3):
  print("-----------------")