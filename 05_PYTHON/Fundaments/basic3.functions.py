""" 
  =====Functions=====

    def name():               (Permite crear un bloque de codigo con funciones multiples adentro).

"""
print("-----Functions-----")
print("--def--")
def varia():
  name = "Diego"
  print(name)
varia()


def varia2(name):
  print(f"Su nombre es: {name}")
varia2("Diego")


def varia3(age):
  label = f"Your score: {age + 10}"
  return label
result = varia3(7)
print(result)


def varia4(first, last):
  print(first + " | " + last)
varia4("Primero", "Segundo")


def varia5(price, mult):
  return price * mult
print(varia5(5000, 1.2))
print(int(varia5(5000, 1.2)))


rent = 2000
def varia6(porcent):
  print(f"{rent / porcent}")
varia6(5)


def varia7(cart):
  if cart < 100:
    print(f"Total: {cart + 50}")
varia7(80)


def varia8(operator, x, y):
  if operator == "+":
    print(x + y)
  elif operator == "-":
    print(x - y)
  else:
    print(f"Unknown operator: {operator}")
varia8("+", 50, 20)
varia8("-", 500, 200)
varia8("*", 200, 50)


def varia9(players):
  print(len(players) == 2)
varia9(["Amy", "Jay"])


def varia10(bookings):
  counter = 1
  while counter <= bookings:
    print(f"Passenger {counter} on board")
    counter += 1

  while bookings > 0:
    print(bookings)
    bookings -= 1
  
  print("Go!")
varia10(3)


def varia11(files, cart_list):
  for i in range(files):
    print(f"Downloading file {i} out of 3")

  for price in cart_list:
    print(f"New price: {price/2}")
cart = [5, 20, 8]
varia11(5, cart)


def varia12(players):
  return players[0], players[1], players[2]
players = ["Sue", "Ed", "Ann", "Ty"]
topThree = varia12(players)
print(f"{topThree[0]}")
print(f"{topThree[1]}")
print(f"{topThree[2]}")