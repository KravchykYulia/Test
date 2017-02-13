//  (function (global) {

//  var dc = {};

//  var homeHtml = "snippets/home-snippet.html";
//  var testPageHtml = "snippets/test-page.html";
//  var testResultHtml = "snippets/test-result.html";

//  // Convenience function for inserting innerHTML for 'select'
//  var insertHtml = function (selector, html) {
//    var targetElem = document.querySelector(selector);
//    targetElem.innerHTML = html;
//  };

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

// //Load the test-page view
// dc.loadtestPage = function () {
//   showLoading("#main-content");
//   $ajaxUtils.sendGetRequest(
//     testPageHtml,
//     function (responseText) {
//     document.querySelector("#main-content")
//       .innerHTML = responseText;
//     },
//   false);
// };
// //Load the result test page view
// dc.loadresultPage = function () {
//   showLoading("#main-content");
//   $ajaxUtils.sendGetRequest(
//     testResultHtml,
//     function (responseText) {
//     document.querySelector("#main-content")
//       .innerHTML = responseText;
//     },
//   false);
// };








// global.$dc = dc;

// })(window);
