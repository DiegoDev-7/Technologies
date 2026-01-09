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