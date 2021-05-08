let view = {
    displayMessage: function (msg) {
        let messageArea = document.getElementById("messageArea");
        messageArea.textContent = msg;
    },
    displayHit: function(location) {
        let cell = document.getElementById(location);
        cell.setAttribute("class", "hit");
       
    },
    displayMiss: function(location) {
        let cell = document.getElementById(location);
        cell.setAttribute("class", "miss");
    } 
};

view.displayHit("34");
view.displayHit("12");
view.displayHit("26");
view.displayMiss("00");
view.displayMiss("55");
view.displayMiss("25");

view.displayMessage("Tap, Tap, is this thing on?")