""" 

  =====Variables=====

    nombre = "string"             (Guarda la variable nombre con el valor de string).

    nombre_largo = "strg"         (Para guardar variables sin espacios se utiliza el _).

    numero = 15                   (Guarda la variable con el numero 15).

    
    x = 10

    x = "hola"                    (Sobreescribe la ultima variable con el valor de hola y 10 la olvida).
    

    boolean = True                (Guarda el booleano con el valor de True, tambien puede tener el valor de False).

    morning = not True            (Condicional que permite negar o mostrar el valor contrario al booleano "False").
    

    label = "Uno" + "Dos"         (Permite acumular o juntar dos valores en una sola variable).

    label = 15 + 2 + 5            (Permite sumar valores numericos dando un unico resultado = 22).

    label = 15 - 2 - 5            (Permite restar valores numericos dando un unico resultado = 8).

    pi = 3.14159                  (Float describe un numero de punto flotante con uno o mas lugares decimales después de un punto ".").

    
    value = int(True)             (Permite mostrar booleanos con valores numericos, si es True = 1, False = 0).
    
    
    -----consola-----

      print()                     (Permite mostrar en consola los valores que le querramos asignar).

      print("uno" + "dos")        (Permite mostrar varios tipos de valores en la consola).
      
      print(2 + " String")        (Muestra un error en la consola ya que los valores son de diferente tipo de valor).

      print(f"{2} new string)     (Permite mostrar diferentes valores utilizando f"{}").
      

    -----Operators-----

      print(10 == 10)             (El resultado en consola es True ya que 10 es igual a 10).

      print(1 != 10)              (El resultado en la consola es True ya que 1 es desigual a 10).

      print(50 < 235)             (Muestra True ya que 50 es menor que 235)

      print(50 > 50)              (Muestra False ya que 50 no es mayor que 50)

      print(1 <= 3)               (Muestra True ya que 1 no es menor o igual que 3).

      print(5 >= 10)              (Muestra False ya que 5 no es mayor o igual que 10).

      
      print(type(variable))       (Muestra el tipo de dato que tenemos por si no estamos seguros o no sabemos que valor tenemos).

      print(str(50) + "ola")      (Esta función nos permite tomar un valor numerico y convertirlo en cadena).

      print(len(variable))        (Esta función permite contar cuantos valores tenemos en un array).

      print(int(9.99))            (Esta función nos permite eliminar el punto decimal y los valores restantes. Sin redondear "resultado = 9").

      print(float(50))            (Esta función nos permite agregar un punto decimal "resultado = 50.0").

      print(bool(variable))       (Permite mostrar valores si la variable tiene contenido o no independientemente si es un string vacio: "" o un numero en cero "0")

      print(min(variable))        (Permite mostrar el numero mas pequeño de un array).

      print(max(variable))        (Permite mostrar el numero mas grande de un array).
      
      print(sum(variable))        (Esta función permite sumar todos los numeros que esten dentro de un array).


      user_input = input("")

      print(f"Hi, {user_input}")  (Permite añadir un mensaje que nosotros queramos en la consola).

"""
print("-----strings-----")
variable = "hola 1"     # init
variable_2 = "hola 2"
number = 5
print(variable)
print(variable_2)
print(variable + " " + variable_2)
""" print(2 + " new messages") # Error por que tiene 2 tipos de valores diferentes (numerico y string) """
print(f"{2} new messages")
print(f"{number} new messages {5} notifications")



print("-----numbers-----")
private = 3
public = 10
result = 3.33
total = private + public
print(total)
print(result)
print(result + public)



print("-----booleans-----")
morning = True
is_evening = not morning
print(not True)



print("-----Operadores, Igualdad o Desigualdad-----")
print("--Igualdad--")
valorA = 1
valorB = 2
print(valorA == valorB)
print(valorA == valorB)
print(10 == 10)

print("--Desigualdad--")
print(1 != 10)
print(valorA != valorB)

print("--Mayor / Menor o igual que--")
print(50 < 777)                   # True
print(50 > 50)                    # False
print(1 <= 3)                     # True
print(2 >= 5)                     # False
print(1 >= 1)                     # True



print("-----Type-str-int-float-bool-----")
este1 = "string"
este2 = 12
este3 = 54.5
este4 = True

print("--type--")
print(type(este1))                # <class 'str'>
print(type(este2))                # <class 'int'>
print(type(este3))                # <class 'float'>
print(type(este4))                # <class 'bool'>

print("--str--")
print(str(50) + "das")            # 50das
print(str(este2) + este1)         # 12string

print("--len--")
vr = ["primero", 2, "tercero", 4]
print(len(vr))                    # 4

print("--int--")
value = int(True)
print(int(value))                 # 1
second_value = int(False)
print(second_value)               # 0

print("--float--")
print(float(este2))               # 50.0

print("--min--")
print(min([2, 42, 5, 0.1, 1]))    # 0.1

print("--max--")
print(max([1, 5, 50, 25, 100]))   # 100

print("--sum--")
print(sum([25, 25]))              # 50

print("--bool--")
val1 = bool("string")
val2 = bool("")
val3 = bool(50.8)
val4 = bool(0)
print(val1)                       # True
print(val2)                       # False
print(val3)                       # True
print(val4)                       # False



print("-----input-----")
user_input = input("Enter your name: ")
print(f"Hi, {user_input}")        # Enter Your name: 

age_string = input("Enter your age: ")
if (int(age_string) < 21):
  print("Under 21")
else: 
  print("21 or older")