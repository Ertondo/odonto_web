# **OdontoWeb**

## Sistema de gestion de turnos para consultorios odontologicos.
### En esta rama intento setear la UI predeterminada de Bulma con Sass

<br>

### - **_Inicio_**

#### Muestra una tabla con las tareas y turnos del dia, ordenados por hora, con la finalidad de ir tachando las filas completadas o bien reprogramarlas. Cada dia se reinicia la tabla con los turnos registrados en la DB.

### - **_Tareas y Turnos_**

#### Dividido en 2 secciones, arriba ingreso de tareas y turnos a programar y abajo una tabla muestra los datos ordenados por fecha con posibilidad de editar y borrar.

### - **_Gestion de pacientes_**

#### Dividido en 2 secciones, arriba ingreso pacientes por legajo y abajo una tabla muestra los datos ordenados por apellido con posibilidad de editar y borrar.

### - **_Mas_**

- #### _Obra social_

#### Dividido en 2 secciones, arriba ingreso pacientes por legajo y abajo una tabla muestra los datos ordenados por apellido con posibilidad de editar y borrar.

<br>

## Tecnologias

- #### Bulma: framework usado para la UI
- #### Sass: lenguaje editor de css
- #### NodeJS: ejecutor de JS
- #### Express: servidor de prueba
- #### Javascript: logica de programa
- #### MariaDB: base de datos SQL

## Ejecucion en desarrollo
#### Se deben utilizar dos terminales, una para compilar el archivo sass y otra para el server

```
npm run css-watch
npm start
```
