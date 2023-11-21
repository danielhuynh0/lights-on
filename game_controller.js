$(document).ready(function() {
    generateTable(5, 6, null);
    $("#submit").click(function(event) {
        var rows = $("#rowsInput").val();
        var cols = $("#colsInput").val();
        console.log("pressed button!");
        event.preventDefault();
        
        $.ajax({
            url: "setup.php",
            type: "GET",
            data: {rowsInput: rows, colsInput: cols},
            success: function(result) {
                // $("#output").html(data);
                // Eric: edit this to make the game board appear
                // display the data that you want.
                $("#errorMessage").text("result");
                generateTable(rows, cols, data);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#errorMessage").text("Error");
            }
        });


    });
});

function generateTable(rows, cols, data){
    alert(rows);
    for(var y=0; y<rows; y++){
        $("#board").append("<tr>");
        for(var x=0; x<cols; x++){
            $("#board").append("<th>Box</th>");
        }
        $("#board").append("</tr>");
    }
}