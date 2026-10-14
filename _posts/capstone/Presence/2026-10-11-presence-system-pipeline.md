---
toc: false
layout: post
title: Classroom Presence System, Pipeline
description: How one RFID tap travels from the CrowPi to the live dashboard, and what comes next.
permalink: /capstone/presence-system/pipeline/
year: "2026-2027"
rp_active: pipeline
---

<!-- markdownlint-disable MD033 MD010 MD012 -->
<div class="rfid-presence-infograph">
  <div class="rfid-presence-header">
    <div class="ocs__badge">Pipeline</div>
    <h2 class="ocs__section-title">From tap to dashboard</h2>
  </div>

  {% include presence-system-nav.html %}

  <figure class="pv-figure">
    <div class="pv-stage">
      <svg class="pv-scene" viewBox="0 0 1200 640" role="img" aria-labelledby="pv-hero-name">
        <title id="pv-hero-name">A student taps the RFID tag on their laptop on the CrowPi reader by the classroom door. Flask logs the tap and the dashboard shows the student as present. A wall camera, drawn dashed, is the next step.</title>
        <defs><clipPath id="pv-hero-clip"><rect width="1200" height="640" rx="28"/></clipPath></defs>
        <g clip-path="url(#pv-hero-clip)">
          <rect class="pv-fill-sky" width="1200" height="640"/>
          <rect class="pv-fill-floor" y="478" width="1200" height="162"/>
          <rect class="pv-fill-base" y="470" width="1200" height="10"/>
          <polygon class="pv-fill-lightfloor" points="138,480 332,480 410,640 64,640"/>
          <rect class="pv-fill-ink" x="118" y="188" width="234" height="292"/>
          <rect class="pv-fill-light" x="138" y="208" width="194" height="272"/>
          <polygon class="pv-fill-door" points="276,222 332,208 332,480 276,466"/>
          <circle class="pv-fill-sky" cx="288" cy="350" r="5"/>
          <rect class="pv-fill-ink" x="175" y="140" width="120" height="36" rx="8"/>
          <text class="pv-text-sign" x="235" y="165" text-anchor="middle">Room 1</text>
          <g class="pv-next">
            <polygon class="pv-next-cone" points="566,136 450,206 562,302"/>
            <path class="pv-next-line" d="M452 226 v-24 h24 M538 202 h24 v24 M562 282 v24 h-24 M476 306 h-24 v-24"/>
            <rect class="pv-next-line" x="650" y="108" width="16" height="48" rx="3"/>
            <rect class="pv-next-line" x="560" y="120" width="92" height="36" rx="13" transform="rotate(20 606 138)"/>
            <circle class="pv-next-line" cx="572" cy="128" r="9"/>
          </g>
          <rect class="pv-fill-nextpill" x="676" y="150" width="152" height="34" rx="17"/>
          <text class="pv-text-nextpill" x="752" y="173" text-anchor="middle">Camera · next</text>
          <ellipse class="pv-fill-shadow" cx="508" cy="606" rx="96" ry="11"/>
          <line class="pv-stroke-legback" x1="494" y1="452" x2="470" y2="584"/>
          <line class="pv-stroke-legfront" x1="520" y1="452" x2="550" y2="584"/>
          <rect class="pv-fill-shoe" x="442" y="582" width="54" height="22" rx="11"/>
          <rect class="pv-fill-shoe" x="530" y="582" width="58" height="22" rx="11"/>
          <line class="pv-stroke-sleeve" x1="476" y1="330" x2="464" y2="424"/>
          <circle class="pv-fill-skinshade" cx="463" cy="432" r="11"/>
          <rect class="pv-fill-shirt" x="460" y="300" width="96" height="172" rx="46"/>
          <rect class="pv-fill-skin" x="496" y="278" width="22" height="28"/>
          <circle class="pv-fill-hair" cx="498" cy="246" r="38"/>
          <circle class="pv-fill-skin" cx="510" cy="254" r="33"/>
          <circle class="pv-fill-skinshade" cx="500" cy="260" r="6"/>
          <circle class="pv-fill-ink" cx="528" cy="250" r="3.5"/>
          <rect class="pv-fill-ink" x="700" y="455" width="222" height="14" rx="4"/>
          <rect class="pv-fill-ink" x="718" y="469" width="12" height="118"/>
          <rect class="pv-fill-ink" x="892" y="469" width="12" height="118"/>
          <rect class="pv-fill-crowpi" x="742" y="405" width="160" height="50" rx="8"/>
          <rect class="pv-fill-pad" x="752" y="412" width="48" height="36" rx="5"/>
          <rect class="pv-fill-screen" x="812" y="414" width="80" height="32" rx="4"/>
          <line class="pv-stroke-sleeve" x1="532" y1="334" x2="640" y2="410"/>
          <g transform="translate(36 22) rotate(-12 680 380)">
            <rect class="pv-fill-laptop" x="600" y="340" width="150" height="92" rx="8"/>
            <rect class="pv-fill-laptopedge" x="600" y="424" width="150" height="8" rx="3"/>
            <rect class="pv-fill-tag" x="718" y="396" width="24" height="24" rx="5"/>
            <circle class="pv-fill-white" cx="730" cy="408" r="5"/>
          </g>
          <circle class="pv-fill-skin" cx="645" cy="413" r="12"/>
          <path class="pv-stroke-wave" d="M806 392 q14 16 0 32 M818 384 q22 24 0 48 M830 376 q30 32 0 64"/>
          <circle class="pv-fill-step" cx="700" cy="330" r="24"/>
          <text class="pv-text-stepnum" x="700" y="339" text-anchor="middle">1</text>
          <text class="pv-text-step" x="736" y="339">Tap laptop tag</text>
          <line class="pv-stroke-flow" x1="908" y1="428" x2="966" y2="412"/>
          <polygon class="pv-fill-ink" points="978,409 962,404 965,420"/>
          <rect class="pv-fill-crowpi" x="984" y="300" width="124" height="36" rx="8"/>
          <rect class="pv-fill-crowpi" x="984" y="344" width="124" height="36" rx="8"/>
          <rect class="pv-fill-crowpi" x="984" y="388" width="124" height="36" rx="8"/>
          <circle class="pv-fill-screen" cx="1004" cy="318" r="5"/>
          <circle class="pv-fill-screen" cx="1004" cy="362" r="5"/>
          <circle class="pv-fill-screen" cx="1004" cy="406" r="5"/>
          <circle class="pv-fill-step" cx="1046" cy="262" r="24"/>
          <text class="pv-text-stepnum" x="1046" y="271" text-anchor="middle">2</text>
          <text class="pv-text-step" x="1046" y="460" text-anchor="middle">Flask logs it</text>
          <line class="pv-stroke-flow" x1="1046" y1="232" x2="1046" y2="160"/>
          <polygon class="pv-fill-ink" points="1046,146 1038,162 1054,162"/>
          <rect class="pv-fill-cardshade" x="744" y="42" width="420" height="104" rx="20"/>
          <rect class="pv-fill-white" x="740" y="36" width="420" height="104" rx="20"/>
          <circle class="pv-fill-ok" cx="800" cy="88" r="30"/>
          <path class="pv-stroke-tick" d="M786 89 l10 10 l19 -21"/>
          <text class="pv-text-notify" x="846" y="82">Vibha is present</text>
          <text class="pv-text-notifysub" x="846" y="114">Room 1, 8:02 AM</text>
          <circle class="pv-fill-step" cx="700" cy="88" r="24"/>
          <text class="pv-text-stepnum" x="700" y="97" text-anchor="middle">3</text>
        </g>
      </svg>
    </div>
    <figcaption class="pv-caption">How it works today: tap the laptop tag, and the teacher's dashboard updates in about 2 seconds.</figcaption>
  </figure>

  <figure class="pv-figure">
    <div class="pv-stage">
      <svg class="pv-scene" viewBox="0 0 1200 300" role="img" aria-labelledby="pv-problem-name">
        <title id="pv-problem-name">One 66-minute class period. The student arrives 12 minutes late and is out for 17 minutes mid-class, but roll call still records Present.</title>
        <rect class="pv-fill-sky" width="1200" height="300" rx="28"/>
        <text class="pv-text-step" x="120" y="58">One class period</text>
        <rect class="pv-fill-track" x="120" y="112" width="740" height="44" rx="22"/>
        <rect class="pv-fill-present" x="254" y="112" width="202" height="44" rx="22"/>
        <rect class="pv-fill-present" x="647" y="112" width="213" height="44" rx="22"/>
        <rect class="pv-stroke-gap" x="122" y="114" width="130" height="40" rx="20"/>
        <rect class="pv-stroke-gap" x="458" y="114" width="187" height="40" rx="20"/>
        <text class="pv-text-miss" x="187" y="100" text-anchor="middle">12 min late</text>
        <text class="pv-text-miss" x="551" y="100" text-anchor="middle">17 min out</text>
        <text class="pv-text-time" x="120" y="188">8:35</text>
        <text class="pv-text-time" x="860" y="188" text-anchor="end">9:41</text>
        <rect class="pv-fill-cardshade" x="904" y="66" width="260" height="168" rx="18"/>
        <rect class="pv-fill-white" x="900" y="60" width="260" height="168" rx="18"/>
        <text class="pv-text-notify" x="926" y="104">Roll call</text>
        <rect class="pv-fill-track" x="926" y="120" width="208" height="3"/>
        <text class="pv-text-notifysub" x="926" y="176">Vibha</text>
        <text class="pv-text-notifysub" x="1094" y="176" text-anchor="end">Present</text>
        <circle class="pv-fill-ok" cx="1126" cy="168" r="17"/>
        <path class="pv-stroke-ticksmall" d="M1118 168 l6 6 l11 -12"/>
      </svg>
    </div>
    <figcaption class="pv-caption">The problem: roll call says Present, but this student missed 29 of 66 minutes.</figcaption>
  </figure>

  <div class="pv-live">
    <figure class="pv-figure">
      <img class="pv-photo pv-photo-crowpi" src="{{ site.baseurl }}/images/presence-system/crowpi.jpg" alt="The CrowPi tap station: a Raspberry Pi board in a case with a screen, RFID pad at the bottom left, and a keyboard">
      <figcaption class="pv-caption">Tap station: RFID pad at bottom left.</figcaption>
    </figure>
    <figure class="pv-figure">
      <img class="pv-photo" src="{{ site.baseurl }}/images/presence-system/dashboard-after-tap.png" alt="Live dashboard two seconds after a tap, with Vibha marked Present">
      <figcaption class="pv-caption">Teacher dashboard: Present two seconds after a tap.</figcaption>
    </figure>
  </div>

  <figure class="pv-figure">
    <div class="pv-flow">
      <div class="pv-flow-step">
        <span class="pv-flow-num">1</span>
        <span class="pv-method pv-method-post">POST</span>
        <span class="pv-flow-name">Log in</span>
        <span class="rfid-presence-pill rfid-presence-pill-neutral">teacher session</span>
      </div>
      <div class="pv-flow-step">
        <span class="pv-flow-num">2</span>
        <span class="pv-method pv-method-post">POST</span>
        <span class="pv-flow-name">Start demo period</span>
        <span class="rfid-presence-pill rfid-presence-pill-neutral">everyone: not yet arrived</span>
      </div>
      <div class="pv-flow-step">
        <span class="pv-flow-num">3</span>
        <span class="pv-method pv-method-post">POST</span>
        <span class="pv-flow-name">Tap</span>
        <span class="rfid-presence-pill rfid-presence-pill-good">Present</span>
      </div>
      <div class="pv-flow-step">
        <span class="pv-flow-num">4</span>
        <span class="pv-method pv-method-post">POST</span>
        <span class="pv-flow-name">Tap again</span>
        <span class="rfid-presence-pill rfid-presence-pill-warn">Stepped Out</span>
      </div>
      <div class="pv-flow-step">
        <span class="pv-flow-num">5</span>
        <span class="pv-method pv-method-post">POST</span>
        <span class="pv-flow-name">Same tap, resent</span>
        <span class="rfid-presence-pill rfid-presence-pill-good">not counted twice</span>
      </div>
      <div class="pv-flow-step">
        <span class="pv-flow-num">6</span>
        <span class="pv-method pv-method-post">POST</span>
        <span class="pv-flow-name">Fake device key</span>
        <span class="rfid-presence-pill rfid-presence-pill-bad">401 rejected</span>
      </div>
      <div class="pv-flow-step">
        <span class="pv-flow-num">7</span>
        <span class="pv-method pv-method-get">GET</span>
        <span class="pv-flow-name">Status</span>
        <span class="rfid-presence-pill rfid-presence-pill-neutral">same data as dashboard</span>
      </div>
    </div>
    <figcaption class="pv-caption">Postman stands in for the CrowPi: same request, same server, and the dashboard updates live.</figcaption>
  </figure>

  <figure class="pv-figure">
    <div class="pv-diagram">
    <pre class="mermaid">%%{init: {"theme": "base", "themeVariables": {"primaryColor": "#ffffff", "primaryTextColor": "#16213b", "primaryBorderColor": "#16213b", "lineColor": "#16213b", "edgeLabelBackground": "#dfe7ef", "fontSize": "20px"}, "flowchart": {"htmlLabels": false}}}%%
flowchart LR
    T(["Student taps laptop tag"]) --> C["CrowPi
RFID reader"]
    C -- "tap + time" --> F[("Flask API
+ database")]
    D["Live dashboard
OCS Pages"] -- "status every 2s" --> F
    M["Jarvis camera
Mac Mini"] -. "next: face check" .-> F
    classDef next stroke-dasharray: 6 4
    class M next
</pre>
    </div>
    <figcaption class="pv-caption">Architecture: solid lines run today; the dashed camera path is next.</figcaption>
  </figure>

  <figure class="pv-figure">
    <svg class="pv-scene" viewBox="0 0 1200 400" role="img" aria-labelledby="pv-roadmap-name">
      <title id="pv-roadmap-name">Where it's going. Now: tap the laptop tag on the CrowPi, working. Next: tap plus a camera face check. Later: walk through the front or back door and a UHF reader reads the laptop tag automatically.</title>
      <rect class="pv-fill-sky" x="0" width="360" height="400" rx="24"/>
      <path class="pv-fill-floor" d="M0 300 h360 v76 a24 24 0 0 1 -24 24 h-312 a24 24 0 0 1 -24 -24 z"/>
      <circle class="pv-fill-step" cx="40" cy="44" r="22"/>
      <text class="pv-text-stepnum" x="40" y="53" text-anchor="middle">1</text>
      <text class="pv-text-step" x="74" y="53">Now</text>
      <rect class="pv-fill-ok" x="236" y="26" width="104" height="34" rx="17"/>
      <text class="pv-text-pill" x="288" y="49" text-anchor="middle">Working</text>
      <line class="pv-stroke-sleeve" x1="10" y1="168" x2="66" y2="196"/>
      <g transform="rotate(-14 130 196)">
        <rect class="pv-fill-laptop" x="70" y="156" width="120" height="76" rx="7"/>
        <rect class="pv-fill-laptopedge" x="70" y="226" width="120" height="6" rx="3"/>
        <rect class="pv-fill-tag" x="162" y="202" width="20" height="20" rx="4"/>
        <circle class="pv-fill-white" cx="172" cy="212" r="4"/>
      </g>
      <circle class="pv-fill-skin" cx="70" cy="198" r="11"/>
      <rect class="pv-fill-ink" x="110" y="272" width="210" height="12" rx="4"/>
      <rect class="pv-fill-crowpi" x="150" y="222" width="150" height="50" rx="8"/>
      <rect class="pv-fill-pad" x="160" y="229" width="44" height="36" rx="5"/>
      <rect class="pv-fill-screen" x="214" y="231" width="76" height="32" rx="4"/>
      <path class="pv-stroke-wave" d="M214 190 q12 14 0 28 M226 182 q20 22 0 44"/>
      <text class="pv-text-small" x="180" y="350" text-anchor="middle">Tap on CrowPi</text>
      <polygon class="pv-fill-chevron" points="374,180 404,200 374,220"/>
      <rect class="pv-fill-sky" x="420" width="360" height="400" rx="24"/>
      <path class="pv-fill-floor" d="M420 300 h360 v76 a24 24 0 0 1 -24 24 h-312 a24 24 0 0 1 -24 -24 z"/>
      <circle class="pv-fill-step" cx="460" cy="44" r="22"/>
      <text class="pv-text-stepnum" x="460" y="53" text-anchor="middle">2</text>
      <text class="pv-text-step" x="494" y="53">Next</text>
      <rect class="pv-fill-nextpill" x="656" y="26" width="104" height="34" rx="17"/>
      <text class="pv-text-nextpill" x="708" y="49" text-anchor="middle">~Oct 19</text>
      <circle class="pv-fill-hair" cx="462" cy="118" r="27"/>
      <circle class="pv-fill-skin" cx="470" cy="124" r="23"/>
      <g class="pv-next">
        <path class="pv-next-line" d="M436 112 v-16 h16 M488 96 h16 v16 M504 140 v16 h-16 M452 156 h-16 v-16"/>
        <polygon class="pv-next-cone" points="676,96 506,100 506,152"/>
        <rect class="pv-next-line" x="672" y="80" width="72" height="30" rx="11" transform="rotate(16 708 95)"/>
        <rect class="pv-next-line" x="742" y="70" width="12" height="40" rx="3"/>
      </g>
      <line class="pv-stroke-sleeve" x1="430" y1="168" x2="486" y2="196"/>
      <g transform="rotate(-14 550 196)">
        <rect class="pv-fill-laptop" x="490" y="156" width="120" height="76" rx="7"/>
        <rect class="pv-fill-laptopedge" x="490" y="226" width="120" height="6" rx="3"/>
        <rect class="pv-fill-tag" x="582" y="202" width="20" height="20" rx="4"/>
        <circle class="pv-fill-white" cx="592" cy="212" r="4"/>
      </g>
      <circle class="pv-fill-skin" cx="490" cy="198" r="11"/>
      <rect class="pv-fill-ink" x="530" y="272" width="210" height="12" rx="4"/>
      <rect class="pv-fill-crowpi" x="570" y="222" width="150" height="50" rx="8"/>
      <rect class="pv-fill-pad" x="580" y="229" width="44" height="36" rx="5"/>
      <rect class="pv-fill-screen" x="634" y="231" width="76" height="32" rx="4"/>
      <path class="pv-stroke-wave" d="M634 190 q12 14 0 28 M646 182 q20 22 0 44"/>
      <text class="pv-text-small" x="600" y="350" text-anchor="middle">Tap + camera check</text>
      <polygon class="pv-fill-chevron" points="794,180 824,200 794,220"/>
      <g class="pv-later">
        <rect class="pv-fill-sky" x="840" width="360" height="400" rx="24"/>
        <path class="pv-fill-floor" d="M840 300 h360 v76 a24 24 0 0 1 -24 24 h-312 a24 24 0 0 1 -24 -24 z"/>
        <circle class="pv-fill-step" cx="880" cy="44" r="22"/>
        <text class="pv-text-stepnum" x="880" y="53" text-anchor="middle">3</text>
        <text class="pv-text-step" x="914" y="53">Later</text>
        <rect class="pv-fill-nextpill" x="1076" y="26" width="104" height="34" rx="17"/>
        <text class="pv-text-nextpill" x="1128" y="49" text-anchor="middle">Later</text>
        <text class="pv-text-small" x="937" y="104" text-anchor="middle">Front</text>
        <text class="pv-text-small" x="1103" y="104" text-anchor="middle">Back</text>
        <rect class="pv-fill-ink" x="880" y="116" width="114" height="186"/>
        <rect class="pv-fill-light" x="892" y="128" width="90" height="174"/>
        <rect class="pv-fill-ink" x="1046" y="116" width="114" height="186"/>
        <rect class="pv-fill-light" x="1058" y="128" width="90" height="174"/>
        <rect class="pv-fill-tag" x="917" y="130" width="40" height="12" rx="3"/>
        <rect class="pv-fill-tag" x="1083" y="130" width="40" height="12" rx="3"/>
        <path class="pv-stroke-wave" d="M923 154 q14 10 28 0 M917 166 q20 14 40 0 M1089 154 q14 10 28 0 M1083 166 q20 14 40 0"/>
        <circle class="pv-fill-hair" cx="934" cy="190" r="15"/>
        <circle class="pv-fill-skin" cx="938" cy="193" r="13"/>
        <rect class="pv-fill-shirt" x="918" y="208" width="38" height="58" rx="18"/>
        <rect class="pv-fill-laptop" x="948" y="222" width="30" height="22" rx="3"/>
        <line class="pv-stroke-legsmall" x1="930" y1="264" x2="922" y2="298"/>
        <line class="pv-stroke-legsmall" x1="944" y1="264" x2="954" y2="298"/>
        <text class="pv-text-small" x="1020" y="350" text-anchor="middle">Walk through, UHF reads tag</text>
      </g>
    </svg>
    <figcaption class="pv-caption">Where it's going: today a tap, next a face check, later no tap at all.</figcaption>
  </figure>

  <figure class="pv-figure">
    <div class="pv-stage">
      <svg class="pv-scene" viewBox="0 0 1200 240" role="img" aria-labelledby="pv-plan-name">
        <title id="pv-plan-name">Plan: done through October 11, today's review, camera around October 19, second tap reader, Cycle 1 minutes accuracy, then a classroom pilot.</title>
        <rect class="pv-fill-sky" width="1200" height="240" rx="28"/>
        <line class="pv-stroke-done" x1="100" y1="96" x2="300" y2="96"/>
        <line class="pv-stroke-todo" x1="300" y1="96" x2="1100" y2="96"/>
        <circle class="pv-fill-ok" cx="100" cy="96" r="28"/>
        <path class="pv-stroke-tick" d="M87 97 l9 9 l17 -19"/>
        <circle class="pv-fill-tag" cx="300" cy="96" r="32"/>
        <circle class="pv-fill-white" cx="300" cy="96" r="11"/>
        <circle class="pv-node-next" cx="500" cy="96" r="24"/>
        <circle class="pv-node-next" cx="700" cy="96" r="24"/>
        <circle class="pv-node-next" cx="900" cy="96" r="24"/>
        <circle class="pv-node-next" cx="1100" cy="96" r="24"/>
        <text class="pv-text-step" x="100" y="164" text-anchor="middle">Done</text>
        <text class="pv-text-time" x="100" y="194" text-anchor="middle">Sep – Oct 11</text>
        <text class="pv-text-step" x="300" y="164" text-anchor="middle">Today</text>
        <text class="pv-text-time" x="300" y="194" text-anchor="middle">Oct 12 review</text>
        <text class="pv-text-step" x="500" y="164" text-anchor="middle">Camera</text>
        <text class="pv-text-time" x="500" y="194" text-anchor="middle">~Oct 19, Jarvis</text>
        <text class="pv-text-step" x="700" y="164" text-anchor="middle">Second reader</text>
        <text class="pv-text-time" x="700" y="194" text-anchor="middle">ordered</text>
        <text class="pv-text-step" x="900" y="164" text-anchor="middle">Cycle 1</text>
        <text class="pv-text-time" x="900" y="194" text-anchor="middle">minutes accuracy</text>
        <text class="pv-text-step" x="1100" y="164" text-anchor="middle">Pilot</text>
        <text class="pv-text-time" x="1100" y="194" text-anchor="middle">one classroom</text>
      </svg>
    </div>
    <figcaption class="pv-caption">Plan: next up is the camera with the Jarvis team.</figcaption>
  </figure>

  <details class="pv-more">
    <summary>Technical details</summary>

    <div class="pp-progress">
      <div class="pp-progress-item">
        <span class="rfid-presence-pill rfid-presence-pill-good">Working</span>
        <div class="pp-progress-name">RFID tap</div>
        <div class="pp-progress-note">CrowPi reader</div>
      </div>
      <div class="pp-progress-item">
        <span class="rfid-presence-pill rfid-presence-pill-good">Working</span>
        <div class="pp-progress-name">Flask API</div>
        <div class="pp-progress-note">Bell schedule, periods, tardy</div>
      </div>
      <div class="pp-progress-item">
        <span class="rfid-presence-pill rfid-presence-pill-good">Working</span>
        <div class="pp-progress-name">Live dashboard</div>
        <div class="pp-progress-note">Updates every 2 seconds</div>
      </div>
      <div class="pp-progress-item">
        <span class="rfid-presence-pill rfid-presence-pill-warn">Next</span>
        <div class="pp-progress-name">Camera check</div>
        <div class="pp-progress-note">Jarvis team, target Oct 19</div>
      </div>
      <div class="pp-progress-item">
        <span class="rfid-presence-pill rfid-presence-pill-neutral">Ordered</span>
        <div class="pp-progress-name">Second tap reader</div>
        <div class="pp-progress-note">Hardware on the way</div>
      </div>
    </div>

    <div class="ocs__card">
      <h3 class="ocs__section-title">The dashboard, before and after a tap</h3>
      <div class="pp-shots">
        <figure class="pp-shot">
          <img src="{{ site.baseurl }}/images/presence-system/dashboard-before-tap.png" alt="Dashboard with a demo period running and every student marked Not Yet Arrived">
          <figcaption>Before: period running, nobody has tapped</figcaption>
        </figure>
        <figure class="pp-shot">
          <img src="{{ site.baseurl }}/images/presence-system/dashboard-after-tap.png" alt="Dashboard two seconds after a tap, with Vibha marked Present">
          <figcaption>After: one tap, shown as Present</figcaption>
        </figure>
      </div>
    </div>

    <div class="ocs__card">
      <h3 class="ocs__section-title">Plan</h3>
      <ol class="pp-timeline">
        <li class="pp-step pp-step-done"><span class="pp-step-when">Sep</span><span class="pp-step-what">CrowPi tap reaches OCS</span></li>
        <li class="pp-step pp-step-done"><span class="pp-step-when">Oct 5</span><span class="pp-step-what">Shared presence API, bell schedule, live dashboard</span></li>
        <li class="pp-step pp-step-done"><span class="pp-step-when">Oct 6</span><span class="pp-step-what">Camera endpoints ready on our side</span></li>
        <li class="pp-step pp-step-done"><span class="pp-step-when">Oct 11</span><span class="pp-step-what">Live demo working</span></li>
        <li class="pp-step"><span class="pp-step-when">Oct 16</span><span class="pp-step-what">Camera connection test (Jarvis)</span></li>
        <li class="pp-step"><span class="pp-step-when">~Oct 19</span><span class="pp-step-what">Camera face check on every tap</span></li>
        <li class="pp-step"><span class="pp-step-when">TBD</span><span class="pp-step-what">Second tap reader (ordered)</span></li>
        <li class="pp-step"><span class="pp-step-when">TBD</span><span class="pp-step-what">Cycle 1: minutes within 2 min of a hand log (H2)</span></li>
        <li class="pp-step"><span class="pp-step-when">TBD</span><span class="pp-step-what">Classroom pilot</span></li>
      </ol>
    </div>
    <p class="pv-caption">The step-by-step tap sequence is on the <a href="/capstone/presence-system/technical/">Technical Detail</a> page.</p>
  </details>
</div>
