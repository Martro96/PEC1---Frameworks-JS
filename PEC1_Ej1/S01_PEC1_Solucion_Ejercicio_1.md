# Ejercicio 1 - Preguntas teóricas

## Pregunta 1: 

###### La aparición de HTML5/CSS3/JS ha supuesto el nacimiento del desarrollo front-end moderno. (0.75 puntos)

- **¿Cuál es la ventaja del uso de etiquetas semánticas? Nombra y explica al menos 3 de estas ventajas.**
  - <u>Mejora el SEO</u>: Las etiquetas semánticas ayudan a los motores de búsqueda a entender mejor qué hay en nuestra página. Por ejemplo, al usar "article" para marcar un artículo, Google y otros buscadores pueden detectarlo y mostrar la página en los resultados de búsqueda de forma más efectiva
  - <u>Estructura clara del contenido</u>: Con las etiquetas semánticas, el contenido está mucho más organizado. En lugar de tener todas las secciones en  divs, usar etiquetas como header para la parte superior de una sección y footer para la parte inferior te permite ver rápidamente qué es qué. 
  - <u>Facilita el trabajo en equipo</u>:  Usar etiquetas semánticas hace que el código sea más fácil de entender y facilite el trabajo cuando se incorpora una nueva persona al proyecto, ya que puede ver rápidamente qué hace cada parte del código. 
  Esto no solo ayuda a que todos estén en la misma página, sino que también hace que sea más fácil hacer cambios más adelante.

-  **Cita al menos 3 APIs HTML5 y explica brevemente su funcionalidad.**
   
Una API (Interfaz de Programación de Aplicaciones) de HTML5 es un conjunto de herramientas y protocolos que permiten a los desarrolladores interactuar con las funcionalidades del navegador y el hardware del dispositivo a través de JavaScript. Estas APIs permiten crear aplicaciones web más dinámicas e interactivas. 
    Aquí tres ejemplos: 
    - <u> Canvas API </u>: Permite dibujar gráficos y manipular imágenes dinámicamente en una superficie de dibujo en el navegador. Por ejemplo se utiliza para crear gráficos, animaciones, y juegos.
    - <u> Geolocation API</u>: Proporciona acceso a la ubicación geográfica del usuario, permitiendo que las aplicaciones web ofrezcan servicios basados en la ubicación, como mapas y recomendaciones de lugares cercanos. Un ejemplo de esta sería una app de citas, que te mostraría los perfiles de las personas que estén dentro del radio seleccionado. 
    - <u> Drag and Drop API</u>: Permite a los usuarios arrastrar elementos dentro de la página web y soltarlos en otros lugares, facilitando la creación de interfaces interactivas. Por ejemplo, como cuando arrastras un archivo desde el ordenador y lo adjuntas en un sitio web.


- **Cita qué opción ofrece CSS3 para conseguir que se apliquen diferentes estilos CSS sobre el mismo elemento en su visualización en diferentes dispositivos (diferentes tamaños de pantalla).**

Para abordar los diferentes tamaños de pantalla, podemos utilizar las media queries, que son herramientas clave para crear diseños responsivos. Estas permiten aplicar estilos CSS específicos en función de las características del dispositivo, como el ancho de la pantalla, garantizando que el contenido se adapte de manera correcta a cada dispositivo.

-  **Cita al menos 4 de las características principales de TypeScript (importante superset de JavaScript que trataremos en el siguiente capítulo).**

1. <u>Tipado estático</u>: Es un código más confiable ya que los desarrolladores pueden especificar tipos para variables y funciones, facilitando la identificación temprana de errores.

2. <u>Legibilidad mejorada</u>: La declaración explícita de tipos aumenta la legibilidad del código, lo que ayuda a los desarrolladores a entender qué datos se esperan y favorece la colaboración y el mantenimiento.

3. <u>Mantenimiento simplificado</u>: El tipado estático y la mejor legibilidad hacen que el mantenimiento de proyectos sea más sencillo, permitiendo cambios seguros y reduciendo errores en producción.

1. <u>Compatibilidad con estándares JavaScript</u>: TypeScript es compatible con ECMAScript 6 (ES6) y versiones posteriores, permitiendo a los desarrolladores usar las últimas funcionalidades de JavaScript sin problemas de compatibilidad.

## Pregunta 2

###### El lenguaje CSS es muy rígido, poco práctico y ordenado a la hora de programar. Para evitar este problema se han creado los preprocesadores CSS, que ofrecen evidentes ventajas (0.5 puntos)

- **Cita al menos 2 de estos preprocesadores.**
  - <u>Sass</u>: permite el uso de variables, anidamiento y funciones.
  - <u>LESS</u>: también permite variables y anidamiento, además de mixins y funciones.
  
- **Cita al menos 4 ventajas que ofrecen estos preprocesadores.**
1. <u>Variables</u>: Permiten definir valores reutilizables (como colores y tamaños), lo que simplifica cambios en el diseño.
2. <u>Anidamiento</u>: Facilitan la escritura de reglas CSS más organizadas al permitir anidar selectores dentro de otros, reflejando la estructura HTML.
3. <u>Mixins</u>: Permiten crear bloques de código CSS reutilizables, lo que evita la duplicación y mejora la mantenibilidad del código.
4. <u>Funciones y Operaciones</u>: Ofrecen la posibilidad de usar funciones y realizar operaciones matemáticas en los valores, lo que proporciona flexibilidad en el diseño. 
- **Explica brevemente en qué consisten los sourcemaps.**
  
Los **sourcemaps** son archivos que vinculan el código CSS generado a su origen en el código fuente (como Sass o LESS). Esto permite a los desarrolladores depurar más fácilmente, ya que pueden ver y editar el código en su forma original en las herramientas de desarrollo del navegador, en lugar de trabajar con el CSS compilado.

- **Explica qué es un transpilador.**

Un **transpilador** es una herramienta que convierte código fuente escrito en un lenguaje (o una versión de un lenguaje) a otro lenguaje (o a una versión más baja del mismo lenguaje). En el contexto de CSS y preprocesadores, un transpilador convierte el código CSS preprocesado (como Sass o LESS) en CSS estándar que puede ser entendido por los navegadores.

## Pregunta 3 

###### El flujo de trabajo profesional en front-end hace indispensable el uso de herramientas como controles de versiones y herramientas de gestión de módulos (0.75 puntos).

- **Cita al menos dos sistemas de control de versiones y dos herramientas de gestión de módulos.**
  - Sistemas de control de versiones
    - <u>Git</u>: Un sistema de control de versiones distribuido que permite a los desarrolladores rastrear cambios en el código, colaborar en proyectos y manejar múltiples versiones del mismo proyecto.
    - <u>Subversion (SVN)</u>: Un sistema de control de versiones centralizado que permite a los usuarios rastrear cambios en archivos y directorios a lo largo del tiempo, permitiendo revertir a versiones anteriores.
  - Herramientas de gestión de módulos:
    - <u>npm</u>: Una herramienta que permite a los desarrolladores gestionar dependencias y paquetes de JavaScript, facilitando la instalación, actualización y eliminación de módulos.
    - <u>Yarn</u>: Un gestor de paquetes que mejora la velocidad y la seguridad en comparación con npm. Utiliza un archivo de bloqueo para garantizar la instalación consistente de dependencias en diferentes entornos.

- **Cita y explica al menos 3 comandos de Git.**

    - <u>git clone</u>: se utiliza para crear una copia local de un repositorio remoto.
    - <u>git add</u>: con este comando podemos agregar cambios en archivos al área de preparación (staging area) para ser incluidos en el próximo commit. Por ejemplo, git add archivo.txt añade archivo.txt al área de preparación.
    - <u>git commit</u>: Este guarda los cambios añadidos en el área de preparación con un mensaje descriptivo. Por ejemplo, git commit -m "Mensaje de commit que queramos añadir" guarda los cambios con el mensaje proporcionado, ayudando a rastrear la historia de los cambios.

- **Cita y explica brevemente las características más definitorias de WebPack.**
Webpack se define como un empaquetador de módulos (bundler) que sirve para empaquetar y exportar todos los ficheros necesarios para que un proyecto funcione con todas sus dependencias frontend.
    - <u>Módulos y Bundling</u>: Webpack trata cada archivo (JavaScript, CSS, imágenes, etc.) como un módulo y agrupa todos ellos en uno o varios archivos optimizados (bundles) para la producción. 
    - <u>Carga de recursos y extensibilidad</u>: Permite importar y procesar diferentes tipos de archivos mediante loaders y es altamente configurable. Se puede adaptar a las necesidades específicas del proyecto mediante plugins y configuraciones personalizadas.
    - <u>Desarrollo más productivo</u>: Proporciona un entorno de desarrollo eficiente con herramientas como Hot Module Replacement (HMR), que permite ver cambios en tiempo real sin recargar la página, mejorando la experiencia del desarrollador.
    - <u>Uso en frameworks modernos</u>: Es ampliamente utilizado en el desarrollo de aplicaciones con frameworks y librerías actuales como React, Angular y Vue, facilitando la gestión de archivos estáticos de manera coherente.
    - <u>Preparación para producción</u>: Webpack optimiza y modifica el código para garantizar un rendimiento óptimo en el despliegue en producción, permitiendo el uso de importaciones y exportaciones de JavaScript moderno (ES6) de manera simple.