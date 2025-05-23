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

PANTALLA INICIO
![image](https://github.com/user-attachments/assets/be9d7097-2fcd-44c3-93b5-d3bd619c83c5)

PANTALLA DE PRODUCTO
-LISTAR PRODUCTOS
![image](https://github.com/user-attachments/assets/5c356318-baa6-49af-9a5c-fa5752563f44)

--CREAR PRODUCTO
![image](https://github.com/user-attachments/assets/329d5c35-09da-4b41-a5f8-1b107209859d)

MENSAJE DE EXITO Y PRODUCTO AGREGADO
![image](https://github.com/user-attachments/assets/c21d0476-bb62-4708-a9a5-52d39328396f)

--EDITAR PRODUCTO
![image](https://github.com/user-attachments/assets/147882f0-56c0-4af0-b2e1-c68d740eb06e)

--VALIDACIONES
![image](https://github.com/user-attachments/assets/1f01147e-9661-4a62-8f2c-49e52ffa311e)

--ELIMINAR PRODUCTO

![image](https://github.com/user-attachments/assets/a4dbdc85-239a-4f8c-9d0e-a452e1e74edf)

--FILTROS
![image](https://github.com/user-attachments/assets/41b3a9b2-e9bc-4181-8411-a55dd97dd33f)

--PANTALLA DE TRANSACCIONES
![image](https://github.com/user-attachments/assets/6178c07f-4036-457e-a73c-669c0bd1affe)

--CREAR TRANSACCION
![image](https://github.com/user-attachments/assets/b9f9f481-6df7-4122-ad33-d27bf61ff29b)

--MENSAJE DE EXITO
![image](https://github.com/user-attachments/assets/d1209c7e-ddf4-4ea7-a313-7ae08dabea7a)

--EDITAR TRANSACCION
![image](https://github.com/user-attachments/assets/0fa5fc97-bb5f-47f8-8bcb-2436df25d6ee)

--VALIDACIONES
![image](https://github.com/user-attachments/assets/e2941ea7-7e15-40e5-9ebb-76263204ad0f)

![image](https://github.com/user-attachments/assets/19f91138-e95b-436c-a3c6-195b8c844b7c)

--FILTROS
![image](https://github.com/user-attachments/assets/3e6823f1-7e85-42fd-9691-36fb4341c53e)

--PAGINADOR
![image](https://github.com/user-attachments/assets/ec8f868e-7ef5-4663-add6-1066545406b1)

![image](https://github.com/user-attachments/assets/753c52b6-9e9e-41bc-9775-a42a4a9d67e6)














NOTA: No olvides hacer uso de los filtros que se encuentran en las tablas
















