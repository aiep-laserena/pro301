# Taller de aplicaciones para Internet

En este repositorio reuniremos todos los recursos necesarios para el desarrollo del taller.

## Instalaciones 📦

Necesitamos instalar las siguientes herramientas:

- [Git](https://git-scm.com/downloads)
- [PHP](https://windows.php.net/download#php-8.2) (8.2.4 Thread Safe x64)
- [Microsoft Visual C++](https://learn.microsoft.com/es-es/cpp/windows/latest-supported-vc-redist?view=msvc-170) (Necesario para MYSQL)
- [Apache](https://www.apachelounge.com/download/) (2.4.56 Win64)
- [MySQL](https://dev.mysql.com/downloads/mysql/) (8.0.32)
- [NodeJS](https://nodejs.org/es/download/) (18.15.0 LTS, para chocolatey 🍫)

> 📣 disclaimer: Los instaladores de estas herramientas están pensadas para un ambiente Windows.

## Herramientas 🛠️

Además de las instalaciones **core**, también necesitaremos:

- [Visual Studio Code](https://code.visualstudio.com/download) (Para escribir código)
- [Tableplus](https://tableplus.com/download) (**OP1**: Gestión DB)
- [DBeaver](https://dbeaver.io/download/) (**OP2**: Gestión DB)
- [Workbench](https://dev.mysql.com/downloads/workbench/) (**OP3**: Gestión DB, _viene incluido en la instalación MySQL_)
- [Responsively](https://responsively.app/) (Para probar el sitio en diferentes dispositivos)
- [RunJS](https://runjs.app/) (Para probar código JavaScript)

> 👀 Nota: La selección de herramientas es sólo una sugerencia. Pueden utilizar la que más les acomode.

---

## Configuraciones 🔧

Para una mejor experiencia, es recomendable realizar las siguientes configuraciones:

### Establecer apache como servicio:

```powershell
# Abrir una terminal en PowerShell como administrador
PS C:\apache\bin> .\httpd.exe -k install
```

### Agregar lo siguiente al archivo `httpd.conf` de apache `(c:\apache\conf\httpd.conf)`:

```apache
# Agregar al final del archivo
LoadModule php_module "C:/php/php8apache2_4.dll"
AddHandler application/x-httpd-php .php
PHPIniDir "C:/php"
```

### En `C:\php` **copiar** el archivo `php.ini-production` pegarlo en la misma ubicación y renombrar la copia a `php.ini`

![demo](./assets/action.gif)

### Realizar modificaciones al archivo `php.ini` de php `(c:\php\php.ini)`:

```ini
# Cambiar los valores de las siguientes configuraciones:
post_max_size = 50M
upload_max_filesize = 50M

# Habilitar las siguientes extensiones:
extension=fileinfo
extension=gd
extension=mysqli
```

> 📣 Siempre que se realicen cambios en la configuración, es necesario reiniciar el servicio de apache.

## Recursos 📖

### Documentación

- [Documentación de PHP](https://www.php.net/manual/es/index.php)
- [Documentación MDN](https://developer.mozilla.org/es/docs/Web/HTML)
- [DevDocs](https://devdocs.io/) (documentación de todo) 📚💥
- [Can I Use](https://caniuse.com/) (Compatibilidad de CSS)
- [Configurando Git por primera vez](https://git-scm.com/book/es/v2/Inicio---Sobre-el-Control-de-Versiones-Configurando-Git-por-primera-vez)

### Filmografía & Slides

- [Startup.com](https://www.youtube.com/watch?v=h2g_yGaffYU) (documental burbuja.com) 😉
- [Slide Intro aplicaciones Internet](https://docs.google.com/presentation/d/1icwqKQx1tzyJ_ic5NczF4x8_2p4F3HcWsMydb0h9gEA/edit?usp=sharing) (Presentación que ~~vimos~~ veremos en clases)

### Iconos sombreado y fondos

- [Tabler Icons](https://tablericons.com/) (Iconos para el sitio)
- [Hero Icons](https://heroicons.com/) (Iconos para el sitio)
- [CSS Matic](https://www.cssmatic.com/) (Generador de gradientes)
- [Font Awesome](https://fontawesome.com/) (Iconos para el sitio)
- [Hero patterns](https://www.heropatterns.com/) (Patrones para el sitio)

### Juegos y aprendizaje

- [Flexbox Froggy](https://flexboxfroggy.com/) (Juego para aprender flexbox)
- [CSS Grid Garden](https://cssgridgarden.com/) (Juego para aprender CSS Grid)
- [FreeCodeCamp](https://www.freecodecamp.org/espanol/) (Aprender a programar)

### Oportunidades

- [Certificaciones Free 🔥](https://www.microsoft.com/es-es/cloudskillschallenge/build/registration/2022?wt.mc_id=build22_csc_webpage_esc) (Inscribirse antes del 23 de mayo 👀)
- [Beca InfoJobs inglés AU](https://www.infojobs.net/madrid/beca-infojobs-tech-3-meses-australia-aprendiendo-ingles-con-trabajo-todos-los-gastos-pagados/of-icc8923015d4b038a82708f346b1d76?stc=aff-colaboraciones-beca23-na-afiliacion_midudev) (3 meses visa de estudiante, gastos pagos 👌)

A medida que el taller avance, iremos agregando más recursos. Por ahora, estos son los más importantes.

## Assessments 📝

Estos son los enlaces a los entregables de **github classroom**:

1. [Página de tributo](https://classroom.github.com/a/6yzVJkgn)
2. [Ejercicios Javascript](https://classroom.github.com/a/qm6FrXHU)

## FAQ 🤔

### ¿Porqué no usamos programas como XAMP?

Si bien XAMPP es una herramienta robusta y muy útil no será lo que se encontrarán en un ambiente real de trabajo. Al ser un Sandbox, no nos permite tener un control total sobre nuestro entorno de desarrollo. Además los problemas con los que podemos encontrarnos _(como conflictos de puertos)_ son difíciles de resolver. Por eso, es importante que aprendan a configurar el stack de desarrollo desde cero, lo más similar posible a un ambiente de producción.

### ¿La configuraciones son válidas sólo para Windows?

¡Correcto!, es el sistema que utilizan ustedes en su mayoría. Si bien es posible realizar las mismas configuraciones en Linux o Mac, no es el objetivo de este taller. Si quieren aprender a configurar el stack de desarrollo en Linux o Mac, pueden hacerlo por su cuenta. 😎

### ¿Qué es un Sandbox?

Un Sandbox es un entorno de desarrollo aislado, que nos permite probar y ejecutar código sin afectar el resto del sistema. En este caso, XAMPP es un Sandbox que nos permite probar código PHP. Sin embargo es caja negra, por lo tanto su funcionamiento es difícil de entender y modificar.

### ¿Qué es un Stack de desarrollo?

Un stack de desarrollo es un conjunto de herramientas que nos permiten desarrollar software. En este caso, el stack de desarrollo que utilizaremos es XAMP _(👀 no confundir stack con sandbox)_. Éste acrónimo significa:

- **X**: Windows
- **A**: Apache
- **M**: MySQL
- **P**: PHP

### ¿Cómo subo mi entregable a github classroom?

Para poder subir tu archivo primero debes tener _éste repositorio_ **clonado y actualizado** en tu máquina local y tu **identidad de git** configurada.

### ¿No sabes clonar el repositorio en tu equipo?

No hay problema, sigue estos pasos **(👀 DEBES TENER INSTALADO GIT)**:

1. Abre tu _terminal_ _powershell_ o _git bash_ en tu equipo
2. Ejecuta los siguientes comandos:

```bash
git clone https://github.com/aiep-laserena/pro301
cd pro301/  # Para entrar a la carpeta del repositorio
```

### Tienes el repositorio pero no lo haz actualizado o ¿no sabes como?

Más sencillo aún, hagamos lo siguiente:

1. Abre tu _terminal_ _powershell_ o _git bash_
2. Ejecuta los siguientes comandos:

```bash
cd pro301/  # Para entrar a la carpeta del repositorio
git pull origin main  # Para bajar los últimos cambios del repositorio.
```

🚨 es muy importante que antes de bajar los cambios del repositorio tengas tu copia local sin modificaciones.

### ¿No sabes si tienes tu identidad ya configurada en git o quieres hacerlo?

Primero, corroboremos si tienes tu identidad configurada:

1. Abre tu _terminal_ _powershell_ o _git bash_
2. Ejecuta el siguiente comando:

```bash
git config --list  # solo esta linea se escribe lo demás es código de salida de ejemplo
user.name=John Doe
user.email=johndoe@example.com
color.status=auto
color.branch=auto
color.interactive=auto
color.diff=auto
...
```

Si tienes una salida _parecida_ a la que está más arriba tu identidad esta correctamente configurada. Las variables `user.name` y `user.email` le indican a git tu nombre y correo electrónico.

Si al ejecutar el comando anterior no tienes una salida parecida a esa o te da algún mensaje diferente, debemos configurar tu identidad:

1. Abre tu _terminal_ _powershell_ o _git bash_
2. Ejecuta los siguientes comandos:

```bash
git config --global user.name "John Doe"  # reemplaza John Doe por tu nombre y apellido
git config --global user.email johndoe@example.com  # reemplaza la dirección de correo electrónico por la tuya
```

🕯️Si necesitas más detalles, se agrego en la sección de **recursos** un enlace a la documentación de git 🙂

### ¿Que fue primero el huevo o la gallina?

¡La gallina! 😂

![](https://media.giphy.com/media/umYMU8G2ixG5mJBDo5/giphy.gif)

## License

[MIT](https://choosealicense.com/licenses/mit/)
📼
