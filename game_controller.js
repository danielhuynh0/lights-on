
$(document).ready(function() {
    $("#submit").click(function() {
        var rows = $("#rowsInput").val();
        var cols = $("#colsInput").val();

        $.ajax({
            url: "setup.php",
            type: "GET",
            data: {rowsInput: rows, colsInput: cols},
            success: function(data) {
                // $("#output").html(data);
                // Eric: edit this to make the game board appear
                // display the data that you want.
                //$("h3#errorMessage").
                generateTable(rows, cols, data);
                $("h3#errorMessage").text("done");
                console.log(data);
            }
        });
        
    });
});

function generateTable(rows, cols, data){
    for(var y; y<rows; y++){
        for(var x; x<cols; x++){
            alert("hello");
            $("table#board").append("<th></th>");
        }
    }
}