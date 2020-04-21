// Correct Answers
var numberOfCorrect = 0;
var numberOfIncorrect = 0;
var questionCounter = 0;

var correct = ["q13", "q24", "q32", "q43", "q51", "q62", "q72", "q81", "q94", "q104"];

var correctAnswers =[
 "By traveling along Snake way", "Senzu Bean", "SSJ2",
 "Reveals the power level of an opponent", "Chi Chi",
 "Frieza", "Namek", "Bubbles and Gregory",
 "To fight Goku", "Saiyan Saga"
];

var allIds =[
"q11", "q12", "q13", "q14", "q21", "q22", "q23", "q24",
"q31", "q32", "q33", "q34", "q41", "q42", "q43", "q44",
"q51", "q52", "q53", "q54", "q61", "q62", "q63", "q64",
"q71", "q72", "q73", "q74", "q81", "q82", "q83", "q84",
"q91", "q92", "q93", "q94", "q101", "q102", "q103", "q104",
];

// Initiation

$(".s0").on("click", function(){
    $(".i0").addClass("none");
    $(".q1").removeClass("none");
    $("h4").removeClass("hidden");    
});

// Handle questions answers


for(let i=1; i<11; i++){
       
    $(".f"+i).on("submit", function(event){
        event.preventDefault();

        if ($("input[id="+correct[i-1]+"]:checked").length > 0) {
            

            $(".correct").removeClass("none");
            $(".q"+i).addClass("none");
            
            $(".c1").on("click",function(){
                
                $(".correct").addClass("none");

                $( ".q"+(i+1) ).removeClass("none");
                $( ".q"+(i) ).addClass("none");
                
            });
            
            numberOfCorrect++;
            questionCounter++;

            $(".question-count").text("Question: "+questionCounter+"/10");
            $(".correct-incorrect").text(numberOfCorrect+" Correct/"+numberOfIncorrect+" Incorrect.");
            // console.log("yes");
        }
        
        else{        

            $(".q"+i).addClass("none");

            $(".incorrect").html("<h3>Your answer is incorrect.</h3>"+"<p>The correct answer was: "+ correctAnswers[i-1]+".</p>"+"<button type='submit' class='start c1'>CONTINUE</button>");

            $(".incorrect").removeClass("none");

            $(".c1").on("click",function(){
                $(".incorrect").addClass("none"); 

                $( ".q"+(i+1) ).removeClass("none");
                $( ".q"+(i) ).addClass("none");
            });

            numberOfIncorrect++;
            questionCounter++;

            $(".question-count").text("Question: "+questionCounter+"/10");
            $(".correct-incorrect").text(numberOfCorrect+" Correct/"+numberOfIncorrect+" Incorrect.");
            // console.log("no");
        }   
        
        
        $(".c1").on("click",function(){
            if(questionCounter === 10){

                var score= ( (numberOfCorrect / questionCounter) * 100);

                if(score >= 60){
                    $(".pass").html("<h2>You have passed the quiz with a score of "+score+"%.</h2><br>"+"<a href='index.html'>Click here to restart!</a>");
                    $(".pass").removeClass("none");
                }
                else{
                    $(".fail").html("<h2>You have failed the quiz with a score of "+score+"%.</h2><br>"+"<a href='index.html'>Click here to restart!</a>");
                    $(".fail").removeClass("none");
                }  
            
            }
        });

        
    });    
}
