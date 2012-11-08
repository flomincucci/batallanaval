// jQueryUI fun

$(function() {

	$("#controles input").button();
	$("#losbotones").buttonset();

});

// DOM manipulation
$(function () {
		$('#send-message').submit(function () {
			message('me', $('#message').val());
			socket.emit('user message', $('#message').val());
			clear();
			$('#lines').get(0).scrollTop = 10000000;
			return false;
		});

		$("#tateti input").click(function () {
			var position = $(this).parent().parent().attr('class') + '|' + $(this).parent().attr('class');
			socket.emit('move',position);
			$(this).css('display','none');
			$(this).parent().append('<label>X</label>');
		});

		$("#controles input").bind({
			'mousedown': function() {
				socket.emit('pressed',$(this).attr('id'));
			},
			'mouseup': function() {
				socket.emit('notpressed',$(this).attr('id'));
			},
		});

		function clear () {
			$('#message').val('').focus();
		};
});

