<!--META {"title":"MQTT Client","tags":["software"],"createDate":null,"updateDate":1489818587692} -->
.Mosquitto bringt standardmäßig bereits Client-Tools zum Publishen und Subscriben von MQTT Messages mit.
<pre>
$ mosquitto_sub -t "topic/path"

$ mosquitto_pub -t "topic/path" -m "message payload" -q 1 -r
This will publish a message to a given topic at QoS 1, retained. This, too, has many options listed by mosquitto_pub -h.
</pre>

Alternative können beliebige andere Clients und auch GUIs wie mqttfx eingesetzt werden.
Oder wie in unserem [Wio Node](/wio-node) Beispiel über ein sprachspezifisches package direkt Daten an einen MQTT Broker gesendet werden.