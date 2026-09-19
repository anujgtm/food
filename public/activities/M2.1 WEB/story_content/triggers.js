function ExecuteScript(strId)
{
  switch (strId)
  {
      case "60WbQv922k8":
        Script1();
        break;
      case "6HUSJW2sBWM":
        Script2();
        break;
      case "5t1N6mzJ8Cy":
        Script3();
        break;
      case "5mKxBpMtfNR":
        Script4();
        break;
      case "6paNkrAINrx":
        Script5();
        break;
      case "6LtBX4Dbjta":
        Script6();
        break;
      case "6VtqmKVC3zg":
        Script7();
        break;
      case "64kJCrVKkku":
        Script8();
        break;
      case "6MQ9jjAKtNw":
        Script9();
        break;
      case "5vbL78LwYvM":
        Script10();
        break;
      case "5lvykoaOAZy":
        Script11();
        break;
      case "6XBSyopMNgk":
        Script12();
        break;
      case "6L3Szzc9bkC":
        Script13();
        break;
      case "6aWtA9VMIiI":
        Script14();
        break;
      case "6JYyXmhT2vH":
        Script15();
        break;
      case "6D4Kfxs2FgO":
        Script16();
        break;
      case "5zX7yrNtZny":
        Script17();
        break;
      case "5khr7VDXnEd":
        Script18();
        break;
      case "6SvRvZGj5IV":
        Script19();
        break;
      case "5e88zlB78r3":
        Script20();
        break;
      case "6fa8Azf5UaJ":
        Script21();
        break;
      case "5mAtHRaX2dV":
        Script22();
        break;
      case "5r7Eff9T2iP":
        Script23();
        break;
      case "5buemqombwa":
        Script24();
        break;
      case "6pvGAGV0QrO":
        Script25();
        break;
      case "6pXJNRJPQsC":
        Script26();
        break;
      case "5h6pkav5YOY":
        Script27();
        break;
      case "5kjBdjG2TyU":
        Script28();
        break;
      case "6c9wnAmBwax":
        Script29();
        break;
      case "5fnTfIlek5G":
        Script30();
        break;
      case "5oyFIlrarZ9":
        Script31();
        break;
      case "5YLTuVHPjwG":
        Script32();
        break;
      case "6XWqJUcsx51":
        Script33();
        break;
      case "6OQgNoSjInN":
        Script34();
        break;
      case "6qhaXbHbSJU":
        Script35();
        break;
      case "6p0b6YyNBG7":
        Script36();
        break;
      case "6BlLBaInWtN":
        Script37();
        break;
      case "5waorE8Mu4d":
        Script38();
        break;
      case "5xiCqwgLdDp":
        Script39();
        break;
      case "5lhq7m6fdrO":
        Script40();
        break;
      case "6KFKtfmt7ro":
        Script41();
        break;
      case "6dRqTF1Z03o":
        Script42();
        break;
      case "6RW6XqVSJHo":
        Script43();
        break;
      case "6XeC4TXkQBO":
        Script44();
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
const target = object('6O46CwcLVv8');
const duration = 750;
const easing = 'ease-out';
const id = '6J7aOc7g2SZ';
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
  const target = object('6GCigH9u4As');
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
  const target = object('6O46CwcLVv8');
const duration = 750;
const easing = 'ease-out';
const id = '6J7aOc7g2SZ';
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
  const target = object('5bX4Wap5xQf');
const duration = 750;
const easing = 'ease-out';
const id = '5kJ2gijkKuT';
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

window.Script5 = function()
{
  const target = object('5VXbcQdwPiO');
const duration = 750;
const easing = 'ease-out';
const id = '6Yo5u9sazaH';
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

window.Script6 = function()
{
  const target = object('6OgFsjtvTG0');
const duration = 750;
const easing = 'ease-out';
const id = '6NEzlcWeqD0';
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

window.Script7 = function()
{
  const target = object('6Qnp6gUg2xz');
const duration = 750;
const easing = 'ease-out';
const id = '6YO2eZrHMhS';
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

window.Script8 = function()
{
  const target = object('5x6gHtzClRk');
const duration = 750;
const easing = 'ease-out';
const id = '6f9O5yQznNp';
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
  const target = object('5tIsNZPx0EE');
const duration = 750;
const easing = 'ease-out';
const id = '5djRJD5MFAU';
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

window.Script10 = function()
{
  const target = object('6nfevzB1NeB');
const duration = 500;
const easing = 'ease-out';
const id = '5e4nwKZaTRe';
const pulseAmount = 0.1;
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

window.Script11 = function()
{
  const target = object('6nfevzB1NeB');
const duration = 500;
const easing = 'ease-out';
const id = '5e4nwKZaTRe';
const pulseAmount = 0.1;
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

window.Script12 = function()
{
  const target = object('6KWjSmLfMIR');
const duration = 500;
const easing = 'ease-out';
const id = '6Nbw5audHIz';
const pulseAmount = 0.1;
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

window.Script13 = function()
{
  const target = object('6aRIgwlZeFj');
const duration = 500;
const easing = 'ease-out';
const id = '68XWRJKYVcx';
const pulseAmount = 0.1;
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
  const target = object('5qBVHnI0h5G');
const duration = 500;
const easing = 'ease-out';
const id = '5Ykk2gVJc9s';
const pulseAmount = 0.1;
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

window.Script15 = function()
{
  const target = object('6MLM9mHlm0r');
const duration = 500;
const easing = 'ease-out';
const id = '5u1sYH3P1US';
const pulseAmount = 0.1;
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

window.Script16 = function()
{
  const target = object('5lhzSeiUgWT');
const duration = 500;
const easing = 'ease-out';
const id = '6ZFknfs91dp';
const pulseAmount = 0.1;
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

window.Script17 = function()
{
  const target = object('6MYMZhTreUS');
const duration = 500;
const easing = 'ease-out';
const id = '62JJ5Jswknf';
const pulseAmount = 0.1;
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

window.Script18 = function()
{
  const target = object('67y5GZHbTiF');
const duration = 500;
const easing = 'ease-out';
const id = '6Eup7QvV15k';
const pulseAmount = 0.1;
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
  const target = object('5sRydsmqPnD');
const duration = 500;
const easing = 'ease-out';
const id = '5bWod0Dpopb';
const pulseAmount = 0.1;
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

window.Script20 = function()
{
  const target = object('5axXplvE84h');
const duration = 500;
const easing = 'ease-out';
const id = '670Ba8eQnzD';
const pulseAmount = 0.1;
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
  const target = object('5pqSDb1JHOU');
const duration = 500;
const easing = 'ease-out';
const id = '6E5ZDFSBPiJ';
const pulseAmount = 0.1;
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

window.Script22 = function()
{
  const target = object('5X9Y0mnAsI1');
const duration = 500;
const easing = 'ease-out';
const id = '6FIQl9RKDv9';
const pulseAmount = 0.1;
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

window.Script23 = function()
{
  const target = object('6giv8SfPlf6');
const duration = 500;
const easing = 'ease-out';
const id = '6jRKPbdTPv5';
const pulseAmount = 0.1;
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

window.Script24 = function()
{
  const target = object('6EFSyMcFonN');
const duration = 500;
const easing = 'ease-out';
const id = '699l8HAyuTJ';
const pulseAmount = 0.1;
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

window.Script25 = function()
{
  const target = object('6MPSqJ8Cnn6');
const duration = 500;
const easing = 'ease-out';
const id = '6919444c2hO';
const pulseAmount = 0.1;
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

window.Script26 = function()
{
  const target = object('6IxEq0sYrMC');
const duration = 500;
const easing = 'ease-out';
const id = '6HiMuHAqs25';
const pulseAmount = 0.1;
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

window.Script27 = function()
{
  const target = object('5ihNnSI3qh0');
const duration = 500;
const easing = 'ease-out';
const id = '6NyY6M70V9T';
const pulseAmount = 0.1;
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

window.Script28 = function()
{
  const target = object('5pV3L8GpZle');
const duration = 500;
const easing = 'ease-out';
const id = '6lAY4hLBgGi';
const pulseAmount = 0.1;
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

window.Script29 = function()
{
  const target = object('5b1yxMClz8S');
const duration = 500;
const easing = 'ease-out';
const id = '5WcTZ4YKK8w';
const pulseAmount = 0.1;
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

window.Script30 = function()
{
  const target = object('6mcyCFRGnrS');
const duration = 500;
const easing = 'ease-out';
const id = '6pgLfhpRmv1';
const pulseAmount = 0.1;
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

window.Script31 = function()
{
  const target = object('6o2l55KAGSh');
const duration = 500;
const easing = 'ease-out';
const id = '6kJEj7Ry8Hh';
const pulseAmount = 0.1;
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

window.Script32 = function()
{
  const target = object('5n9roFi6mc4');
const duration = 500;
const easing = 'ease-out';
const id = '6JG619Nfbcv';
const pulseAmount = 0.1;
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

window.Script33 = function()
{
  const target = object('6LLx7CrKRyi');
const duration = 500;
const easing = 'ease-out';
const id = '6ialhoP370A';
const pulseAmount = 0.1;
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

window.Script34 = function()
{
  const target = object('5v4FbMEFGXR');
const duration = 500;
const easing = 'ease-out';
const id = '6nGa4Akkdgo';
const pulseAmount = 0.1;
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

window.Script35 = function()
{
  const target = object('6hgt5JF5ojE');
const duration = 750;
const easing = 'ease-out';
const id = '6n3FVDTsRCl';
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

window.Script38 = function()
{
  const target = object('5oO6q7thLk8');
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

window.Script39 = function()
{
  const target = object('5qJwbhDokf3');
const duration = 750;
const easing = 'ease-out';
const id = '60fQJn6KALa';
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

window.Script40 = function()
{
  const target = object('6WnR9VsBQCy');
const duration = 750;
const easing = 'ease-out';
const id = '6P5zqNGYuV7';
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

window.Script41 = function()
{
  const target = object('5eSM6BmHvrW');
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

window.Script42 = function()
{
  const target = object('6oa7bMs2tw3');
const duration = 750;
const easing = 'ease-out';
const id = '6Hh3AE78VP6';
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

window.Script43 = function()
{
  const target = object('69CpamSjSsf');
const duration = 750;
const easing = 'ease-out';
const id = '6QWKuTP2MfB';
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

};
