<!--META {"title":"Virtual Machine","tags":["software","preparation"],"createDate":null,"updateDate":1489753278008} -->
.Für den Workshop stellen wir Euch zur lokalen Arbeit an eurem eigenen Laptop eine virtuelle Maschine bereit, auf der ihr alle notwendigen Tools findet.

Es ist ein VirtualBox-Image mit einem Ubuntu 16.04 Gast-System und folgenden installierten Komponenten:

* SSH
* [Python 2.7](/python)
* [ArduinoIDE](/arduinoide)
* [ESPlorer](/esplorer)
* [ESPTool](/esptool)
* [Mosquitto MQTT Broker](/mqzz-broker)
* [Mosquitto MQTT CLI Clients](/mqtt)
* [NodeRED](/nodered)
* [Visual Studio Code](/vscode)

Falls ihr die VM noch nicht installiert habt, benötigt ihr dafür:

* [Virtual Box](https://www.virtualbox.org/wiki/Downloads)
* Von uns das .vbox Image auf einem USB Stick

Unter Windows muss Hyper-V deaktiviert sein.

Ggf. erhaltet ihr beim Start der VM eine Warnmeldung und müsst den korrekten Netzwerkadapter eures Laptops auswählen.

Solang ihr noch keinen Microcontroller via USB angeschlossen habt, darf kein serieller port in der Konfiguration gesetzt sein.

Die Ubuntu User Credentials lauten

Benutzername: iot

Passwort: iot