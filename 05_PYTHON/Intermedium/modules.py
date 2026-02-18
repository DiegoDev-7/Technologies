""" 

  =====Importations=====

    help(importation)           (Funciona para poder visualizar una guia de como utilizar los componentes que tiene esta importación).

  
    import math                 (Se utiliza para operaciones matemáticas avanzadas).

    from math import pi         (Permite importar un componente que esta dentro de math).

    import math as m            (Permite cambiar el nombre del modulo por otro. Solo cambia el nombre pero funciones siguen igual a la  del modulo importado).

      
    -----imports-----

      import math               (Funciones matemáticas avanzadas, trigonometría, logaritmos, raíces, constatntes).

      import statistics         (Operaciones estadísticas básicas: media, mediana, moda, varianza, desviación estándar).

      import decimal            (Aritmética decimal de alta precisión. Útil en cálculos financieros).

      import os                 (Permite manejar archivos y variables de entorno).

      import sys                (Acceso al entorno de ejecución: argumentos (sys.argv)).

      import pathlib            (Manejo moderno y orientado a objetos de rutas y archivos).

      import datetime           (Permite manejar variables con formatos de fechas y horas).

      import random             (Genera números pseudoaleatorios, selección aleatoria de listas, barajado).

      import uuid               (Genera identificadores únicos universales (UUID), usados en bbases de datos y APIs).

"""
import math, statistics, decimal, os, sys, pathlib, datetime, random, uuid
from math import pi
import statistics as stats

# math
print(pi)

# statistics
print(statistics.mean([10, 20, 30]))

# decimal
print(decimal.Decimal("19.56") * decimal.Decimal("3"))

# os
print(os.getcwd())

# sys
print(sys.argv)

# pathlib
print(pathlib.Path("archivo.txt"))

# datetime
print(datetime.datetime.now())

# random
print(random.randint(1, 100))

# uuid
print(uuid.uuid4())