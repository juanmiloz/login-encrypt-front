<h1>Informe del Proyecto: Sistema de Autenticación y Gestión de Usuarios</h1>
Este informe documenta el desarrollo de el back-end de un sistema de autenticación y gestión de usuarios en Java. En este proyecto se ultiliza Springboot como framework, PostgreSQL como la base de datos, JWT para manejo de tokens, password4j para encryptacion. 


<h1>Desarrollo del Programa</h1>
El sistema se divide en dos componentes principales y este repositorio es del backend

El backend del sistema está desarrollado en unicamente en Java con Spring Boot.

Controladores: Los controladores son responsables de manejar las solicitudes HTTP y definir las rutas de la API. En el controlador se implementan los métodos para obtener información de usuarios, eliminar usuarios, realizar inicio de sesión, registro de usuarios y cambiar contraseñas.

DAO (Data Access Object): El DAO es responsable de acceder a los datos almacenados en la base de datos. 

Utilidades: La clase JWTUtil proporciona métodos para la generación y validación de tokens JWT. Estos métodos son utilizados para crear y verificar tokens en el proceso de autenticación y autorización.

Utilidad de cifrado de contraseñas: 














This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
