/* Creo trabla para las pruebas */
CREATE TABLE guest (

  dni BIGINT UNSIGNED PRIMARY KEY,
  name VARCHAR(100),
  street VARCHAR(100),
  location VARCHAR(100),
  birthday VARCHAR(100),
  email VARCHAR(100),
  os VARCHAR(100)
);

/* Inserto datos en la Tabla para realizar las pruebas */
INSERT INTO guest(dni, name, street, location, birtday, email,os)
  VALUES ('3943125', 'Roberto Decima', 'San martin 788','Catamarca','05/02/1976','joaquin.decima@gmail.com', 'OSMEDICA'),
        ('3932543125', 'Joaquin Decima', 'Rivadavia','Catamarca','05/02/1976','joaquin.decima@gmail.com', 'OSMEDICA'),
        ('25183621', 'Rodolfo Alfonso', 'Obispo Salguero 783', 'Cordoba','05/02/1976','joaquin.decima@gmail.com', 'OSMEDICA'),
        ('23562346', 'Pedro Perez', 'San martin 1102','Salta','05/02/1976','joaquin.decima@gmail.com', 'OSMEDICA');

/* Muestro los datos */
SELECT * FROM usuarios;
