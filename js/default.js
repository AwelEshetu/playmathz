/*Tasks

Level is not to be thought later
Score
Sound
Pop effect
*/



//var to call the whole process on some interval.
var t;

//array of operators.
var operators = ['+', '-', '*', '/']; 

//array os divs which appear as bubbles.
var answerSpaces = ['result-bubble', 'result-bubble1', 'result-bubble2']; 






//initialize score.
var score = 0;

//creat audio element.
var audioElement = document.createElement('audio');
audioElement.setAttribute('src', './audio/pop.mp3');

var audioElement1 = document.createElement('audio');
audioElement1.setAttribute('src', './audio/pops1.wav');

var audioElement2 = document.createElement('audio');
audioElement2.setAttribute('src', './audio/pop.mp3');
//function that generates the randome numbers and operator and assigns content to different divs/bubbles.
function changeProducts() {
            
            //assign the value we get from the jQuery queue function.
            queue = $("#result-bubble2").queue('fx');

            //assign initial score to the score element.
            $('.score_value').html(score);
            
            //select random value from the operators.
            var randOperator = operators[Math.floor(Math.random() * (operators.length))];
            //select random answer bubble from the answerSpaces array.
            var randanswerSpaces = answerSpaces[Math.floor(Math.random() * (answerSpaces.length))];
            console.log(Math.floor(Math.random() * (answerSpaces.length)));
            //if there is no queueing and the length of the queue is 0 then start another animation.
        	if (queue && queue.length === 0) {
                //show hidden element if there are any after the user gives the right answer.


                //put random values on the two bubble divs which hold operand one and operand two.
				$("#operand1-bubble").html(Math.floor((Math.random() * 20) + 1));
            	$("#operand2-bubble").html(Math.floor((Math.random() * 20) + 1));
            	
                //get the value of the operands from the divs content.
                var operandOne = parseInt($("#operand1-bubble").text());
                var operandTwo = parseInt($("#operand2-bubble").text());
                //if the selected random operation is plus .
            	if(randOperator == '+')
            	{	
                    //then add the two values contained in operand1-bubble div and operand2-bubble.
            		$('#' + randanswerSpaces).html(operandOne +  operandTwo); 
                    
                    //put adition operation in the operand div.
            		$("#operator-bubble").html('+');
            	} 

                //check if the randonmly selected operator is minus.
            	else if(randOperator == '-')
            	{	
                    //subtract operand 2 from operand 2.
            		$('#' + randanswerSpaces).html(operandOne -  operandTwo); 
                    
                    //put subtraction operation in the operand div.
            		$("#operator-bubble").html('-');
            	} 

                //check if the selecred operation is multiplication.
            	else if(randOperator == '*')
            	{	
            		$('#' + randanswerSpaces).html(operandOne *  operandTwo);  
                   
            		$("#operator-bubble").html('&times');
            	} 
                //check if the selected operation is division.
            	else if(randOperator == '/')
            	{	
            		$('#' + randanswerSpaces).html((operandOne /  operandTwo).toFixed(1));  
                    
            		$("#operator-bubble").html('&divide');
            	} 

                putValuesOnRemainingDivs(randanswerSpaces, randOperator, operandOne, operandTwo);
                //move the operand1-bubble div 600 pixels to top in 5 seconds.
        		$("#operand1-bubble").animate({top:-600},{duration:8000});
                //fade out the bubble after 5 seconds.
        		$("#operand1-bubble").fadeOut();
                //bring the fadded div down to the bottom.
	        	$("#operand1-bubble").animate({top:100});
                //then fade in the div again
	        	$("#operand1-bubble").fadeIn(); 


                //the same principle is applied here to creat the illusion of 
                //flying away divs like in the above case
	        	$("#operand2-bubble").animate({top:-600},{duration:8000});
        		$("#operand2-bubble").fadeOut();
	        	$("#operand2-bubble").animate({top:100});
	        	$("#operand2-bubble").fadeIn(); 

                //the same principle is applied here to creat the illusion of 
                //flying away divs like in the above case
	        	$("#result-bubble").animate({top:-600},{duration:8000});
        		$("#result-bubble").fadeOut();
	        	$("#result-bubble").animate({top:100});
	        	$("#result-bubble").fadeIn();    

                //the same principle is applied here to creat the illusion of 
                //flying away divs like in the above case
	        	$("#result-bubble1").animate({top:-700},{duration:8000});
        		$("#result-bubble1").fadeOut();
	        	$("#result-bubble1").animate({top:200});
	        	$("#result-bubble1").fadeIn(); 

                //the same principle is applied here to creat the illusion of 
                //flying away divs like in the above case
	        	$("#result-bubble2").animate({top:-900},{duration:8000});
        		$("#result-bubble2").fadeOut();
	        	$("#result-bubble2").animate({top:300});
	        	$("#result-bubble2").fadeIn(); 






                $('.possible_result').live('click', function(){
                    var answer = $('#' + randanswerSpaces).html();
                    userAnswer = $(this).html();
                    var elem1 = $('#operand1-bubble');
                    var elem2 = $('#operand2-bubble');
                    score = 5;
                    //if the user answer is right then add values to score.
                    if(userAnswer == answer){
                        //add 5 points to previous score.
                        
                        score = score + parseInt($('.score_value').html());
                        //.update score on the DOM.
                        $('.score_value').html(score);
                        audioElement.play();
                        $(this).stop(false, true, false);
                        $([this, elem1, elem2]).toggle('expode',10,function(){
                            $("#operand1-bubble").show();
                            $("#operand2-bubble").show();
                            $("#result-bubble").show();
                            $("#result1-bubble").show();
                            $("#result2-bubble").show();

                        });


                    }

                    else{
                        
                        score = score - parseInt($('.score_value').html());
                        $('.score_value').html(score);
                    }
                });
        	}  



            
            
} 

$(document).ready(function () {   
    //call the changeProducts function in 1 second 
    //but the if condition that check if the animation has ended or not
    //will not let the other code to get executed unless the whole animation is
    //completed, which happens every 5 seonds. 
    t = setInterval(changeProducts, 1000);	
});


function putValuesOnRemainingDivs(index, operator, operand1, operand2){
    var correctAnswer = null;
    if(index == 'result-bubble'){
        if(operator=='+')
        {
            correctAnswer = operand1 + operand2;
            if(operand1 <= operand2){
                    $("#result-bubble1").html(correctAnswer + Math.floor(Math.random() * (operand1 + 1) + 1));
                    $("#result-bubble2").html(correctAnswer + Math.floor(Math.random() * (operand2 + 1) + operand1));
            }
            else
            {
                    $("#result-bubble1").html(correctAnswer - Math.floor(Math.random() * (operand2 + 1) + 1));
                    $("#result-bubble2").html(correctAnswer - Math.floor(Math.random() * (operand1 + 1) + operand2));
            }
        }else if (operator=='-'){
        
            correctAnswer=operand1 - operand2;
            if(operand1<=operand2){
                 $("#result-bubble1").html(correctAnswer + Math.floor(Math.random() * (operand1 + 1) + 1));
                 $("#result-bubble2").html(correctAnswer + Math.floor(Math.random() * (operand2 + 1) + operand1));
            
            }
            else{
               $("#result-bubble1").html(correctAnswer - Math.floor(Math.random() * (operand2 + 1) + 1));
               $("#result-bubble2").html(correctAnswer - Math.floor(Math.random() * (operand1 + 1) + operand2));
            
            }
        }else if (operator=='*'){
               correctAnswer=operand1*operand2;
               if(operand1<=operand2){
               $("#result-bubble1").html(correctAnswer + Math.floor(Math.random() * (operand1 + 1) + 1));
               $("#result-bubble2").html(correctAnswer + Math.floor(Math.random() * (operand2 + 1) + operand2));
               
               }else{
               $("#result-bubble1").html(correctAnswer - Math.floor(Math.random() * (operand2 + 1) + 1));
               $("#result-bubble2").html(correctAnswer - Math.floor(Math.random() * (operand1 + 1) + operand2));
               
               }
        
        }else if (operator=='/'){
           if(operand1 ==0  ||operand2 !=0){
              correctAnswer=0;
              if(operand1<=operand2){
              $("#result-bubble1").html(correctAnswer + Math.floor(Math.random() * (operand1 + 1) + 1));
              $("#result-bubble2").html(correctAnswer + Math.floor(Math.random() * (operand2 + 1) + operand2));
              }else{
              $("#result-bubble1").html(correctAnswer - Math.floor(Math.random() * (operand2 + 1) + 1));
              $("#result-bubble2").html(correctAnswer - Math.floor(Math.random() * (operand1 + 1) + operand2));
              }
           }
           else if (operand1 !=0 && operand2 !=0){
           
            correctAnswer=operand1 /operand2;
            if(operand1<=operand2){
             $("#result-bubble1").html(correctAnswer + Math.floor(Math.random() * (operand1 + 1) + 1));
             $("#result-bubble2").html(correctAnswer + Math.floor(Math.random() * (operand2 + 1) + operand2));
            
            }
            else{
             $("#result-bubble1").html(correctAnswer - Math.floor(Math.random() * (operand2 + 1) + 1));
             $("#result-bubble2").html(correctAnswer - Math.floor(Math.random() * (operand1 + 1) + operand2));
            
            }
           }else{
            correctAnswer="illegal-operation";
            if(operand1<=operand2){
             $("#result-bubble1").html(correctAnswer + Math.floor(Math.random() * (operand1 + 1) + 1));
             $("#result-bubble2").html(correctAnswer + Math.floor(Math.random() * (operand2 + 1) + operand2));
            }
            else{
             $("#result-bubble1").html(correctAnswer - Math.floor(Math.random() * (operand2 + 1) + 1));
             $("#result-bubble2").html(correctAnswer - Math.floor(Math.random() * (operand1 + 1) + operand2));
             
            }
           
           }
        
        }
        
        
    }else if (index == 'result-bubble1'){
    
       if(operator=='+')
        {
            correctAnswer = operand1 + operand2;
            if(operand1 <= operand2){
                    $("#result-bubble").html(correctAnswer + Math.floor(Math.random() * (operand1 + 1) + 1));
                    $("#result-bubble2").html(correctAnswer + Math.floor(Math.random() * (operand2 + 1) + operand1));
            }
            else
            {
                    $("#result-bubble").html(correctAnswer - Math.floor(Math.random() * (operand2 + 1) + 1));
                    $("#result-bubble2").html(correctAnswer - Math.floor(Math.random() * (operand1 + 1) + operand2));
            }
        }else if (operator=='-'){
        
            correctAnswer=operand1 - operand2;
            if(operand1<=operand2){
                 $("#result-bubble").html(correctAnswer + Math.floor(Math.random() * (operand1 + 1) + 1));
                 $("#result-bubble2").html(correctAnswer + Math.floor(Math.random() * (operand2 + 1) + operand1));
            
            }
            else{
               $("#result-bubble").html(correctAnswer - Math.floor(Math.random() * (operand2 + 1) + 1));
               $("#result-bubble2").html(correctAnswer - Math.floor(Math.random() * (operand1 + 1) + operand2));
            
            }
        }else if (operator=='*'){
               correctAnswer=operand1*operand2;
               if(operand1<=operand2){
               $("#result-bubble").html(correctAnswer + Math.floor(Math.random() * (operand1 + 1) + 1));
               $("#result-bubble2").html(correctAnswer + Math.floor(Math.random() * (operand2 + 1) + operand2));
               
               }else{
               $("#result-bubble1").html(correctAnswer - Math.floor(Math.random() * (operand2 + 1) + 1));
               $("#result-bubble2").html(correctAnswer - Math.floor(Math.random() * (operand1 + 1) + operand2));
               
               }
        
        }else if (operator=='/'){
           if(operand1 ==0  ||operand2 !=0){
              correctAnswer=0;
              if(operand1<=operand2){
                $("#result-bubble").html(correctAnswer + Math.floor(Math.random() * (operand1 + 1) + 1));
                $("#result-bubble2").html(correctAnswer + Math.floor(Math.random() * (operand2 + 1) + operand2));
              }else{
                $("#result-bubble1").html(correctAnswer - Math.floor(Math.random() * (operand2 + 1) + 1));
                $("#result-bubble2").html(correctAnswer - Math.floor(Math.random() * (operand1 + 1) + operand2));
              }
           }
           else if (operand1 !=0 && operand2 !=0){
           
            correctAnswer=operand1 /operand2;
            if(operand1<=operand2){
                $("#result-bubble").html(correctAnswer + Math.floor(Math.random() * (operand1 + 1) + 1));
                $("#result-bubble2").html(correctAnswer + Math.floor(Math.random() * (operand2 + 1) + operand2));
            
            }
            else{
                $("#result-bubble").html(correctAnswer - Math.floor(Math.random() * (operand2 + 1) + 1));
                $("#result-bubble2").html(correctAnswer - Math.floor(Math.random() * (operand1 + 1) + operand2));
            
            }
           }else{
            correctAnswer="illegal-operation";
            if(operand1<=operand2){
                $("#result-bubble").html(correctAnswer + Math.floor(Math.random() * (operand1 + 1) + 1));
                $("#result-bubble2").html(correctAnswer + Math.floor(Math.random() * (operand2 + 1) + operand2));
            }
            else{
                $("#result-bubble").html(correctAnswer - Math.floor(Math.random() * (operand2 + 1) + 1));
                $("#result-bubble2").html(correctAnswer - Math.floor(Math.random() * (operand1 + 1) + operand2));
             
            }
           
           }
        
        }
    }else{
      if(operator=='+')
        {
            correctAnswer = operand1 + operand2;
            if(operand1 <= operand2){
                    $("#result-bubble1").html(correctAnswer + Math.floor(Math.random() * (operand1 + 1) + 1));
                    $("#result-bubble").html(correctAnswer + Math.floor(Math.random() * (operand2 + 1) + operand1));
            }
            else
            {
                    $("#result-bubble1").html(correctAnswer - Math.floor(Math.random() * (operand2 + 1) + 1));
                    $("#result-bubble").html(correctAnswer - Math.floor(Math.random() * (operand1 + 1) + operand2));
            }
        }else if (operator=='-'){
        
            correctAnswer=operand1 - operand2;
            if(operand1<=operand2){
                 $("#result-bubble1").html(correctAnswer + Math.floor(Math.random() * (operand1 + 1) + 1));
                 $("#result-bubble").html(correctAnswer + Math.floor(Math.random() * (operand2 + 1) + operand1));
            
            }
            else{
               $("#result-bubble1").html(correctAnswer - Math.floor(Math.random() * (operand2 + 1) + 1));
               $("#result-bubble").html(correctAnswer - Math.floor(Math.random() * (operand1 + 1) + operand2));
            
            }
        }else if (operator=='*'){
               correctAnswer=operand1*operand2;
               if(operand1<=operand2){
               $("#result-bubble1").html(correctAnswer + Math.floor(Math.random() * (operand1 + 1) + 1));
               $("#result-bubble").html(correctAnswer + Math.floor(Math.random() * (operand2 + 1) + operand2));
               
               }else{
               $("#result-bubble1").html(correctAnswer - Math.floor(Math.random() * (operand2 + 1) + 1));
               $("#result-bubble").html(correctAnswer - Math.floor(Math.random() * (operand1 + 1) + operand2));
               
               }
        
        }else if (operator=='/'){
           if(operand1 ==0  ||operand2 !=0){
              correctAnswer=0;
              if(operand1<=operand2){
              $("#result-bubble1").html(correctAnswer + Math.floor(Math.random() * (operand1 + 1) + 1));
              $("#result-bubble").html(correctAnswer + Math.floor(Math.random() * (operand2 + 1) + operand2));
              }else{
              $("#result-bubble1").html(correctAnswer - Math.floor(Math.random() * (operand2 + 1) + 1));
              $("#result-bubble").html(correctAnswer - Math.floor(Math.random() * (operand1 + 1) + operand2));
              }
           }
           else if (operand1 !=0 && operand2 !=0){
           
            correctAnswer=operand1 /operand2;
            if(operand1<=operand2){
             $("#result-bubble1").html(correctAnswer + Math.floor(Math.random() * (operand1 + 1) + 1));
             $("#result-bubble").html(correctAnswer + Math.floor(Math.random() * (operand2 + 1) + operand2));
            
            }
            else{
             $("#result-bubble1").html(correctAnswer - Math.floor(Math.random() * (operand2 + 1) + 1));
             $("#result-bubble").html(correctAnswer - Math.floor(Math.random() * (operand1 + 1) + operand2));
            
            }
           }else{
            correctAnswer="illegal-operation";
            if(operand1<=operand2){
             $("#result-bubble1").html(correctAnswer + Math.floor(Math.random() * (operand1 + 1) + 1));
             $("#result-bubble").html(correctAnswer + Math.floor(Math.random() * (operand2 + 1) + operand2));
            }
            else{
             $("#result-bubble1").html(correctAnswer - Math.floor(Math.random() * (operand2 + 1) + 1));
             $("#result-bubble").html(correctAnswer - Math.floor(Math.random() * (operand1 + 1) + operand2));
             
            }
           
           }
        
        }
        }
}