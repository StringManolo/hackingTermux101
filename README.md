# Termux Hacking 101
![Portada Libro](https://github.com/StringManolo/hackingTermux101/raw/master/imagenes/portada.png)

-----

### Tabla de Contenidos

* [Prefacio](https://github.com/StringManolo/hackingTermux101#prefacio)
* [Capítulo 0: Requisitos y Programas Extra](https://github.com/StringManolo/hackingTermux101#cap%C3%ADtulo-0-requisitos-y-programas-extra)
* [Capítulo 1: Qué es Termux?](https://github.com/StringManolo/hackingTermux101#cap%C3%ADtulo-1-qu%C3%A9-es-termux)
* [Capitulo 2: Descarga e Instalación](https://github.com/StringManolo/hackingTermux101#capitulo-2-descarga-e-instalaci%C3%B3n)
* Capítulo 3: Configuración Básica
* Capítulo 4: Uso básico de la terminal
* Capítulo 5: Introducción a Bash
* Capítulo 6: Uso de VI y de VIM
* Capitulo 7: Configuración de Bash
* Capítulo 8: Sistema de Ficheros
* Capítulo 9: Creando comandos
* Capítulo 10: Comandos Intermedios
* Capítulo 11: Proot-Distro
* Capitulo 12: Introducción a Sistemas Linux
* Capitulo 13: Uso básico de Debian
* Capítulo 14: Uso básico de Ubuntu
* Capítulo 15: Uso básico de Alpine
* Capítulo 16: Uso básico de Fedora
* Capítulo 17: Introducción a Servicios
* Capítulo 18: Creando un Servidor
* Capítulo 19: Ngrok y Exponer Servicios
* Capítulo 20: Tor, Configuración y Uso
* Capítulo 21: Servicios Ocultos
* Capítulo 22: SSH, SHCP y SSHD
* Capítulo 23: Bots de Telegram
* Capítulo 24: Telegram RAT
* Capítulo 25: Protocolo HTTP
* Capítulo 26: Protocolo DNS
* Capítulo 27: Servicios Web
* Capítulo 28: Hosting Gratuitos
* Capítulo 29: Dominios Gratuitos
* Capítulo 30: Introducción a Programación
* Capítulo 31: Comparación de Lenguajes
* Capitulo 32: Introducción a C
* Capìtulo 33: Introducción a C++
* Capítulo 34: Introducción a C#
* Capítulo 35: Introducción a Go
* Capítulo 36: Introducción a Java
* Capítulo 37: Introducción a Javascript
* Capítulo 38: Introducción a Lua
* Capítulo 39: Introducción a PHP
* Capítulo 40: Introducción a Python
* Capítulo 41: Introducción a Rust
* Capítulo 42: Introducción a Node
* Capítulo 43: Introducción a Typescript
* Capítulo 44: Introducción a la Criptografìa
* Capítulo 45: Introducción al Malware
* Capítulo 46: Desarrollo de RATs
* Capítulo 47: Desarrollo de Ransomwares
* Capítulo 48: Desarrollo de Greyware
* Capítulo 49: Introducción a Hacking  
* Capítulo 50: Introducción a OSINT
* Capitulo 51: Google Hacking (dorks)
* Capitulo 52: Introducción a Hacking Web
* Capítulo 53: Introducción a Ingeniería Social
* Capítulo 54: Laboratorios y Páginas de Hacking legal.
* Capìtulo 55: HTMLi (inyección de HTML)
* Capítulo 56: XSS (Inyección de Javascript)
* Capítulo 57: CSFR (Peticiones entre sitios)
* Capítulo 58: Clickjacking (secuestro de clicks)
* Capítulo 59: HPP (Polución de parámetros HTTP)
* Capítulo 60: Open Redirects (redirecciones abiertas)
* Capitulo 61: SSRF (falsificación de peticiones en el lado del servidor)
* Capítulo 62: Path Traversal (recorrer rutas)
* Capítulo 63: Referrer Leaks (Filtraciones del referido)
* Capítulo 64: Dangling HTML (HTML pendiente)
* Capítulo 65: Subdomain/Domain Takeover (secuestro de sub/dominios)
* Capítulo 66: Template Injection (Inyección de plantillas)
* Capítulo 67: IDOR (Referencia a objecto indirecta)
* Capítulo 68: SQLi (Inyección del lenguaje de consultas estructurado)
* Capítulo 69: Cookie Tossing (lanzamiento de cookies)
* Capítulo 70: Web Cache Poisoning (envenenamiento de la caché web)
* Capítulo 71: Malas prácticas
* Capítulo 72: Post Explotación
* Capítulo 73: Herramientas de Hacking
* Capítulo 74: Dig
* Capítulo 75: Dirstalk
* Capítulo 76: Impulse
* Capítulo 77: ncat
* Capítulo 78: nmap
* Capítulo 79: nuclei
* Capítulo 80: searchsploit
* Capítulo 81: shodan
* Capítulo 82: sqlmap
* Capítulo 83: turbolist3r
* Capítulo 84: C++ intermedio
* Capítulo 85: Go intermedio
* Capítulo 86: Javascript intermedio
* Capítulo 87: PHP intermedio
* Capítulo 88: Python intermedio
* Capítulo 89: Node intermedio
* Capítulo 90: Quickjs intermedio
* Capítulo 91: Typescript intermedio
* Capítulo 92: Criptografía intermedio
* Capítulo 93: Malware intermedio
* Capítulo 94: Ingeniería Social intermedio
* Capítulo 95: Creando laboratorios y aplicaciones vulnerables
* Capítulo 96: Desarrollando aplicaciones de hacking
* Capítulo 97: Retos nivel basico
* Capítulo 98: Retos nivel intermedio
* Capítulo 99: Retos nivel avanzado
* Capítulo 100: Retos nivel 3l1t3
  
* Glosario
* Appendix

-----

## Prefacio

Bienvenido a la primera edición del libro Termux Hacking 101. Aquí vas a aprender a instalar Termux en Android, su uso básico, virus, programación y hacking.  

Termux es un emulador de terminal para Android y un entorno de Linix que funciona directamente sin necesidad de rootear el dispositivo o comfigurarlo. Un sistema base mínimo se instala automáticamente - Y muchos paquetes adicionales están disponibles desde su gestor de paquetes.

[Tabla de Contenidos](https://github.com/StringManolo/hackingTermux101#tabla-de-contenidos)  

-----

## Capítulo 0: Requisitos y Programas Extra

Para poder utilizar Termux, necesitas un dispositivo Android. Termux soporta versiones de **android** comprendidas **entre** la **versión 7 y** la **última version** de Android.  

Necesitas un **mínimo** de **300 megas de espacio** en disco. Yo te **recomiendo** como **mínimo 8 gigas disponibles de memoria interna**. 64 Gigas está genial y suele ser mas que suficiente, depende del uso que le des.  
  
Antes de empezar, algunos programas extra son recomendados, aunque no necesarios.
* [Hackers Keyboard](https://github.com/klausw/hackerskeyboard/releases/download/1.40.7/hackerskeyboard-v1.40.7.apk)  
Este sencillo teclado offline funciona de marabilla en la mayoría de dispositivos. No vende tus datos, ya que no se conecta nunca a internet y te ofrece un teclado como el del PC, aunque no es necesario. Yo no utilizo esta característica en concreto, pero si este es el único teclado que utilizo en Android por seguridad.  
  
Los que vienen preinstalados suelen vender tus datos aunque los configures para que no lo hagan.

[Tabla de Contenidos](https://github.com/StringManolo/hackingTermux101#tabla-de-contenidos)  

-----

## Capítulo 1: Qué es Termux?

Termux es una aplicación para Android de código abierto que trae todo el poder Linux a tu dispositivo móvil. Puedes realizar prácticamente cualquier tarea que realices en tu PC con un Linux instalado. Todo se realiza directamente desde la terminal escribiendo comandos, aunque también es posible [instalar](https://wiki.termux.com/wiki/Graphical_Environment) un entorno gráfico como X11.  
  
Termux instala por defecto un sistema base con comandos y paquetes comunes que suelen ser imprescindibles en cualquier distribución de Linux. Los paquetes se compilan de forma cruzada con Android NDK y en la mayoría de casos solo necesitan añadirle pequeños parches para que sean totalmente compatibles con Android. Hay miles de paquetes disponibles y cada día la comunidad añade nuevos paquetes.   
  
Es seguro, ya que todo es código abierto y miles de profesionales revisan el código y los nuevos cambios a diario.  

Tiene un montón de características extra, como poder ver los SMS, los archivos del dispotivo, etc. Esto te premite auomatizar un montón de tareas, hacer interfaces con distintas tecnologías y todo lo que se te ocurra.  
  
Totalmente customizable. Puedes modificar la apariencia, añadir atajos de teclado, nuevas funcionalidades...  

Soporta teclado y ratón externos. Puedes conectar Termux a una pantalla externa y utilizar un teclado y un ratón.  
  
[Tabla de Contenidos](https://github.com/StringManolo/hackingTermux101#tabla-de-contenidos)

-----

## Capitulo 2: Descarga e Instalación

Puedes instalar Termux descargando la última [release](https://github.com/termux/termux-app/releases) directamente desde el repositorio del proyecto en github. O desde la tienda de [F-Droid](https://f-droid.org/en/packages/com.termux/). La descarga también está disponible en Play Store pero descargar la app de la Play Store NO SE RECOMIENDA. El motivo esta relacionado con políticas de Google con respecto a dar soporte a nuevas versiones de Android. Si se cumpliese con dichas políticas, habría que dejar de dar soporte a versiones anteriores. [Aquí mas detalles](https://github.com/termux/termux-app#google-play-store-deprecated). Si no conoces la arquitectura de tu dispositivo, puedes pinchar [aquí](https://stringmanolo.ml/hackingTermux101/paginas/mostrarArch.html).  


[Tabla de Contenidos](https://github.com/StringManolo/hackingTermux101#tabla-de-contenidos)

-----


