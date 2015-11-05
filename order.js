var handler = StripeCheckout.configure({
    key: 'pk_test_6pRNASCoBOKtIshFeQd4XMUh',
    image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
    token: function (token) {
        $("#stripeToken").val(token.id);
        $("#stripeEmail").val(token.email);
        $("#myForm").submit();
    }
});

$('#customButton').on('click', function (e) {
   alert("whatup")
});