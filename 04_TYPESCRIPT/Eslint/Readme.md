# Eslint

Es una herramienta para analizar codigo Javascript / Typescript de forma estatica, que permite encontrar errores, prevenir malas practicas y mantener un estilo ordenado


Iniciar proyecto eslint

```
npm init @eslint/config@latest
npm install -D eslint-plugin-security @types/eslint-plugin-security
npm install prettier
```

Configuracion de eslint para Typescript:

```
? What do you want to lint?
✔ JavaScript

? How would you like to use ESLint?
❯ To check syntax and find problems

? What type of modules does your project use?
❯ JavaScript modules (import/export)

? Which framework does your project use?
❯ None of these

? Does your project use TypeScript?
❯ Yes

? Where does your code run?
✔ Node

? Which language do you want your configuration file be written in?
✔ JavaScript

? Would you like to install them now?
❯ Yes

? Which package manager do you want to use? ...
❯ npm
```

El script del package.json tiene que quedar de la siguiente manera:

```
{
  "scripts": {
    "lint": "eslint src"
    "format:write": "prettier --write \"src/**/*.{js,ts,json,css,md}\"",
    "format:check": "prettier --check \"src/**/*.{js,ts,json,css,md}\"",
  }
}

```

Eslint nos permite analizar, detectar errores y malas practicas antes de ejecutar la aplicación.

En la carpeta src/main.js hay errores diseñados aproposito; Cuando ejecutamos el comando siguiente nos mostrara los errores de las funciones sin utilizar en Eslint:

```
npm run lint
```