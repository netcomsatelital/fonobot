---
title: "Uso del CRM de Fonobot"
layout: legales
---

Resumen
=======

El CRM es un sistema on-line que permite hacer el seguimiento del trabajo que se hace para concretar ventas.  Para ello el vendedor debe cargar los datos de los clientes, así como también de las tareas que va realizando (por ejemplo, "hoy se llamó al cliente X para presentarle y ofrecer el producto", "hoy se visitó al cliente Y para discutir una propuesta", "se cerró la venta Z por X monto", etc.)


Elementos del sistema
=====================

El sistema permite manejar varios elementos, los cuales pueden ser creados, cambiados o eliminados.  Idealmente se deberían completar todos los datos posibles de cada entidad, pero se puede manejar una venta con sólo algunos datos de cada elemento.

* **Oportunidad:** se dice que hay una "oportunidad de venta" cuando hay un interés firme en el producto.  Cuando se crea una oportunidad en el sistema, ésta debe asociarse a una cuenta.

* **Cuenta:** es quien realiza la compra.  Normalmente representa una empresa o persona física.

* **Contacto:** para las empresas, es la persona con la que se realiza la tratativa.  Una cuenta puede tener varios contactos.

* **Referencia:** son datos sueltos, personas o empresas con los que no se ha tomado contacto aún, y por lo tanto no se sabe si tienen interés o no en el producto.  Si al tomar contacto con una referencia ésta decide comprar, se debe crear una cuenta cuenta **y** una oportunidad asociada a esa misma cuenta.


Ciclos de venta
===============

Caso 1: generación de referencias
---------------------------------

A Victoria, vendedora de Fonobot, le pasan el número de teléfono del sr. Aníbal Álvarez, de la empresa Álvarez y Asociados, a quien decide llamar para comentarle los beneficios del márketing telefónico.

Victoria **crea** una nueva **referencia** en el CRM y la carga con los siguientes datos:

* Nombre: Aníbal
* Apellido: Álvarez
* Cuenta: Álvarez y Asociados
* Teléfono: 1511112222

Luego llama al número de teléfono, pero finalmente el sr. Álvarez decide que no está interesado en la propuesta.

Victoria **edita** la referencia del sr. Álvarez y cambia el siguiente dato:

* Estátus: muerto

Por supuesto, esto no significa que el sr. Álvarez esté muerto ;-)

Además agrega la siguiente entrada en el campo **seguimiento**: *Se llamó al contacto y no le interesó la propuesta porque considera que la misma no se alinea con su target de mercado.*

De esa manera queda constancia de que hubo una oferta al sr. Álvarez, y cuál fue el resultado de la conversación.


Caso 2: seguimiento
-------------------

Victoria no se rinde, y buscando en Internet encuentra el número de teléfono de la empresa Bufandas Bustamante S.A.  Nuevamente crea una referencia con los siguientes datos:

* Cuenta: Bufandas Bustamente S.A.
* Teléfono: 50501111

Luego de la conversación telefónica, Victoria concierta una entrevista con el sr. Bautista Bustamante para el día siguiente.  Para mantener los datos organizados, **edita** la referencia y cambia los siguientes datos:

* Nombre: Bautista
* Apellido: Bustamante
* Dirección: Bartolomé Mitre 3500
* Estátus: En proceso

Y agrega la siguiente entrada en el campo **seguimiento**: *Concertada entrevista para el día martes 18 a las 15 hs.*


Caso 3: cuenta nueva
--------------------

Nuestra vendedora tiene la reunión con el sr. Bustamante, quien le comenta que está interesado en hacer una campaña para anunciar un evento con motivo del aniversario de la tienda.  En principio está interesado en invertir $ 2.000 en la campaña, pero quiere discutirlo primero con su socio que se encuentra en una reunión, así que queda en llamarla en cuanto hable con él.  Mientras tanto, crea una cuenta en Fonobot.com con su e-mail bautista@bufandas.com .

Victoria considera que es tiempo de convertir la referencia en **oportunidad**.  Para eso entra en la referencia del sr. Bustamente en el CRM y pulsa el botón **Convertir** de la parte superior.  Luego marca las opciones **Cuenta**, **Contacto** y **Oportunidad**.  Por cada opción marcada se despliega un nuevo formulario debajo, en el que puede completar más datos.  De manera automática aparecen copiados los datos de la referencia original.

En la sección referente a la oportunidad agrega los siguientes datos:

* Nombre: Campaña por aniversario de la tienda
* Cantidad: 2.000 ARS
* Fecha de cierre: *Coloca el 30 del mes en curso, ya que estima que el trato debería cerrarse antes de esa fecha*

También agrega la dirección de correo bautista@bufandas.com a la **cuenta**.  Este paso es **muy** importante ya que servirá para asociar la facturación de Fonobot con su cliente.


Caso 4: cierre de venta
-----------------------

El sr. Bustamante llama a Victoria y le comunica que va a hacer una campaña por $ 5.000 .  Victoria lo guía en la creación de la campaña y la carga de crédito, y el sistema se encuentra realizando llamadas en un santiamén.  Acto seguido, Victoria ingresa al CRM, busca la cuenta Bufandas Bustamante S.A., busca la oportunidad de la campaña por el aniversario de la tienda, y edita los siguientes campos:

* Cantidad: 5.000 ARS
* Etapa: Cerrado Ganado
* Fecha de cierre: *La fecha actual*

De esa forma le indica al sistema que esa venta fue concretada con éxito.  En caso de que el sr. Bustamante hubiese decidido **no** hacer la campaña, el campo **Etapa** lo hubiese colocado con el valor **Cerrado Perdido**.


Caso 5: compras recurrentes
---------------------------

Tiempo después el sr. Bustamante quiere hacer otra campaña con la asesoría de Victoria, por un monto de $ 6.000, para promocionar una liquidación por fin de temporada.  Esta vez Victoria no necesita crear una cuenta y contacto nuevos, debido a que la empresa del sr. Bustamante ya tiene una cuenta creada en el sistema.  Por lo tanto busca en la lista de cuentas y selecciona Bufandas Bustamante S.A. Una vez dentro de la cuenta, crea una nueva oportunidad con los siguientes datos:

* Nombre: Promo liquidación fin de temporada
* Cantidad: 6.000 ARS
* Etapa: Cerrado Ganado
* Fecha de cierre: *La fecha actual*


Uso del sistema
===============


Ingreso
-------

Abra el navegador web (Google Chrome o Mozilla Firefox) en ingrese a la siguiente direcciòn:

https://crm.fonobot.com

Una vez ingresado el nombre de usuario y la contraseña provista por el administrador del sistema, aparecerá la pantalla principal del sistema (dashboard).


Menú principal
--------------

El menú principal permite acceder a las funciones básicas del CRM.  En una pantalla de PC o tablet, se encuentra ubicado en la columna de la izquierda; en un celular, se debe hacer clic en el icono de las tres rayitas ubicado en la parte superior derecha para desplegar el menú con todas las opciones.

![Menú principal]({{ "/img/tutoriales/manual-crm-fonobot/espocrm006.png" | prepend:site.baseurl }})

En la parte inferior de ese menú hay otro submenú con tres rayitas a su vez, y al desplegarlo están el resto de las opciones.

![Menú de preferencias]({{ "/img/tutoriales/manual-crm-fonobot/espocrm008.png" | prepend:site.baseurl }})

Para salir del sistema se debe pulsar sobre la última opción de este menú.

![Menú de preferencias]({{ "/img/tutoriales/manual-crm-fonobot/espocrm009.png" | prepend:site.baseurl }})


Elementos del sistema
---------------------

En el menú principal se pueden acceder, entre otras, a las siguientes opciones:

* Cuentas
* Contactos
* Referencias
* Oportunidades

Las tareas de ver, crear, modificar y eliminar son iguales para los diferentes tipos de elementos.


Crear
-----

En el menú principal, hacer clic en la opción deseada, por ejemplo **Referencias**, luego en el botón **Crear** en la parte superior derecha de la pantalla.

![Botón de crear elemento]({{ "/img/tutoriales/manual-crm-fonobot/espocrm010.png" | prepend:site.baseurl }})

Luego de cargar todos los datos necesarios, hacer clic en el botón **Guardar** en la parte superior izquierda.


Ver y editar
------------

En el menú principal, hacer clic en el tipo de dato que se desea ver o cambiar.  Al hacer clic en alguno de los elementos de la lista se procede a ver los detalles del.  Se puede hacer clic en el botón **Editar** ubicado arriba a la izquierda para cambiar los datos.

![Lista de elementos]({{ "/img/tutoriales/manual-crm-fonobot/espocrm011.png" | prepend:site.baseurl }})


Eliminar
--------

Para eliminar un elemento, primero se debe buscarlo y seleccionarlo como se indica en el sección *Ver y editar*.  En la vista de detalles del elemento, buscar el botón **Editar** ubicado arriba a la izquierda de la pantalla, hacer clic sobre el botón de la flecha que apunta hacia abajo.  En el menú que se despliega hacer clic sobre la opción **Remover**.

![Editar elementos]({{ "/img/tutoriales/manual-crm-fonobot/espocrm007.png" | prepend:site.baseurl }})


Convertir referencia
--------------------

Para iniciar el ciclo de ventas propiamente dicho se debe crear una cuenta.  Muchas veces los datos ya están cargados en una referencia, y existe un método para convertir una referencia en una cuenta sin tener que volver a ingresar todos los datos de nuevo.

![Convertir referencia]({{ "/img/tutoriales/manual-crm-fonobot/espocrm012.png" | prepend:site.baseurl }})

Para hacerlo se debe ir a la lista de referencias, buscar la que se desea convertir y seleccionarla.  Una vez dentro de la vista de la referencia, pulsar sobre el botón **Convertir** que se encuentra arriba a la derecha.

Cuando se marquen los casilleros de **Cuenta**, **Contacto** y **Oportunidad** se desplegará un formulario nuevo debajo de cada una.  Se podrán verificar los datos que se usarán para crear la cuenta, el contacto y la oportunidad.

![Datos de referencia a convertir]({{ "/img/tutoriales/manual-crm-fonobot/espocrm013.png" | prepend:site.baseurl }})

En el caso de que el cliente sea un particular, solamente es necesario crear una cuenta con el nombre del cliente.  Para las empresas, la cuenta debe ser el nombre de la empresa, y se debe dar de alta como contacto a la persona con la que se hace la tratativa.

En el caso de las oportunidades, es obligatorio ingresar un nombre de oportunidad.  Por ejemplo, *Anuncio promoción por apertura de local*.

Una vez corroborados los datos, se debe pulsar el botón **Convertir** en la parte de abajo de la pantalla.  El sistema creará nuevos elementos (cuenta, contacto y oportunidad) con los datos que aparecían en el formulario.


Administración de cuentas
-------------------------

La cuenta es un elemento central del CRM.  Además de los datos básicos (como el nombre, correo electrónico, teléfono, dirección, etc.), una cuenta puede contener varios sub-elementos;  en particular, una cuenta puede tener uno o varios contactos, y también una o varias oportunidades asociadas.

![Botones para agregar sub-elementos]({{ "/img/tutoriales/manual-crm-fonobot/espocrm014.png" | prepend:site.baseurl }})

Para cargar un nuevo elemento dentro de la cuenta, primero se debe visualizar esa cuenta (seleccionarla de la lista de cuentas) y luego se debe ubicar el recuadro del elemento deseado màs abajo, y pulsar sobre el signo más (+) en la parte superior derecha de esa lista.  Luego de eso se deben rellenar los datos correspondientes y pulsar el botón **Guardar**.

![Nuevo contacto dentro de cuenta]({{ "/img/tutoriales/manual-crm-fonobot/espocrm015.png" | prepend:site.baseurl }})

En el caso de los clientes pequeños, no es necesario cargar contactos separados: los mismos datos de la cuenta sirven como datos de contacto.  Sin embargo, cuando se trata con empresas de cierta envergadura lo mejor es cargar los datos del ejecutivo de cuentas o responsable con quien que se entablan las negociaciones, para tener un trato más fluído en el caso de que haya que contactar por una inquietud.


Oportunidades
-------------

Se debe crear una oportunidad por cada venta (ya sea potencial, en negociaciones, completada o cancelada).  Al ver la lista de oportunidades de una cuenta se puede medir el esfuerzo de ventas total realizado por el vendedor.

Se debe modificar el campo **Etapa** de la oportunidad para mantener al sistema actualizado de las novedades.  Por ejemplo, cuando una venta se concreta exitosamente se debe establecer como **Cerrado Ganado**, pero si el cliente finalmente decidió no comprar se debe establecer como **Cerrado Perdido**.  En ambos casos se debe establecer la **Fecha de cierre** a la fecha del día.

![Seguimiento de la oportunidad]({{ "/img/tutoriales/manual-crm-fonobot/espocrm016.png" | prepend:site.baseurl }})

También es buena práctica anotar comentarios en el campo **Seguimiento**, por ejemplo *"se llamó al cliente y solicitó una entrevista personal, se agenda para el día X"*.  Para esto se debe pulsar sobre el campo que dice *Escriba su comentario aquí* y anotar las novedades pertinentes.  Al hacerlo, aparecerá debajo del cuadro de texto un nuevo botón con la leyenda **Entrada**, el cual se debe pulsar para grabar el nuevo comentario.
