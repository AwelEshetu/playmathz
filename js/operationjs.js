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
			   $("#result-bubble1").html(correctAnswer * Math.floor(Math.random() * (operand1 + 1) + 1));
               $("#result-bubble2").html(correctAnswer * Math.floor(Math.random() * (operand2 + 1) + operand2));
			   
			   }else{
			   $("#result-bubble1").html(correctAnswer * Math.floor(Math.random() * (operand2 + 1) + 1));
               $("#result-bubble2").html(correctAnswer * Math.floor(Math.random() * (operand1 + 1) + operand2));
			   
			   }
		
		}else if (operator=='/'){
		   if(operand1 !=0 && operand1 !=0){
		      correctAnswer=operand1/operand2;
			  if(operand1<=operand2){
			  $("#result-bubble1").html(correctAnswer / Math.floor(Math.random() * (operand1 + 1) + 1));
              $("#result-bubble2").html(correctAnswer / Math.floor(Math.random() * (operand2 + 1) + operand2));
			  }else{
			  $("#result-bubble1").html(correctAnswer / Math.floor(Math.random() * (operand2 + 1) + 1));
              $("#result-bubble2").html(correctAnswer / Math.floor(Math.random() * (operand1 + 1) + operand2));
			  }
		   }
		   else{
		   
		    correctAnswer=0;
		   }
		
		}
		
		
    }else if (index == 1){
	
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
			   $("#result-bubble1").html(correctAnswer * Math.floor(Math.random() * (operand1 + 1) + 1));
               $("#result-bubble2").html(correctAnswer * Math.floor(Math.random() * (operand2 + 1) + operand2));
			   
			   }else{
			   $("#result-bubble1").html(correctAnswer * Math.floor(Math.random() * (operand2 + 1) + 1));
               $("#result-bubble2").html(correctAnswer * Math.floor(Math.random() * (operand1 + 1) + operand2));
			   
			   }
		
		}else if (operator=='/'){
		   if(operand1 !=0 && operand1 !=0){
		      correctAnswer=operand1/operand2;
			  if(operand1<=operand2){
			  $("#result-bubble1").html(correctAnswer / Math.floor(Math.random() * (operand1 + 1) + 1));
              $("#result-bubble2").html(correctAnswer / Math.floor(Math.random() * (operand2 + 1) + operand2));
			  }else{
			  $("#result-bubble1").html(correctAnswer / Math.floor(Math.random() * (operand2 + 1) + 1));
              $("#result-bubble2").html(correctAnswer / Math.floor(Math.random() * (operand1 + 1) + operand2));
			  }
		   }
		   else{
		   
		    correctAnswer=0;
		   }
		
		}
	
	}else{
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
			   $("#result-bubble1").html(correctAnswer * Math.floor(Math.random() * (operand1 + 1) + 1));
               $("#result-bubble2").html(correctAnswer * Math.floor(Math.random() * (operand2 + 1) + operand2));
			   
			   }else{
			   $("#result-bubble1").html(correctAnswer * Math.floor(Math.random() * (operand2 + 1) + 1));
               $("#result-bubble2").html(correctAnswer * Math.floor(Math.random() * (operand1 + 1) + operand2));
			   
			   }
		
		}else if (operator=='/'){
		   if(operand1 !=0 && operand1 !=0){
		      correctAnswer=operand1/operand2;
			  if(operand1<=operand2){
			  $("#result-bubble1").html(correctAnswer / Math.floor(Math.random() * (operand1 + 1) + 1));
              $("#result-bubble2").html(correctAnswer / Math.floor(Math.random() * (operand2 + 1) + operand2));
			  }else{
			  $("#result-bubble1").html(correctAnswer / Math.floor(Math.random() * (operand2 + 1) + 1));
              $("#result-bubble2").html(correctAnswer / Math.floor(Math.random() * (operand1 + 1) + operand2));
			  }
		   }
		   else{
		   
		    correctAnswer=0;
		   }
		
		}	
	
	}
}
