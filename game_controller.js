$(document).ready(function() {
        
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
                $("#errorMessage").text(result);

            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#errorMessage").text("Error");
            }
        });


    });
});