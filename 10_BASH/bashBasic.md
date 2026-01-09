<!-- 

    ----------BASIC COMANDS----------

        clear                                   (Limpia el terminal o el bash).
    
        whoami                                  (Muestra el nombre del equipo).

        date                                    (Muestra la fecha actual).

        uptime                                  (Muestra la hora actual).

        hostname                                (Muestra el nombre del equipo).

        uname                                   (Muestra el nombre del Sistema Operativo).

        uname -a                                (Muestra mas especificacciones del Sistema Operativo).


        man ls                                  (Muestra el manual de ls).



    ----------DIRECTORIES----------

        pwd                                     (Mirar en que carpeta estamos posicionados).

        ls                                      (Muestra las carpetas disponibles).

        ls -l                                   (Permite mostrar el total de lo que tiene cada carpeta).

        ls -lh                                  (Muestra el tamaño total de cada carpeta resumido).

        ls -a                                   (Muestra los documentos que estan ocultos).

        ls *.txt                                (Muestra todos los archivos q terminen en .txt).
    
        ls 03*                                  (Muestra todos los archivos q tienen 03 al comienzo).
    
        ls 03*.txt                              (Muestra todos los archivos q tienen 03 y al final .txt).


        cd Documento                            (Entrar en el directorio).

        cd ./                                   (Hace referencia al directorio actual).

        cd ~                                    (Devolverse a la carpeta raíz).

        cd ..                                   (Devolverse al directorio anterior).

        cd ../../                               (Devolverse 2 carpetas hacia atrás).


        find carpeta                            (Muestra todas las carpetas y archivos que tengo en esa carpeta).



    ----------MAIN DIRECTORIES BY LINUX----------

        ls /                                    (Muestra los directorios de la raiz).

        cd /etc                                 (Entramos al directorio raiz).



    ----------MANIPULATE DIRECTORIES----------

        mkdir                                   (Make directory (Crea un directorio)).

        rmdir                                   (Remove directory (Elimina un directorio)).

            Delete
        
                rm arch.txt                     (Permite eliminar un archivo).

                rm -r carpeta                   (Permite borrar una carpeta).

                rm -ri carpeta                  (Pide permiso para borrar archivos).

            Copy

                cp archReal.t copiarArch        (Permite copiar un fichero (archivo)).

                cp -r archReal.t copiarArch     (Permite copiar un fichero (archivo) con archivos).

                cp -a Descargas Curso           (Permite copiar un directorio completo con permisos y carpetas completas).

                mv crtarArchAqui mvrloAqui      (Permite renombrar, cortar o mover un archivo a otro directorio el primero es donde lo cortamos y el segundo hacia donde lo movemos o renombramos).


        READ FILES

            cat archivo.txt                     (Permite mostrar el contenido del archivo en la consola).

            less archivo.txt                    (Permite mostrar todo el documento o archivo permitiendonos desplazar sobre el).

            more archivo.txt                    (Permite mostrar todo el documento por porcentajes permitiendo desplazarse mas rapido sobre el).

            head archivo.txt                    (Permite leer las primeras 10 lineas de un archivo).

            tail archivo.txt                    (Permite leer las ultimas 10 lineas de un archivo).

            greep -r "bscr" archivo.txt         (Permite buscar una palabra dentro de un archivo).


        WRITE FILE

            echo "texto" > hello.txt            (Escribe un texto dentro de un documento sobreescribiendo el actual).

            echo "Hola!" >> hello.txt           (Escribe un texto dentro de un documento añadiendolo al final).



    ----------TREE----------

        sudo apt install tree                   (Instala un comando que permite mostrar un arbol de todos los directorios que queremos visualizar).

        tree                                    (Muestra todos los directorios en forma de arbol).



    ----------NANO----------

        nano name.txt                           (Permite crear un documento y escribir sobre el o editar un archivo existente).

        ctrl + w                                (Permite buscar alguna palabra que queramos).

        ctrl + o                                (Guarda los cambios del archivo).

        ctrl + k                                (Corta alguna palabra).

        ctrl + u                                (Pega la palabra cortada).



    ----------VIM----------

        i                                       (Insertar texto o editar archivo).

        esc                                     (Salir de la inserción de texto).

        j                                       (Salto de linea hacia abajo).

        k                                       (Salto de linea hacia arriba).

        :q!                                     (Salir sin guardar cambios).

        :qa                                     (Salir de vim).

        :wq                                     (Guardar cambios).

        dd                                      (Eliminar una linea).

        yy                                      (Copiar una linea).

        p                                       (Pegar una linea).

        u                                       (Deshacer cambios).

-->