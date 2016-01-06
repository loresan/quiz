$(document).ready(function() {
    //quiz question and answers array

    var questions = [{
        question: "What is the previous version of HTML, prior to HTML5?",
        choices: ["HTML4.9", "HTML 4.01", "HTML 4", "HTML 4.1"],
        qNum : 0,
        correct : 1,
        },
        {
        question: "Which doctype is correct for HTML5?",
        choices: ["&lt;!DOCTYPE HTML5&gt;", "&lt;!DOCTYPE html&gt;", "&lt;!DOCTYPE html-FIVE&gt;", "&lt;!DOCTYPE&gt;"],
        qNum : 1,
        correct : 1,
        },
        {
        question: "Which HTML5 element is used to specify a footer for a document or section?",
        choices: ["&lt;footer&gt;", "&lt;foot&gt;", "&lt;bottom&gt;", "&lt;below&gt;"],
        qNum : 2,
        correct : 0,
        },
        {
        question: "Which element is no longer supported in HTML5?",
        choices: ["&lt;cite&gt;", "&lt;base&gt;", "&lt;acronym&gt;", "&lt;abbr&gt;"],
        qNum : 3,
        correct : 2,
        },
        {
        question: "In HTML5, onblur and onfocus are:",
        choices: ["Event attributes", "HTML attributes", "HTML elements", "Style attributes"],
        qNum : 4,
        correct : 0,
    }]
    
    //global variables
    $("#continue").hide();
    var numberCorrect = 0;
    var currentQuestion = 0;
    
    

     $("#question_wrapper").on("click", "#submit", function () {
        checkAnswers();
        
     });

     $("#question_wrapper").on("click", "#continue", function () {
        currentQuestion++;
        nextQuestion(); 
        $('html').css("background-image", "url(back1.jpg)");
        $(".feedback").trigger("reset");
        
        
     });
       
        
   
    
    $("#question_wrapper").on("click", "#retry_button", function () {
        numberCorrect = 0;
        currentQuestion = 0;
        $(".score_bar").css("display", "none");
        $("#score_cup0").css("display", "inline");
        var newQuestion = '<span class="question">'+questions[currentQuestion].question+'</span><br><div id="answer_holder"><input type="radio" name="option" class="option" value="0"><span class="answer">'+questions[currentQuestion].choices[0]+'</span><br><input type="radio" name="option" class="option" value="1"><span class="answer">'+questions[currentQuestion].choices[1]+'</span><br><input type="radio" name="option" class="option" value="2"><span class="answer">'+questions[currentQuestion].choices[2]+'</span><br><input type="radio" name="option" class="option" value="3"><span class="answer">'+questions[currentQuestion].choices[3]+'</span><br></div><div id="button_holder"><input type="button" id="submit" value="Submit Answer"><span id="hint"></span><input type="button" id="retry_button" value="Try Again!"></div><div class="feedback"></div><div class="btn_cont"><input type="button" id="continue" value="Continue"></div>';
        $("#question_wrapper").html(newQuestion);
        $("#continue").hide();
    });

    

    function checkAnswers(){
        var answer = $("input[type='radio']:checked").val();
        if (answer == questions[currentQuestion].correct) {
            $(".feedback").css("color", "green").html("correct answer!:)");
            $("#continue").css("border", "green").show();
            numberCorrect++;
            updateProgBar();
               
        }
         else if (answer !== questions[currentQuestion].correct){
            $('html').css("background-image", "url(back_wr.jpg)"); 
            $(".feedback").html("wrong answer!:(");
            $("#continue").show();
        }
        else{
            updateProgBar();
            currentQuestion++;
            nextQuestion();
        }
    }

    function updateProgBar() {
       
        if (numberCorrect == 1) {
            $("#question_bar > p").css("width","20%");
        }
        else if (numberCorrect == 2) {
           $("#question_bar > p").css("width","40%");
           
        }
        else if (numberCorrect == 3) {
            $("#question_bar > p").css("width","60%");
           
        }
        else if (numberCorrect == 4) {
            $("#question_bar > p").css("width","80%");
            
        }
        else if (numberCorrect == 5) {
            $("#question_bar > p").css({"width":"100%", "border-radius": "10px"});
            
        }
    }

   

    

    function nextQuestion() {
        if (currentQuestion < 5) {
            $(".question").remove();
            $("#answer_holder input").remove();
            $("#answer_holder span").remove();
            var newQuestion = '<span class="question">'+questions[currentQuestion].question+'</span><br><div id="answer_holder"><input type="radio" name="option" class="option" value="0"><span class="answer">'+questions[currentQuestion].choices[0]+'</span><br><input type="radio" name="option" class="option" value="1"><span class="answer">'+questions[currentQuestion].choices[1]+'</span><br><input type="radio" name="option" class="option" value="2"><span class="answer">'+questions[currentQuestion].choices[2]+'</span><br><input type="radio" name="option" class="option" value="3"><span class="answer">'+questions[currentQuestion].choices[3]+'</span><br></div><div id="button_holder"><input type="button" id="submit" value="Submit Answer"><span id="hint"></span><input type="button" id="retry_button" value="Try Again!"></div><div class="feedback"></div><div class="btn_cont"><input type="button" id="continue" value="Continue"></div>';
            $("#question_wrapper").html(newQuestion);
            $("#continue").hide(); 
        }


        else {
            $(".question").remove();
            $("#answer_holder input").remove();
            $("#answer_holder span").remove();
            $("#submit").css("display", "none");
            $("#retry_button").css("display", "inline"); 
            if (numberCorrect == 1) {
                var finalScore = '<span id="final">Congratulations!!! You correctly answered '+numberCorrect+' question.'
                $("#answer_holder").html(finalScore);
                $("#continue").hide();
                $(".feedback").html("");
            }
            else {
                var finalScore = '<span id="final">Congratulations!!!  You correctly answered '+numberCorrect+' questions.'
                $("#answer_holder").html(finalScore);
                $("#continue").hide();
                $(".feedback").html("");
            }
        }
    }
});