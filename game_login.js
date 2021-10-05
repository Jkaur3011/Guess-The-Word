function logged_in(){
    player_input1 = document.getElementById("playeri_1").value;
    player_input2 = document.getElementById("playeri_2").value;

    localStorage.setItem("player1name", player_input1);
    localStorage.setItem("player2name", player_input2);

    window.location = "game_page.html";
}