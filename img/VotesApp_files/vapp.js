//$("#index").on('pageinit', function() { 
/*$(document).on("swipeleft", function(event,ui){
	$("mypanel").panel("open");
});*/

/*$("select-choice-13").on("change", function () {
    });*/
//});
var state;
$(document).on('pageinit', '#page', function(){       
    //State Select Function
	$('#select-choice-13').on('change',function(e) {
    var $this = $(this),
        state   = $this.val();
		
	switch (state)
	{
   		case "AP":
		
		$('#select-choice-14').empty();
		
		var arrCity = new Array("Adilabad","Peddapalli","Karimnagar","Nizamabad","Zahirabad","Medak","Malkajgiri","Secunderabad","Hyderabad","Chelvella","Mahabubnagar","Nagarkurnool","Nalgonda","Bhongir","Warangal","Mahabubabad","Khammam","Araku","Srikakulam","Vizianagaram","Visakhapatnam","Anakapalli","Kakinada","Amalapuram","Rajahmundry","Anantapur","Narsapuram","Eluru","Machilipatnam","Vijayawada","Guntur","Narasaraopet","Bapatla","Ongole","Nandyal","Kurnool","Hindupur","Kadapa","Nellore","Tirupati","Rajampet","Chittoor");
		  
       break;
		
		case "AR": 
       alert('Hey');
       break;

		case "AS": 
       alert('Hey');
       break;

		case "BR":
		
		 $('#select-choice-14').empty();
		
		var arrCity = new Array("Valmiki Nagar","Paschim Champaran","Purvi Champaran","Sheohar","Sitamarhi","Madhubani","Jhanjharpur","Supaul","Araria","Kishanganj","Katihar","Purnia","Madhepura","Darbhanga","Muzaffarpur","Vaishali","Gopalganj","Siwan","Maharajganj","Maharajganj","Saran","Hajipur","Ujiarpur","Samastipur","Begusarai","Khagaria","Bhagalpur","Banka","Munger","Nalanda","Patna Sahib","Pataliputra","Arrah","Buxar","Sasaram","Karakat","Jahanabad","Aurangabad","Gaya","Nawada","Jamui");
	
		break;
		
   		default: 
       alert('Default case');
       break;
	}	
	
	//Add Default "Choose option" to Select Box
	$('#select-choice-14').append($('<option data-placeholder="true">Choose Option</option>'));
		
	$.each(arrCity, function (i, item) {
    	$('#select-choice-14').append($('<option>', { 
       		 value: item,
        	 text : item 
    		}));
		});
		
	$("#select-choice-14").selectmenu('refresh', true);
		
		
    //alert("onChange = " + val);

    });
	
	/*********************************************************************/
	/*		Function Called on Change of Select City / Contituency		*/									   	
	/********************************************************************/
	$('#select-choice-14').on('change',function(e) {
    var $this = $(this),
        val   = $this.val();
	    //alert (val);
		
		$('#page2-content').empty();
		
		$.ajax({
			url: 'http://www.franchisefood.in/JM/vapp_server/index.php?state='+state,
			type: 'GET',
			//dataType: 'json',
			error : function (){ document.title='error'; }, 
			success: function (data) {
		alert(data);
    }
		});
		
		
		
		
		var ht = '<div class="ui-grid-b" id="grid_parties">'+
		'<div class="ui-block-a"> <img src="img/bjp.png"></div>'+
	    '<div class="ui-block-b"><label>Bhartiya Janata Party</label></div>'+
	    '<div class="ui-block-c"><button>VOTE</button></div>'+
	    '<div class="ui-block-a"> <img src="img/congress.png"></div>'+
	    '<div class="ui-block-b"><label>Indian National Congress</label></div>'+
	    '<div class="ui-block-c"><button>VOTE</button></div>'+
        '<div class="ui-block-a"> <img src="img/aap.png"></div>'+
	    '<div class="ui-block-b"><label>Aam Aadmi Party</label></div>'+
	    '<div class="ui-block-c"><button >VOTE</button></div>'+
        '</div> '; 
	   
		$('#page2-content').append(ht);
		$( ":mobile-pagecontainer" ).pagecontainer( "change", "#page2",{ transition: "slide" });
	});
	
});
