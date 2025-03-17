# Proyecto Amigo Secreto

Este proyecto permite gestionar un juego de amigo secreto. Los participantes son agregados a un array, donde se pueden realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar). Además, incluye una función para sortear aleatoriamente un amigo secreto.

## Tabla de Contenidos

- [Instalación](#instalación)
- [Uso](#uso)
- [Funciones](#funciones)
- [Contribución](#contribución)
- [Licencia](#licencia)

## Instalación

Para comenzar, clona este repositorio y asegúrate de tener Node.js instalado en tu máquina.

1. Clona el repositorio:
    ```bash
    git clone https://github.com/usuario/amigo-secreto.git
    ```

2. Navega a la carpeta del proyecto:
    ```bash
    cd amigo-secreto
    ```

3. (Opcional) Si planeas modificar o agregar funcionalidades, instala las dependencias necesarias (si las hubiera).

## Uso

Para usar el proyecto, solo es necesario tener un editor de texto (como VS Code) y ejecutar el archivo JavaScript en un entorno con Node.js.

1. Abre el archivo `amigoSecreto.js` en tu editor.
2. Ejecuta el archivo con Node.js:
    ```bash
    node amigoSecreto.js
    ```

## Funciones

- **agregarAmigo(nombre)**: Agrega un nombre de amigo al juego.
- **modificarAmigo(indice, nuevoNombre)**: Modifica el nombre de un amigo en el índice especificado.
- **eliminarAmigo(indice)**: Elimina un amigo del juego usando su índice en el array.
- **sortearAmigoSecreto()**: Realiza un sorteo aleatorio y asigna un amigo secreto.

## Contribución

Si deseas contribuir, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama para tus cambios.
3. Realiza un pull request describiendo los cambios.

## Licencia

Este proyecto está bajo la Licencia MIT.
