<?php

$recepient = "vlad.dn.96@gmail.com";
$sitename = "mamonovvlad.ru";

$name = trim($_POST["user"]);
$email = trim($_POST["email"]);
$phone = trim($_POST["phone"]);
$text = trim($_POST["text"]);
$message = "Имя: $name \nПочта: $email \nTелефон: $phone \nТекст: $text";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");