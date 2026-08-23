## Iniciar el proyecto Vitest + Prettier para CI y buenas practicas
Para iniciar el proyecto tenemos que utilizar los siguientes comandos:

```
npm init -y
npm install --save-dev vitest
npm install -D prettier
```

Esto nos permitira crear el archivo .json e instalar Vitest de tal manera que tiene que quedar así el archivo .json:

```
{
  "name": "vitest",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "vitest --run",
    "format:write": "prettier --write \"src/**/*.{js,ts,json,css,md}\"",
    "format:check": "prettier --check \"src/**/*.{js,ts,json,css,md}\""
  },
  "license": "ISC",
  "type": "commonjs",
  "devDependencies": {
    "vitest": "^3.2.4"
  }
}
```

para ejecutar el proyecto:

```
npm run format:check
npm run format:write
npm test
```