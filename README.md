<h1>Informe del Proyecto: Sistema de Autenticación y Gestión de Usuarios</h1>
Este informe documenta el desarrollo de el back-end de un sistema de autenticación y gestión de usuarios en Java. En este proyecto se ultiliza Springboot como framework, PostgreSQL como la base de datos, JWT para manejo de tokens, password4j para encryptacion. 


<h1>Desarrollo del Programa</h1>

<h2>Frontend</h2>

* El frontend del sistema está desarrollado en Typescript con Next.js y Axios se utilizo para hacer solicitudes HTTP

* La Clase axios.ts es un servicio de ussuario que maneja el almacenamiento del token JWT en el LocalStorage del navegador y lo agrega a los encabezados de las solicitudes.

* Se tienen dos pantallas asignadas a su propio tipo de rol, es decir, una para administradores y otra para usuarios, con sus respectivos permisos

<h1>Dificultades</h1>
<h5>Back:</h5>

* La implementacion de la seguridad, porque es un reto nuevo para nuestro equipo.

* Se dificulto a la hora de configurar la contraseña vacia para los usuarios desde el rol de administrador

* Implementacion de JWT como standard porque consigo trae grandes desafios, principalmente por la poca experiencia con el, fue necesario aprender de la generacion y validacion de tokens, porque es de vital importancia el correcto funcionamiento para asi tener un servicio seguro y consistente

<h5>Front:</h5>

* Las peticiones por medio de Axios fue un reto importante, porque era una oportunidad de aprendizaje y por eso mismo un reto, es algo nuevo para este equipo   

<h1>Conclusiones</h1>
La creación de este sistema de autenticación y administración de usuarios representó un desafío valioso que proporcionó conocimientos sobre la implementación de tokens JWT, la creación de una API RESTful y la integración entre el backend y el frontend. A lo largo del proyecto, se logró desarrollar un sistema operativo que permite a los usuarios autenticarse, acceder a información de usuarios, eliminar cuentas, cambiar contraseñas, registrarse y cerrar sesión de manera segura.

El uso de Spring Boot en el backend simplificó el desarrollo de la API y ofreció características y herramientas útiles. Por otro lado, la elección de TypeScript en el frontend permitió contar con un código más organizado.

En resumen, el proyecto proporcionó la oportunidad de adquirir habilidades en el diseño de sistemas de autenticación y gestión de usuarios, así como en la integración de componentes backend y frontend. Además, se profundizó en el uso de tokens JWT para garantizar la seguridad en la autenticación y autorización de usuarios.
