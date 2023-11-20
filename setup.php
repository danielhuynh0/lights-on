<!-- By Daniel Huynh (tap7ke) and Eric Li -->
<?php

$rows = 0;
$columns = 0;
$board_array = array();

if (isset($_GET)) {
    if(isset($_GET["rowsInput"])) {
        $rows = $_GET["rowsInput"];
    } else {
        header("Location: index.html");
        exit();
    }

    if(isset($_GET["colsInput"])) {
        $columns = $_GET["colsInput"];
    } else {
        header("Location: index.html");
        exit();
    }

    if($rows * $columns < 7) {
        for($i = 0; $i < $rows; $i++) {
            for($j = 0; $j < $columns; $j++) {
                $board_array[$i][$j] = 1; // 1 = on, 0 = off
            }
        }

        echo json_encode($board_array);

    } else {
        $lights_on_array = array();
        while(count($lights_on_array) < 7) {
            $row = rand(0, $rows - 1);
            $col = rand(0, $columns - 1);
            if(!in_array(array($row, $col), $lights_on_array)) {
                array_push($lights_on_array, array($row, $col));
            }
        }

        for($i = 0; $i < $rows; $i++) {
            for($j = 0; $j < $columns; $j++) {
                $board_array[$i][$j] = 0; // 1 = on, 0 = off
            }
        }

        for($i = 0; $i < count($lights_on_array); $i++) {
            $board_array[$lights_on_array[$i][0]][$lights_on_array[$i][1]] = 1;
        }

        echo json_encode($board_array);
        
    }
} else {
    header("Location: index.html");
    exit();
}

?>