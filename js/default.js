//var to call the whole process on some interval.
var t;

//array of operators.
var operators = ['+', '-', '*', '/']; 

//array os divs which appear as bubbles.
var answerSpaces = ['result-bubble', 'result-bubble1', 'result-bubble2']; 

//function that generates the randome numbers and operator and assigns content to different divs/bubbles.
function changeProducts() {
            
            //assign the value we get from the jQuery queue function.
            queue = $("#result-bubble2").queue('fx');

            //select random value from the operators.
            var randOperator = operators[Math.floor(Math.random() * (operators.length))];
            //select random answer bubble from the answerSpaces array.
            var randanswerSpaces = answerSpaces[Math.floor(Math.random() * (answerSpaces.length))];

            console.log(Math.floor(Math.random() * (answerSpaces.length)));
            //if there is no queueing and the length of the queue is 0 then start another animation.
        	if (queue && queue.length === 0) {
                //show hidden element if there are any after the user gives the right answer.
                $("#operand1-bubble").show();
                $("#operand2-bubble").show();

                //put random values on the two bubble divs which hold operand one and operand two.
				$("#operand1-bubble").html(Math.floor((Math.random() * 20) + 1));
            	$("#operand2-bubble").html(Math.floor((Math.random() * 20) + 1));
            	
                //if the selected random operation is plus .
            	if(randOperator == '+')
            	{	
                    //then add the two values contained in operand1-bubble div and operand2-bubble.
            		$('#' + randanswerSpaces).html(parseInt($("#operand1-bubble").text()) +  parseInt($("#operand2-bubble").text())); 
                    //put adition operation in the operand div.
            		$("#operator-bubble").html('+');
            	} 

                //check if the randonmly selected operator is minus.
            	else if(randOperator == '-')
            	{	
                    //subtract operand 2 from operand 2.
            		$('#' + randanswerSpaces).html(parseInt($("#operand1-bubble").text()) -  parseInt($("#operand2-bubble").text()));  
                    //put subtraction operation in the operand div.
            		$("#operator-bubble").html('-');
            	} 

                //check if the selecred operation is multiplication.
            	else if(randOperator == '*')
            	{	
            		$('#' + randanswerSpaces).html(parseInt($("#operand1-bubble").text()) *  parseInt($("#operand2-bubble").text()));  
            		$("#operator-bubble").html('&times');
            	} 
                //check if the selected operation is division.
            	else if(randOperator == '/')
            	{	
            		$('#' + randanswerSpaces).html((parseInt($("#operand1-bubble").text()) /  parseInt($("#operand2-bubble").text())).toFixed(1));  
            		$("#operator-bubble").html('&divide');
            	} 

                //putValuesOnRemainingDivs(index, operator, operant1, operand2);
            	//$("#result-bubble1").html(Math.floor((Math.random() * 20) + 1));  
				//$("#result-bubble2").html(Math.floor((Math.random() * 20) + 1));

                //move the operand1-bubble div 600 pixels to top in 5 seconds.
        		$("#operand1-bubble").animate({top:-600},{duration:5000});
                //fade out the bubble after 5 seconds.
        		$("#operand1-bubble").fadeOut();
                //bring the fadded div down to the bottom.
	        	$("#operand1-bubble").animate({top:100});
                //then fade in the div again
	        	$("#operand1-bubble").fadeIn(); 


                //the same principle is applied here to creat the illusion of 
                //flying away divs like in the above case
	        	$("#operand2-bubble").animate({top:-600},{duration:5000});
        		$("#operand2-bubble").fadeOut();
	        	$("#operand2-bubble").animate({top:100});
	        	$("#operand2-bubble").fadeIn(); 

	        	$("#result-bubble").animate({top:-600},{duration:5000});
        		$("#result-bubble").fadeOut();
	        	$("#result-bubble").animate({top:100});
	        	$("#result-bubble").fadeIn();    

	        	$("#result-bubble1").animate({top:-700},{duration:5000});
        		$("#result-bubble1").fadeOut();
	        	$("#result-bubble1").animate({top:200});
	        	$("#result-bubble1").fadeIn(); 

	        	$("#result-bubble2").animate({top:-900},{duration:5000});
        		$("#result-bubble2").fadeOut();
	        	$("#result-bubble2").animate({top:300});
	        	$("#result-bubble2").fadeIn(); 



                $("#operand1-bubble").click(function() {
                $(this).stop(false, true, false);
                $(this).hide("explode", {
                    pieces: 500
                }, 250);
                
            }); 
        	}  
            
            
} 

$(document).ready(function () {   

    //call the changeProducts function in 1 second so 
    //but the if condition that check if the animation has ended or not
    //will let the other code to get executed unless the whole animation is
    //completed which happens every 5 seonds. 
    t = setInterval(changeProducts, 1000);	
});
























function putValuesOnRemainingDivs(index, operator, operand1, operand2){
    var correctAnswer = null;
    if(index == 0){
        if(operator=='+')
        {
            correctAnswer = operand1 + operand2;
            if(operand1 <= operand2){
                    $("#result-bubble1").html(correctAnswer - Math.floor(Math.random() * (operand1 + 1) + 1));
                    $("#result-bubble2").html(correctAnswer - Math.floor(Math.random() * (operand2 + 1) + operand1));
            }
            else
            {
                    $("#result-bubble1").html(correctAnswer - Math.floor(Math.random() * (operand2 + 1) + 1));
                    $("#result-bubble2").html(correctAnswer - Math.floor(Math.random() * (operand1 + 1) + operand2));
            }
        }
    }
}

