$(document).ready(function() {
    i = 0;
    $.getJSON("package.json", function (data) {
        var x = data.allProducts;
        var def = function () {
            $("#guitarpic").attr('src',x[i].image_path);
            $("#prod_info").html(x[i].product_description);
            $("#ship_info").html(x[i].shipping_details);
            $("#cust_reviews").html(x[i].customer_reviews);
        };
        $("#next_button").click(function () {
            if ( i <  x[i].image_path.length - 1 ){
                i++;
            }
            else {
                alert("There is no images");
            }
            def();
        });

        $("#prev_button").click(function () {
            if ( i == 0  ) {
                alert("There is no images");
            }
            else {
                i--;
            }
            def();
        });
        $("#PI").click(function () {
            $("#prod_info").slideToggle();
        });
        $("#SI").click(function () {
            $("#ship_info").slideToggle();
        });
        $("#CR").click(function () {
            $("#cust_reviews").slideToggle();
        });
        $("#buy").click(function () {
            window.location.href ="login.html";
            localStorage.setItem('local1',i);
        });
    });
});