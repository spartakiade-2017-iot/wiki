<!--META {"title":"Zentrale Server-Instanz","tags":["showcase"],"createDate":null,"updateDate":1489755270919} -->
Für den Showcase greifen wir auf eine zentrale Server-Instanz zu, welche folgende Dienste bereitstellt:

* [MQTT Broker](/mqtt-broker)
* [NodeRED](/nodered) Server 

Die IP-Adresse des Hosts lautet 192.168.30.10

Der MQTT-Broker ist mit folgenden Zugangsdaten gesichert

<pre>
const char mqttServer = "192.168.30.10";
const char mqttUsername = "spartakus";
const char* mqttPassword = "berlinworkshop";
const int mqttPort = 1883;
</pre>