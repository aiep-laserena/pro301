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

- [Documentación de PHP](https://www.php.net/manual/es/index.php)
- [Documentación MDN](https://developer.mozilla.org/es/docs/Web/HTML)
- [DevDocs](https://devdocs.io/) (documentación de todo) 📚💥
- [Startup.com](https://www.youtube.com/watch?v=h2g_yGaffYU) (documental burbuja.com) 😉
- [Slide Intro aplicaciones Internet](https://docs.google.com/presentation/d/1icwqKQx1tzyJ_ic5NczF4x8_2p4F3HcWsMydb0h9gEA/edit?usp=sharing) (Presentación que ~~vimos~~ veremos en clases)
- [Tabler Icons](https://tablericons.com/) (Iconos para el sitio)
- [Hero Icons](https://heroicons.com/) (Iconos para el sitio)

A medida que el taller avance, iremos agregando más recursos. Por ahora, estos son los más importantes.

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

### ¿Que fue primero el huevo o la gallina?

¡La gallina! 😂

![](https://media.giphy.com/media/umYMU8G2ixG5mJBDo5/giphy.gif)

## License

[MIT](https://choosealicense.com/licenses/mit/)
📼
