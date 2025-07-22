---
layout: post
title: "Interface Labs - Playing with circuits"
image: 
category: miscellaneous
---


This was my first set of labs assigned as part of my 'Interface Labs' class

- [Lab: Digital Input and Output with an Arduino](https://itp.nyu.edu/physcomp/labs/labs-arduino-digital-and-analog/digital-input-and-output-with-an-arduino/)
- [Lab: Analog In with an Arduino](https://itp.nyu.edu/physcomp/labs/labs-arduino-digital-and-analog/analog-in-with-an-arduino/)
- [Lab: Tone Output Using An Arduino](https://itp.nyu.edu/physcomp/labs/labs-arduino-digital-and-analog/tone-output-using-an-arduino/)

The goal was to get familiar with a breadboard (which I hadn't used since high school!! See my [TDCS project](https://leviv.cool/projects/2018/02/01/how-I-made-TDCS.html)) and the components that go along with it. And of course not to short circuit my board :)

I also filmed a few tiktoks throughout working on these labs to get more comfortable talking about my work in front of a camera.

## Lab 1: Digital Input and Output

## Initial Code

```c++
void setup() {
  Serial.begin(9600);
  pinMode(2, INPUT);
  pinMode(3, OUTPUT);
  pinMode(4, OUTPUT);
}

void loop() {
  bool buttonPressed = digitalRead(2);

  digitalWrite(3, buttonPressed ? HIGH : LOW);
  digitalWrite(4, !buttonPressed ? HIGH : LOW);
}
```

## Cleaned up code with button memory

I wanted this button to behave more like a toggle switch than a 'press and hold' thing, so I added some state memory to the program!

```c++
const int BLUE_LED = 3;
const int RED_LED = 4;

void setup() {
  Serial.begin(9600);
  pinMode(2, INPUT);
  pinMode(BLUE_LED, OUTPUT);
  pinMode(RED_LED, OUTPUT);
}

bool buttonUpdated = false;
bool buttonState = false;

void loop() {
  bool buttonCurrentlyPressed = digitalRead(2);
  
  if (buttonCurrentlyPressed && !buttonUpdated) {
    buttonState = !buttonState;
    buttonUpdated = true;
  } else if (!buttonCurrentlyPressed && buttonUpdated) {
    buttonUpdated = false;
  }

  digitalWrite(BLUE_LED, buttonState ? HIGH : LOW);
  digitalWrite(RED_LED, !buttonState ? HIGH : LOW);
}
```

I was genuinely losing my mind because my code was not working. However I realized it's because I was not defining `buttonUpdated` and `buttonState` outside of the `loop()` function.

<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@villarreallevi/video/7528207153929145630" data-video-id="7528207153929145630" data-embed-from="oembed" style="max-width:605px; min-width:325px;"> <section> <a target="_blank" title="@villarreallevi" href="https://www.tiktok.com/@villarreallevi?refer=embed">@villarreallevi</a> <p>Ima low res interface lab 1</p> <a target="_blank" title="♬ original sound - Levi V" href="https://www.tiktok.com/music/original-sound-7528207123226888990?refer=embed">♬ original sound - Levi V</a> </section> </blockquote> <script async onerror="var a=document.createElement('script');a.src='https://iframely.net/files/tiktok-embed.js';document.body.appendChild(a);" src="https://www.tiktok.com/embed.js"></script>

## Lab 2: Analog In with an Arduino

Code for potentiometer input. This was simple and not too different from what we did in class

```cpp
const int BLUE_LED = 2;

void setup() {
  Serial.begin(9600);
  pinMode(A0, INPUT);
  pinMode(BLUE_LED, OUTPUT);
}

// 2^10 - 1
const int POTENTIOMETER_MAX = 1023;
// 2^8 - 1
const int LED_MAX = 255;

void loop() {
  float potentiometer = analogRead(A0);
  float brightness = (potentiometer / POTENTIOMETER_MAX) * LED_MAX;

  Serial.println(brightness);  
  analogWrite(BLUE_LED, brightness);
}
```

![lab1](/assets/img/2025-07-22-interface-labs---playing-with-circuits/lab1.png)

LEDs controlled by a potentiometer
{: .caption}

<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@villarreallevi/video/7528214247965232415" data-video-id="7528214247965232415" data-embed-from="oembed" style="max-width:605px; min-width:325px;"> <section> <a target="_blank" title="@villarreallevi" href="https://www.tiktok.com/@villarreallevi?refer=embed">@villarreallevi</a> <p>Replying to @queenie </p> <a target="_blank" title="♬ Club Penguin Pizza Parlor - Cozy Penguin" href="https://www.tiktok.com/music/Club-Penguin-Pizza-Parlor-7220175238067079942?refer=embed">♬ Club Penguin Pizza Parlor - Cozy Penguin</a> </section> </blockquote> <script async onerror="var a=document.createElement('script');a.src='https://iframely.net/files/tiktok-embed.js';document.body.appendChild(a);" src="https://www.tiktok.com/embed.js"></script>

Code for force input

```cpp
const int BLUE_LED = 2;
const int RED_LED = 3;

void setup() {
  Serial.begin(9600);
  pinMode(A6, INPUT);
  pinMode(A7, INPUT);
  pinMode(BLUE_LED, OUTPUT);
  pinMode(RED_LED, OUTPUT);
}

// 2^9 -1
const int FORCE_SENSOR_MAX = 511
// 2^8 - 1
const int LED_MAX = 255;

void loop() {
  float sensor1Value = analogRead(A6);
  float sensor2Value = analogRead(A7);

  Serial.println(sensor2Value);

  int brightness1 = map(sensor1Value, 0, FORCE_SENSOR_MAX, 0, LED_MAX);
  analogWrite(RED_LED, brightness1);

  int brightness2 = map(sensor2Value, 0, FORCE_SENSOR_MAX, 0, LED_MAX);
  analogWrite(BLUE_LED, brightness2);
}
```

I had to do some experimenting to get the max force input. So far it seems like every input max is 2^n-1 so when I got force readings in the high 400s/low 500s I knew 511 was probably the max.

![lab2](/assets/img/2025-07-22-interface-labs---playing-with-circuits/lab2.png)

Force input mapped to LEDs
{: .caption}

<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@villarreallevi/video/7528244179739200798" data-video-id="7528244179739200798" data-embed-from="oembed" style="max-width:605px; min-width:325px;"> <section> <a target="_blank" title="@villarreallevi" href="https://www.tiktok.com/@villarreallevi?refer=embed">@villarreallevi</a> <p>Replying to @yea.h </p> <a target="_blank" title="♬ som original - Trilha Retrô - Trilha Retrô" href="https://www.tiktok.com/music/som-original-Trilha-Retrô-7353443876892330757?refer=embed">♬ som original - Trilha Retrô - Trilha Retrô</a> </section> </blockquote> <script async onerror="var a=document.createElement('script');a.src='https://iframely.net/files/tiktok-embed.js';document.body.appendChild(a);" src="https://www.tiktok.com/embed.js"></script>

Code for speaker output

```cpp
const int SPEAKER = 2;

void setup() {
  Serial.begin(9600);
  pinMode(A7, INPUT);
  pinMode(SPEAKER, OUTPUT);
}

// 2^8 - 1
const int LED_MAX = 255;

void loop() {
  float sensorValue = analogRead(A7);
  int pitch = map(sensorValue, 0, FORCE_SENSOR_MAX, 100, 10000);
  tone(SPEAKER, pitch);
  Serial.println(pitch);
}
```

I got the speaker output working without soldering!! I wasn't sure how to adjust the volume because this played pretty softly. I'm not sure I 100% understood the tone function but I'm getting tired and want to go home :sleeping:.

<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@villarreallevi/video/7528244348878703902" data-video-id="7528244348878703902" data-embed-from="oembed" style="max-width:605px; min-width:325px;"> <section> <a target="_blank" title="@villarreallevi" href="https://www.tiktok.com/@villarreallevi?refer=embed">@villarreallevi</a> <p>Replying to @adri </p> <a target="_blank" title="♬ original sound - Levi V" href="https://www.tiktok.com/music/original-sound-7528244398111361823?refer=embed">♬ original sound - Levi V</a> </section> </blockquote> <script async onerror="var a=document.createElement('script');a.src='https://iframely.net/files/tiktok-embed.js';document.body.appendChild(a);" src="https://www.tiktok.com/embed.js"></script>

## Lab 3: Tone Output using an Arduino

Oh yay my questions were answered by this lab! `analogWrite()` changes the loudness, but `tone()` only changes the frequency. To make the speaker louder, you have to modify the speaker circuit by adding a transistor. However, when I added a transistor, it made it softer. It was my first time using one so maybe I grabbed the wrong one. I also could not find a headphone jack in the bin of electronics in the lab, and don't have wired headphones, so I didn't try that part of the lab.

 I played around a bit with the music demo they had and called it a night.

```c++
const int SPEAKER = 2;
const int NOTE_B0 = 31;
const int NOTE_C1 = 33;
const int NOTE_CS1 = 35;
const int NOTE_C4 = 36;
const int NOTE_D1 = 37;
const int NOTE_DS1 = 39;
const int NOTE_E1 = 41;
const int NOTE_F1 = 44;
const int NOTE_FS1 = 46;
const int NOTE_G1 = 49;
const int NOTE_G3 = 51;
const int NOTE_GS1 = 52;
const int NOTE_GS3 = 54;
const int NOTE_A1 = 55;
const int NOTE_AS1 = 58;
const int NOTE_B1 = 62;
const int NOTE_B3 = 64;
const int NOTE_C2 = 65;
const int NOTE_CS2 = 69;
const int NOTE_D2 = 73;

void setup() {
  Serial.begin(9600);
  pinMode(A7, INPUT);
  pinMode(SPEAKER, OUTPUT);

  // notes in the melody:
  int melody[] = {
    NOTE_C4, NOTE_G3,NOTE_G3, NOTE_GS3, NOTE_G3,0, NOTE_B3, NOTE_C4
  };
 
  // note durations: 4 = quarter note, 8 = eighth note, etc.:
  int noteDurations[] = {4,8,8,4,4,4,4,4 };

  // iterate over the notes of the melody:
  for (int thisNote = 0; thisNote < 8; thisNote++) {
    // to calculate the note duration, take one second
    // divided by the note type.
    // e.g. quarter note = 1000 / 4, eighth note = 1000/8, etc.
    int noteDuration = 1000/noteDurations[thisNote];
    tone(SPEAKER, melody[thisNote],noteDuration);
 
    //pause for the note's duration plus 30 ms:
    delay(noteDuration +30);
  }
}

void loop() {
}
```



![lab3](/assets/img/2025-07-22-interface-labs---playing-with-circuits/lab3.png)

Speaker on the breadboard
{: .caption}

## Reflection

This was a fun assignment! It got me more comfortable with wiring, making mistakes, and understanding the components that came with my arduino starting kit. Some sensors I think it could be cool to play with in the future are

- [Fingerprint sensor](https://www.adafruit.com/product/751)
- [GPS Sensor](https://www.adafruit.com/product/1059)
  - Although what would be the point of buying this when I could use a bluebooth/wifi module with a cellphone/
- [Motion sensor](https://www.adafruit.com/product/189)
- An Xbox Kinect camera!

I've started thinking [a lot!] about what I should do for my first interface project, but honestly I'm still at a loss!!