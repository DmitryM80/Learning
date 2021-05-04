<?php

echo '2021_05_2__2', PHP_EOL;

$nums_arr = array();

for ($i=0; $i<30; $i++) {
    $nums_arr[] = rand(1, 1000);
}

$min = min($nums_arr);
$max = max($nums_arr);

echo 'Minimum: '.$min, PHP_EOL;
echo 'Maximum: '.$max, PHP_EOL;
echo 'Difference: '.($max - $min), PHP_EOL;
