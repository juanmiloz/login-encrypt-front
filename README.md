<h1>Informe del Proyecto: Sistema de Autenticación y Gestión de Usuarios</h1>
Este informe documenta el desarrollo de el back-end de un sistema de autenticación y gestión de usuarios en Java. En este proyecto se ultiliza Springboot como framework, PostgreSQL como la base de datos, JWT para manejo de tokens, password4j para encryptacion. 


<h1>Desarrollo del Programa</h1>
<h2>El sistema se divide en dos componentes principales y este repositorio es del backend</h2>

El backend del sistema está desarrollado en unicamente en Java con Spring Boot.

Controladores: Los controladores son responsables de manejar las solicitudes HTTP y definir las rutas de la API. En el controlador se implementan los métodos para obtener información de usuarios, eliminar usuarios, realizar inicio de sesión, registro de usuarios y cambiar contraseñas.

DAO (Data Access Object): El DAO es responsable de acceder a los datos almacenados en la base de datos. 

Utilidades: La clase JWTUtil proporciona métodos para la generación y validación de tokens JWT. Estos métodos son utilizados para crear y verificar tokens en el proceso de autenticación y autorización.

Utilidad de cifrado de contraseñas: 
