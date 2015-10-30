/*::::::::::::::::SHAISTHA KALLIL - SIGN UP PAGE::::::::::::::::*/

	/* when signup button at top right is clicked set signup  as true*/
	$("#signup").click(function() { 
	    signup = true;       
		/*if login button is clicked while on signup form set signup as false and display login page*/
	    if(signup == true){
			login = false;
			$('#submit').show();
			$('#submit2').hide();
			$('form').show();
			$("#confirmation").hide();
			$('#error').hide();
			$('#returnForm').hide();
		}else{
			signup = false;
			login = true;
		}
	});
				