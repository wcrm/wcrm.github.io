<?php
 
  require_once('./config.php');
  require_once('./stripe-php/init.php');

  $token  = $_POST['stripeToken'];

  $chargeAmount = $_POST['amount'] * 250;
 
  $customer = \Stripe\Customer::create(array(
      'email' => 'customer@example.com',
      'source'  => $token
  ));
 
  $charge = \Stripe\Charge::create(array(
      'customer' => $customer->id,
      'amount'   => $chargeAmount,
      'currency' => 'usd'
  ));
 
  echo '<h1>Successfully charged! Please hit back.</h1>';
?>