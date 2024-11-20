# Tutorial de depuracion

Mi objetivo con este pequeño repo es conocer como puedo depurar una aplicación TypeScript.

## 1 Archivos
Simplemente dos archivos, helloweb.html y helloweb.ts.

helloweb.html tiene lo basico de un html y con un body en el que carga el script .js generado en ``out/helloweb.js`` por el compilador.

Para la compilacion se procede a ejecutar el comando .
```
tsc
```
Este comando generara los archivos .js compilados de los archivos .ts en la carpeta ``/out``.

Se produce de esta forma porque asi se lo indicamos en el archivo de configuración del compilador de tsc ``tsconfig.json``.

Mas información sobre este fichero ``tsconfig.json``: [Documentación](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

```json
{
    "compilerOptions": 
    {
      "target": "ES5",
      "module": "CommonJS",
      "outDir": "out",
      "sourceMap": true
    }
}
```
Es importante la propiedade ``sourceMap``, ya que es la encargada de mapear el codigo TypeScript al codigo JavaScript generado por el compilador. **Esto es necesario para realizar una depuración**. 
Explicare no muy en profundidad el resto de propiedades

``target``: . Versión de JavaScript a la que se desea compilar [Doc](https://www.typescriptlang.org/tsconfig/#target) 

``module``: Especifica el formato del sistema de módulos que TypeScript debe generar en el código JavaScript compilado. Esto afecta cómo se manejan las importaciones y exportaciones en el código final.[Doc](https://www.typescriptlang.org/tsconfig/#module)


Modulos recomendados por la comunidad segun el entorno [enlace](https://github.com/tsconfig/bases?tab=readme-ov-file#centralized-recommendations-for-tsconfig-bases)


## 2 Lanzamiento del depurador

Despues de colocal algun breakpoint en el codigo .ts, comenzamos a configurar el lanzamiento de la compilacion.

```json
{
    "version": "0.2.0",
    "configurations": [

        {
            "type": "chrome",
            "request": "launch",
            "name": "Iniciar Chrome para localhost",
            "url":"${workspaceFolder}/helloweb.html",
            "webRoot": "${workspaceFolder}",
            "preLaunchTask": "Compilar TypeScript"
        }
    ]
}
```

Se puede observar que la url que indico es la del archivo ``helloweb.html``.
Ademas tambien se puede ver la propiedad preLaunchTask, en la que indico una tarea que debe ejecutar. Esta tarea esta definida en un ``tasks.json``.
```json
{
	"version": "2.0.0",
	"tasks": [
		{
            "label": "Compilar TypeScript",
			"type": "typescript",
			"tsconfig": "tsconfig.json",
			"problemMatcher": [
				"$tsc"
			],
			"group": "build"
		}
	]
}```

Con esta configuracion de ``tasks.json``, se puede observar que hago la compilación antes de realizar la depuración.


## 3 Fin

A depurar!

# Nota

Simplemente hago esto a bajo nivel para intentar comprender bien las configuraciones basicas de proyectos frontend. 




