function addUser(){
    player_1 = document.getElementById("P1Input").value;
    player_2 = document.getElementById("P2Input").value;
    localStorage.setItem("player1" , player_1);
    localStorage.setItem("player2" , player_2);
    
            window.location = "mainScreen.html";
}