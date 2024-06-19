const {LoginPage} = require('./LoginPage');
const {DashBoardPage} = require('./DashBoardPage');
const {OrdersHistoryPage} = require('./OrdersHistoryPage');
const {OrdersReviewPage} = require('./OrdersReviewPage');
const {CartPage} = require('./CartPage');
class POManager
{
constructor(page)
{
    this.page = page;
    this.loginPage = new LoginPage(this.page);
    this.dashBoardPage = new DashBoardPage(this.page);
    this.ordersHistoryPage = new OrdersHistoryPage(this.page);
    this.ordersReviewPage = new OrdersReviewPage(this.page);
    this.cartPage = new CartPage(this.page);


}

getLoginPage()
{
    return this.loginPage;
}

getCartPage()
{
    return this.cartPage;
}

getDashBoardPage()
{
    return this.dashBoardPage;
}
getOrdersHistoryPage()
{
    return this.ordersHistoryPage;
}

getOrdersReviewPage()
{
    return this.ordersReviewPage;
}
}
module.exports = {POManager};