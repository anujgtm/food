function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6l5TIs0jAwi":
        Script1();
        break;
      case "6WBLWfIUuTP":
        Script2();
        break;
      case "6geJjzaFIF9":
        Script3();
        break;
      case "64OT9pjKxz8":
        Script4();
        break;
      case "6qnrx90eipg":
        Script5();
        break;
      case "5vAtu2xF4Zh":
        Script6();
        break;
      case "6jfgTpCV9qR":
        Script7();
        break;
      case "5aQd2ActEmm":
        Script8();
        break;
      case "6ZLX9rGq088":
        Script9();
        break;
      case "6fQ94jilvAX":
        Script10();
        break;
      case "6DCI24IwKxm":
        Script11();
        break;
      case "65vrRWqCXlg":
        Script12();
        break;
      case "6OWMATjkaPy":
        Script13();
        break;
      case "6NCvZk60705":
        Script14();
        break;
      case "5cgPtta7iw5":
        Script15();
        break;
      case "6d6tWJYfOpH":
        Script16();
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
const target = object('5mCnZkh2o52');
const duration = 750;
const easing = 'ease-out';
const id = '6cytoxCNikl';
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
  const target = object('5mCnZkh2o52');
const duration = 750;
const easing = 'ease-out';
const id = '6cytoxCNikl';
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
const target = object('5ngMj4VzSwR');
const duration = 750;
const easing = 'ease-out';
const id = '6ZlYRFF9aTR';
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

window.Script5 = function()
{
  player.once(() => {
const target = object('6T1wjHOdGME');
const duration = 750;
const easing = 'ease-out';
const id = '6ET8pRjydbj';
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

window.Script6 = function()
{
  player.once(() => {
const target = object('6PBi7Ycfede');
const duration = 750;
const easing = 'ease-out';
const id = '6ezVFa1bNV2';
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

window.Script7 = function()
{
  player.once(() => {
const target = object('5WaYDXDUjQq');
const duration = 750;
const easing = 'ease-out';
const id = '6FDijEOF6Fy';
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
  const target = object('5bsKLqaQn7s');
const duration = 750;
const easing = 'ease-out';
const id = '6KEsrmggZKi';
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
const target = object('6Erw8lYXjRj');
const duration = 750;
const easing = 'ease-out';
const id = '6I1KWTxjl9v';
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
const target = object('5m8wyrncBCq');
const duration = 750;
const easing = 'ease-out';
const id = '6ZlYRFF9aTR';
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
const target = object('62XZt95yvcm');
const duration = 750;
const easing = 'ease-out';
const id = '6ET8pRjydbj';
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

window.Script12 = function()
{
  player.once(() => {
const target = object('5VLCyCCEM5z');
const duration = 750;
const easing = 'ease-out';
const id = '6FDijEOF6Fy';
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
  const target = object('5vjPUPJr6HJ');
const duration = 750;
const easing = 'ease-out';
const id = '5i6HgtPY3Mu';
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

window.Script15 = function()
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

};
