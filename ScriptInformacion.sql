--Crea la base si no existe
CREATE DATABASE Demo;

USE Demo;

-- Crear la tabla Productos
CREATE TABLE Productos (
    id INT IDENTITY(1,1) PRIMARY KEY, 
    nombre NVARCHAR(255) NOT NULL,   
    descripcion NVARCHAR(MAX) NOT NULL, 
    categoria NVARCHAR(100) NOT NULL, 
    imagen NVARCHAR(MAX) NOT NULL,    
    precio DECIMAL(18, 2) NOT NULL,  
    stock INT NOT NULL                
);

-- Insertar 20 datos de ejemplo en la tabla Productos
INSERT INTO Productos (nombre, descripcion, categoria, imagen, precio, stock) VALUES
('Laptop Gamer XYZ', 'Potente laptop para gaming con procesador de �ltima generaci�n y gr�ficos dedicados.', 'Electr�nica', 'https://m.media-amazon.com/images/I/71u9sJm9EHL._AC_UF894,1000_QL80_.jpg', 1500.00, 15),
('Smartphone Ultra 5G', 'Tel�fono inteligente de alta gama con c�mara de 108MP y conectividad 5G.', 'Electr�nica', 'https://cdn.phonebook.com.kw/wp-content/uploads/2023/02/s23-ultra-cream-phonebook.jpg', 899.99, 30),
('Auriculares Inal�mbricos Pro', 'Sonido de alta fidelidad, cancelaci�n de ruido activa y bater�a de larga duraci�n.', 'Electr�nica', 'https://m.media-amazon.com/images/I/61N4d5q9WUL._AC_SL1500_.jpg', 199.99, 50),
('Teclado Mec�nico RGB', 'Teclado para gaming con retroiluminaci�n RGB personalizable y switches silenciosos.', 'Electr�nica', 'https://m.media-amazon.com/images/I/71239c8gEQL._AC_UF1000,1000_QL80_.jpg', 85.50, 40),
('Rat�n Gaming Ergon�mico', 'Rat�n de precisi�n para juegos con dise�o ergon�mico y DPI ajustable.', 'Electr�nica', 'https://m.media-amazon.com/images/I/71b2d69k7gL._AC_UF1000,1000_QL80_.jpg', 45.00, 60),
('Smartwatch Fit V2', 'Reloj inteligente con monitor de frecuencia card�aca, GPS y seguimiento de actividad.', 'Wearables', 'https://i.ebayimg.com/images/g/x8YAAOSwFjRkOaHh/s-l1200.webp', 120.00, 25),
('C�mara DSLR Profesional', 'C�mara r�flex digital con sensor de fotograma completo y capacidad de video 4K.', 'Fotograf�a', 'https://www.bhphotovideo.com/cdn-cgi/image/width=1200,height=1200,fit=contain,q=95/https://www.bhphotovideo.com/images/images1000x1000/canon_eos_r6_mark_ii_mirrorless_1730030.jpg', 1800.00, 10),
('Mesa de Comedor Moderna', 'Mesa de comedor de madera maciza con dise�o moderno y espacio para 6 personas.', 'Hogar y Muebles', 'https://m.media-amazon.com/images/I/61gRjFv4u4L._AC_UF894,1000_QL80_.jpg', 450.00, 5),
('Silla Ergon�mica Oficina', 'Silla de oficina con soporte lumbar, reposacabezas ajustable y ruedas.', 'Hogar y Muebles', 'https://m.media-amazon.com/images/I/81x12p2x8UL._AC_UF894,1000_QL80_.jpg', 220.00, 20),
('Cafetera Espresso Autom�tica', 'M�quina de caf� espresso completamente autom�tica con molinillo integrado.', 'Electrodom�sticos', 'https://m.media-amazon.com/images/I/71X1T3J3NCL._AC_UF1000,1000_QL80_.jpg', 350.00, 12),
('Aspiradora Robot Inteligente', 'Aspiradora robot con mapeo l�ser, control por app y vaciado autom�tico.', 'Electrodom�sticos', 'https://m.media-amazon.com/images/I/71uK5c4D+BL._AC_UF894,1000_QL80_.jpg', 300.00, 18),
('Batidora de Vaso de Alta Potencia', 'Batidora profesional para smoothies, sopas y salsas con motor de 1200W.', 'Electrodom�sticos', 'https://m.media-amazon.com/images/I/617F9t3v6tL._AC_UF894,1000_QL80_.jpg', 90.00, 28),
('Libro: El Gran Gato', 'Una novela de misterio y aventura ambientada en el siglo XIX.', 'Libros', 'https://www.sophos.mx/static/upload/products/3773/el-gran-gato.webp', 18.99, 100),
('Set de Pinturas Acr�licas', 'Caja de 24 colores de pintura acr�lica de alta calidad para artistas.', 'Arte y Manualidades', 'https://m.media-amazon.com/images/I/71tQk2BqXfL.jpg', 35.00, 35),
('Mochila de Senderismo 60L', 'Mochila duradera e impermeable para expediciones de senderismo de varios d�as.', 'Deportes y Aire Libre', 'https://m.media-amazon.com/images/I/719hMh0U-CL._AC_UF894,1000_QL80_.jpg', 75.00, 15),
('Bal�n de F�tbol Profesional', 'Bal�n de f�tbol de tama�o reglamentario para uso en ligas profesionales.', 'Deportes y Aire Libre', 'https://m.media-amazon.com/images/I/615XJvV1bWL.jpg', 25.00, 80),
('Juego de Mesa Estrategia', 'Juego de mesa complejo y divertido para 2-4 jugadores, ideal para noches de juegos.', 'Juegos y Juguetes', 'https://m.media-amazon.com/images/I/71B9Kx6R2yL._AC_UF894,1000_QL80_.jpg', 40.00, 22),
('Drone con C�mara 4K', 'Drone plegable con c�mara 4K, GPS y modo de seguimiento inteligente.', 'Drones y Gadgets', 'https://m.media-amazon.com/images/I/61r59D71XGL._AC_UF894,1000_QL80_.jpg', 550.00, 8),
('Altavoz Inteligente con Asistente', 'Altavoz con asistente de voz integrado, control de hogar inteligente y sonido premium.', 'Electr�nica', 'https://m.media-amazon.com/images/I/71tK-b2v+UL._AC_UF894,1000_QL80_.jpg', 79.99, 30),
('Set de Herramientas B�sico', 'Kit de herramientas esencial para reparaciones dom�sticas, con 50 piezas.', 'Hogar y Bricolaje', 'https://m.media-amazon.com/images/I/710e-kR15jL._AC_UF894,1000_QL80_.jpg', 60.00, 25);


CREATE TABLE Transacciones (
    id INT IDENTITY(1,1) PRIMARY KEY,    
	fecha DATETIME DEFAULT GETDATE(), 
	tipoTransaccion NVARCHAR(max) NOT NULL,
    idProducto INT NOT NULL,             
    cantidad INT NOT NULL,               
    precioUnitario DECIMAL(18, 2) NOT NULL, 
    precioTotal DECIMAL(18, 2) NOT NULL,  
    detalle NVARCHAR(MAX)                     
);

INSERT INTO Transacciones (idProducto, cantidad, tipoTransaccion, precioUnitario, precioTotal, detalle) VALUES
(1, 1, 'Venta', 1500.00, 1500.00, 'Venta de Laptop Gamer XYZ a cliente individual.'),
(2, 5, 'Compra', 850.00, 4250.00, 'Compra de 5 Smartphones Ultra 5G para reabastecimiento.'),
(3, 2, 'Venta', 199.99, 399.98, 'Venta de dos Auriculares Inal�mbricos Pro.'),
(4, 3, 'Compra', 80.00, 240.00, 'Compra de 3 Teclados Mec�nicos RGB.'),
(5, 1, 'Venta', 45.00, 45.00, 'Venta de Rat�n Gaming Ergon�mico.'),
(6, 10, 'Compra', 100.00, 1000.00, 'Compra de 10 Smartwatch Fit V2 a proveedor.'),
(7, 1, 'Venta', 1800.00, 1800.00, 'Venta de C�mara DSLR Profesional.'),
(8, 2, 'Compra', 400.00, 800.00, 'Reabastecimiento de 2 Mesas de Comedor Modernas.'),
(9, 1, 'Venta', 220.00, 220.00, 'Venta de Silla Ergon�mica de Oficina.'),
(10, 3, 'Compra', 320.00, 960.00, 'Compra de 3 Cafeteras Espresso Autom�ticas.'),
(11, 2, 'Venta', 300.00, 600.00, 'Venta de dos Aspiradoras Robot Inteligente.'),
(12, 4, 'Compra', 80.00, 320.00, 'Reabastecimiento de 4 Batidoras de Vaso de Alta Potencia.'),
(13, 3, 'Venta', 18.99, 56.97, 'Venta de tres copias del libro "El Gran Gato".'),
(14, 10, 'Compra', 30.00, 300.00, 'Compra de 10 Sets de Pinturas Acr�licas.'),
(15, 1, 'Venta', 75.00, 75.00, 'Venta de Mochila de Senderismo 60L.'),
(16, 20, 'Compra', 20.00, 400.00, 'Compra de 20 Balones de F�tbol Profesionales.'),
(17, 1, 'Venta', 40.00, 40.00, 'Venta de Juego de Mesa de Estrategia.'),
(18, 2, 'Compra', 500.00, 1000.00, 'Reabastecimiento de 2 Drones con C�mara 4K.'),
(19, 1, 'Venta', 79.99, 79.99, 'Venta de Altavoz Inteligente con Asistente.'),
(20, 5, 'Compra', 50.00, 250.00, 'Compra de 5 Sets de Herramientas B�sicos.')
