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
    var amount = $("#amount").val() * 100;
    var displayAmount = parseFloat(Math.floor($("#amount").val() * 100) / 100);
    // Open Checkout with further options
    handler.open({
        name: 'DaHui Wax',
        description: 'Custom amount ' + displayAmount + ' bars',
        amount: amount * 2.5
    });
    e.preventDefault();
});

// Close Checkout on page navigation
$(window).on('popstate', function () {
    handler.close();
});
