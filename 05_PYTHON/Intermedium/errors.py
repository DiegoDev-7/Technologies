"""  

  =====Errors=====

    raise name()          (Permite llamar el error personalizado en la consola).

    
    ----exceptions-----
    
      ValueError          (Permite mostrar una palabra o frase personalizada en un error de consola).

      

  =====Capture - Errors=====
      
    try:                  (Permite leer variables o componentes y si hay un error lo muestra en except).
      
    except:               (Permite mostrar el error capturado en try (Si no queremos que se ejecute nada despues de except usamos "pass")).

    else:                 (Permite mostrar el codigo solo si no se ha producido un error).
    
    finally:              (Permite ejecutar lo que haya dentro de el ocurra o no un error).

"""


""" slices = 3
if slices < 5:
  raise ValueError("There must be at least one diner") """

try:
  numero = int(input("Ingresa un numero: "))
  resultado = 10 / numero
  print("Resultado:", resultado)

except ValueError:
  print("Error: debes ingresar un numero valido")

except ZeroDivisionError:
  print("Error: no se puede dividir entre cero")

else: 
  print("Si no hay error ejecuta else")

finally:
  print("Siempre se ejecuta finally")