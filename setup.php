<!-- By Daniel Huynh (tap7ke) and Eric Li -->
<?php

$rows = 0;
$columns = 0;
$board_array = array();

if (isset($_GET)) {
    if(isset($_GET["rowsInput"])) {
        $rows = $_GET["rowsInput"];
    } else {
        // error message
    }

    if(isset($_GET["colsInput"])) {
        $columns = $_GET["colsInput"];
    } else {
        // error message
    }

    if($rows * $columns < 7) {
        for($i = 0; $i < $rows; $i++) {
            for($j = 0; $j < $columns; $j++) {
                $board_array[$i][$j] = 1; // 1 = on, 0 = off
            }
        }
        echo json_encode($board_array);
    } else {

    }
} else {
    header("Location: index.html");
    exit();
}

?>