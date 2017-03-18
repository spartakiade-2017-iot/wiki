<!--META {"title":"MQTT","tags":["mqtt","software"],"createDate":null,"updateDate":1489818216091} -->
MQTT (MQ Telemetry Transport oder Message Queue Telemetry Transport) ist ein offenes Nachrichtenprotokoll für Machine-to-Machine-Kommunikation (M2M), das die Übertragung von Telemetriedaten in Form von Nachrichten zwischen Geräten ermöglicht, trotz hoher Verzögerungen oder beschränkten Netzwerken. Entsprechende Geräte reichen von Sensoren und Aktoren, Mobiltelefonen, Eingebetteten Systemen in Fahrzeugen oder Laptops bis zu voll entwickelten Rechnern. 

Bei der Verwendung des MQ Telemetry Transport Protokoll (MQTT) gibt es 3 wichtige Bestandteile. Einen zentralen Broker, mindestens einen Subscriber/Aktor und mindestens einen Publisher/Sensor. Der Subscriber meldet sich beim Broker an und teilt ihm mit welche Nachrichten er haben möchte. Dabei gibt das Topic die Nachricht bzw. eine Klasse von Nachrichten an. Sendet ein Sensor nun eine Nachricht an dem Broker entscheidet dieser, welcher Subscriber diese erhalten soll und schickt sie an diesen weiter.

Eine gute Einführung findet sich unter http://www.hivemq.com/blog/mqtt-essentials/

In unserem Workshop setzen wir mosquitto MQTT ein.