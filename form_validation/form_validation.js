/*::::::::::::::::SHAISTHA KALLIL - VALIDATION PAGE::::::::::::::::*/
	    var signup = true;
		
		var login = true;
		
		
		$("#validationForm").submit( function(event) {
			var errorMessage = "";
			event.preventDefault(); 
					

			function isValidEmailAddress(emailAddress) {
				var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
				return pattern.test(emailAddress);
			};
						

				
			if (!isValidEmailAddress($("#email").val())){
				/*:alert("NOT VALID EMAIL");:*/
				errorMessage = "* NOT VALID EMAIL. PLEASE ENTER IN CORRECT FORMAT.<br />";
				$("#error").css("display","block");
			}
					
			if (!$.isNumeric($("#phone").val())) {
				errorMessage = errorMessage + "* PLEASE ENTER A VALID TELEPHONE NUMBER.<br />";
				$("#error").css("display","block");
			}
					
			if($("#password1").val() == ""){
				errorMessage = errorMessage + "* PLEASE ENTER A PASSWORD.<br />";
				$("#error").css("display","block");
			}
					
			if($("#password2").val() == ""){
				errorMessage = errorMessage + "* PLEASE CONFIRM YOUR PASSWORD.<br />";
				$("#error").css("display","block");
			}
					
			if ($("#password1").val() != $("#password2").val()){
				errorMessage = errorMessage + "* PASSWORD DOES NOT MATCH.<br />";
				$("#error").css("display","block");
			}
					
			if (errorMessage ==""){
				
				if(signup == true){
						errorMessage = "THANK YOU. YOU ARE NOW SIGNED UP.";
						$("#confirmation").show();
					    $("#confirmation").html(errorMessage);
						$("#error").hide();
						
						$("#returnForm").hide();
						$("form").hide(); 
				}
				
				else if(login == true){
					   errorMessage = "WELCOME BACK! YOU ARE LOGGED IN. ";
					   $("#confirmation").show();
					   $("#confirmation").html(errorMessage);
					   $("#error").hide();
					   $("#returnForm").hide();
					   $("form").hide(); 
					  
				}

			}else{
				$("form").hide();
				$("#error").html(errorMessage);	
					
				$("#returnForm").show(); 
			}
					
			$("#returnForm").click( function() {
					
				$("#error").hide();
				$("#confirmation").hide(); 
				$("form").show();
				$(this).hide();
				
				/* if($("#confirmation").html() == "THANK YOU. YOU ARE NOW SIGNED UP.")
				 $("#submit").hide();  */
			
			});
					
					
		});

			
					
					
					/*if($("#confirmation").html() == "THANK YOU. YOU ARE NOW SIGNED UP."){
					  $("#returnForm").hide();
					}*/
					/*else{*/ /*if ($("#confirmation").html() == "WELCOME BACK! YOU ARE LOGGED IN. ") */
					 /* $("#returnForm").hide();
					}*/
					
					/*else{
					  $("#returnForm").show();
					} */
					
				/*	$("#returnForm").click( function () {
					
					    $("#error").hide();
						$("#confirmation").hide(); 
					    $("form").show();
						$(this).hide();
						if($("#confirmation").html() == "THANK YOU. YOU ARE NOW SIGNED UP."){
						$("#submit").hide();
						
						if(signup == true){
						  $("form").hide();
						}
					}
					
					});*/
					
			
					
					
			
			/* }); */
	
