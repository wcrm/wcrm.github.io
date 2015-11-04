<?php

$stripe = array(
  "secret_key"      => "sk_test_q7ZfBTEVlYiHmyXBrBqjPkzp",
  "publishable_key" => "pk_test_ALTGNanqExKCv0x19FP1nXwn"
);

\Stripe\Stripe::setApiKey($stripe['secret_key']);
?>