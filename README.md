Sistema Gestion Inventarios

Requisitos: 
Front End: Angular version 18
BackEnd c# dotnet-sdk-9.0.300
Base Datos SQL SERVER

--CLONAR REPOSITORIO
--Para visualizar el front "Angular"
usando vs code ubicate en la carpeta de Microservicios
--Ejecuta los comandos npm install desde la terminal
--Una vez instalados los paquetes ejecuta ng serve --open en la terminal

--Para visualizar el BACK END
verifica que tengas instalado dotnet
dotnet-sdk-9.0.300
--abre el proyecto de GestionProductos y ejecuta los comandos
1:dotnet ef migrations add InitialCreate 'crear tabla en la base de datos'
2:dotnet run para iniciar el servicio
--No olvides tener instalado
dotnet add package Swashbuckle.AspNetCore 'Opcional para ver la api'
dotnet add package Microsoft.EntityFrameworkCore.SqlServer 'Para la conexion con la base de datos sql'
dotnet add package Microsoft.EntityFrameworkCore.Tools

De la misma manera realiza estos pasos en el proyecto de GestionTransacciones

--Algunas capturas del sistema funcionando

Servicio Productos

![image](https://github.com/user-attachments/assets/522aaae2-fea9-4271-8aba-3126617cfd42)

![image](https://github.com/user-attachments/assets/9816555e-26b7-4d51-bd5e-2a169d0abca4)

Servicio Transacciones

![image](https://github.com/user-attachments/assets/5f105d3d-7f02-497f-acc3-2a771aeeeff8)

![image](https://github.com/user-attachments/assets/9ece92db-dea7-4ba0-8ea1-02a9ec9f13aa)

SISTEMA ANGULAR

![image](https://github.com/user-attachments/assets/f6faa65a-81f2-4b60-9d60-bc434a777be3)


![image](https://github.com/user-attachments/assets/b5fc4d2c-a3ca-48d6-b44a-4eaa33aab494)


![image](https://github.com/user-attachments/assets/1c71cfd1-ae33-48c0-ab3f-9e4bb4497949)

![image](https://github.com/user-attachments/assets/47aad2cb-cce5-4a3f-9040-ca072f032d85)


![image](https://github.com/user-attachments/assets/4d9b29d5-9182-417d-b021-4e90ae4cdd26)


![image](https://github.com/user-attachments/assets/248975f0-ea4b-498c-91ae-5cd699e4ba33)

TRANSACCIONES

![image](https://github.com/user-attachments/assets/00108745-8174-4be8-bcc5-7d7ea2cdf591)

![image](https://github.com/user-attachments/assets/e5304a49-137f-41c8-8d5f-e32c5ab1ec6e)

![image](https://github.com/user-attachments/assets/59c4004b-df3d-48e2-9e0d-863eed50c0fd)


![image](https://github.com/user-attachments/assets/46e0458b-93ce-48c3-bdf5-5cac3938d44a)

![image](https://github.com/user-attachments/assets/3845c4d3-c486-4d75-b2f2-81daa8b2aafa)

NOTA: No olvides hacer uso de los filtros que se encuentran en las tablas
















