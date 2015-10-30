/*::::::::::::::: SHAISTHA KALLIL :::: OCT 30,2015 ::::::::::::::::::*/

/*:::: GAME WORK ::::*/
	
	/*::::	GLOBAL VARIABLES ::::*/
	    var createdTime; 
		var clickedTime;
		var clickCounter =0;
		var avgReactionTime = 0;
		var reaction = new Array();
		
		/*:::: GENERATES RANDOM COLOR AND RETURNS HEX CODE VALUE ::::*/
		function getRandomColor(){
		     var color = "#";
			 var value = '0123456789ABCDEF'.split('');
			 for(var i = 0; i<6; i++){
			    color += value[Math.floor(Math.random()* 16)];
			 }
			 
			 return color;
		
		}
		
		/*:::: GENERATES RANDOM BORDER-RADIUS VALUE FOR SHAPE FORMATION, RETURNS VALUE ::::*/
		function getRandomShape(){
		      var shape;
			  var shapeVal = Math.floor(Math.random()*71);
			  
			  shape = shapeVal+"%";
			  return shape;
		}
		
		/*:::: GENERATES A RANDOM POSITION VALUE AND RETURNS ITS VALUE ::::*/
		function getPosition (){
		     var position;
			 var posVal = Math.floor(Math.random()*25);
		
		     position = posVal+"px";
			 return position;
		}
		
		/*:::: GAME CONTROLLER - BOX APPEARANCE AND ITS FEATURES ::::*/
	  	function appear(){
			
			var timer = Math.floor((Math.random()*3000));

			setTimeout(
			  function(){

				document.getElementById("box").style.backgroundColor = getRandomColor();
				
				document.getElementById("box").style.borderRadius = getRandomShape();
				
				var top = Math.random();
				var left = Math.random();
				
				top = top * 300;
				left = left * 400;
				
			    document.getElementById("box").style.top = top + "px";
				
				document.getElementById("box").style.left= left + "px";
				
				document.getElementById("box").style.display = "block";
				
				createdTime = Date.now();
		   
			  },timer);
		
		}
		

		/*:::: CALCULATES AND RETURNS REACTION TIME VALUE ::::*/	
		function reactionTime(){
		
		    var reactionTime;
			
			reactionTime = (clickedTime - createdTime)/1000;
			
			return reactionTime;
		
		}
		
		/*:::: CALCULATES AND RETURNS AVERAGE REACTION TIME VALUE ::::*/
		function averageReactionTime() {
		
		    avgReactionTime = 0;
			var totalReactionTime = 0;
			
			
			if(reaction.length == 0){
			   return 0;
			}else if(reaction.length == 1){
			   avgReactionTime = reaction[0];
			   return avgReactionTime ;
			}else {
			
			   for(var x = 0; x < clickCounter; x++){
			   totalReactionTime += reaction[x];
			   }
		
		       var reactionVal = totalReactionTime/clickCounter;
			   avgReactionTime = Math.round(reactionVal * 1000)/1000; 
		
			   
			   return avgReactionTime;
			}
		}
		
		/*:::: EVENT HANDLER FUNCTION UPON CLICK OF 'START' BUTTON ::::*/
		document.getElementById("begin").onclick = function (){
			avgReactionTime = 0;
		    this.style.display = "none";
			document.getElementById("end").style.display = "block";
			document.getElementById("reaction").style.display = "block";
			document.getElementById("reaction").innerHTML = "";
		    appear();
		}
	
		/*:::: EVENT HANDLER FUNCTION UPON CLICK OF 'STOP' BUTTON ::::*/
		document.getElementById("end").onclick = function (){
			
			document.getElementById("box").style.display = "none";
			this.style.display = "none";
			
		    var yourAvg = averageReactionTime();
			
			document.getElementById("reaction").style.display = "none";
			
			document.getElementById("avgReaction").style.display = "block"; 
			
			
			document.getElementById("avgReaction").innerHTML ="Your Avg Reaction Time :  <span>"+yourAvg+" Seconds</span>";
			
			
			reaction.splice(0,reaction.length);
			
			clickCounter = 0;
			
			optionGame();
			
		}
		
	
		/*:::: EVENT HANDLER FUNCTION UPON CLICK OF 'BOX' SHAPE ::::*/ 
	    document.getElementById("box").onclick = function () {
		  
		  clickedTime = Date.now();
		  
		  document.getElementById("box").style.display = "none";
		  
		  this.style.display = "none";
		  
		  clickCounter++;
		  
		  var yourReaction = reactionTime();
          
		  reaction.push(yourReaction);
		  /* alert(reaction); */
		  
		  document.getElementById("reaction").innerHTML ="Your Reaction Time :  <span>"+yourReaction+" Seconds</span>";
		  
		  appear();
		
		}
		
		/*:::: GAME OPTION POP UP ::::*/
		function optionGame (){
		    
			document.getElementById("gameOption").style.display = "block";
			
			/*:::: EVENT HANDLER FUNCTION UPON CLICK OF 'YES' BUTTON ::::*/
			document.getElementById("yes").onclick = function (){
				
				this.value = "true"; 
				document.getElementById("gameOption").style.display = "none";
				document.getElementById("box").style.display = "none"; 
				document.getElementById("avgReaction").style.display = "none"; 
				document.getElementById("begin").style.display = "block";
			}
		
		    /*:::: EVENT HANDLER FUNCTION UPON CLICK OF 'NO' BUTTON ::::*/
			document.getElementById("no").onclick = function (){
				this.value = "true";
				document.getElementById("gameOption").style.display = "none";
				document.getElementById("box").style.display = "none"; 
				document.getElementById("avgReaction").style.display = "none"; 
				document.getElementById("thankYou").style.display = "block";
			}
			
		}
		