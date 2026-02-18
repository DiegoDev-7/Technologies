""" 

  =====Tuples=====

    list = ()                     (Es una estrucutra de datos que almacena una colección de elementos).

    list = [(), ()]               (Es una lista que puede contener mas de 1 tupla).

  
  =====Dictionaries=====

    locations = {var: "cnt"}      (Permite guardar valores y claves separados por ":").

    locations = {val, val}        (Crea un conjunto de valores pero sin claves).

    del variable[dato]            (Permite eliminar objetos dentro de una estructura de datos).


    -----set-----

      set()                       (Permite crear un conjunto de valores unicos).

      .issubset(val, val)         (Permite verificar si un conjunto de valores esta dentro de un set devolviendo True o False).

      .union(variable)            (Permite unir dos conjuntos de variables).

      .intersection(variable)     (Permite mostrar un conjunto de elementos que estan presentes en las dos variables).

      .difference(variable)       (Permite mostrar un conjunto de elementos que solo estan una vez en la primera variable (Antes del .)).

"""
print("-----Tuple-----")
list1 = (1, 2, 3)
print(list1[1])
print(list1)


list2 = [(1, 2), (3, 4), (5, 6)]
list2[1] = (5, 1)
print(list2[1])
print(list2)


print("-----Dictionaries-----")
list3 = {
  "Gun": "H416",
  "Flash": True,
  "bullets": 50,
  "loaders": [30, 50, 60],
  "mods": {
    "muffler": True,
    "laser": True,
  },
  "age": [1990, 2005]
}
print(list3)


print("--del--")
del list3["Flash"]
print(list3)


# Recorrer el diccionario
for lst in list3:
  print(list3[lst])


# Cambiar valores
list3["Flash"] = False
print(list3)


# Mostrar un solo valor
print(list3["Gun"])


# Agregar un valor
list3["active"] = True
print(list3)


# Eliminar un valor
list3.pop("active")
print(list3)


# Verificar si almacena un valor
has = "Gun" in list3
print(has)


print("--set--")
# Agregar un valor
answers = {"yes", "no"}
answers.add("maybe")
print(answers)
for answer in answers:
  print(f"option: {answer}")


# Eliminar un valor
answers.remove("yes")
print(answers)
if "no" in answers:
  answers.remove("no")
print(answers)


# Permite cambiar las listas por sets
vr = ["primero", "segundo", "tercero"]
print(vr)
est = set(vr)
print(est)



print("--issubset--")
games = {"Gta", "Gow", "CRL", "COW"}
play = {"CRL", "COW"}
print(play.issubset(games))

news = {"FiFa", "Crash"}
print(games.union(news))


print("--intersection--")
print(games.intersection(play))


print("--difference--")
br = {"sue", "esa", "usa"}
nd = {"don", "esa"}
print(br.difference(nd))