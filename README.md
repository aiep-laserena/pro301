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
- [Tableplus](https://tableplus.com/download) (Para la base de datos)
- [DBeaver](https://dbeaver.io/download/) (Para la base de datos)
- [Workbench](https://dev.mysql.com/downloads/workbench/) (Para la base de datos, _viene incluido en la instalación MySQL_)
- [Resposibility](https://responsively.app/) (Para probar el sitio en diferentes dispositivos)

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

### Agregar lo siguiente al archivo `php.ini` de php `(c:\php\php.ini)`:

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

A medida que el taller avance, iremos agregando más recursos. Por ahora, estos son los más importantes.

![](https://media.giphy.com/media/umYMU8G2ixG5mJBDo5/giphy.gif)

## License

[MIT](https://choosealicense.com/licenses/mit/)
📼
