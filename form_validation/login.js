/*::::::::::::::::SHAISTHA KALLIL - Log In PAGE::::::::::::::::*/

		$("#login").click(function() { 
			login = true;       
		/*if login button is clicked while on signup form set signup as false and display login page*/
			if(login == true){
				signup = false;
				$('#submit2').show();
				$('#submit').hide();
				$('form').show(); 
				$("#confirmation").hide();
				$('#error').hide();
				$("#returnForm").hide();
			}else{
				login = false;
				signup = true;
		}
		
		});
