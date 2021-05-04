<?php

echo "2021_05_2__1", PHP_EOL;

$nums_arr = array();

for ($i=0; $i<30; $i++) {
    $nums_arr[] = rand(1, 1000);
}

$user_num = (int) readline('Please enter your number (1 to 1000):');

$arr_contains_num = in_array($user_num, $nums_arr) ? '' : ' not ';

echo 'Your number is'. $arr_contains_num .'in the array', PHP_EOL;

//print_r($nums_arr);
