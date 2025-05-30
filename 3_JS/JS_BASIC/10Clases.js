/* 
    !!!!!Clases, metodos y instancias!!!!!

        class               (Se utiliza para definir objetos, la clase encapsula atributos y metodos).

                            class Computer {                                        //Añadimos una class llamada Computer ("siempre tiene que comenzar el nombre de una clase con una letra mayuscula").
                                    constructor(motherboard, cpu, gpu, ram, OS) {   //Constructor se utiliza para iniciar los objectos de una clase.
                                    this.motherboard = motherboard;                 //This se utiliza para llamar a los parametros de la clase constructor.
                                    this.cpu = cpu;
                                    this.gpu = gpu;
                                    this.ram = ram;
                                    this.OS = OS;
                                }
                            }
                            const computer1 = new Computer("Z790", "Intel Core i9", "NVIDIA GeForce RTX4090", "64GB", "Windows 11"); //la instancia new crea un objeto vacio y los parametros que agreguemos los agrega a la class.
                            console.log(computer1);


        #                   (Se utiliza para hacer privada una propiedad, se tiene que establecer por ejemplo: dentro de la clase y rriba de constructor #cpu y en el constructor this.#cpu = cpu; para que funcione).


        constructor         (Es un metodo que se utiliza para inicializar los atributos de una clase).


        this                (Hace una referencia al objeto actual, que permite acceder a los atributos o métodos del objeto actual).


        static              (Pertenecen a la clase en sí misma y no a las instancias de la clase. Se llaman directamente en la clase)
                                //Nota:  los métodos estáticos no pueden ser llamados en instancias de la clase, solo pueden ser llamados en la clase misma).


        get                 (El getter permite realizar cálculos, validaciones u otros procesos antes de devolver el valor (Es necesario que se utilice un return para devolver el valor de la propiedad o el resultado de un calculo)).


        set                 (Se utiliza para actualizar el valor de una propiedad de una clase, permite controlar como se actualizan los valores de las propiedades).


        extends             (Se utiliza para crear una clase que herede otra, es decir permite que una clase hija(subclase) tenga acceso
                            a las propiedades y métodos de una clase padre(superclase)).
                                class hija extends Padre {}
                                                            //Nota: La clase hija hereda todo, se permite tambien sobreescribir metodos o agregar unos nuevos a la clase hija.


        super               (Se utiliza para llamar al constructor o metodos de la clase padre dentro de la clase hija).


        new                 (Se utiliza para crear una nueva instancia de un objeto apartir de una clase o un constructor).

*/


    /* Clases */
//class
const clases = "-----------Clases-----------";
console.log(clases);

class Computer {
    constructor(motherboard, cpu, gpu, ram, OS) {
        this.motherboard = motherboard;
        this.cpu = cpu;
        this.gpu = gpu;
        this.ram = ram;
        this.OS = OS;
    }
}
const computer1 = new Computer("Z790", "Intel Core i9", "NVIDIA GeForce RTX4090", "64GB", "Windows 11");        //A esto se le llama instancia, la instancia new crea un objeto vacio y los parametros que agreguemos los agrega a las instancias dentro del metodo.
const computer2 = new Computer("ASRock", "Intel Core i7", "NVIDIA GeForce RTX3080", "16GB", "Windows 10");
const computer3 = new Computer("LGA 1155", "Intel Core i5", NaN, "8GB", "Windows 10");
console.log(computer1);
console.log(computer2);
console.log(computer3);

//Segunda clase con metodos.
class Inventory {
    constructor(chasis, cantidad, componentes, price) { //Este es un metodo con instancias. Constructor es el metodo y dentro de el son instancias.
        this.chasis = chasis;
        this.cantidad = cantidad;
        this.componentes = componentes;                 //A esto se le llama propiedad, This se utiliza para llamar a las instancias de el metodo constructor.
        this.price = price;
        this.nota = 0;
    }
    amount() {      //Este es un metodo.
        this.cantidad += 1;
    }
    componentes() { //Este es un metodo
        this.size += 1;
    }
    precio() {      //Este es un metodo.
        this.price = (this.cantidad * 20.99).toFixed(2);        //toFixed(2) redondea a 2 decimales.
    }
}
const inventory1 = new Inventory("black", 10, 10);
inventory1.nota = 4;        //Cambia la propiedad de el objeto constructor.
inventory1.precio();        //Llama a el metodo precio.
console.log(inventory1);    //Resultado: { suitcase: 'black', size: 10, componentes: 10, price: '209.90' }



//Define los puntos y nivel
class BattlePass {
    constructor(points, level) {
        this.points = points;
        this.level = level;
    }
    mensaje() {
        console.log("Battle Pass Normal:");
    }
    levelPoints() {
        this.points += 100;
    }
    levelNumber() {
        this.level += 1;
    }
    levelUP() {
        this.points = (this.level * 100);
    }
    displayInfo1() {
        console.log(`Level: ${this.level}, Points: ${this.points}`);
    }
}

//Multiplica los puntos * 2
class PremiumBattlePass extends BattlePass {    //Establece una relación de herencia entre las dos clases, PremiumBattlePass es la hija de BattlePass
    constructor(points, nivel) {
        super(points, nivel);            //Se utiliza para llamar a el constructor y alos metodos de la clase padre (superclase) desde la clase hija (subclase).
        this.price = 5;
    }
    mensaje() {
        console.log("Battle Pass Premium:");
    }
    mensajePremium() {
        this.mensajePremium();
        console.log("Thanks for buying the premium battle pass");
    }
    levelPoints() {
        this.points += 100;
    }
    levelNumber() {
        this.level += 1;
    }
    levelUP() {
        this.points = (this.level * 2.5);
    }
    displayInfo2() {
        console.log(`Level Premium: ${this.level}, Points Premium: ${this.points}, Price: $${this.price} USD`);
    }
}
//Llama a la clase BattlePass.
const mostrar1 = new BattlePass(1, 1);
mostrar1.mensaje();         //Esto es una instancia.
mostrar1.levelUP();         //Esto es una instancia.
mostrar1.displayInfo1();    //Esto es una instancia.

//Llama a la clase PremiumBattlePass.
const mostrar2 = new PremiumBattlePass(100, 1);
mostrar2.mensaje();
mostrar2.levelPoints();
mostrar2.displayInfo2();



//get, set, static, #
class Armas3 {

    #money; //Propiedad privada

    constructor(name, charger, bullets, money) {
        this._name = name;
        this._charger = charger;
        this._bullets = bullets;
        this.#money = money; //Propiedad privada
    }

    static saludar() {
        console.log("ARMA EQUIPADA!");
    }

    dinero() {
        return this.#money;
    }

    disparar() {
        if (this._bullets > 0) {
            this._bullets--;
            console.log("Sonido de disparo");
        } else {
            console.log("Cargador sin balas");
        }
    }

    // Getter para bullets
    get bullets() {
        return this._bullets;
    }

    // Setter para bullets
    set bullets(newBullets) {
        this._bullets = newBullets;
    }

    // Getter para name
    get name() {
        return this._name;
    }

    // Setter para name
    set name(newName) {
        this._name = newName;
    }

    // Getter para charger
    get charger() {
        return this._charger;
    }

    // Setter para charger
    set charger(newCharger) {
        this._charger = newCharger;
    }
}
Armas3.saludar();
const arma3 = new Armas3("M4A1", "Cargador de 60", 60, 10000);
console.log(arma3);
arma3.disparar();
console.log(arma3);


class Pistola extends Armas3 {
    constructor(name, charger, bullets, money) {
        super(name, charger, bullets, money);
    }

    // 7.
    get bullets() {
        return super.bullets + 10;
    }

    set bullets(newBullets) {
        super.bullets = newBullets;
    }

    get name() {
        return super.name;
    }

    set name(newName) {
        super.name = newName;
    }

    get charger() {
        return super.charger;
    }

    set charger(newCharger) {
        super.charger = newCharger;
    }

    // Sobrescribiendo el método disparar
    disparar() {
        if (this.bullets > 0) {
            this.bullets--;
            console.log("Sonido de disparo de pistola");
        } else {
            console.log("Cargador de pistola sin balas");
        }
    }
}

const pistola = new Pistola("Desert Eagle", "Cargador de 7", 50, 5000);
console.log("Bullets con bonus:", pistola.bullets); // Output: Bullets con bonus: 60
pistola.name = "Beretta";
console.log("Nuevo nombre de la pistola:", pistola.name); // Output: Nuevo nombre de la pistola: Beretta
pistola.bullets = 20;
console.log("Actualización de balas:", pistola.bullets); // Output: Actualización de balas: 30
pistola.disparar(); // Output: Sonido de disparo de pistola