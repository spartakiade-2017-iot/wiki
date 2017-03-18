<!--META {"title":"ESPTool","tags":["software","esp8266"],"createDate":null,"updateDate":1489819397046} -->
Manchmal ist es notwendig, den Wio Node auf seine ursprüngliche Firmware Version zurückzuusetzen.
Der normale Weg dafür ist die Nutzung des ESPTools.

<pre>
python esptool.py -p COM4 -b 230400 write_flash --flash_size 32m-c1 
0x0000 boot_v1.4(b1).bin 
0x1000 user1.bin 
0x101000 user2.bin 
0x3fc000 esp_init_data_default.bin 
0x3fe000 blank.bin
</pre>