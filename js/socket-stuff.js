WEB_SOCKET_SWF_LOCATION = "/js/WebSocketMain.swf";
WEB_SOCKET_DEBUG = true;

// socket.io specific code
var socket = io.connect("/espejo");

socket.on('connect', function () {
	socket.emit('nickname','alice');
});

socket.on('announcement', function (msg) {
	$('#lines').append($('<p>').append($('<em>').text(msg)));
});

socket.on('nicknames', function (nicknames) {
	$('#nicknames').empty().append($('<span>Online: </span><br />'));
	for (var i in nicknames) {
		$('#nicknames').append($('<b>').text(nicknames[i]));
		$('#nicknames').append('<br />');
	}
});

socket.on('msg_to_room', message);
socket.on('new_movement', move);
socket.on('input_pressed', pressed);
socket.on('input_unpressed', unpressed);

socket.on('reconnect', function () {
	$('#lines').remove();
	message('System', 'Reconnected to the server');
});

socket.on('reconnecting', function () {
	message('System', 'Attempting to re-connect to the server');
});

socket.on('error', function (e) {
	message('System', e ? e : 'A unknown error occurred');
});

function message (from, msg) {
	$('#lines').append($('<p>').append($('<b>').text(from), msg));
}

function move (from, movement) {
	var row = movement.substring(0,8);
	var col = movement.substring(9,19);
	$('.' + row + ' > .' + col + ' > input').css('display','none');
	$('.' + row + ' > .' + col + ' > input').parent().append('<label>O</label');
	$('.' + row + ' > .' + col + ' > input').attr('checked','checked');
}

function pressed (from, element) {
	$('#' + element + '').addClass('ui-state-active');	
}

function unpressed (from, element) {
	$('#' + element + '').removeClass('ui-state-active');	
}


