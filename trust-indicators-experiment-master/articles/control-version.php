<?php
include ('../../inc/functions.php');
include ('data.php');
// replace all the footnotes with an empty string
$identifier = 'control';
$article = remove_footnotes($footnotes, $article);
include ('../article-template--trust.php');
?>
