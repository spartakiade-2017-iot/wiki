<!--META {"title":"Philips Hue","tags":["hardware","introduction"],"createDate":null,"updateDate":1489753467086} -->
.Die Hues sind iotifizierte Lampen der Firma Philips, welche via Funk gesteuert werden können.
Das Steuern umfasst sowohl die Möglichkeit, sie an/aus zu schalten, als auch ihre Farbe und Intensität zu ändern.

Zur Kommunikation wird ein eigenständiges Funk-Protokoll verwendet namens ZigBee.
Standardmäßig kommunizieren die Hue Lampen mit einer Basisstation,  Hue Bridge genannt, die via LAN für andere Netzwerkgeräte erreichbar ist.

Diese kann über eine [Philipps Hue Smartphone App](http://www2.meethue.com/de-de/philipshueapp) angesprochen werden.

Oder auch direkt über einen RESTful Webservice unter http://[bridgeip]/api/bUGIwMHwOPzXVItpqnCgnpJF1gLVTKIVZ6CAjwu-

Eine Test GUI befindet sich unter http://[bridgeip]/debug/clip.html

Statt mit der Basisstation zu reden, können auch Alternativgeräte das ZigBee-Protokoll implementieren, beispielsweise ein Zigbee-Aufsatz für den Raspberry Pi.

Wir wollen im Folgenden die Hue über einen Raspberry ansprechen.

Via http://[bridgeip]/api/bUGIwMHwOPzXVItpqnCgnpJF1gLVTKIVZ6CAjwu-/lights/1/state kann man einzelne properties verändern, wie bspw.

  {"on":true, "sat":254, "bri":10,"hue":10000}

Zur Programmierung kann man ein einfachstes Python Skript schreiben wie bspw.

<pre>
  import requests
  import json
  
  url = "http://[bridgeurl]/api/bUGIwMHwOPzXVItpqnCgnpJF1gLVTKIVZ6CAjwu-/lights/1/state"
  
  data_on = {"on":True, "sat":254, "bri":254,"hue":5000}
  data_off = {"on":False}
  
  r = requests.put(url, json.dumps(data_on), timeout=5)
</pre>

Die komplette API Description ist verfügbar unter https://developers.meethue.com/philips-hue-api 