/*
 *  Simple hello world Json REST response
  *  by Mischianti Renzo <https://www.mischianti.org>
 *
 *  https://www.mischianti.org/
 *
 */
 
#include "Arduino.h"
#include <ESP8266WiFi.h>
#include <WiFiClient.h>
#include <ESP8266WebServer.h>
#include <ESP8266mDNS.h>
 
const char* ssid = "MarkWilson";
const char* password = "Lifehacker";
 
ESP8266WebServer server(80);
 
// Serving Hello world
void getHelloWord() {
    server.send(200, "text/json", "{\"name\": \"Hello world\"}");
}
void getLEDStatus(){
  int intStatus = digitalRead(LED_BUILTIN);
  String bool_status="false";
  if(intStatus==1){
    bool_status="true";
  }
  server.send(200, "text/json", "{\"room1\":{\"light\":"+bool_status+"}}");   
}
void roomOne(){
  //LOW Means ON
  String message = "Body received:\n";
  message += server.arg("plain");
  message += "\n";
  Serial.println(message);
  //digitalWrite(LED_BUILTIN, LOW);
 // getLEDStatus();
}

// Define routing
void restServerRouting() {
//    server.on("/", HTTP_GET, []() {
//        server.send(200, F("text/html"),
//            F("Welcome to the REST Web Server"));
//    });
    server.on(F("/roomOne"), HTTP_POST, roomOne);
//    server.on(F("/ledStatus"),HTTP_GET,getLEDStatus);
}
 
// Manage not found URL
void handleNotFound() {
  server.send(404, "text/plain", "NOT FOUND");
}
 
void setup(void) {
  pinMode(LED_BUILTIN, OUTPUT);
  digitalWrite(LED_BUILTIN, HIGH);
  Serial.begin(115200);
  WiFi.mode(WIFI_STA);
  WiFi.hostname("ESP-host");
  WiFi.begin(ssid, password);
  Serial.println("");
 
  // Wait for connection
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.print("Connected to ");
  Serial.println(ssid);
  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());
 
  // Activate mDNS this is used to be able to connect to the server
  // with local DNS hostmane esp8266.local
  if (MDNS.begin("esp8266")) {
    Serial.println("MDNS responder started");
  }
 
  // Set server routing
  restServerRouting();
  // Set not found response
  server.onNotFound(handleNotFound);
  // Start server
  server.begin();
  Serial.println("HTTP server started");
}
 
void loop(void) {
  server.handleClient();
}
