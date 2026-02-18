""" 

  =====Listas=====

    todo = [1,2,3,4]        (Permite crear multiples valores en una sola variable).
            0 1 2 3

    todo[0:0:0]             (Permite recuperar valores que nosotros especifiquemos al principio o final: [start:end:condition]).

    del                     (Permite eliminar elementos dentro de una lista).

    -----Metods-----

      .append               (Permite añadir un valor al final del array).

      .insert(0, "valor")   (Permite añadir un valor en cualquier indice del array).

      .pop                  (Elimina el ultimo elemento de la lista).

      .sort()               (Permite ordenar un array).

      .count(valor)         (Permite contar valores hay en un array).

"""
print("-----List-----")
todo = [1, 2, 3, 4, 5]
print(todo[0])
todo[2] = 10
print(todo)

print("--[:]--")
alphabet = ["A", "B", "C", "D", "E", "F"]
print(alphabet[2:])
print(alphabet[-1:])                # Devovlemos los valores invertidos
print(alphabet[2:4])                # Devolvemos los valores en el indice 2 y 3 ya que el 4 es el limite y no se muestra
print(alphabet[2::-1])              # Significa que devolvemos todos los valores invertidos
print(alphabet[1:6:2])              # Significa que devolvemos valores cada 2 valores (dejando uno intermedio) gracias al :2


print("---append---")
todo.append(6)
print(todo)


print("---insert---")
array = ["kiwis", "peas"]
array.insert(2, "Apples")
print(array)


print("---pop---")
array.pop(0)
array.insert(2, "Uvas")
print(array)


print("--sort--")
list = [1, 2, 5, 3, 20, 10, 15]
list.sort()
print(list)

print("--count--")
list2 = [1, 5, 2, 5, 3, 20, 10, 15]
print(list2.count(5))               # 2
print(20 in list2)                  # True


# Exercises
prices = [10, 38, 40, 58, 62]
salved = []
for price in prices:
  salved_price = price/2
  salved.append(int(salved_price))
print(salved)

sal = [int(price/2) for price in prices]
print(sal)

sal = [price for price in prices if price >= 30 and price <= 50]
print(sal)

vlue = [1, 2, 3, 4, 5, 6, 7]
print(vlue[-1])                     # Devuelve el ultimo valor de una lista


print("--del--")
del vlue[-1]
print(vlue)

del vlue[1]
print(vlue)