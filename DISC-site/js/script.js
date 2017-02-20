(function (global) {

 var dc = {};

 var homeHtml = "snippets/home-snippet.html";
 var testPageHtml = "snippets/test-page.html";
 var testResultHtml = "snippets/test-result.html";
 var DHtml= "snippets/D-snippet.html";
 var IHtml= "snippets/I-snippet.html";
 var SHtml= "snippets/S-snippet.html";
 var CHtml= "snippets/C-snippet.html";

 // Convenience function for inserting innerHTML for 'select'
 var insertHtml = function (selector, html) {
   var targetElem = document.querySelector(selector);
   targetElem.innerHTML = html;
 };

// Show loading icon inside element identified by 'selector'.
var showLoading = function (selector) {
  var html = "<div class='text-center'>";
  html += "<img src='images/ajax-loader.gif'></div>";
  insertHtml(selector, html);
};

// On page load (before images or CSS)
document.addEventListener("DOMContentLoaded", function (event) {

// On first load, show home view
showLoading("#main-content");
$ajaxUtils.sendGetRequest(
  homeHtml,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
});

 function dynamicEvent(blockNumber) {
   // this.innerHTML = <a href="#">blockNumber</a>;
    this.html("<a href='#'>blockNumber</a>");
    displayBlock(blockNumber);
    console.log(blockNumber);
};
  

//Load the test-page view
dc.loadtestPage = function () {
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    testPageHtml,
    function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
    // $("#main-content").find("script").each(function(i) {
    //                 eval($(this).text());});

   
   },
  false);
};
//Load the result test page view
dc.loadresultPage = function () {
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    testResultHtml,
    function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
    },
  false);
};
//Load the about D page view
dc.loadDPage = function () {
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    DHtml,
    function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
    },
  false);
};
//Load the about I page view
dc.loadIPage = function () {
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    IHtml,
    function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
    },
  false);
};//Load the about S page view
dc.loadSPage = function () {
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    SHtml,
    function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
    },
  false);
};//Load the about C page view
dc.loadCPage = function () {
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    CHtml,
    function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
    },
  false);
};
global.$dc = dc;

// })(window);
  

// $(function () { 
$("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide');
    }
});
  // In Firefox and Safari, the click event doesn't retain the focus
  // on the clicked button. Therefore, the blur event will not fire on
  // user clicking somewhere else in the page and the blur event handler
  // which is set up above will not be called.
  // Refer to issue #28 in the repo.
  // Solution: force focus on the element that the click event fired on
$("#navbarToggle").click(function (event) {
    $(event.target).focus();
  });
//Activate the Carousel
$('.carousel').carousel({
        interval: 10000 //changes the speed
    });
// Set datas
var t11=[{adj:'Экспрессивный', letter: 'I'}, {adj:'Покладистый', letter: 'C'}, {adj:'Волевой', letter: 'D'}, {adj:'Осторожный', letter: 'S'}];
var t12=[{adj: 'Пылкий', letter: 'D'}, {adj: 'Разговорчивый', letter: 'I'}, {adj: 'Добродушный', letter: 'S'}, {adj: 'Сдержанный', letter: 'C'}];
var t13=[{adj: 'Любитель приключений', letter: 'D'}, {adj: 'Энтузиаст', letter: 'I'}, {adj: 'Исполнитель инструкций', letter: 'C'}, {adj: 'Верный', letter: 'S'}];
var block1=[t11,t12,t13];
var t21=[{adj: 'Настойчивый', letter: 'D'}, {adj: 'Осторожный', letter: 'C'}, {adj: 'Эмоциональный', letter: 'I'}, {adj: 'Удовлетворенный', letter: 'S'}];
var t22=[{adj: 'Довольный', letter: 'S'}, {adj: 'Нетерпеливый', letter: 'D'}, {adj: 'Убедительный', letter: 'I'}, {adj: 'Безропотный', letter: 'C'}];
var t23=[{adj: 'Смиренный', letter: 'C'}, {adj: 'Умеющий слушать', letter: 'S'}, {adj: 'Душа компании', letter: 'I'}, {adj: 'Волевой', letter: 'D'}];
var block2=[t21,t22,t23]
var t31=[{adj: 'Правильный', letter: 'C'}, {adj: 'Первопроходец', letter: 'D'}, {adj: 'Спокойный', letter: 'S'}, {adj: 'Влиятельный', letter: 'I'}];
var t32=[{adj: 'Почтительный', letter: 'C'}, {adj: 'Контактный', letter: 'I'}, {adj: 'Агрессивный', letter: 'D'}, {adj: 'Мягкий', letter: 'S'}];
var t33=[{adj: 'Весельчак', letter: 'I'}, {adj: 'Покорный', letter: 'S'}, {adj: 'Тактичный', letter: 'C'}, {adj: 'Соперничающий', letter: 'D'}];
var block3=[t31,t32,t33];
var t41=[{adj: 'Точный', letter: 'C'}, {adj: 'Доминирующий', letter: 'D'}, {adj: 'Охотный', letter: 'S'}, {adj: 'Притягательный', letter: 'I'}];
var t42=[{adj: 'Уравновешенный', letter: 'I'}, {adj: 'Уступчивый', letter: 'C'}, {adj: 'Идущий на риск', letter: 'D'}, {adj: 'Услужливый', letter: 'S'}];
var t43=[{adj: 'Осмотрительный', letter: 'C'}, {adj: 'Добрососедский', letter: 'S'}, {adj: 'Энергичный', letter: 'D'}, {adj: 'Убедительный', letter: 'I'}];
var block4=[t41,t42,t43];
var t51=[{adj: 'Уравновешенный', letter: 'S'}, {adj: 'Мотивирующий', letter: 'I'}, {adj: 'Щепетильный', letter: 'C'}, {adj: 'Решительный', letter: 'D'}];
var t52=[{adj: 'Уверенный', letter: 'I'}, {adj: 'Готовый к сотрудничеству', letter: 'C'}, {adj: 'Аргументирующий', letter: 'D'}, {adj: 'Беззаботный', letter: 'S'}];
var t53=[{adj: 'Сдержанный, замкнутый', letter: 'S'}, {adj: 'Прямой', letter: 'D'}, {adj: 'Строгий', letter: 'C'}, {adj: 'Красноречивый', letter: 'I'}];
var block5=[t51,t52,t53];
var t61=[{adj: 'Застенчивый', letter: 'C'}, {adj: 'Требовательный', letter: 'D'}, {adj: 'Терпеливый', letter: 'S'}, {adj: 'Очаровательный', letter: 'I'}];
var t62=[{adj: 'Неугомонный', letter: 'D'}, {adj: 'Дисциплини-рованный', letter: 'C'}, {adj: 'Вдохновляющий', letter: 'I'}, {adj: 'Внимательный', letter: 'S'}];
var t63=[{adj: 'Обязательный', letter: 'S'}, {adj: 'Оживленный', letter: 'I'}, {adj: 'Решительный', letter: 'D'}, {adj: 'Точный', letter: 'C'}];
var block6=[t61,t62,t63];
var t71=[{adj: 'Добросовестный', letter: 'C'}, {adj: 'Компанейский', letter: 'I'}, {adj: 'Добрый', letter: 'S'}, {adj: 'Уверенный в себе', letter: 'D'}];
var t72=[{adj: 'Дипломатичный', letter: 'C'}, {adj: 'Отважный', letter: 'D'}, {adj: 'Сочувствующий', letter: 'S'}, {adj: 'Оптимистичный', letter: 'I'}];
var t73=[{adj: 'Настойчивый', letter: 'D'}, {adj: 'Общительный', letter: 'I'}, {adj: 'Постоянный', letter: 'S'}, {adj: 'Организованный', letter: 'C'}];
var block7=[t71,t72,t73];
var t81=[{adj: 'Соглашающийся', letter: 'C'}, {adj: 'Владеющий собой', letter: 'S'}, {adj: 'Шутливый', letter: 'I'}, {adj: 'Настойчивый', letter: 'D'}];
var t82=[{adj: 'Обаятельный', letter: 'I'}, {adj: 'Позитивный', letter: 'D'}, {adj: 'Снисходительный', letter: 'S'}, {adj: 'Требовательный', letter: 'C'}];
var t83=[{adj: 'Коммуникабельный', letter: 'I'}, {adj: 'Смелый', letter: 'D'}, {adj: 'Сдержанный', letter: 'S'}, {adj: 'Перфекционист', letter: 'C'}];
var block8=[t81,t82,t83];
var blockAll=[block1,block2,block3,block4,block5,block6,block7,block8];
// 
/* When user click pagination-button or direction button:
   1. Change prop checked: false for privious and true for radio that has been checked in this block 
   2. Expose data in the tables and change 'value' attribute according to the block
   3. Add checked value: {block:#, table:#, type:type, letter: value} to array 'result' 
   4. Change value if user has changed the answer
*/
 // 1 and 2. Change prop checked: false for privious and true for radio that has been checked in this block and Expose data in the tables and change 'value' attribute according to the block
var blockNumber=1;
function displayBlock(k){
   // Change prop checked: false for privious block
   $('input[type="radio"]').prop('checked', false);
     // Expose data in the tables and change 'value' attribute according to the block
   for (var j=0; j<3; j++){
       for (var i=0; i<4; i++) {
          $('#block div:eq('+j+') tbody tr:eq('+i+') td:eq(0)').text(blockAll[k-1][j][i].adj);
          $('#block div:eq('+j+') tbody tr:eq('+i+') td:eq(1) input').attr('value',blockAll[k-1][j][i].letter);
          $('#block div:eq('+j+') tbody tr:eq('+i+') td:eq(2) input').attr('value',blockAll[k-1][j][i].letter);
       };
    };
     // Change prop checked: true for radio that has been checked in this block 
   for (var i=0; i<results.length; i++) {
      if (results[i].block===k) {
        var l=results[i].table;
        var n=results[i].type; 
        var m=results[i].letter;
        $("input[data-table='" +l+ "'][data-type='" +n+ "'][value='" +m+ "']").prop('checked', true);
      }
   };
   $('.pagination a').css('background','#bbb');
   $('.pagination a:eq('+(k-1)+')').css('background','#002147');
 }; 
    // $('.pagination a').click(function(eventObject) {
    //   blockNumber=$(this).index("a")+1;
    //   displayBlock(blockNumber);
    //   eventObject.preventDefault();  
    // });

   $('.next').click(function(eventObject) {
      blockNumber=Math.min(blockNumber+1,8); 
      displayBlock(blockNumber);
   });
   $('.previous').click(function(eventObject) {
      blockNumber=Math.max(blockNumber-1,0);  
      displayBlock(blockNumber);
   });
 
//  3 and 4. Add checked value: {block:#, table:#, type:type, letter: value} to array 'results' and Change value if user has changed the answer
var results=new Array (0);
var mostLetters=new Array(0);
var lessLetters=new Array(0);
function choose(block, table, type, letter){
  this.block=block;
  this.table=table;
  this.type=type;
  this.letter=letter;
  return this;
};
// Remove answer that has been changed and push new answer 
function checkAnswer(answerArray, answerBlock, answerTable, answerType, answerLetter){
   console.log("Array: " + answerArray, answerBlock, answerTable, answerType, answerLetter);
   function filterArray(obj){
        if (obj.block===answerBlock && obj.table===answerTable && obj.type===answerType) { return false;}
        else {return true;}
     };
     filteredArray=answerArray.filter(filterArray); 
     var newAnswer=new choose(answerBlock, answerTable, answerType, answerLetter);
     filteredArray.push(newAnswer);
    return filteredArray;
};

$('input[type=radio]').change(function(eventObject){
  eventObject.preventDefault();
  var block=blockNumber;
  var table=$(this).attr('data-table'); //string
  var type=$(this).attr('data-type');
  var letter=$(this).attr('value');
// Check, if user has changed the answer (in the same block, table and type) and add new answer
  results=checkAnswer(results, block, table, type, letter);
  console.log(results);
  return results;
  });

/* When user click presult-button:
   1. Check if there is all answers: if not - display alert "Заполните, пожалуйста, все блоки!"
   2. Count and display results
   3. Build charts 
   4. Display resultsModal; result`s charts and type`s description
*/

var resultD, resultI, resultS, resultC;
function letterSelector(answerArray, answerType, answerLetter) {
 return $.grep(answerArray, function(e) { return (e.type == answerType && e.letter == answerLetter);} );
}
// Building charts with results function
function drawChartResult(resultD,  resultI,  resultS, resultC) {
  google.charts.load('current', {packages: ['corechart']});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
     // Define the chart to be drawn.
      var data = google.visualization.arrayToDataTable([
         ['Type', 'Value', { role: 'style' }],
         ['D', resultD, '#ff0023'],
         ['I', resultI, '#ffdd00'], 
         ['S', resultS, '#a2ff00'], 
         ['C', resultC, '#0023ff'] 
      ]);
      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);
      // Set chart options
      var options = {title:'Результаты теста:',
                     bar: {groupWidth: "95%"},
                     legend: { position: "none" }
                   };
      // Instantiate and draw the chart.
      var chart = new google.visualization.BarChart(document.getElementById('barCharts'));
      chart.draw(data, options);
    };
};

$('.result-button button').click(function(eventObject) {
  //1. Check if there is all answers: - display alert "Заполните, пожалуйста, все блоки!"
// if (results.length<24) {alert ("Заполните, пожалуйста, все блоки!");}    Убрать!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  //2. Count and display results
// else {                                                                  Убрать!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    resultD=letterSelector(results, "most", "D").length - letterSelector(results, "less", "D").length;
    resultI=letterSelector(results, "most", "I").length - letterSelector(results, "less", "I").length;
    resultS=letterSelector(results, "most", "S").length - letterSelector(results, "less", "S").length;
    resultC=letterSelector(results, "most", "C").length - letterSelector(results, "less", "C").length;
    $('#resultD').text(resultD);
    $('#resultI').text(resultI);
    $('#resultS').text(resultS);
    $('#resultC').text(resultC);
    $('#resultsModal').modal("toggle");
    drawChartResult(resultD,  resultI,  resultS, resultC);

    
//}                                                                        Убрать!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

});


})(window);

// }); // ready function  
















