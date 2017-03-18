<!--META {"title":"ArduinoIDE","tags":["software"],"createDate":null,"updateDate":1489817736986} -->
Arduino bringt eine eigene integrierte Entwicklungsumgebung (IDE) mit. Dabei handelt es sich um eine Java-Anwendung, die für die gängigen Plattformen Windows, Linux und MacOS kostenlos verfügbar ist. Sie basiert auf der IDE von Processing, einer auf die Einsatzbereiche Grafik, Simulation und Animation spezialisierten Entwicklungsumgebung. Die Arduino-IDE bringt einen Code-Editor mit und bindet gcc als Compiler ein. Zusätzlich werden die avr-gcc-Library und weitere Arduino-Librarys eingebunden, die die Programmierung in C und C++ stark vereinfachen.

Für ein funktionstüchtiges Programm genügt es, zwei Funktionen zu definieren:

- setup() – wird beim Start des Programms (entweder nach dem Übertragen auf das Board oder nach Drücken des Reset-Tasters) einmalig aufgerufen, um z. B. Pins als Eingang oder Ausgang zu definieren.
- loop() – wird durchgehend immer wieder durchlaufen, solange das Arduino-Board eingeschaltet ist.

Beispiel-Befehle
<pre>
#define PORT 5

 pinMode(PORT, OUTPUT); 

 Serial.begin(115200);

 Serial.println("this is a string");

 digitalWrite(PORT, HIGH);  

 delay(3000);              
</pre>

Beispiel-Code zum Anbinden eines Seeed Studio Wio Links mit ESP8266 Microcontroller findet sich [hier](/wio-node)

Damit man einen Wio Node mit ESP8266 in der ArduinoIDE bespielen kann, ist folgende Anpassung notwendig:
Arduino &gt;= 1.6.5 öffnen, in den Einstellungen unten http://arduino.esp8266.com/stable/package_esp8266com_index.json eintragen. Dann unter Tools > Board „…“ > Board Manager… auswählen, esp8266 anklicken und Install drücken.

Zusätzliche Bibliotheken wie bspw. für die MQTT Broker-Anbndung kann man im Menu über Sketch -&gt; Bibliothek hinzufügen -&gt; Manager installieren, indem man dort beispielsweise nach PubSubClient sucht