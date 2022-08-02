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
INSERT INTO guest (dni,name,street,location,email,birthday,os) VALUES ('${
      data.dni
    }', '${data.name.toUpperCase()}', '${data.street.toUpperCase()}', '${data.location.toUpperCase()}', '${data.email.toUpperCase()}', '${data.birthday.toUpperCase()}', '${data.os.toUpperCase()}')
  );

/* Muestro los datos */
SELECT * FROM usuarios;

-- DELETE
DELETE FROM `guest` WHERE `dni`=3943125