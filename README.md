# Fylo Data Storage

En esta página se puede visualizar principalmente el almacenamiento total, el usado y el almacenamiento restante, cuenta con un diseño simple, atractivo y responsivo para que se pueda apreciar desde las pantallas más pequeñas, cuenta con animaciones simples de cargado de los datos desde JS.

# Contenido

- [Recursos](#Recursos)
- [Desarrollo](#Desarrollo)
- [Créditos](#Créditos)

## Recursos

#### Font Family
La fuente usada para este proyecto fue:  **[Raleway](https://fonts.google.com/specimen/Raleway).**
> https://fonts.google.com/specimen/Raleway

Weights:  **400** y **700**

Font Size principal: 14px.

#### Colores

##### Primarios
> Gradient: hsl(6, 100%, 80%) to hsl(335, 100%, 65%)

##### Neutrales
> Pale Blue: hsl(243, 100%, 93%)

> Grayish Blue: hsl(229, 7%, 55%)

> Dark Blue: hsl(228, 56%, 26%)

> Very Dark Blue: hsl(229, 57%, 11%)

## Desarrollo

- Primeramente se realizo la maquetación de la página, se uso un contenedor ```main``` y para los "cards" **Fylo** y **Storage** se usaron las etiquetas ```section```.

- Para la barra de progreso se uso un ```div``` vacio con la propiedad ```style="--width-fill: 50%"``` para establecer un llenado predeterminado.

- Se definieron los estilos generales como ser: Colores, importación de la fuente, se establecieron variables para los pesos y tamaño de fuente.

- Con el uso del JS se dio animación de carga al **Storage Usado**, **Storage Restante** y también a la barra de progreso modificando el estilo predeterminado que se le dio: ```style="--width-fill: 50%"```, valor que sube hasta completar el almacenamiento total que se uso.

- Finalmente se establecio el estilo responsive para dispositivos más pequeños.

## Créditos

Este proyecto es una creación de  [Frontend Mentor](https://www.frontendmentor.io/challenges/fylo-data-storage-component-1dZPRbV5n "Frontend Mentor")
