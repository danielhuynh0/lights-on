var state=[];

$(document).ready(function() {
    $("#submit").click(function(event) {
        let rows = $("#rowsInput").val();
        let cols = $("#colsInput").val();
        console.log("pressed button!");
        event.preventDefault();
        $("#gameMessage").text("");

        // TODO: Clear the board first if one exists
        
        $.ajax({
            url: "setup.php",
            type: "GET",
            data: {rowsInput: rows, colsInput: cols},
            success: function(result) {
                generateTable(rows, cols, result);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#errorMessage").text("Error");
            }
        });


    });
});

function generateTable(rows, cols, data){
    $("#board").empty();
    for(var y=0; y<rows; y++){
        $("#board").append("<tr>");
        for(var x=0; x<cols; x++){
            $("#board").append("<td>Box</td>");
        }
        $("#board").append("</tr>");
    }
}

function checkIfWin() {

    let win = true;
    // TODO: Make a loop that iterates through each box in the board to see
    // if status of light is all off. If so, then the player wins.

    for(let i=0; i<state.length; i++) {
        if(state[i] == 1) {
            win = false;
            break;
        }
        else {
            win = true;
        }
    }

    if(win) {
        displayWinMessage();
    }
}

function displayWinMessage() {
    $("#gameMessage").text("You win!");
}