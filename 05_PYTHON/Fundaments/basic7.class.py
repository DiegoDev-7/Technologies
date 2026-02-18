""" 

  =====Class=====

    class Name:             (Permite crear una clase y guardar diferntes tipos de valroes como si fuera una función).

    __init__                (Permite crear valores unicos para las variables de la clase cuando creamos una instancia. Este es un metodo constructor).

    super()                 (Permite acceder a metodos de la clase padre).

    pass                    (Es una instrucción vacía que no hace nada. Esta permite evitar que una sintaxis exija un bloque de código, pero que todavía 
                            no se quiere implementar).

    
    -----inheritance-----
      class Name:
        def __init__(mi_objeto, variable1, variable2)
          mi_objeto.variable1 = variable1
          mi_objeto.variable2 = variable2

      (La instancia "mi_objeto" permite delcarar las variables de las instancias siguientes).

      class LastName(Name)
        def __init__(self, variable1, variable2, brad):
          super().__init__(variable1)
          self.brad = brad

      (El objeto super permite acceder a valores especificados en la instancia padre, es necesario crear una funcion "def" 
      ya que nos permitira traer las instancias de la clase padre).

"""
print("-----Class-----")
class Computer:
  def __init__(self, size, storage):
    self.size = size
    self.storage = storage

  def print_specs(self):
    print("Display size: " + self.size)
    print("Storage size: " + self.storage)

low_spec = Computer("13", "25GB")
mid_spec = Computer("15", "512GB")
high_spec = Computer("17", "1TB")
premium_spec = Computer("17", "2TB")

low_spec.print_specs()
print("--")
mid_spec.print_specs()
print("--")
high_spec.print_specs()
print("--")
premium_spec.print_specs()


print("--for--")
class Pie:
  def __init__(self, flavor, ingredients):
    self.flavor = flavor
    self.ingredients = ingredients

  def print_inngredients(self):
    for i in self.ingredients:
      print(i)
applePie = Pie("apple", ["flour", "eggs", "apples", "butter"])
applePie.print_inngredients()


print("--Abstraction--")
class Abstraction:
  def churn(self):
    print("Loading map...")
  def Textures(self):
    print("Loading textures...")
  def Map(self):
    print("¡The map it's loaded!")

  def calling(self):
    self.churn()
    self.Textures()
    self.Map()

call = Abstraction()
call.calling()


print("--+--")
class Piggy:
  value = 0
  def addMoney(self, amount):
    self.value = self.value + amount
myPiggy = Piggy()
myPiggy.addMoney(100)
print(myPiggy.value)


print("--inheritance--")
class Person:
  def __init__(self, name, age):
    self.name = name
    self.age = age
  def greet(self):
    print("Hi!")


class Nurse(Person):
  def __init__(self, name, age):
    super().__init__("Nuerse " + name, age)
  def intro(self):
    print("Hi, I'm", self.name)


class Student(Person):
  def __init__(self, name, age, work):
    super().__init__(name, age)
    self.work = work
  def sayhello(self):
    print(f"Welcome back! {self.name}")
    print(f"Your age is: {self.age}")
    print(f"Your work is: {self.work}")


person1 = Nurse("Sam", 23)
person2 = Person("Tom", 30)
person3 = Student("Carl", 23, "farmer")

person1.intro()
person2.greet()
person3.sayhello()



print("--polymorphism--")
class Dog:
  def sound(self):
    return "woof"
class Cat:
  def sound(self):
    return "Meow"
  
def make_sound(animal):
  print(animal.sound())

make_sound(Dog())
make_sound(Cat())