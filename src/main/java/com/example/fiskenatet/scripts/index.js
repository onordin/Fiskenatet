/**
 * Created by Erik on 2016-04-21.
 */
$(document).ready(function () {
    var rootURL = 'http://localhost:8091/api';

    getAllProducts();

    function getAllProducts() {
        $.ajax({
            type: 'GET',
            contentType: 'application/json',
            url: rootURL + '/products',
            success: function (data, textStatus, jgXHR) {
                populateProductList(data)
            },
            error: function (jgXHR, textStatus, errorThrown) {
                console.log("getAllProducts error: " + textStatus);
            }
        });
    }

    function populateProductList(allProducts) {
        $products = $('#productList');
        var productString;
        var $smallLimit = 90;
        for (i = 0; i < allProducts.length; i++) {
            var description = allProducts[i].description;

            productString += '<div class="product"><a href="#" class="productLink" data-value="'+ allProducts[i].id +'"><div class = "col-sm-8">';
            productString += '<div><img src="' + allProducts[i].image + '" class="image"></div>';
            productString += '<div class="productText"><h3>' + allProducts[i].title + '</h3>';
            productString += '<p class="description">' + description.substr(0, $smallLimit) + '...' + '</p></div></a></div>';
            productString += '<div class="col-sm-4"><p class="endDate">End Date: <br>' + allProducts[i].endDate + '</p>';
            productString += '<p class="highestBid">Highest Bid:<br>' + allProducts[i].highestBid + '</p>';
            productString += '<p class="buyNowPrice">Buy Now:<br>' + allProducts[i].buyNowPrice + '</p></div></div>';
        }
        $products.append(productString);
    }
    
    $(document).on("click", ".productLink", function () {
        var currentProductId = $(this).data("value");
        sessionStorage.setItem('currentProductId', currentProductId);
        location.href = '../webcontent/productDetails.html';
    })
    
    


});
