$(document).ready(function(){

	// Listen to the form
	$('#note-form').submit(function( e ){

		// Prevent the form from submitting
		e.preventDefault();

		// Grab the note
		if( $.trim( $('#note').val() ) == '' ){
			return;
		}

		// Prepare AJAX
		$.ajax({
			url: 'http://cole.holyoake.yoobee.net.nz/ajax-yoobee/ajax-yoobee.php',
			data: { note: $('#note').val() },
			success: function( dataFromServer ){ 
				console.log(dataFromServer);

				//clear old results
				$('#notes').html('');

				for(var i = 0; i < dataFromServer.length; i++) {

					$('#notes').append('<ul>');
					$('#notes').append('<li>Note:'+' '+dataFromServer[i]['note']+'</li>');
					$('#notes').append('<li class="small">'+dataFromServer[i]['created']+'</li>');
					$('#notes').append('</ul>');
				};
			},
			error: function() {
				alert('Cannot connect');
			},
			timeout: 5000
		});

	});

});
