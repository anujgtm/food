window.InitUserScripts = function()
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
window.Script7 = function()
{
  window.parent.postMessage( { type: "activity-complete" }, "*" );
}

window.Script8 = function()
{
  var player = GetPlayer();
var _base = player.GetVar("V_Base");
var _option1 = player.GetVar("V_Addition1");
var _option2 = player.GetVar("V_Addition2");
var _option3 = player.GetVar("V_Addition3");
var _option4 = player.GetVar("V_Addition4");
var _option5 = player.GetVar("V_Addition5");
var _option6 = player.GetVar("V_Addition6");
var _option = [_option1, _option2, _option3, _option4, _option5, _option6];
var _pivot = 0;

for(var i = 0; i < 6; i++) {
	if (_option[_pivot] == 0) {
		for (var j = _pivot+1; j < 6; j++) {
			_option[j-1] = _option[j];		
		}
		_option[5] = 0;
	}
	else {
		_pivot++;
	}
}

if (_base == 1 || _base == 2) {
	for(i = 0; i < 6; i++) {
		if (_option[i] == 0) {
			_option[i] = 99;
			break;
		}
	}
}

player.SetVar("V_Addition1",_option[0]);
player.SetVar("V_Addition2",_option[1]);
player.SetVar("V_Addition3",_option[2]);
player.SetVar("V_Addition4",_option[3]);
player.SetVar("V_Addition5",_option[4]);
player.SetVar("V_Addition6",_option[5]);
}

window.Script9 = function()
{
  var player = GetPlayer();
var _base = player.GetVar("V_Base");
var _option1 = player.GetVar("V_Addition1");
var _option2 = player.GetVar("V_Addition2");
var _option3 = player.GetVar("V_Addition3");
var _option4 = player.GetVar("V_Addition4");
var _option5 = player.GetVar("V_Addition5");
var _option6 = player.GetVar("V_Addition6");
var _option = [_option1, _option2, _option3, _option4, _option5, _option6];
var _pivot = 0;

for(var i = 0; i < 6; i++) {
	if (_option[_pivot] == 0) {
		for (var j = _pivot+1; j < 6; j++) {
			_option[j-1] = _option[j];		
		}
		_option[5] = 0;
	}
	else {
		_pivot++;
	}
}

if (_base == 1 || _base == 2) {
	for(i = 0; i < 6; i++) {
		if (_option[i] == 0) {
			_option[i] = 99;
			break;
		}
	}
}

player.SetVar("V_Addition1",_option[0]);
player.SetVar("V_Addition2",_option[1]);
player.SetVar("V_Addition3",_option[2]);
player.SetVar("V_Addition4",_option[3]);
player.SetVar("V_Addition5",_option[4]);
player.SetVar("V_Addition6",_option[5]);
}

window.Script10 = function()
{
  var player = GetPlayer();
var _msg = "Oh no!";
var _base = player.GetVar("V_Base");
var _milk = player.GetVar("V3_GroupMilk");
var _veg = player.GetVar("V3_GroupVegFruit");

_msg = "What an awesome looking wrap and you have included all four/wha food groups. Well done/ka pai!";

player.SetVar("V1_Msg", _msg);
}

window.Script11 = function()
{
  var player = GetPlayer();
var _base = player.GetVar("V_Base");
var _option1 = player.GetVar("V_Addition1");
var _option2 = player.GetVar("V_Addition2");
var _option3 = player.GetVar("V_Addition3");
var _option4 = player.GetVar("V_Addition4");
var _option5 = player.GetVar("V_Addition5");
var _option6 = player.GetVar("V_Addition6");
var _option = [_option1, _option2, _option3, _option4, _option5, _option6];
var _pivot = 0;

for(var i = 0; i < 6; i++) {
	if (_option[_pivot] == 0) {
		for (var j = _pivot+1; j < 6; j++) {
			_option[j-1] = _option[j];		
		}
		_option[5] = 0;
	}
	else {
		_pivot++;
	}
}

if (_base == 1 || _base == 2) {
	for(i = 0; i < 6; i++) {
		if (_option[i] == 0) {
			_option[i] = 99;
			break;
		}
	}
}

player.SetVar("V_Addition1",_option[0]);
player.SetVar("V_Addition2",_option[1]);
player.SetVar("V_Addition3",_option[2]);
player.SetVar("V_Addition4",_option[3]);
player.SetVar("V_Addition5",_option[4]);
player.SetVar("V_Addition6",_option[5]);
}

};
