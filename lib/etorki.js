$(document).ready(function() {
	$('.expandable .body').hide();
	$('.expandable .title').click(function(){
		toogleBody($(this))
	});
});

function toogleBody(title){
	title.siblings(".body").toggle();
}

