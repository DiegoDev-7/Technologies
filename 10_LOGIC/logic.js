const dr1 = () => {
  // I and J
  function saca0(arr, k) {
    let i = 0
    let sum = 0
    let max = -Infinity

    for (let j = 0; j < arr.length; j++) {
      sum += arr[j]

      if (j - i + 1 === k) {
        max = Math.max(max, sum)
        sum -= arr[i]
        i++
      }
    }

    return max
  }
  console.log(saca0([1,2,3,4,5,6,7,8,9,10], 3), "I and J")
  
  
  
  // two pointers
  function saca(arr) {
    let l = 0
    let r = arr.length - 1
    let sum = 0

    while (l < r) {
      sum += arr[l] + arr[r]
      l++
      r--
    }
    
    return sum
  }
  console.log(saca([1,2,3,4,5,6,7,8,9,10]), "Two Pointers 1")

  // Palindrome
  function sacaS(arr) {
    let str = arr.split(" ").join("")
    let l = 0
    let r = str.length - 1

    while (l < r) {
      if (str[r] !== str[l]) return false
      l++
      r--
    }

    return true
  }
  console.log(sacaS("anita lava la tina"), "Two Pointers 2")



  // Sliding window
  function saca2(arr, k) {
    let l = 0
    let sum = 0
    let min = -Infinity

    for (let r = 0; r < arr.length; r++) {
      // Guarda la suma al elemento que entra en la ventana
      sum += arr[r]

      // Mueve la ventana
      while (sum >= k) {
        min = Math.min(min, r - l + 1)

        // Quita la suma que esta saliendo de la ventana
        sum -= arr[l]
        l++
      }
    }

    return min === Infinity ? 0 : sum
  }
  console.log(saca2([1,2,2,4,5,1,3,5,2,2,4,3], 5), "Sliding Window 1")

  
  // Ventana dinamica
  function saca3(arr, k) {
    let max = -Infinity
    
    // Creamos la ventana fija
    for (let i = 0; i <= arr.length - k; i++) {
      // reinicia el valor cada vez q entra en el bucle
      let sum = 0
      // Buscamos los caracteres y los vamos guardando en sum, sumando uno por uno
      for (let j = i; j < i + k; j++) {
        sum += arr[j]
      }
      
      max = Math.max(max, sum)
    }

    return max
  }
  console.log(saca3([2,1,5,1,3,2], 3), "Sliding Window 2")
  

  // Ventana fija
  function saca4(arr, k) {
    let sum = 0
    let max = -Infinity

    // Creamos la ventana fija
    for (let i = 0; i < k; i++) {
      sum += arr[i]
    }

    // Guardamos cada resultado en el max
    max = sum

    // Movemos la ventana
    for (let i = k; i < arr.length; i++) {
      sum += arr[i]       // Entra uno nuevo
      sum -= arr[i - k]   // Sale uno viejo
      max = Math.max(max, sum)
    }

    return max
  }
  console.log(saca4([1,2,3,4,5,6], 3), "Sliding Window 3")


  // Ventana dinamica
  function saca5(str) {
    let set = new Set()
    let l = 0
    let max = 0

    for (let r = 0; r < str.length; r++) {
      // Contiene caracteres que estan dentro de la ventana
      while (set.has(str[r])) {
        // Elimina el caracter que esta saliendo de la ventana por el lado left
        set.delete(str[l])
        l++
      }

      // Añadimos un caracter no repetido
      set.add(str[r])
      // Obtenemos el tamaño maximo del string sin caracteres repetidos
      max = Math.max(max, set.size)
    }

    return max
  }
  console.log(saca5("abcabcbb"), "Sliding Window 4")
}
dr1()


console.log("------")


const dr2 = () => {
  // Complete (, [, {
  function saca(arr) {
    let stack = []
    const par = {
      ')': '(',
      ']': '[',
      '}': '{'
    }

    for (let c of arr) {
      if (c === "(" || c === "[" || c === "{") {
        stack.push(c)
      } else {
        if (!stack.length) return false
        if (stack.pop() !== par[c]) return false
      }
    }

    return stack.length === 0
  }
  console.log(saca("()"), "Stack 1")
  console.log(saca("(]"), "Stack 2")
  console.log(saca("([])"), "Stack 3")


  // Invert string
  function saca1(str) {
    const stack = []
    let res = ""

    for (let c of str) stack.push(c)
    while (stack.length) res += stack.pop()
    
    return res
  }
  console.log(saca1("invertido"), "Stack 4")

  function saca2(str) {
    const stack = []
    
    for (let c of str) {
      if (stack.length === 0 || stack[stack.length - 1] !== c) {
        stack.push(c)
      }
    }

    return stack.join("")
  }
  console.log(saca2("aabbccdd"), "Stack 5")
  console.log(saca2("abbaca"), "Stack 5")
}
dr2()


console.log("------")


const dr3 = () => {

}
dr3()
