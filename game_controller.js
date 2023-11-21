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
                var resultData=JSON.parse(result)
                state=resultData;
                generateTable(rows, cols, resultData);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#errorMessage").text("Error");
            }
        });


    });
});

function generateTable(rows, cols, data){
    $("#board").empty();
    var count = 0;
    for(var y=0; y<rows; y++){
        var row = $("<tr>").appendTo("#board");
        for(var x=0; x<cols; x++){
            var cell = $("<td></td>").data('value', count).addClass("box").addClass("off_box").appendTo(row);
            if(data[y][x]==1){
                cell.removeClass("off_box");
                cell.addClass("on_box");
            }
            cell.on("mouseover", function() {
                $(this).addClass("hover_box");
            });
            cell.on("mouseout", function() {
                $(this).removeClass("hover_box");
            });
            count++;
        }
        $("#board").append("</tr>");
    }
}

function checkIfWin() {

    let win = true;

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