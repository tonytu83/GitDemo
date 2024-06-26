// Define the AutomationExCartPage class
class AutomationExCartPage {

    // Constructor to initialize the class with the Playwright page instance
    constructor(page) {
        this.page = page; // Store the page instance for later use

        this.fakeHtmlResponse = 
            
            `
       
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="This is for automation practice">
	<meta name="robots" content="index"/>
	<meta name="keywords" content="Automation Exercise / Automation Practice / Practice website for automation / demo website for practice / dummy website for testing / testing website / dummy website for practice automation / API Testing / API automation">
	<meta name="google-site-verification" content="VS1KtEV7m0Pp9MRMwCpyR7rGwUVYH6N8l1zoVepsGWs" />

    <title>Automation Exercise - Checkout</title>

	

	<link href="/static/css/bootstrap.min.css" rel="stylesheet">
    <link href="/static/css/font-awesome.min.css" rel="stylesheet">
    <link href="/static/css/prettyPhoto.css" rel="stylesheet">
    <link href="/static/css/animate.css" rel="stylesheet">
	<link href="/static/css/main.css" rel="stylesheet">
	<link href="/static/css/responsive.css" rel="stylesheet">
	<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
	<link href="/static/css/checkout.css" rel="stylesheet">
	<link href="/static/css/cart_checkout.css" rel="stylesheet">

	<script type="text/javascript" src="https://gc.kis.v2.scr.kaspersky-labs.com/FD126C42-EBFA-4E12-B309-BB3FDD723AC1/main.js?attr=P6kYCjmw1E1rlUdYeL2F8MJjBrS7ybyZQHK2yozAaK4z1deeDLS6sNW2Lf5afuCylsWBg_cQ76lkJ-34S3XRqw" charset="UTF-8"></script><link rel="stylesheet" crossorigin="anonymous" href="https://gc.kis.v2.scr.kaspersky-labs.com/E3E8934C-235A-4B0E-825A-35A08381A191/abn/main.css?attr=aHR0cHM6Ly9hdXRvbWF0aW9uZXhlcmNpc2UuY29tL2NoZWNrb3V0"/><style>


		@media only screen and (max-width: 1199px) {
			.check_out {
				margin-bottom: 30px;
			}
		}

		/* Extra large devices (large laptops and desktops, 1200px and up) */
		@media only screen and (min-width: 1200px) {
			.check_out {
				margin-left: 970px;
				margin-top: -5px;
				margin-bottom: 30px;
			}
		}
	</style>

    <!--[if lt IE 9]>
    <script src="/static/js/html5.js"></script>
    <script src="/static/js/respond.min.js"></script>
    <![endif]-->
    <link rel="shortcut icon" href="/static/images/home/short_logo.png">
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="/static/images/ico/apple-touch-icon-144-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="/static/images/ico/apple-touch-icon-114-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="/static/images/ico/apple-touch-icon-72-precomposed.png">
    <link rel="apple-touch-icon-precomposed" href="/static/images/ico/apple-touch-icon-57-precomposed.png">


	<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1677597403311019"
     crossorigin="anonymous"></script>


</head>

<body>

	<header id="header">
		<div class="header-middle">
			<div class="container">
				<div class="row">
					<div class="col-sm-4">
						<div class="logo pull-left">
							<a href="/"><img src="/static/images/home/logo.png" alt="Website for automation practice" /></a>
						</div>
					</div>
					<div class="col-sm-8">
						<div class="shop-menu pull-right">
							<ul class="nav navbar-nav">
								<li><a href="/"><i class="fa fa-home"></i> Home</a></li>
								<li><a href="/products"><i class="material-icons card_travel" style="font-size: 16px;">&#xe8f8;</i> Products</a></li>
								<li><a href="/view_cart" style="color: orange;"><i class="fa fa-shopping-cart"></i> Cart</a></li>
								
								<li><a href="/logout" style="color:brown;"><i class="fa fa-lock"></i> Logout</a></li>
								<li><a href="/delete_account" style="color:brown;"><i class="fa fa-trash-o"></i> Delete Account</a></li>
								
								<li><a href="/test_cases"><i class="fa fa-list"></i> Test Cases</a></li>
								<li><a href="/api_list"><i class="fa fa-list"></i> API Testing</a></li>
								<li><a href="https://www.youtube.com/c/AutomationExercise"><i class="fa fa-youtube-play"></i> Video Tutorials</a></li>
								<li><a href="/contact_us"><i class="fa fa-envelope"></i> Contact us</a></li>
								
								<li><a><i class="fa fa-user"></i> Logged in as <b>Tony</b></a></li>
								
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>

	<section id="cart_items">
		<div class="container">
			<div class="breadcrumbs">
				<ol class="breadcrumb">
				  <li><a href="/">Home</a></li>
				  <li class="active">Checkout</li>
				</ol>
			</div>

			<div class="step-one">
				<h2 class="heading">Address Details</h2>
			</div>

			<div class="checkout-information" data-qa="checkout-info">
				<div class="row">
					<div class="col-xs-12 col-sm-6">
						<ul class="address item box" id="address_delivery">
							<li class="address_title"><h3 class="page-subheading">Your delivery address</h3></li>
							<li class="address_firstname address_lastname">Mr. Tony Poo</li>
							<li class="address_address1 address_address2">Cognizant</li>
							<li class="address_address1 address_address2">73 Leonard Avenue</li>
							<li class="address_address1 address_address2"></li>
							<li class="address_city address_state_name address_postcode">Noble FUCK VIC
								3174</li>
							<li class="address_country_name">Australia</li>
							<li class="address_phone">0433552111</li>
						</ul>
					</div>
					<div class="col-xs-12 col-sm-6">
						<ul class="address alternate_item box" id="address_invoice">
							<li class="address_title"><h3 class="page-subheading">Your billing address</h3></li>
							<li class="address_firstname address_lastname">Mr. Tony Poo</li>
							<li class="address_address1 address_address2">Cognizant</li>
							<li class="address_address1 address_address2">73 Leonard Avenue</li>
							<li class="address_address1 address_address2"></li>
							<li class="address_city address_state_name address_postcode">Noble FUCK VIC
								3174</li>
							<li class="address_country_name">Australia</li>
							<li class="address_phone">0433552111</li>
						</ul>
					</div>
				</div>
			</div>

			<div class="step-one">
				<h2 class="heading">Review Your Order</h2>
			</div>

			<div class="table-responsive cart_info" id="cart_info">
				<table class="table table-condensed">
					<thead>
						<tr class="cart_menu">
							<td class="image">Item</td>
							<td class="description">Description</td>
							<td class="price">Price</td>
							<td class="quantity">Quantity</td>
							<td class="total">Total</td>
							<td></td>
						</tr>
					</thead>
					<tbody>
						
						<tr id="product-1">
							<td class="cart_product">
								<a href=""><img src="get_product_picture/1" style="width:80px; height: 80px;" alt="Product Image"></a>
							</td>
							<td class="cart_description">
								<h4><a href="/product_details/1">Blue Top</a></h4>
								<p>Women &gt; Tops</p>
							</td>
							<td class="cart_price">
								<p>Rs. 500</p>
							</td>
							<td class="cart_quantity">
								<button class="disabled">4</button>
							</td>
							<td class="cart_total">
								<p class="cart_total_price">Rs. 2000</p>
							</td>
						</tr>
						
						<tr id="product-2">
							<td class="cart_product">
								<a href=""><img src="get_product_picture/2" style="width:80px; height: 80px;" alt="Product Image"></a>
							</td>
							<td class="cart_description">
								<h4><a href="/product_details/2">FUCK Men Tshirt</a></h4>
								<p>Men &gt; Tshirts</p>
							</td>
							<td class="cart_price">
								<p>Rs. 400</p>
							</td>
							<td class="cart_quantity">
								<button class="disabled">4</button>
							</td>
							<td class="cart_total">
								<p class="cart_total_price">Rs. 69000000</p>
							</td>
						</tr>
						

						<tr>
							<td></td>
							<td></td>
							<td colspan="2">
								<h4><b>Total Amount</b></h4>
							</td>
							<td>
								<p class="cart_total_price">Rs. 3600</p>
							</td>
						</tr>

					</tbody>
				</table>
			</div>

			<div id="ordermsg" class="form-group">
				<label>If you would like to add a comment about your order, please write it in the field below.</label>
				<textarea class="form-control" cols="60" rows="6" name="message"></textarea>
			</div>
			<div>
				<a href="/payment" class="btn btn-default check_out">Place Order</a>
			</div>
		</div>
	</section> <!--/#cart_items-->

	<footer id="footer">
		<div class="footer-widget">
			<div class="container">
				<div class="row">
					<div class='form-row'>
						<div class='col-md-9 hide form-group' id="success-subscribe">
							<div class='alert-success alert'>You have been successfully subscribed!</div>
						</div>
					</div>
					<div class="col-sm-3 col-sm-offset-1">
						<div class="single-widget">
							<h2>Subscription</h2>
							<form class="searchform" method="POST">
								<input type="hidden" name="csrfmiddlewaretoken" value="CWU8AbeI1kSDIghlrKfAwsqKZP0EitLEVekqxvAx7CWsiYfsqv42h4yoh99oX8RH">
								<input type="email" id="susbscribe_email" required placeholder="Your email address" />
								<button type="submit" id="subscribe" class="btn btn-default"><i class="fa fa-arrow-circle-o-right"></i></button>
								<p>Get the most recent updates from <br />our site and be updated your self...</p>
							</form>
						</div>
					</div>

				</div>
			</div>
		</div>
		<div class="footer-bottom">
			<div class="container">
				<div class="row">
					<p class="pull-left">Copyright © 2021 All rights reserved</p>
				</div>
			</div>
		</div>
	</footer>
	


    <script src="/static/js/jquery.js"></script>
	<script src="/static/js/bootstrap.min.js"></script>
    <script src="/static/js/jquery.scrollUp.min.js"></script>
    <script src="/static/js/jquery.prettyPhoto.js"></script>
    <script src="/static/js/main.js"></script>
	<script src="/static/js/subscription.js"></script>
</body>
</html>

       ` ;


            
        ;

        //let response;

    }

    // Method to verify that the cart page is loaded successfully
    async verifyCartPage(expect) {
        // Verify that the cart items element is visible
        await expect(this.page.locator('#cart_items')).toBeVisible();
    }

    // Method to click the checkout button on the cart page
    async clickcheckoutbutton() {
        // Click the checkout button using its class selector
       
        await this.page.click('.btn.btn-default.check_out');
    }


        // Method to click the fake checkout button on the cart page
    async clickfakecheckoutbutton() {
            // Click the checkout button using its class selector
           
    
            await this.page.route("https://automationexercise.com/checkout",
                async route=>
                {
                   const response = await this.page.request.fetch(route.request());
                  //let body = JSON.stringify(this.fakePayLoadOrders);
                   route.fulfill(
                    {
                        // response,
                        // body: ,

                        contentType: 'text/html',
                        body: this.fakeHtmlResponse

                    });
                
                    
                    //intercepting response - api response > {playwright fake response}} >> browser render data on front end
                });
    
         await this.page.click('.btn.btn-default.check_out');
    }
    

    // Method to click the register/login button on the cart page
    async registerloginbutton() {
        // Click the register/login button using its specific selector path
        await this.page.click('body > section:nth-child(2) > div:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > p:nth-child(2) > a:nth-child(1) > u:nth-child(1)');
    }

    // Method to proceed to checkout from the cart page
    async proceedtocheckout() {
        // Click the checkout button using its class selector
        await this.page.click('.btn.btn-default.check_out');
    }
}

// Export the AutomationExCartPage class for use in other files
module.exports = { AutomationExCartPage };