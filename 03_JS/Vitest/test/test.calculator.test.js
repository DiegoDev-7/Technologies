/* 

  -----Vitest Functions-----

    .expect()                   (Permite tomar un valor y compararlo con lo que deberia ser permitiendo que la prueba pase si coincide o falle si hay un error).

    .toBe()                     (Sirve para comprar dos valores y verificar si son iguales).

    .toEqual()                  (Sirve para comparar dos objetos y verificar si son iguales).

    .toBeTruthy()               (Sirve para verificar si un valor es true).

    .toBeFalsy()                (Sirve para verificar si un valor es false).

    .toBeNull()                 (Sirve para verificar si un valor es null).

    .toBeUndefined()            (Sirve para verificar si un valor es undefined).

    .toBeDefined()              (Sirve para verificar que un valor no es undefined).

    .toContain()                (Sirve para verificar si un array contiene un valor especifico).


    beforeEach()                (Se utiliza para preparar datos antes de cada test).

    afterEach()                 (Se utiliza para limpiar datos despues de cada test).

    beforeAll()                 (Se utiliza para preparar datos antes de todos los test).

    afterAll()                  (Se utiliza para limpiar datos despues de todos los test).
    

    .toThrow()                  (Se utiliza para verificar si una funcion lanza un error).


    -----Mock Functions-----

    .fn()                       (Se utiliza para crear una funcion mock).
    
    .mock()                     (Se utiliza para crear una funcion mock).

    .spyOn()                    (Se utiliza para espiar una funcion y verificar si fue llamada).

    .toHaveBeenCalledWith()     (Se utiliza para verificar si una funcion mock fue llamada con un valor especifico).

    .mockReturnValue()          (Se utiliza para establecer un valor de retorno para una funcion mock).

    .mockReturnValueOnce()      (Se utiliza para establecer un valor de retorno para una funcion mock solo una vez).

    .mockResolveValue()         (Se utiliza para establecer un valor de retorno para una funcion mock que devuelve una promesa resuelta).


    .rejects()                  (Se utiliza para verificar si una promesa es rechazada).

    .resolves()                 (Se utiliza para verificar si una promesa es resuelta).

*/

import { describe, expect, test, vi } from "vitest";
const { sumar } = require("../src/calculator");


function dividir(a, b) {
    if (b === 0) {
        throw new Error("No se puede dividir entre cero");
    }

    return a / b;
}


test("This is the name of the test and here we can sum two numbers", () => {

  // expect() - toBe()  /  Test
  expect(sumar(1, 2)).toBe(3);


  // ToBe()
  expect(5).toBe(5);

  // toEqual()
  const usuario = {
    nombre: "Diego",
    edad: 20
  };
  expect(usuario).toEqual({
      nombre: "Diego",
      edad: 20
  });

  // toBeTruthy()
  expect(true).toBeTruthy();
  
  // toBeFalsy()
  expect(false).toBeFalsy();

  // toBeNull()
  expect(null).toBeNull();

  // toBeUndefined()
  let variable;
  expect(variable).toBeUndefined();

  // toBeDefined()
  variable = "Hola";
  expect(variable).toBeDefined();

  // toContain()
  expect(["manzana", "banana", "naranja"]).toContain("banana");

  expect(() => dividir(10, 0))
    .toThrow("No se puede dividir entre cero");



  // Mock function
  // .fn() - toHaveBeenCalled()
  const funcionMock = vi.fn()
  
  funcionMock("diego@test.com")

  expect(funcionMock).toHaveBeenCalledWith("diego@test.com")

  // .mockReturnValue()
  const funcionMock2 = vi.fn()
  funcionMock2.mockReturnValue("Hola mundo")
  expect(funcionMock2()).toEqual("Hola mundo")

  // .mockReturnValueOnce()
  const functionMock3 = vi.fn()
  functionMock3.mockReturnValueOnce(10)
  functionMock3.mockReturnValueOnce(20)
  
});
