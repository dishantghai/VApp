//$("#index").on('pageinit', function() { 
/*$(document).on("swipeleft", function(event,ui){
	$("mypanel").panel("open");
});*/

/*$("select-choice-13").on("change", function () {
    });*/
//});
$(document).on('pageinit', '#page', function(){       
    $('#select-choice-13').on('change',function(e) {
    var $this = $(this),
        val   = $this.val();
    alert("onChange = " + val);

    }); 
});
