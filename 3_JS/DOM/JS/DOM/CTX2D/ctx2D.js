/* 

    !!!!!Métodos para estilar formas basicas!!!!!

        fillStyle()                                             Define el color, gradiente o patron para rellenar formas.
                                                                    Ejemplo: ctx.fillStyle = "red";

        strokeStyle()                                           Define el color, gradiente, patrón usado para los bordes de las formas 
                                                                    Ejemplo: ctx.strokeStyle = "blue";

        lineWidth()                                             Establece el grosor de las líneas
                                                                    Ejemplo: ctx.lineWidth = 5;

        lineCap()                                               Define el estilo de los extremos de una linea: "butt", "round", "square"
                                                                    Ejemplo: ctx.lineCap = "round";
        
        linejoin()                                              Define cómo se unen las líneas en los vértices: "bevel", "round", "miter" 
                                                                    Ejemplo: ctx.lineJoin = "miter";

        font()                                                  Define la fuente para el texto
                                                                    Ejemplo: ctx.font = "20px Arial";

        textAling()                                             Define la alineación horizontal del texto:"left","right","center","start","end" 
                                                                    Ejemplo: ctx.textAlign = "center";

        textBaseline()                                          Define la alineación vertical del texto: "top", "hanging", "middle", "alphabetic" 
                                                                    Ejemplo: ctx.textBaseline = "middle";

        globalAlpha()                                           Controla la transparencia global de todo lo que dibujes (valor entre 0 y 1) 
                                                                    Ejemplo: ctx.globalAlpha = 0.5;

        globalCompositeOperation()                              Define cómo se combinan los colores de los elementos dibujados: "source-over", "destination-over", "xor", etc. 
                                                                    Ejemplo: ctx.globalCompositeOperation = "multiply";


    !!!!!Metodos para dibujar formas bascias!!!!!

        beginPath()                                             Inicia un nuevo camino (ruta de dibujo).
                                                                    Ejemplo: ctx.beginPath();

        moveTo(x, y)                                            Mueve el cursor a una posicion sin dibujar.                            
                                                                    Ejemplo: ctx.moveTo(50, 50);

        lineTo(x, y)                                            Dibuja una linea desde la posicion actual hasta el punto especificado. 
                                                                    Ejemplo: ctx.lineTo(100, 100);

        closePath()                                             Cierra el camino actual conectando el ultimo punto con el primero.     
                                                                    Ejemplo: ctx.closePath();

        stroke()                                                Traza el contorno de la ruta actual.                                   
                                                                    Ejemplo: ctx.stroke();

        fill()                                                  Rellena la forma definida por la ruta actual.                          
                                                                    Ejemplo: ctx.fill();

        arc                                                     Dibuja un arco o circulo.    
        (x, y, radius, startAngle, endAngle, counterclockwise)      Ejemplo: ctx.arc(100, 100, 50, 0, Math.PI * 2)

        rect(x, y, width, height)                               Dibuja un rectangulo.                                                  
                                                                    Ejemplo: ctx.rect(50, 50, 100, 100)).

        fillReact(x, y, width, height)                          Dibuja un rectangulo relleno.                                          
                                                                    Ejemplo: ctx.fillRect(50, 50, 100, 100)

        strokeRect(x, y, width, height)                         Dibuja un rectángulo con solo el contorno.                             
                                                                    Ejemplo: ctx.strokeRect(50, 50, 100, 100)

        clearRect(x, y, width, height)                          Limpia un area especifca del lienzo.                                   
                                                                    Ejemplo: ctx.clearRect(0, 0, 500, 500)


    !!!!!Métodos para texto!!!!!

        fillText(text, x, y, maxWidth)                          Dibuja texto relleno.
                                                                    Ejemplo: ctx.fillText("Hola", 50, 50);

        strokeText(text, x, y, maxWidth)                        Dibuja el contorno del texto.
                                                                    Ejemplo: ctx.strokeText("Hola", 50, 50);


    !!!!!Transformaciones!!!!!

        translate(x, y)                                         Mueve el punto de origen del lienzo.
                                                                    Ejemplo: ctx.translate(100, 100);

        rotate(angle)                                           Rota el lienzo por un ángulo en radianes.
                                                                    Ejemplo: ctx.rotate(Math.PI / 4);
        

        scale(x, y)                                             Escala el lienzo en los ejes X e Y.
                                                                    Ejemplo: ctx.scale(2, 2);
        
        save()                                                  Guarda el estado actual del lienzo.
                                                                    Ejemplo: ctx.save();
        
        restore()                                               Restaura el estado guardado más reciente.
                                                                    Ejemplo: ctx.restore();

    !!!!!Imágenes!!!!!

        drawImage(image, x, y, width, height)                   Dibuja una imagen en el lienzo.
                                                                    Ejemplo:
                                                                        const img = new Image();
                                                                        img.src = 'imagen.png';
                                                                        img.onload = () => ctx.drawImage(img, 50, 50, 100, 100);

    !!!!!Gradientes!!!!!

        createLinearGradient(x0, y0, x1, y1)                    Crea un gradiente lineal.
                                                                    Ejemplo:
                                                                        const gradient = ctx.createLinearGradient(0, 0, 200, 0);
                                                                        gradient.addColorStop(0, "red");
                                                                        gradient.addColorStop(1, "blue");
                                                                        ctx.fillStyle = gradient;
                                                                        ctx.fillRect(50, 50, 200, 100);

        createRadialGradient(x0, y0, r0, x1, y1, r1)            Crea un gradiente radial.
                                                                    Ejemplo:
                                                                        const gradient = ctx.createRadialGradient(100, 100, 0, 100, 100, 50);
                                                                        gradient.addColorStop(0, "white");
                                                                        gradient.addColorStop(1, "black");
                                                                        ctx.fillStyle = gradient;
                                                                        ctx.fillRect(50, 50, 200, 200);

    !!!!!Sombras!!!!!
    
        shadowColor                                             Define el color de la sombra.
                                                                    Ejemplo: ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
                                                                    
        shadowBlur                                              Define el desenfoque de la sombra.
                                                                    Ejemplo: ctx.shadowBlur = 10;

        shadowOffsetX y shadowOffsetY                           Establecen el desplazamiento de la sombra en los ejes X e Y.
                                                                    Ejemplo: ctx.shadowOffsetX = 5;
                                                                             ctx.shadowOffsetY = 5;

*/



const canvas = document.getElementById('canvas');  //Obtiene el elemento por su id.
const ctx = canvas.getContext('2d');            //Devuelve un objeto que proporciona métodos y propiedades para dibujar en el lienzo.

// Configurar el tamaño del canvas
canvas.width = 800;
canvas.height = 600;

// 1. Rectángulo relleno
ctx.fillStyle = "lightblue";
ctx.fillRect(50, 50, 150, 100);

// 2. Rectángulo con contorno
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.strokeRect(250, 50, 150, 100);

// 3. Texto relleno
ctx.font = "20px Arial";
ctx.fillStyle = "green";
ctx.textAlign = "center";
ctx.fillText("Texto relleno", 150, 200);

// 4. Texto con contorno
ctx.strokeStyle = "purple";
ctx.lineWidth = 1;
ctx.strokeText("Texto contorno", 400, 200);

// 5. Línea simple
ctx.beginPath();
ctx.moveTo(50, 250);
ctx.lineTo(200, 300);
ctx.strokeStyle = "black";
ctx.lineWidth = 2;
ctx.stroke();

// 6. Círculo (arco)
ctx.beginPath();
ctx.arc(400, 350, 50, 0, Math.PI * 2);
ctx.fillStyle = "orange";
ctx.fill();

// 7. Gradiente lineal
const gradient = ctx.createLinearGradient(50, 400, 200, 400);
gradient.addColorStop(0, "red");
gradient.addColorStop(1, "blue");
ctx.fillStyle = gradient;
ctx.fillRect(50, 400, 150, 100);

// 8. Gradiente radial
const radialGradient = ctx.createRadialGradient(400, 500, 10, 400, 500, 50);
radialGradient.addColorStop(0, "yellow");
radialGradient.addColorStop(1, "green");
ctx.fillStyle = radialGradient;
ctx.fillRect(350, 450, 100, 100);

// 9. Sombra
ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
ctx.shadowBlur = 10;
ctx.shadowOffsetX = 5;
ctx.shadowOffsetY = 5;
ctx.fillStyle = "pink";
ctx.fillRect(450, 50, 150, 100);
ctx.shadowColor = "transparent"; // Limpiar sombra después

// 10. Transformaciones
ctx.save(); // Guardar el estado actual
ctx.translate(600, 300);
ctx.rotate(Math.PI / 4);
ctx.fillStyle = "cyan";
ctx.fillRect(-50, -50, 100, 100); // Dibujar un cuadrado rotado
ctx.restore(); // Restaurar el estado

// 11. Imagen
const img = new Image();
img.src = "/JS/IMG/Colombia.png"; // Imagen de ejemplo
img.onload = () => {
  ctx.drawImage(img, 600, 450, 100, 100);
};

// 12. Ruta personalizada
ctx.beginPath();
ctx.moveTo(300, 300);
ctx.lineTo(350, 350);
ctx.lineTo(250, 350);
ctx.closePath();
ctx.fillStyle = "lime";
ctx.fill();
ctx.strokeStyle = "darkgreen";
ctx.lineWidth = 2;
ctx.stroke();