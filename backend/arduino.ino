#include <Wire.h>
#include <LiquidCrystal_I2C.h>

LiquidCrystal_I2C lcd(0x27, 16, 2);
#define ingate A0  // IR sensor for the incoming gate (analog pin)
#define outgate A1  // IR sensor for the outgoing gate (analog pin)
int threshold = 200;  // Adjust this value based on your sensor's readings for 5cm

void setup() {
  lcd.init();  // Initialize the LCD
  lcd.backlight();  // Turn on the backlight
  pinMode(ingate, INPUT);  // Set the IR sensor pins as input
  pinMode(outgate, INPUT);
  Serial.begin(9600);  // Start serial communication at 9600 baud
}

void loop() {
  int ingateValue = analogRead(ingate);  // Read the value from the ingate sensor
  int outgateValue = analogRead(outgate); // Read the value from the outgate sensor

  // Check if the ingate sensor detects an object within 5cm
  if (ingateValue < threshold) {
    lcd.clear();
    lcd.print("Ingate activated");
    Serial.println("ingate");  // Send signal for ingate activation
    delay(1000);  // Simple debounce delay
  }

  // Check if the outgate sensor detects an object within 5cm
  if (outgateValue < threshold) {
    lcd.clear();
    lcd.print("Outgate activated");
    Serial.println("outgate");  // Send signal for outgate activation
    delay(1000);  // Simple debounce delay
  }

  delay(100);  // Small delay to reduce power usage
}
