<!--META {"title":"Wio Node","tags":["hardware","introduction"],"createDate":null,"updateDate":1489817216304} -->
Board-Eigenschaften:

<pre>
{
    "board_name": "Wio Node v1.0",
    "board_vendor": "seeedstudio",
    "board_flash_map": 6,
    "board_flash_spi_speed": 40,
    "board_flash_spi_mode": "QIO",
    "board_builtin":
    {
        "FUNCTION_KEY": 0,
        "STATUS_LED": 2,
        "GROVE_POWER_SWITCH": 15
    },
    "interfaces": 
    {
        "D0": { "type": "GPIO", "pin": 3 },
        "D1": { "type": "GPIO", "pin": 5 },
        "A0": { "type": "ANALOG", "pin": 17 },
        "I2C0": { "type": "I2C", "pinsda": 1, "pinscl": 3 },
        "I2C1": { "type": "I2C", "pinsda": 4, "pinscl": 5 },
        "UART0": { "type": "UART", "pintx": 1, "pinrx": 3 }
    }
}
</pre>

WiFi-Verbindung
<pre>
#include &lt;ESP8266WiFi.h&gt;
const char* ssid = "IOT-WS"; 
WiFiClient wifiClient;
WiFi.begin(ssid, password);
 while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
Serial.println("WiFi connected");
</pre>

 Verbindung mit MQTT-Broker und Publish
 <pre>
 #include &lt;PubSubClient.h&gt;
const char* mqttServer = "192.168.30.10";
const char* mqttUsername = "spartakus";
const char* mqttPassword = "berlinworkshop";
const int mqttPort = 1883;

String clientName;
String topicName;
while (!mqttClient.connected()) {
    mqttClient.connect((char*) clientName.c_str(), mqttUsername, mqttPassword);
}
mqttClient.loop();
mqttClient.publish(topicName, Message.c_str(), true);
</pre>