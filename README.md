# Laboratorio - VideoClub

Esta es la primera tarea del curso, en la cual se trata de crear rutas de acceso básicas para una aplicación de VideoClub hecha con React. Las rutas a crear son las siguientes:

- `/` - Página principal
- `/servicios` - Página de servicios
- `/servicios/:id` - Página de detalle de servicio
- `/proyectos/:param?` - Página de proyectos (parámetro opcional)
- `/clientes/:param?` - Página de clientes (parámetro opcional)
- `/blog/:param?` - Página de blog (parámetro opcional)
- `/contacto` - Página de contacto

## Validaciones

- `/servicios/:param`, `/proyectos/:param` y `/clientes/:param`: Permiten el paso de parámetro opcional para Servicios, Proyectos y Clientes y están validados para aceptar solo letras mayúsculas o minúsculas.
- `/blog/:param`: Permite el paso de parámetro opcional para Blog y está validado para aceptar solo el ingreso de números.

## Añadido



## Uso de la aplicación

Para usar esta aplicación, primero instala las dependencias necesarias ejecutando:

```sh
npm install
```
Luego, para ejecutar la aplicación en modo de desarrollo, usa el siguiente comando:

```sh
npm run dev
```
