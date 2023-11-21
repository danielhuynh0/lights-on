
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
                // $("#output").html(data);
                // Eric: edit this to make the game board appear
                // display the data that you want.
                $("#errorMessage").text(result);

            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#errorMessage").text("Error");
            }
        });

    });

});

function checkIfWin() {

    let win = false;
    // TODO: Make a loop that iterates through each box in the board to see
    // if status of light is all off. If so, then the player wins.

    if(win) {
        displayWinMessage();
    }
}

function displayWinMessage() {
    $("#gameMessage").text("You win!");
}