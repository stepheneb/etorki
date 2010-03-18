$(document).ready(function() {
	$('.expandable .body').hide();
	$('.expandable .title').click(function(){
		toggleBody($(this))
	});
});

function toggleBody(title){
	title.siblings(".body").toggle();
}

