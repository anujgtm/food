function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6nYjYNc4MeL":
        Script1();
        break;
      case "6aVTu50CgMk":
        Script2();
        break;
      case "6KVcHVsLDAR":
        Script3();
        break;
      case "6h8nAuE3mMB":
        Script4();
        break;
      case "5eQHYWgap9g":
        Script5();
        break;
      case "6OgqXOpR2Om":
        Script6();
        break;
      case "5Wk3fE1FrD0":
        Script7();
        break;
      case "6LQbmo2Pobv":
        Script8();
        break;
      case "6VortkdNHeq":
        Script9();
        break;
      case "6UblEs2Jdct":
        Script10();
        break;
      case "5nMdxVxhpJc":
        Script11();
        break;
      case "6CKuz0sZdKE":
        Script12();
        break;
      case "6Fqifabo9I0":
        Script13();
        break;
      case "6V5qdBH7Lqv":
        Script14();
        break;
      case "66HFY5pTglW":
        Script15();
        break;
      case "5xaz3ncZH8R":
        Script16();
        break;
      case "6kjJod8aels":
        Script17();
        break;
      case "6DIJ66RRpb2":
        Script18();
        break;
      case "63qK6h05fyz":
        Script19();
        break;
      case "6Fypr2jJ0CG":
        Script20();
        break;
      case "65jluwMSpbd":
        Script21();
        break;
      case "5Vg9XLK0Lnz":
        Script22();
        break;
      case "5k2nt8KqcjK":
        Script23();
        break;
      case "691IVlHItuJ":
        Script24();
        break;
      case "5d2s83xFatz":
        Script25();
        break;
      case "5eFAQ34GHBh":
        Script26();
        break;
      case "5WFrczq1WD9":
        Script27();
        break;
      case "67h3Fxm6qPv":
        Script28();
        break;
      case "6mCKIercGJY":
        Script29();
        break;
      case "6oHXzoY7HAQ":
        Script30();
        break;
      case "61C1QG9k8my":
        Script31();
        break;
      case "6XrgRUZbKrn":
        Script32();
        break;
      case "6fQzLCfRJHE":
        Script33();
        break;
      case "6UxUeVoZkmT":
        Script34();
        break;
      case "6VsJdzqgN1L":
        Script35();
        break;
      case "5ixvPrmtlAQ":
        Script36();
        break;
      case "68YUGY7Ov1R":
        Script37();
        break;
      case "6gWMVSDop5s":
        Script38();
        break;
      case "6N8uBJp3SkH":
        Script39();
        break;
      case "6CmjrwrtrPF":
        Script40();
        break;
      case "5uPuNTGpHgW":
        Script41();
        break;
      case "5uP4uAEXj4l":
        Script42();
        break;
      case "5XAN87h7xjN":
        Script43();
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
const target = object('6O46CwcLVv8');
const duration = 750;
const easing = 'ease-out';
const id = '6J7aOc7g2SZ';
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
  const target = object('6GCigH9u4As');
const duration = 750;
const easing = 'ease-out';
const id = '6cAusmTDPV5';
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
  const target = object('6O46CwcLVv8');
const duration = 750;
const easing = 'ease-out';
const id = '6J7aOc7g2SZ';
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
  const target = object('5bX4Wap5xQf');
const duration = 750;
const easing = 'ease-out';
const id = '5kJ2gijkKuT';
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
  const target = object('5VXbcQdwPiO');
const duration = 750;
const easing = 'ease-out';
const id = '6Yo5u9sazaH';
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
  const target = object('6OgFsjtvTG0');
const duration = 750;
const easing = 'ease-out';
const id = '6NEzlcWeqD0';
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
  const target = object('6Qnp6gUg2xz');
const duration = 750;
const easing = 'ease-out';
const id = '6YO2eZrHMhS';
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

window.Script8 = function()
{
  const target = object('5x6gHtzClRk');
const duration = 750;
const easing = 'ease-out';
const id = '6f9O5yQznNp';
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
  const target = object('5tIsNZPx0EE');
const duration = 750;
const easing = 'ease-out';
const id = '5djRJD5MFAU';
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
  const target = object('6nfevzB1NeB');
const duration = 500;
const easing = 'ease-out';
const id = '5e4nwKZaTRe';
const pulseAmount = 0.1;
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
  const target = object('6nfevzB1NeB');
const duration = 500;
const easing = 'ease-out';
const id = '5e4nwKZaTRe';
const pulseAmount = 0.1;
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
  const target = object('6KWjSmLfMIR');
const duration = 500;
const easing = 'ease-out';
const id = '6Nbw5audHIz';
const pulseAmount = 0.1;
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
  const target = object('6aRIgwlZeFj');
const duration = 500;
const easing = 'ease-out';
const id = '68XWRJKYVcx';
const pulseAmount = 0.1;
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
  const target = object('5qBVHnI0h5G');
const duration = 500;
const easing = 'ease-out';
const id = '5Ykk2gVJc9s';
const pulseAmount = 0.1;
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
  const target = object('6MLM9mHlm0r');
const duration = 500;
const easing = 'ease-out';
const id = '5u1sYH3P1US';
const pulseAmount = 0.1;
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
  const target = object('5lhzSeiUgWT');
const duration = 500;
const easing = 'ease-out';
const id = '6ZFknfs91dp';
const pulseAmount = 0.1;
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
  const target = object('6MYMZhTreUS');
const duration = 500;
const easing = 'ease-out';
const id = '62JJ5Jswknf';
const pulseAmount = 0.1;
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
  const target = object('67y5GZHbTiF');
const duration = 500;
const easing = 'ease-out';
const id = '6Eup7QvV15k';
const pulseAmount = 0.1;
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
  const target = object('5sRydsmqPnD');
const duration = 500;
const easing = 'ease-out';
const id = '5bWod0Dpopb';
const pulseAmount = 0.1;
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
  const target = object('5axXplvE84h');
const duration = 500;
const easing = 'ease-out';
const id = '670Ba8eQnzD';
const pulseAmount = 0.1;
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
  const target = object('5pqSDb1JHOU');
const duration = 500;
const easing = 'ease-out';
const id = '6E5ZDFSBPiJ';
const pulseAmount = 0.1;
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
  const target = object('5X9Y0mnAsI1');
const duration = 500;
const easing = 'ease-out';
const id = '6FIQl9RKDv9';
const pulseAmount = 0.1;
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
  const target = object('6giv8SfPlf6');
const duration = 500;
const easing = 'ease-out';
const id = '6jRKPbdTPv5';
const pulseAmount = 0.1;
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
  const target = object('6EFSyMcFonN');
const duration = 500;
const easing = 'ease-out';
const id = '699l8HAyuTJ';
const pulseAmount = 0.1;
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
  const target = object('6MPSqJ8Cnn6');
const duration = 500;
const easing = 'ease-out';
const id = '6919444c2hO';
const pulseAmount = 0.1;
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
  const target = object('6IxEq0sYrMC');
const duration = 500;
const easing = 'ease-out';
const id = '6HiMuHAqs25';
const pulseAmount = 0.1;
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
  const target = object('5ihNnSI3qh0');
const duration = 500;
const easing = 'ease-out';
const id = '6NyY6M70V9T';
const pulseAmount = 0.1;
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
  const target = object('5pV3L8GpZle');
const duration = 500;
const easing = 'ease-out';
const id = '6lAY4hLBgGi';
const pulseAmount = 0.1;
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
  const target = object('5b1yxMClz8S');
const duration = 500;
const easing = 'ease-out';
const id = '5WcTZ4YKK8w';
const pulseAmount = 0.1;
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
  const target = object('6mcyCFRGnrS');
const duration = 500;
const easing = 'ease-out';
const id = '6pgLfhpRmv1';
const pulseAmount = 0.1;
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

window.Script31 = function()
{
  const target = object('6o2l55KAGSh');
const duration = 500;
const easing = 'ease-out';
const id = '6kJEj7Ry8Hh';
const pulseAmount = 0.1;
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

window.Script32 = function()
{
  const target = object('5n9roFi6mc4');
const duration = 500;
const easing = 'ease-out';
const id = '6JG619Nfbcv';
const pulseAmount = 0.1;
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

window.Script33 = function()
{
  const target = object('6LLx7CrKRyi');
const duration = 500;
const easing = 'ease-out';
const id = '6ialhoP370A';
const pulseAmount = 0.1;
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

window.Script34 = function()
{
  const target = object('5v4FbMEFGXR');
const duration = 500;
const easing = 'ease-out';
const id = '6nGa4Akkdgo';
const pulseAmount = 0.1;
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

window.Script35 = function()
{
  const target = object('6hgt5JF5ojE');
const duration = 750;
const easing = 'ease-out';
const id = '6n3FVDTsRCl';
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

window.Script36 = function()
{
  player.once(() => {
const target = object('5sNfRGibhmY');
const duration = 750;
const easing = 'ease-out';
const id = '5tJcI9C7orf';
const pulseAmount = 0.07;
const delay = 0;
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

window.Script37 = function()
{
  player.once(() => {
const target = object('6ITq2WhYgpR');
const duration = 750;
const easing = 'ease-out';
const id = '6FA0qz9GsGD';
const pulseAmount = 0.07;
const delay = 0;
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

window.Script38 = function()
{
  const target = object('5oO6q7thLk8');
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

window.Script39 = function()
{
  const target = object('5qJwbhDokf3');
const duration = 750;
const easing = 'ease-out';
const id = '60fQJn6KALa';
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

window.Script40 = function()
{
  const target = object('6WnR9VsBQCy');
const duration = 750;
const easing = 'ease-out';
const id = '6P5zqNGYuV7';
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

window.Script41 = function()
{
  const target = object('5eSM6BmHvrW');
const duration = 750;
const easing = 'ease-out';
const id = '6o13wVwwHDg';
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

window.Script42 = function()
{
  const target = object('6oa7bMs2tw3');
const duration = 750;
const easing = 'ease-out';
const id = '6Hh3AE78VP6';
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

window.Script43 = function()
{
  const target = object('69CpamSjSsf');
const duration = 750;
const easing = 'ease-out';
const id = '6QWKuTP2MfB';
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
