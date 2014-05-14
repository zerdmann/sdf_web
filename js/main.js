$(document).ready(function(){
	var options = {
		onSnapStart: function() {console.log("Snap Start"); },
		onSnapFinish: function() {console.log("Snap Finish");}
	};

	$('body').panelSnap();
	var shadowed = false;

$(window).scroll(function(){     

    if($(window).scrollTop() > 400)
    {
        if(shadowed === false)
        { 
            shadowed = true;
            $('#wrapper').stop().animate({boxShadow: '2px 2px 100px 10px #bbb'}, 300);
        }
    }       
    else 
    {
        if(shadowed === true)
        { 
            shadowed = false;
            $('#wrapper').stop().animate({boxShadow: '0px 0px'}, 100);
        }
    }

});

});