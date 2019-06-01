
/*******collect the values of the triangle*****/

var line1=document.getElementById("sideA").value;
var line2=document.getElementById("sideB").value;
var line3=document.getElementById("sideC").value;

/********turn the strings to integers*********/

var sidea=parseFloat(line1);
var sideb=parseFloat(line2);
var sidec=parseFloat(line3);

/*******put the values in an array*****/

var sides=[sidea,sideb,sidec];
