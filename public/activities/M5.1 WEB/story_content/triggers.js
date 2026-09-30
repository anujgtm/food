function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5rpHXjMzGWS":
        Script1();
        break;
      case "5o1nu1IrMdc":
        Script2();
        break;
      case "6H2npaVpRBJ":
        Script3();
        break;
      case "643VzwqfeMi":
        Script4();
        break;
      case "5s6FRGIJiXS":
        Script5();
        break;
      case "5g8I00Lk4Jl":
        Script6();
        break;
      case "6aYKmSKUTD2":
        Script7();
        break;
      case "5hlQrYuG6Vp":
        Script8();
        break;
      case "6Dl0YYxqkSB":
        Script9();
        break;
      case "65qT22UDxHs":
        Script10();
        break;
      case "6g14tAqqC9M":
        Script11();
        break;
      case "6XJsB1EOklV":
        Script12();
        break;
      case "6PYTqFm7CZY":
        Script13();
        break;
      case "6JFiC2v4W3X":
        Script14();
        break;
      case "5xxQ5eeWAc1":
        Script15();
        break;
      case "6rYrO9PH3Lq":
        Script16();
        break;
      case "6rN470Du9GP":
        Script17();
        break;
      case "5nQhLP7KO1E":
        Script18();
        break;
      case "6qj42BoCRcJ":
        Script19();
        break;
      case "6qLUWVGbS5m":
        Script20();
        break;
      case "5ieDgjsY55i":
        Script21();
        break;
      case "6oOqODLeE0X":
        Script22();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  player.once(() => {
const target = object('6T0Qg0r2pBc');
const duration = 750;
const easing = 'ease-out';
const id = '5czWUAZ3YnQ';
const pulseAmount = 0.07;
const delay = 3792;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  const target = object('5eQiNUrTJf4');
const duration = 750;
const easing = 'ease-out';
const id = '6cAusmTDPV5';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('6T0Qg0r2pBc');
const duration = 750;
const easing = 'ease-out';
const id = '5czWUAZ3YnQ';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  player.once(() => {
const target = object('5mojUZgDGUT');
const duration = 750;
const easing = 'ease-out';
const id = '6Lf4NvKC0fc';
const shakeAmount = 5;
const delay = 2505.9999;
addToTimeline(
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script5 = function()
{
  player.once(() => {
const target = object('6XSuUBCJZHU');
const duration = 750;
const easing = 'ease-out';
const id = '6DlZe0MnwH9';
const shakeAmount = 5;
const delay = 2250;
addToTimeline(
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script6 = function()
{
  player.once(() => {
const target = object('6gyJvfGNq9U');
const duration = 750;
const easing = 'ease-out';
const id = '6AEpS9MjOEe';
const shakeAmount = 5;
const delay = 2380.9999;
addToTimeline(
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script7 = function()
{
  player.once(() => {
const target = object('6ipERIFV8Dd');
const duration = 750;
const easing = 'ease-out';
const id = '5jYp4gxRgE9';
const shakeAmount = 5;
const delay = 2755.9999;
addToTimeline(
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script8 = function()
{
  const target = object('6QmK54LeRJv');
const duration = 750;
const easing = 'ease-out';
const id = '5jvzVDeitWx';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script9 = function()
{
  player.once(() => {
const target = object('6q3a25H64WA');
const duration = 750;
const easing = 'ease-out';
const id = '6Lf4NvKC0fc';
const shakeAmount = 5;
const delay = 2505.9999;
addToTimeline(
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script10 = function()
{
  player.once(() => {
const target = object('5XOPN5o9psg');
const duration = 750;
const easing = 'ease-out';
const id = '6Lf4NvKC0fc';
const shakeAmount = 5;
const delay = 2250;
addToTimeline(
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script11 = function()
{
  player.once(() => {
const target = object('6mG2Ryqw68N');
const duration = 750;
const easing = 'ease-out';
const id = '6Lf4NvKC0fc';
const shakeAmount = 5;
const delay = 2630.9999;
addToTimeline(
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script12 = function()
{
  player.once(() => {
const target = object('6hoUwYMXfi0');
const duration = 750;
const easing = 'ease-out';
const id = '6Lf4NvKC0fc';
const shakeAmount = 5;
const delay = 2755.9999;
addToTimeline(
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script13 = function()
{
  const target = object('5rWiCldmj0R');
const duration = 750;
const easing = 'ease-out';
const id = '5faIDNVvmbp';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script14 = function()
{
  player.once(() => {
const target = object('6NfvY52joLE');
const duration = 750;
const easing = 'ease-out';
const id = '6DlZe0MnwH9';
const shakeAmount = 5;
const delay = 2505.9999;
addToTimeline(
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script15 = function()
{
  player.once(() => {
const target = object('5d2INeMZKce');
const duration = 750;
const easing = 'ease-out';
const id = '6DlZe0MnwH9';
const shakeAmount = 5;
const delay = 2250;
addToTimeline(
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script16 = function()
{
  player.once(() => {
const target = object('6OuSuT589PB');
const duration = 750;
const easing = 'ease-out';
const id = '6DlZe0MnwH9';
const shakeAmount = 5;
const delay = 2380.9999;
addToTimeline(
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script17 = function()
{
  player.once(() => {
const target = object('6jGrsVw5oQp');
const duration = 750;
const easing = 'ease-out';
const id = '6DlZe0MnwH9';
const shakeAmount = 5;
const delay = 2755.9999;
addToTimeline(
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script18 = function()
{
  const target = object('5lQUXF8Kgte');
const duration = 750;
const easing = 'ease-out';
const id = '6qNhSyWBxuI';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script19 = function()
{
  const target = object('6O0ReR07hf4');
const duration = 750;
const easing = 'ease-out';
const id = '6oZn5pYNSuI';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script20 = function()
{
  const target = object('6kHEUvThTy8');
const duration = 750;
const easing = 'ease-out';
const id = '6mrlK9aLLnw';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script21 = function()
{
  const target = object('6LM1r0oNgyg');
const duration = 750;
const easing = 'ease-out';
const id = '6o13wVwwHDg';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

};
