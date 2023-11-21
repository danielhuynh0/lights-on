
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
                console.log(data);
            }
        });
        
    });
});