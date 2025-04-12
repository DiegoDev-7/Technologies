/* 

    -----COMANDOS DEL SISTEMA DE ARCHIVOS-----

        mkdir                                                           (Crea una carpeta).

        New-Item                                                        (Añade una hoja).

        Rename-Item                                                     (Renombra una hoja o carpeta / "Rename-Item nombre-actual nombre-nuevo").
    
        Remove-Item                                                     (Elimina un archivo).

        ls                                                              (Muestra todas las carpetas disponibles para acceder a ellas).

        pwd                                                             (Muestra la carpeta en la que estamos posicionados).

        clear                                                           (Limpia la consola).


    ---------------GIT---------------

        -----CONFIGURACION DE GIT-----

            git config --global user.name "name"                            (Añade un nombre a el gitconfig, Es importante utilizarlo siempre).

            git config --global user.email "dxvvdev@gmail.com"              (Añade un email a el config, Es importante utilizarlo siempre).


        -----INICUALIZACION Y RAMAS-----

            git init                                                        (Crea un nuevo repositorio).

            git branch                                                      (Muestra en que ramas estamos posicionados).

            git branch name                                                 (Crea una nueva rama con el nombre que se le asigne).

            git branch -m main                                              (Se utiliza para renombrar ramas).

            git branch -d name                                              (Se utiliza para eliminar una rama).



        -----ESTADO Y CAMBIOS-----

            git status                                                      (Muestra los archivos añadidos, editados o eliminados).

            git add                                                         (Añade archivos para el proximo commit).

            git commit -m "message"                                         (Agrega un commit, es decir crea un punto en el historial de el repositorio con los ultimos archivos guardados en ese momento).

            git checkout                                                    (Se utiliza para restaurar un archivo al último commit más reciente. Pues permite descartar cambios aun no confirmados).

            git reset                                                       (Restaura los cambios que se añadieron a git).

            git reset --hard "id"                                           (Restaura el repositorio a la id especificada).



        -----HISTORIAL-----

            git log                                                         (Se utiliza para ver el historial de commits de un respositorio, muestra informacion como: id de el commit, autor, correo, fecha y el mensaje del commit).

            git log --graph                                                 (Muestra el grafico del historial de commits de la rama).

            git log --graph --pretty=oneline                                (Muestra el grafico del historial de commits de forma reducida).

            git log --graph --decorate --all --oneline                      (Muestra el historial de commits con informacion adicional sobre las ramas y etiquetas).

            git reflog                                                      (Muestra el historial de movimientos del puntero HEAD, donde muestra acciones que cambian de estado como repositorio, commits, resets, checkouts, merges, etc.).



        -----ALIAS-----

            git config --global alias.tree ""                               (Crea un alias personalizado para un comando cualquiera).

            git config --global --get alias.tree                            (Muestra el alias creado).

            git config --global --unset alias.tree                          (Elimina el alias creado).



        -----DIFERENCIAS Y ETIQUETAS-----
        
            git diff                                                        (Se utiliza para ver las diferencias de los cambios realizados en los archivos donde muestra las lineas que han cambiado, agregado o eliminado).

            git tag name                                                    (Agrega un tag a el ultimo commit, se utiliza para marcar versiones importantes).



        -----FUSION Y CAMBIO DE RAMA-----

            git switch name                                                 (Se utiliza para cambiar una rama existente por una alternativa).

            git merge name                                                  (Se utiliza para fusionar otra rama, trae los cambios que esten en esa rama a la rama en la que estemos posicionados actualmente).


        
        -----GUARDAR CAMBIOS TEMPORALMENTE-----

            git stash                                                       (Funciona para gurdar temporalmente cambios no confirmados (modificados con errores o archivos nuevos) Funciona para cambiar de ramas y dejar temporalmente archivos).

            git stash list                                                  (Muestra las listas de stash que estan en la pepelera o que estan guardados temporalmente).

            git stash pop                                                   (Funciona para volver a mostrar el archivo que estaba temporalmente guardado).



        -----SUBIR Y DESCARGAR CAMBIOS GITHUB-----

            git remote add origin git@github.com:name/name.git              (Se utiliza para vincular un repositorio local con el repositorio remoto).

            git push                                                        (Se utiliza para subir los cambios desde el repositorio local al repositorio remoto).

            git fetch                                                       (Se utiliza para descargar los cambios mas recientes del repositorio).

            git pull origin name                                            (Trae los cambios del repositorio remoto que no tengo en mi repositorio local).

            git pull origin name --allow-unrelated-histories                (Se utiliza para fusionar dos ramas que no tienen un historial en comun).

        

        -----CLONAR REPOSITORIO-----

            git clone git@github.com:name/name.git                          (Trae todos los archivos que hay en remoto).

*/