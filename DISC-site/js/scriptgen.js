// (function (global) {

// var dc = {};

// var homeHtml = "snippets/home-snippet.html";
// // var testPageHtml = "snippets/test-page.html";
// // var testResultHtml = "snippets/test-result.html";


// // Convenience function for inserting innerHTML for 'select'
// var insertHtml = function (selector, html) {
//   var targetElem = document.querySelector(selector);
//   targetElem.innerHTML = html;
// };

// // Show loading icon inside element identified by 'selector'.
// var showLoading = function (selector) {
//   var html = "<div class='text-center'>";
//   html += "<img src='images/ajax-loader.gif'></div>";
//   insertHtml(selector, html);
// };

// // On page load (before images or CSS)
// document.addEventListener("DOMContentLoaded", function (event) {

// // On first load, show home view
// showLoading("#main-content");
// $ajaxUtils.sendGetRequest(
//   homeHtml,
//   function (responseText) {
//     document.querySelector("#main-content")
//       .innerHTML = responseText;
//   },
//   false);
// });

// Load the menu categories view
// dc.loadMenuCategories = function () {
//   showLoading("#main-content");
//   $ajaxUtils.sendGetRequest(
//     allCategoriesUrl,
//     buildAndShowCategoriesHTML);
// };


// // Load the menu items view
// // 'categoryShort' is a short_name for a category
// dc.loadMenuItems = function (categoryShort) {
//   showLoading("#main-content");
//   $ajaxUtils.sendGetRequest(
//     menuItemsUrl + categoryShort,
//     buildAndShowMenuItemsHTML);
// };








// global.$dc = dc;

// })(window);
