---
toc: false
layout: post
title: Classroom Presence System, Tap Reader Build
description: Our own tap reader, a Raspberry Pi 3 and an RC522 RFID board in a 3D-printed case, replacing the CrowPi.
permalink: /capstone/presence-system/tap-reader/
year: "2026-2027"
rp_active: tapreader
---

<!-- markdownlint-disable MD033 MD010 MD012 -->
<div class="rfid-presence-infograph">
  <div class="rfid-presence-header">
    <div class="ocs__badge">Tap Reader Build</div>
    <h2 class="ocs__section-title">Building our own tap reader</h2>
  </div>

  {% include presence-system-nav.html %}

  <figure class="pv-figure">
    <div class="pv-stage">
      <svg class="pv-scene" viewBox="0 0 1200 600" role="img" aria-labelledby="tr-hero-name">
        <title id="tr-hero-name">The finished reader, a Raspberry Pi 3 and RC522 board in a 3D-printed case, mounted on the wall by the classroom door. A student taps the tag on their laptop and the dashboard shows Vibha is present.</title>
        <defs><clipPath id="tr-hero-clip"><rect width="1200" height="600" rx="28"/></clipPath></defs>
        <g clip-path="url(#tr-hero-clip)">
          <rect class="pv-fill-sky" width="1200" height="600"/>
          <rect class="pv-fill-floor" y="478" width="1200" height="122"/>
          <rect class="pv-fill-base" y="470" width="1200" height="10"/>
          <polygon class="pv-fill-lightfloor" points="138,480 332,480 400,600 70,600"/>
          <rect class="pv-fill-ink" x="118" y="188" width="234" height="292"/>
          <rect class="pv-fill-light" x="138" y="208" width="194" height="272"/>
          <polygon class="pv-fill-door" points="276,222 332,208 332,480 276,466"/>
          <circle class="pv-fill-sky" cx="288" cy="350" r="5"/>
          <rect class="pv-fill-ink" x="175" y="140" width="120" height="36" rx="8"/>
          <text class="pv-text-sign" x="235" y="165" text-anchor="middle">Room 1</text>
          <rect class="pv-fill-cardshade" x="444" y="304" width="124" height="150" rx="20"/>
          <rect class="pv-fill-case pv-stroke-case" x="438" y="296" width="124" height="150" rx="20"/>
          <circle class="pv-fill-pad" cx="500" cy="360" r="34"/>
          <path class="pv-stroke-wave" d="M488 346 q12 14 0 28 M478 338 q20 22 0 44"/>
          <circle class="pv-fill-screen" cx="500" cy="420" r="7"/>
          <ellipse class="pv-fill-shadow" cx="765" cy="586" rx="96" ry="10"/>
          <g transform="translate(1270 0) scale(-1 1)">
            <line class="pv-stroke-legback" x1="494" y1="452" x2="470" y2="572"/>
            <line class="pv-stroke-legfront" x1="520" y1="452" x2="550" y2="572"/>
            <rect class="pv-fill-shoe" x="442" y="568" width="54" height="22" rx="11"/>
            <rect class="pv-fill-shoe" x="530" y="568" width="58" height="22" rx="11"/>
            <line class="pv-stroke-sleeve" x1="476" y1="330" x2="464" y2="424"/>
            <circle class="pv-fill-skinshade" cx="463" cy="432" r="11"/>
            <rect class="pv-fill-shirt" x="460" y="300" width="96" height="172" rx="46"/>
            <rect class="pv-fill-skin" x="496" y="278" width="22" height="28"/>
            <circle class="pv-fill-hair" cx="498" cy="246" r="38"/>
            <circle class="pv-fill-skin" cx="510" cy="254" r="33"/>
            <circle class="pv-fill-skinshade" cx="500" cy="260" r="6"/>
            <circle class="pv-fill-ink" cx="528" cy="250" r="3.5"/>
            <line class="pv-stroke-sleeve" x1="532" y1="334" x2="640" y2="384"/>
            <g transform="translate(40 -12) rotate(-8 680 380)">
              <rect class="pv-fill-laptop" x="600" y="340" width="150" height="92" rx="8"/>
              <rect class="pv-fill-laptopedge" x="600" y="424" width="150" height="8" rx="3"/>
              <rect class="pv-fill-tag" x="718" y="352" width="24" height="24" rx="5"/>
              <circle class="pv-fill-white" cx="730" cy="364" r="5"/>
            </g>
            <circle class="pv-fill-skin" cx="645" cy="386" r="12"/>
          </g>
          <circle class="pv-fill-step" cx="500" cy="258" r="24"/>
          <text class="pv-text-stepnum" x="500" y="267" text-anchor="middle">1</text>
          <text class="pv-text-step" x="534" y="267">Tap</text>
          <line class="pv-stroke-flow" x1="562" y1="300" x2="742" y2="148"/>
          <polygon class="pv-fill-ink" points="752,140 734,145 744,159"/>
          <circle class="pv-fill-step" cx="640" cy="214" r="24"/>
          <text class="pv-text-stepnum" x="640" y="223" text-anchor="middle">2</text>
          <text class="pv-text-step" x="608" y="222" text-anchor="end">Pi 3 sends it</text>
          <rect class="pv-fill-cardshade" x="764" y="42" width="400" height="104" rx="20"/>
          <rect class="pv-fill-white" x="760" y="36" width="400" height="104" rx="20"/>
          <circle class="pv-fill-ok" cx="820" cy="88" r="30"/>
          <path class="pv-stroke-tick" d="M806 89 l10 10 l19 -21"/>
          <text class="pv-text-notify" x="866" y="82">Vibha is present</text>
          <text class="pv-text-notifysub" x="866" y="114">Room 1, 8:02 AM</text>
          <circle class="pv-fill-step" cx="720" cy="88" r="24"/>
          <text class="pv-text-stepnum" x="720" y="97" text-anchor="middle">3</text>
          <text class="pv-text-small" x="500" y="500" text-anchor="middle">Pi 3 + RC522</text>
          <text class="pv-text-time" x="500" y="526" text-anchor="middle">3D-printed case</text>
        </g>
      </svg>
    </div>
    <figcaption class="pv-caption">The plan: our own reader by the door, a Pi 3 and an RC522 in a printed case.</figcaption>
  </figure>

  <figure class="pv-figure">
    <div class="pv-stage">
      <svg class="pv-scene" viewBox="0 0 1200 470" role="img" aria-labelledby="tr-inside-name">
        <title id="tr-inside-name">Exploded view of the reader, top to bottom: 3D-printed case lid, RC522 RFID board, Raspberry Pi 3, 3D-printed case base.</title>
        <rect class="pv-fill-sky" width="1200" height="470" rx="28"/>
        <line class="pv-stroke-guide" x1="250" y1="70" x2="250" y2="430"/>
        <line class="pv-stroke-guide" x1="550" y1="70" x2="550" y2="430"/>
        <rect class="pv-fill-case pv-stroke-case" x="220" y="40" width="360" height="62" rx="16"/>
        <circle class="pv-fill-pad" cx="400" cy="71" r="22"/>
        <path class="pv-stroke-wave" d="M394 62 q8 9 0 18 M386 56 q14 15 0 30"/>
        <rect class="pv-fill-pcbblue" x="250" y="140" width="300" height="80" rx="6"/>
        <rect class="pv-stroke-coil" x="268" y="152" width="200" height="56" rx="10"/>
        <rect class="pv-stroke-coil" x="280" y="162" width="176" height="36" rx="8"/>
        <rect class="pv-fill-ink" x="480" y="166" width="26" height="26" rx="3"/>
        <g class="pv-fill-pin"><circle cx="528" cy="150" r="4"/><circle cx="528" cy="160" r="4"/><circle cx="528" cy="170" r="4"/><circle cx="528" cy="180" r="4"/><circle cx="528" cy="190" r="4"/><circle cx="528" cy="200" r="4"/><circle cx="528" cy="210" r="4"/></g>
        <rect class="pv-fill-pcbgreen" x="230" y="250" width="340" height="100" rx="8"/>
        <g class="pv-fill-pin"><circle cx="262" cy="262" r="3.5"/><circle cx="276" cy="262" r="3.5"/><circle cx="290" cy="262" r="3.5"/><circle cx="304" cy="262" r="3.5"/><circle cx="318" cy="262" r="3.5"/><circle cx="332" cy="262" r="3.5"/><circle cx="346" cy="262" r="3.5"/><circle cx="360" cy="262" r="3.5"/><circle cx="374" cy="262" r="3.5"/><circle cx="388" cy="262" r="3.5"/><circle cx="402" cy="262" r="3.5"/><circle cx="416" cy="262" r="3.5"/><circle cx="430" cy="262" r="3.5"/><circle cx="444" cy="262" r="3.5"/><circle cx="458" cy="262" r="3.5"/><circle cx="472" cy="262" r="3.5"/><circle cx="486" cy="262" r="3.5"/><circle cx="500" cy="262" r="3.5"/><circle cx="514" cy="262" r="3.5"/><circle cx="528" cy="262" r="3.5"/></g>
        <rect class="pv-fill-ink" x="360" y="290" width="44" height="44" rx="4"/>
        <rect class="pv-fill-laptop" x="530" y="282" width="52" height="26" rx="3"/>
        <rect class="pv-fill-laptop" x="530" y="316" width="52" height="26" rx="3"/>
        <rect class="pv-fill-case pv-stroke-case" x="220" y="380" width="360" height="56" rx="12"/>
        <rect class="pv-fill-sky" x="236" y="380" width="328" height="34" rx="6"/>
        <line class="pv-stroke-leader" x1="590" y1="71" x2="680" y2="71"/>
        <text class="pv-text-step" x="696" y="68">Case lid</text>
        <text class="pv-text-time" x="696" y="96">3D printed by Shay</text>
        <line class="pv-stroke-leader" x1="560" y1="180" x2="680" y2="180"/>
        <text class="pv-text-step" x="696" y="177">RC522 RFID board</text>
        <text class="pv-text-time" x="696" y="205">13.56 MHz, reads the tag</text>
        <line class="pv-stroke-leader" x1="590" y1="300" x2="680" y2="300"/>
        <text class="pv-text-step" x="696" y="297">Raspberry Pi 3</text>
        <text class="pv-text-time" x="696" y="325">runs reader.py</text>
        <line class="pv-stroke-leader" x1="590" y1="408" x2="680" y2="408"/>
        <text class="pv-text-step" x="696" y="405">Case base</text>
        <text class="pv-text-time" x="696" y="433">3D printed by Shay</text>
      </svg>
    </div>
    <figcaption class="pv-caption">What's inside: lid, RC522, Pi 3, base.</figcaption>
  </figure>

  <figure class="pv-figure">
    <div class="pv-stage">
      <svg class="pv-scene" viewBox="0 0 1200 560" role="img" aria-labelledby="tr-wiring-name">
        <title id="tr-wiring-name">Wiring from the RC522 to the Raspberry Pi 3 GPIO header: SDA to pin 24, SCK to pin 23, MOSI to pin 19, MISO to pin 21, IRQ not connected, GND to pin 6, RST to pin 22, 3.3V to pin 1. The RC522 runs on 3.3 volts, never 5 volts.</title>
        <rect class="pv-fill-sky" width="1200" height="560" rx="28"/>
        <rect class="pv-fill-pcbblue" x="60" y="50" width="330" height="460" rx="10"/>
        <rect class="pv-stroke-coil" x="84" y="74" width="190" height="300" rx="16"/>
        <rect class="pv-stroke-coil" x="102" y="92" width="154" height="264" rx="12"/>
        <text class="pv-text-board" x="180" y="440" text-anchor="middle">RC522</text>
        <rect class="pv-fill-pcbgreen" x="810" y="50" width="330" height="460" rx="10"/>
        <text class="pv-text-board" x="1120" y="88" text-anchor="end">Pi 3 GPIO</text>
        <line class="pv-wire pv-wire-sda" x1="390" y1="130" x2="810" y2="130"/>
        <line class="pv-wire pv-wire-sck" x1="390" y1="175" x2="810" y2="175"/>
        <line class="pv-wire pv-wire-mosi" x1="390" y1="220" x2="810" y2="220"/>
        <line class="pv-wire pv-wire-miso" x1="390" y1="265" x2="810" y2="265"/>
        <line class="pv-wire pv-wire-ground" x1="390" y1="355" x2="810" y2="355"/>
        <line class="pv-wire pv-wire-rst" x1="390" y1="400" x2="810" y2="400"/>
        <line class="pv-wire pv-wire-power" x1="390" y1="445" x2="810" y2="445"/>
        <line class="pv-wire pv-wire-none" x1="390" y1="310" x2="440" y2="310"/>
        <g class="pv-fill-pin"><circle cx="390" cy="130" r="7"/><circle cx="390" cy="175" r="7"/><circle cx="390" cy="220" r="7"/><circle cx="390" cy="265" r="7"/><circle cx="390" cy="310" r="7"/><circle cx="390" cy="355" r="7"/><circle cx="390" cy="400" r="7"/><circle cx="390" cy="445" r="7"/></g>
        <g class="pv-fill-pin"><circle cx="810" cy="130" r="7"/><circle cx="810" cy="175" r="7"/><circle cx="810" cy="220" r="7"/><circle cx="810" cy="265" r="7"/><circle cx="810" cy="355" r="7"/><circle cx="810" cy="400" r="7"/><circle cx="810" cy="445" r="7"/></g>
        <text class="pv-text-pinname" x="370" y="137" text-anchor="end">SDA</text>
        <text class="pv-text-pinname" x="370" y="182" text-anchor="end">SCK</text>
        <text class="pv-text-pinname" x="370" y="227" text-anchor="end">MOSI</text>
        <text class="pv-text-pinname" x="370" y="272" text-anchor="end">MISO</text>
        <text class="pv-text-pinname" x="370" y="317" text-anchor="end">IRQ</text>
        <text class="pv-text-pinname" x="370" y="362" text-anchor="end">GND</text>
        <text class="pv-text-pinname" x="370" y="407" text-anchor="end">RST</text>
        <text class="pv-text-pinname" x="370" y="452" text-anchor="end">3.3V</text>
        <text class="pv-text-pinname" x="830" y="137">Pin 24 · GPIO8 (CE0)</text>
        <text class="pv-text-pinname" x="830" y="182">Pin 23 · GPIO11 (SCLK)</text>
        <text class="pv-text-pinname" x="830" y="227">Pin 19 · GPIO10 (MOSI)</text>
        <text class="pv-text-pinname" x="830" y="272">Pin 21 · GPIO9 (MISO)</text>
        <text class="pv-text-pinname" x="830" y="362">Pin 6 · GND</text>
        <text class="pv-text-pinname" x="830" y="407">Pin 22 · GPIO25</text>
        <text class="pv-text-pinname" x="830" y="452">Pin 1 · 3.3V</text>
        <text class="pv-text-time" x="456" y="317">not connected</text>
        <rect class="pv-fill-warn" x="470" y="470" width="260" height="56" rx="14"/>
        <text class="pv-text-warn" x="600" y="497" text-anchor="middle">3.3 V only. NOT 5 V</text>
        <text class="pv-text-warnsub" x="600" y="518" text-anchor="middle">chip max is 4.0 V</text>
      </svg>
    </div>
    <figcaption class="pv-caption">Wiring: SPI0 to the Pi header, the mfrc522 library's default pins. 3.3 V, never 5 V.</figcaption>
  </figure>

  <figure class="pv-figure">
    <div class="pv-stage">
      <svg class="pv-scene" viewBox="0 0 1200 330" role="img" aria-labelledby="tr-software-name">
        <title id="tr-software-name">Software flow: the RC522 reads the card ID, the mfrc522 Python library passes it to reader.py, which posts the tap to the presence API, Flask records it, and the dashboard shows Present. Only the reader hardware changes; the library, reader.py, the API, Flask and the dashboard stay the same.</title>
        <rect class="pv-fill-sky" width="1200" height="330" rx="28"/>
        <rect class="pv-fill-tagsoft" x="22" y="38" width="176" height="44" rx="22"/>
        <text class="pv-text-swap" x="110" y="67" text-anchor="middle">New hardware</text>
        <rect class="pv-fill-oksoft" x="222" y="38" width="956" height="44" rx="22"/>
        <circle class="pv-fill-ok" cx="250" cy="60" r="14"/>
        <path class="pv-stroke-ticksmall" d="M243 60 l5 5 l9 -10"/>
        <text class="pv-text-keep" x="274" y="67">Unchanged: same library, same reader.py, same backend and dashboard</text>
        <rect class="pv-fill-white pv-stroke-new" x="22" y="118" width="176" height="96" rx="16"/>
        <rect class="pv-fill-white" x="226" y="118" width="176" height="96" rx="16"/>
        <rect class="pv-fill-white" x="430" y="118" width="176" height="96" rx="16"/>
        <rect class="pv-fill-white" x="634" y="118" width="176" height="96" rx="16"/>
        <rect class="pv-fill-white" x="838" y="118" width="176" height="96" rx="16"/>
        <rect class="pv-fill-white" x="1042" y="118" width="136" height="96" rx="16"/>
        <text class="pv-text-boxtop" x="110" y="160" text-anchor="middle">RC522</text>
        <text class="pv-text-boxsub" x="110" y="188" text-anchor="middle">reads card ID</text>
        <text class="pv-text-boxtop" x="314" y="160" text-anchor="middle">mfrc522</text>
        <text class="pv-text-boxsub" x="314" y="188" text-anchor="middle">Python library</text>
        <text class="pv-text-boxtop" x="518" y="160" text-anchor="middle">reader.py</text>
        <text class="pv-text-boxsub" x="518" y="188" text-anchor="middle">same script</text>
        <text class="pv-text-boxtop" x="722" y="160" text-anchor="middle">POST tap</text>
        <text class="pv-text-boxsub" x="722" y="188" text-anchor="middle">presence API</text>
        <text class="pv-text-boxtop" x="926" y="160" text-anchor="middle">Flask</text>
        <text class="pv-text-boxsub" x="926" y="188" text-anchor="middle">records it</text>
        <text class="pv-text-boxtop" x="1110" y="160" text-anchor="middle">Dashboard</text>
        <text class="pv-text-boxsub" x="1110" y="188" text-anchor="middle">Present</text>
        <polygon class="pv-fill-ink" points="208,158 220,166 208,174"/>
        <polygon class="pv-fill-ink" points="412,158 424,166 412,174"/>
        <polygon class="pv-fill-ink" points="616,158 628,166 616,174"/>
        <polygon class="pv-fill-ink" points="820,158 832,166 820,174"/>
        <polygon class="pv-fill-ink" points="1024,158 1036,166 1024,174"/>
        <text class="pv-text-time" x="110" y="252" text-anchor="middle">was: CrowPi's reader</text>
        <text class="pv-text-time" x="110" y="278" text-anchor="middle">now: RC522 on a Pi 3</text>
      </svg>
    </div>
    <figcaption class="pv-caption">Only the reader hardware changes. Everything after it stays the same.</figcaption>
  </figure>

  <figure class="pv-figure">
    <div class="pv-stage">
      <svg class="pv-scene" viewBox="0 0 1200 250" role="img" aria-labelledby="tr-timeline-name">
        <title id="tr-timeline-name">Build timeline: RC522 ordered (done), parts arrive, wire it and read a first card, reader.py integration, Shay prints the case, assembly, mount by the door and test, classroom pilot.</title>
        <rect class="pv-fill-sky" width="1200" height="250" rx="28"/>
        <line class="pv-stroke-todo" x1="75" y1="96" x2="1125" y2="96"/>
        <circle class="pv-fill-ok" cx="75" cy="96" r="28"/>
        <path class="pv-stroke-tick" d="M62 97 l9 9 l17 -19"/>
        <circle class="pv-node-next" cx="225" cy="96" r="22"/>
        <circle class="pv-node-next" cx="375" cy="96" r="22"/>
        <circle class="pv-node-next" cx="525" cy="96" r="22"/>
        <circle class="pv-node-next" cx="675" cy="96" r="22"/>
        <circle class="pv-node-next" cx="825" cy="96" r="22"/>
        <circle class="pv-node-next" cx="975" cy="96" r="22"/>
        <circle class="pv-node-next" cx="1125" cy="96" r="22"/>
        <text class="pv-text-node" x="75" y="160" text-anchor="middle">Ordered</text>
        <text class="pv-text-time" x="75" y="188" text-anchor="middle">RC522 kit</text>
        <text class="pv-text-node" x="225" y="160" text-anchor="middle">Parts arrive</text>
        <text class="pv-text-node" x="375" y="160" text-anchor="middle">First read</text>
        <text class="pv-text-time" x="375" y="188" text-anchor="middle">wire + test card</text>
        <text class="pv-text-node" x="525" y="160" text-anchor="middle">reader.py</text>
        <text class="pv-text-time" x="525" y="188" text-anchor="middle">integration</text>
        <text class="pv-text-node" x="675" y="160" text-anchor="middle">Case</text>
        <text class="pv-text-time" x="675" y="188" text-anchor="middle">printed by Shay</text>
        <text class="pv-text-node" x="825" y="160" text-anchor="middle">Assembly</text>
        <text class="pv-text-time" x="825" y="188" text-anchor="middle">with Shay</text>
        <text class="pv-text-node" x="975" y="160" text-anchor="middle">Mount + test</text>
        <text class="pv-text-time" x="975" y="188" text-anchor="middle">by the door</text>
        <text class="pv-text-node" x="1125" y="160" text-anchor="middle">Pilot</text>
        <text class="pv-text-time" x="1125" y="188" text-anchor="middle">one classroom</text>
      </svg>
    </div>
    <figcaption class="pv-caption">Build timeline: the RC522 is ordered, and everything else comes next.</figcaption>
  </figure>

  <figure class="pv-figure">
    <div class="pv-parts">
      <div class="pv-part">
        <svg class="pv-part-icon" viewBox="0 0 64 48" aria-hidden="true"><rect class="pv-fill-pcbgreen" x="2" y="6" width="60" height="36" rx="4"/><rect class="pv-fill-ink" x="24" y="18" width="14" height="14" rx="2"/><rect class="pv-fill-laptop" x="48" y="12" width="12" height="10" rx="1"/><rect class="pv-fill-laptop" x="48" y="26" width="12" height="10" rx="1"/></svg>
        <span class="pv-part-name">Raspberry Pi 3</span>
        <span class="rfid-presence-pill rfid-presence-pill-good">Have</span>
      </div>
      <div class="pv-part">
        <svg class="pv-part-icon" viewBox="0 0 64 48" aria-hidden="true"><rect class="pv-fill-pcbblue" x="6" y="4" width="52" height="40" rx="3"/><rect class="pv-stroke-coil" x="12" y="10" width="30" height="28" rx="5"/><rect class="pv-fill-ink" x="46" y="18" width="8" height="8" rx="1"/></svg>
        <span class="pv-part-name">RC522 kit · ~$14</span>
        <span class="rfid-presence-pill rfid-presence-pill-warn">Ordered</span>
      </div>
      <div class="pv-part">
        <svg class="pv-part-icon" viewBox="0 0 64 48" aria-hidden="true"><rect class="pv-fill-white pv-stroke-case" x="4" y="8" width="36" height="24" rx="4"/><circle class="pv-fill-tag" cx="50" cy="32" r="10"/><circle class="pv-fill-sky" cx="50" cy="24" r="2.5"/></svg>
        <span class="pv-part-name">Cards + fobs</span>
        <span class="rfid-presence-pill rfid-presence-pill-neutral">In the kit</span>
      </div>
      <div class="pv-part">
        <svg class="pv-part-icon" viewBox="0 0 64 48" aria-hidden="true"><rect class="pv-fill-case pv-stroke-case" x="6" y="10" width="52" height="32" rx="8"/><circle class="pv-fill-pad" cx="32" cy="26" r="8"/></svg>
        <span class="pv-part-name">Case</span>
        <span class="rfid-presence-pill rfid-presence-pill-neutral">3D printed</span>
      </div>
      <div class="pv-part">
        <svg class="pv-part-icon" viewBox="0 0 64 48" aria-hidden="true"><path class="pv-wire pv-wire-sda" d="M4 14 C24 14 40 34 60 34"/><path class="pv-wire pv-wire-mosi" d="M4 24 C24 24 40 40 60 40"/><path class="pv-wire pv-wire-power" d="M4 34 C24 34 40 46 60 46"/></svg>
        <span class="pv-part-name">GPIO board + cables</span>
        <span class="rfid-presence-pill rfid-presence-pill-good">Have</span>
      </div>
    </div>
    <!-- Replace this placeholder with:
         <img class="pv-photo" src="{{ site.baseurl }}/images/presence-system/pi3-parts.jpg" alt="Raspberry Pi 3 with GPIO extension board and ribbon cable"> -->
    <div class="pp-photo-placeholder pv-parts-photo">Photo of the Pi 3, GPIO board and ribbon cable goes here</div>
    <figcaption class="pv-caption">Parts: most are already here, and the RC522 kit is on order.</figcaption>
  </figure>

  <figure class="pv-figure">
    <div class="pv-why">
      <div class="pv-why-col">
        <div class="pv-why-head">Option D: for</div>
        <div class="pv-tile pv-tile-pass"><span class="pv-tile-icon">✓</span><span class="pv-tile-text">Costs a few dollars</span></div>
        <div class="pv-tile pv-tile-pass"><span class="pv-tile-icon">✓</span><span class="pv-tile-text">Works this week</span></div>
        <div class="pv-tile pv-tile-pass"><span class="pv-tile-icon">✓</span><span class="pv-tile-text">No code changes</span></div>
        <div class="pv-tile pv-tile-pass"><span class="pv-tile-icon">✓</span><span class="pv-tile-text">Same fob IDs as today</span></div>
      </div>
      <div class="pv-why-col">
        <div class="pv-why-head">Watch out</div>
        <div class="pv-tile pv-tile-caution"><span class="pv-tile-icon">!</span><span class="pv-tile-text">Short cable: the Pi sits right behind the reader <em class="pv-why-fix">Pi goes in the same case</em></span></div>
        <div class="pv-tile pv-tile-caution"><span class="pv-tile-icon">!</span><span class="pv-tile-text">Looks like a prototype <em class="pv-why-fix">Shay's printed case</em></span></div>
      </div>
    </div>
    <figcaption class="pv-caption">Why Option D, from our options doc: cheap, fast, and no code changes.</figcaption>
  </figure>

  <div class="ocs__card pv-talk">
    <h3 class="ocs__section-title">Talking points</h3>

    <h4>Why replace the CrowPi</h4>
    <p>The CrowPi is a whole learning kit (screen, keyboard and dozens of sensors in a suitcase-style case), and we only use its RFID reader. A small dedicated reader can be mounted by the door and left there, and it frees up the CrowPi.</p>

    <h4>Why build our own (Option D)</h4>
    <ul>
      <li>Costs a few dollars and can work this week (options doc).</li>
      <li>No code changes: <code>reader.py</code> already reads cards with the <code>mfrc522</code> Python library, the standard RC522 library, and the doc says the CrowPi uses the same chip. The fob IDs we've already registered should stay the same.</li>
      <li>Mr. Mortensen backed it: he's bringing supplies and ordering the RC522, and Shay is printing a case. Building it ourselves also means we control the hardware and can fix it.</li>
    </ul>

    <h4>What the RC522 is and how it connects</h4>
    <ul>
      <li>An RFID reader board built on NXP's MFRC522 chip. It works at 13.56 MHz and reads MIFARE cards like the S50 (MIFARE Classic 1K) cards and key fobs in the kit.</li>
      <li>It talks to the Pi over SPI: 8 wires to the GPIO header (see the wiring diagram). IRQ isn't used.</li>
      <li><strong>Power is 3.3 V only.</strong> The chip's supply range is 2.5–3.6 V and the absolute maximum is 4.0 V, so the Pi's 5 V pins would destroy it.</li>
      <li>SPI has to be switched on in the Pi's settings (<code>raspi-config</code> → Interface Options → SPI) before the library can see the board.</li>
    </ul>

    <h4>Who's doing what</h4>
    <ul>
      <li><strong>Mr. Mortensen:</strong> supplies, and the RC522 order.</li>
      <li><strong>Shay:</strong> prints the case and helps with assembly.</li>
      <li><strong>Us:</strong> wiring, software, and testing.</li>
    </ul>

    <h4>How we'll test it (planned, not done yet)</h4>
    <ol>
      <li><strong>First card read:</strong> the Pi prints the card's ID. Check it matches the ID already registered for that fob.</li>
      <li><strong>End to end:</strong> tap, then the dashboard shows Present. Same checks as the Postman demo.</li>
      <li><strong>Repeated taps:</strong> tap many times and count any missed or doubled reads.</li>
      <li><strong>Read distance:</strong> measure how far away a tag still reads, both bare and stuck on a laptop.</li>
    </ol>

    <h4>Open questions</h4>
    <ul>
      <li><strong>Network:</strong> the Pi 3 will hit the same school-wifi problem as the CrowPi (devices can't reach my laptop). Options: Ethernet, a phone hotspot, or hosting Flask somewhere both can reach.</li>
      <li><strong>PN532 HAT:</strong> do we need it at all, or is the RC522 enough?</li>
      <li><strong>Read range through a laptop or case:</strong> laptop bodies (often metal) can weaken 13.56 MHz reads. We need to test where the tag sits.</li>
    </ul>

    <h4>Sources</h4>
    <ul class="pv-sources">
      <li>NXP MFRC522 data sheet: supply voltage 2.5–3.6 V (quick reference data), absolute maximum 4.0 V (limiting values). <a href="https://www.nxp.com/docs/en/data-sheet/MFRC522.pdf">nxp.com/docs/en/data-sheet/MFRC522.pdf</a></li>
      <li>MFRC522-python library (v0.0.7), <code>MFRC522.py</code>: SPI bus 0, device 0 (CE0), BOARD pin numbering, reset on pin 22 by default. <a href="https://github.com/pimylifeup/MFRC522-python">github.com/pimylifeup/MFRC522-python</a></li>
      <li>Raspberry Pi SPI0 pins: MOSI 19, MISO 21, SCLK 23, CE0 24; 3.3 V on pin 1, GND on pin 6. <a href="https://pinout.xyz/pinout/spi">pinout.xyz/pinout/spi</a></li>
    </ul>
    <p class="pv-unverified">Not verified on hardware yet: the wiring, the first read, and read range. All of it is planned until the parts arrive.</p>
  </div>
</div>
