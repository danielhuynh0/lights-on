// By Daniel Huynh (tap7ke) and Eric Li


var state=[];
var won = false;

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
                won=false;
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
            cell.on("click", function() {
                var index = $(this).data('value');
                updateState(rows, cols, index);
                checkIfWin(rows, cols);
            });
            count++;
        }
        $("#board").append("</tr>");
    }
}

function updateState(rows, cols, index){
    if(won){
        return;
    }
    var y = Math.floor(index / cols);
    var x = index-(y*cols);
    flip(x, y);
    if(x-1>=0){
        flip(x-1, y);
    }
    if(x+1<cols){
        flip(x+1, y);
    }
    if(y-1>=0){
        flip(x, y-1);
    }
    if(y+1<rows){
        flip(x, y+1);
    }
    updateTable(cols);
}

function flip(x, y){
    if(state[y][x]==1){
        state[y][x]=0;
    }
    else{
        state[y][x]=1;
    }
}

function updateTable(number){
    var count = 0;
    $('#board').each(function (rowIndex, row) {
        $(row).find('td').each(function (colIndex, col) {
            var y = Math.floor(count / number);
            var x = count-(y*number);
            count = count+1;
            if(state[y][x]==1){
                $(col).removeClass("off_box");
                $(col).addClass("on_box");
            }
            else{
                $(col).removeClass("on_box");
                $(col).addClass("off_box");
            }
        });
    });
}

function checkIfWin(rows, cols) {
    let win = true;

    for(var y=0; y<rows; y++){
        for(var x=0; x<cols; x++) {
            if(state[y][x] == 1) {
                win = false;
            }
        }
    }

    if(win) {
        won=true;
        displayWinMessage();
    }
}

function displayWinMessage() {
    $("#gameMessage").text("You win!");
}