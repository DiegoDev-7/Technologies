class usuario {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  delited() {
    console.log("User account deleted")
  }
}
const user = new usuario("Diego", 12)

console.log(user)