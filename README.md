Batalla Naval
=======
Bueno, no, esto no es una batalla naval.

Consigna:

Armate una aplicación realtime sencillita. La aplicación tiene un UI con algunos botones y menúes y radios (algo al azar que vos armes aplicando tu propio criterio de buena apariencia) y lo que hace es, cuando más de un cliente se conecta, la aplicación sincroniza las dos UI. O sea, cuando uno toca un botón (y lo deja apretado) o selecciona un radio button, la otra UI conectada automáticamente apreta el botón o cambia el radio button.

El front-end debería ser completamente "estático". O sea, sin nada de HTML generado en el servidor: todo HTML y archivos JS servidos aparte. Como frameworks tenés que usar si o si socket.io y después podés usar lo que quieras para el resto (jQuery, YUI, lo que se te ocurra).

Para el back-end sería ideal si es en django con gevent-socketio aunque está bien si usás gevent-socketio solo u cualquier otra cosa.

Puntos extra:
- Si usás Redis o algo muy parecido para almacenar temporariamente el estado actual de la UI o algún otro estado semi-transitorio
- Si usás Ember+Handlebars para la UI (ojo que te podés meter en un berenjenal con ésto)
- Cualquier feature "sorpresa" que me traigas.
