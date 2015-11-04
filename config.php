<?php

require_once('./stripe-php/init.php');

$stripe = array(
  "secret_key"      => "sk_test_nzLEJuOBlN8uiPYG3bWrswoJ",
  "publishable_key" => "pk_test_PINRzPvBXGYVB2Pe2WBl8yjB"
);

\Stripe\Stripe::setApiKey($stripe['secret_key']);
?>