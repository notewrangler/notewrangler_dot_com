$(document).ready(function(){
	$('#hit-me').on('click', function(){
		$('#hit-me').hide();
		$('#social-bar').show('slide', 500);
	});

	$('#social-close').on('click', function(){
		$('#social-bar').hide('slide', 500);
		$('#hit-me').show();
	});
	

})
