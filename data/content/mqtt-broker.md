<!--META {"title":"MQTT-Broker","tags":["software","mqtt"],"createDate":null,"updateDate":1489818314679} -->
.Eclipse Mosquitto ™ ist ein Open Source (EPL / EDL lizenzierter) Message Broker, der die MQTT Protokoll Versionen 3.1 und 3.1.1 implementiert. MQTT bietet eine leichte Methode zur Durchführung von Messaging mit einem Publish / Subscribe-Modell. Dies macht es geeignet für "Internet of Things" Messaging wie mit Low-Power-Sensoren oder mobile Geräte wie Handys, eingebettete Computer oder Mikrocontroller wie die Arduino.

Unser mosquitto broker läuft mit folgenden Grundeinstellungen:

const char mqttServer = "192.168.30.10";
const char mqttUsername = "spartakus";
const char* mqttPassword = "berlinworkshop";
const int mqttPort = 1883;