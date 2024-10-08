# React Tailwind Template

Este proyecto es una plantilla para el desarrollo de aplicaciones React utilizando TailwindCSS. Incluye configuración para utilizar Tailwind Variants, Font Awesome, React Router y otras herramientas para facilitar el desarrollo y mantener un código limpio y consistente.

## Tecnologías Utilizadas

### TailwindCSS
TailwindCSS es un framework de CSS utilitario que permite crear interfaces de usuario rápidas y personalizables. Para más información, visita la [documentación oficial de TailwindCSS](https://tailwindcss.com/).

### Tailwind Variants
Tailwind Variants es una extensión que permite gestionar variantes de estilos de manera más sencilla. Consulta la [documentación oficial de Tailwind Variants](https://www.tailwind-variants.org/docs/introduction) para más detalles.

### Font Awesome
Font Awesome ofrece una amplia variedad de iconos que se pueden integrar fácilmente en proyectos React. Revisa la [documentación de Font Awesome para React](https://docs.fontawesome.com/web/use-with/react/add-icons/) para más información.

### React Router
React Router es una librería de enrutamiento para React que permite crear aplicaciones de una sola página con navegación dinámica. Más información en la [documentación de React Router](https://reactrouter.com/en/main/start/overview).

## Instalación

Para iniciar con este proyecto, sigue estos pasos:

1. Clona el repositorio:
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd <NOMBRE_DEL_PROYECTO>
    ```

2. Instala las dependencias:
    ```bash
    npm install
    ```

## Scripts del Package.json

Estos son los scripts disponibles en el archivo `package.json`:

- `dev`: Inicia el servidor de desarrollo usando Vite.
    ```bash
    npm run dev
    ```
- `build`: Compila el proyecto y construye los archivos para producción.
    ```bash
    npm run build
    ```
- `lint`: Ejecuta ESLint para analizar el código y detectar problemas.
    ```bash
    npm run lint
    ```
- `format`: Formatea el código utilizando Prettier.
    ```bash
    npm run format
    ```
- `preview`: Previsualiza la construcción de producción.
    ```bash
    npm run preview
    ```

## Configuración de IntelliSense en VS Code

Para configurar IntelliSense de TailwindCSS en VS Code, sigue estos pasos:

1. Instala la extensión **TailwindCSS IntelliSense** desde el marketplace de VS Code.
2. Añade la siguiente configuración a tu archivo `settings.json`:
    ```json
    {
      "tailwindCSS.experimental.classRegex": [
        ["([\"'`][^\"'`]*.*?[\"'`])", "[\"'`]([^\"'`]*).*?[\"'`]"]
      ]
    }
    ```

El archivo `extensions.json` ya incluye la recomendación para instalar esta extensión automáticamente.

## Configuración de Variables y Secrets en GitHub

Para habilitar el despliegue continuo en las ramas `main` y `develop` en cada push, configura las siguientes variables y secrets en GitHub:

### Variables

- `URL`: URL de la página principal.
- `DEV_URL`: URL de la página de desarrollo.

### Secrets

- `FTP_SERVER`: URL del servidor FTP.
- `FTP_USERNAME`: Usuario FTP para la página principal.
- `FTP_DEV_USERNAME`: Usuario FTP para la página de desarrollo.
- `FTP_PASSWORD`: Contraseña del usuario FTP principal.
- `FTP_DEV_PASSWORD`: Contraseña del usuario FTP de desarrollo.

## Contribuyendo

Para contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza los cambios y haz commits (`git commit -m 'Añadir nueva funcionalidad'`).
4. Realiza push de la rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la licencia MIT. Para más detalles, revisa el archivo LICENSE.

---

¡Gracias por utilizar esta plantilla! Si tienes alguna pregunta o sugerencia, no dudes en abrir un issue o enviar un pull request.
