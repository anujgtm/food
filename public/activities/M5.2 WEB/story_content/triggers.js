function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6psXYNLQ2tr":
        Script1();
        break;
      case "6EuLgEFn5YT":
        Script2();
        break;
      case "5iGVuUf2YyN":
        Script3();
        break;
      case "5YfMFa7xU2t":
        Script4();
        break;
      case "62kWlzBH3UR":
        Script5();
        break;
      case "5yGDZWp8lPm":
        Script6();
        break;
      case "6hGKS8yiEgw":
        Script7();
        break;
      case "5xGcmDj4WvK":
        Script8();
        break;
      case "6dyxChm4em4":
        Script9();
        break;
      case "6MI1Qz8G9HQ":
        Script10();
        break;
      case "5d5ZBeYECXD":
        Script11();
        break;
      case "6NaQe8idEbA":
        Script12();
        break;
      case "6KRMJVEBcyN":
        Script13();
        break;
      case "5x833U1u9Av":
        Script14();
        break;
      case "6X0tAJxULZq":
        Script15();
        break;
      case "5hGTvyy5L7k":
        Script16();
        break;
      case "5onQkUQtfgF":
        Script17();
        break;
      case "6HiRLtL6HWb":
        Script18();
        break;
      case "6kaX8HEbBmm":
        Script19();
        break;
      case "61QPgkWjzMX":
        Script20();
        break;
      case "6iw7Nggz2uS":
        Script21();
        break;
      case "65NJWepPIuF":
        Script22();
        break;
      case "61e0kuAHy1b":
        Script23();
        break;
      case "5WvHjNsMk21":
        Script24();
        break;
      case "6Kd6AEV6dgT":
        Script25();
        break;
      case "6pGMAqFsvQK":
        Script26();
        break;
      case "5j9JoJsX8eG":
        Script27();
        break;
      case "5pee7P7EDA0":
        Script28();
        break;
      case "6jo2fm2iCFg":
        Script29();
        break;
      case "6lzkaf47TAg":
        Script30();
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
window.Script1 = function()
{
  player.once(() => {
const target = object('62EOGoiFkqj');
const duration = 750;
const easing = 'ease-out';
const id = '6lgRby23kJQ';
const pulseAmount = 0.07;
const delay = 3792;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  const target = object('5YvmfdeEVk3');
const duration = 750;
const easing = 'ease-out';
const id = '6P2XIXS2KJK';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('62EOGoiFkqj');
const duration = 750;
const easing = 'ease-out';
const id = '6lgRby23kJQ';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  const target = object('5ZaqgLm5Ift');
const duration = 750;
const easing = 'ease-out';
const id = '67VpEzyeaLx';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  const target = object('6gTlFBvm5RM');
const duration = 750;
const easing = 'ease-out';
const id = '6dM5AnJRFGy';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script6 = function()
{
  const target = object('5foSWxS0boH');
const duration = 750;
const easing = 'ease-out';
const id = '5yIN9idLpde';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script7 = function()
{
  const target = object('5rNbEP6ZwEc');
const duration = 750;
const easing = 'ease-out';
const id = '6oZn5pYNSuI';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script8 = function()
{
  const target = object('6oFJ8V6b4Gz');
const duration = 750;
const easing = 'ease-out';
const id = '5kLg0F1qT0U';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script9 = function()
{
  const target = object('60JuhdwGHJf');
const duration = 750;
const easing = 'ease-out';
const id = '6C8uYtiZF89';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script10 = function()
{
  const target = object('5ed0hBmCVrO');
const duration = 750;
const easing = 'ease-out';
const id = '6cM2dApRY56';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script11 = function()
{
  const target = object('6YZuDiNkRMR');
const duration = 750;
const easing = 'ease-out';
const id = '5WvZdl6e51l';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script12 = function()
{
  const target = object('6WwlRpYm40g');
const duration = 750;
const easing = 'ease-out';
const id = '5yfw7jFj5Nb';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script13 = function()
{
  const target = object('5d1yC3EZMhT');
const duration = 750;
const easing = 'ease-out';
const id = '5VEG1JYN8iW';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script14 = function()
{
  const target = object('5VfcJ3UCZXF');
const duration = 750;
const easing = 'ease-out';
const id = '6BJlYe1WuC3';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script15 = function()
{
  const target = object('6TznnhBb5MU');
const duration = 750;
const easing = 'ease-out';
const id = '6f62xOE1czq';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script16 = function()
{
  const target = object('6BnZ9x7IRoY');
const duration = 750;
const easing = 'ease-out';
const id = '5wFE2XHNvMl';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script17 = function()
{
  const target = object('6pEoZ3Afd4H');
const duration = 750;
const easing = 'ease-out';
const id = '5oxRxkdw5wj';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script18 = function()
{
  const target = object('5a9TAOLkNAv');
const duration = 750;
const easing = 'ease-out';
const id = '6BJlYe1WuC3';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script19 = function()
{
  const target = object('6afKgPS9NJo');
const duration = 750;
const easing = 'ease-out';
const id = '6f62xOE1czq';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script20 = function()
{
  const target = object('67uWjsCirQU');
const duration = 750;
const easing = 'ease-out';
const id = '5wFE2XHNvMl';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script21 = function()
{
  const target = object('64M5X6DI0AR');
const duration = 750;
const easing = 'ease-out';
const id = '5kB2lYfqNhy';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script22 = function()
{
  const target = object('5lbLkW1Vj43');
const duration = 750;
const easing = 'ease-out';
const id = '6es7Xv2du6w';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script23 = function()
{
  const target = object('6D5VC2hpCeP');
const duration = 750;
const easing = 'ease-out';
const id = '6rEo9NIrUli';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script24 = function()
{
  const target = object('6rcmIBt4DBM');
const duration = 750;
const easing = 'ease-out';
const id = '6awOXWE6DXn';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script25 = function()
{
  const target = object('6IQfCN2Qbyv');
const duration = 750;
const easing = 'ease-out';
const id = '5UyX9V6ALmE';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script26 = function()
{
  const target = object('6QarJgS66mM');
const duration = 750;
const easing = 'ease-out';
const id = '6avDo0Jtnzh';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script27 = function()
{
  const target = object('5YhUm6ZuJz6');
const duration = 750;
const easing = 'ease-out';
const id = '6TlOfliZQa9';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script28 = function()
{
  const target = object('5wnfQrqCMDv');
const duration = 750;
const easing = 'ease-out';
const id = '68nttMPorO7';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script29 = function()
{
  const target = object('5b706Zb0mrN');
const duration = 750;
const easing = 'ease-out';
const id = '6KZqsrBMGuU';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script30 = function()
{
  const target = object('6qErrtIWXXd');
const duration = 750;
const easing = 'ease-out';
const id = '6RVCxayDK92';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
