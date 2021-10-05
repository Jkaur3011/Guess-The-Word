player1_name = localStorage.getItem("player1name");
player2_name = localStorage.getItem("player2name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1NAME").innerHTML = player1_name+" : ";
document.getElementById("player2NAME").innerHTML = player2_name+" : ";

document.getElementById("player1SCORE").innerHTML = player1_score;
document.getElementById("player2SCORE").innerHTML = player2_score;

document.getElementById("q_turn").innerHTML = "Question Turn - "+player1_name;
document.getElementById("a_turn").innerHTML = "Answer Turn - "+player2_name;

function send_question(){
    getword = document.getElementById("question_input").value; //word saved into getword variable
    word = getword.toLowerCase(); //word converts into lower case
    console.log("Lower Case word = "+word);

    Word1 = word.charAt(1); //value of 1st letter of the word
    console.log(Word1);

    l_divide2 = Math.floor(word.length/2); //length of the word, divided by 2, if decimals like 5.2, take only 5 = Math.floor()
    Word2 = word.charAt(l_divide2); //value of center letter of the word
    console.log(Word2);

    l_minus1 = word.length - 1; //subtract 1 from length of word,
    Word3 = word.charAt(l_minus1); //value of last letter of the word
    console.log(Word3);

    add_dash1 = word.replace(Word1, "__");
    add_dash2 = add_dash1.replace(Word2, "__");
    add_dash3 = add_dash2.replace(Word3, "__");
    console.log(add_dash3);

    question_display = "<h4 id='word-display'> Question. "+add_dash3+"</h4>"
    type_box = "<br> Answer = <input type='text' id='input_Box'>";
    check_button = "<br> <br> <button class='btn btn-danger' onclick='check_answer()'> Check Answer </button>"
    DISPLAY = question_display + type_box + check_button;
    document.getElementById("output").innerHTML = DISPLAY;
    document.getElementById("question_input").value = "";
    document.getElementById("win_lose").innerHTML = "";
}

question_turn = "player1";
answer_turn = "player2";

function check_answer(){
    answer_user = document.getElementById("input_Box").value;
    s_ans = answer_user.toLowerCase();
    console.log("Lower case word "+ s_ans);

    if(s_ans == word){
        if(answer_turn == "player1"){
            player1_score = player1_score + 1;
            document.getElementById("player1SCORE").innerHTML = player1_score;
            document.getElementById("win_lose").innerHTML = "Well Done, "+player1_name+"!! Your answer is Correct!!"+"<br> Now it's your turn to ask the question to "+player2_name;
        
        }
        else{
            player2_score = player2_score + 1;
            document.getElementById("player2SCORE").innerHTML = player2_score;
            document.getElementById("win_lose").innerHTML = "Well Done, "+player2_name+"!! Your answer is Correct!!"+"<br> Now it's your turn to ask the question to "+player1_name;
        }
    }
    if(question_turn == "player1"){
        question_turn = "player2";
        document.getElementById("q_turn").innerHTML = "Question Turn - "+ player2_name;

    }
    else{
        question_turn = "player1";
        document.getElementById("q_turn").innerHTML = "Question Turn - "+ player1_name;
    }

    if(answer_turn == "player1"){
        answer_turn = "player2";
        document.getElementById("a_turn").innerHTML = "Answer Turn - "+ player2_name;
    }
    else{
        answer_turn = "player1";
        document.getElementById("a_turn").innerHTML = "Answer Turn - "+ player1_name;
    }

    document.getElementById("output").innerHTML = "";
}