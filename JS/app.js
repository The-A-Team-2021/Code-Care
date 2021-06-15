'use strict';
function showPreview(){
let htmlCode = document.getElementById('htmlcode').value

let cssCode = "<style>"+ document.getElementById('csscode').value + "</style>";

let jsCode = "<scri"+"pt>" + document.getElementById('jscode').value + "</scri"+"pt>" ;

let frame = document.getElementById('previewwindow').contentWindow.document ;

frame.open();
document.getElementById('button1').onclick = function (){frame.write(htmlCode+cssCode+jsCode);};

frame.close();
}
