# **OdontoWeb**

## Sistema de gestion de turnos para consultorios odontologicos.

<br>

![](/public/img/Captura%20desde%202022-07-09%2021-06-17.png)

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

---

<br>

## Distribucion de los archivos -> [ver detalle](odontoweb_list.html)

```
odonto_web
├─ README.md
├─ index.js
├─ package-lock.json
├─ package.json
├─ public
└─ scr
   ├─ database
   ├─ routes
   │  └─ index.js
   └─ views
      ├─ about.ejs
      ├─ guest.ejs
      ├─ index.ejs
      ├─ partials
      │  ├─ footer.ejs
      │  ├─ head.ejs
      │  └─ header.ejs
      └─ task.ejs

```

<br>

---

<br>

## Tecnologias

- #### Bulma: framework usado para la UI
- #### NodeJS: ejecutor de JS
- #### Express: servidor de prueba
- #### Javascript: logica de programa
- #### MariaDB: base de datos SQL

## Ejecucion en desarrollo

```
npm run dev
```
