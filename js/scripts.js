function check(){
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

/********the output******/

var type=["make an equilateral triangle", "make an isoseles triangle", "makes a scalene triangle","dosent make a triangle"]

/**********determine type of triangle formed*****/
    if(sides[0] <=0 || sides[1] <=0 || sides[2] <=0){
        var firstOutput=sides[0]+" "+sides[1]+" "+sides[2]+" "+type[3];
        document.getElementById("trackOutput").innerHTML=firstOutput;
      } 
    else if(sides[0]===sides[1] && sides[1]===sides[2] && sides[2]===sides[0]){
        var secondOutput=sides[0]+" "+sides[1]+" "+sides[2]+" "+type[0];
        document.getElementById("trackOutput").innerHTML=secondOutput;
      }
    else if(sides[0]===sides[1] || sides[0]===sides[2] || sides[1]===sides[2]){
        var thirdOutput=sides[0]+" "+sides[1]+" "+sides[2]+" "+type[1];
        document.getElementById("trackOutput").innerHTML=thirdOutput;
      }
    else if(sides[0]!==sides[1] && sides[0]!==sides[2] && sides[2]!==sides[1] && sides[0]+sides[1]>sides[2] && sides[1]+sides[2]>sides[0] && sides[2]+sides[0]>sides[1]){
        var fourthOutput=sides[0]+" "+sides[1]+" "+sides[2]+" "+type[2];
        document.getElementById("trackOutput").innerHTML=fourthOutput;
      }
      else if(sides[0]+sides[1]<sides[2] || sides[1]+sides[2]<sides[0] && sides[2]+sides[0]<sides[1]){
        var fifthOutput=sides[0]+" "+sides[1]+" "+sides[2]+" "+type[3];
        document.getElementById("trackOutput").innerHTML=fifthOutput;
      }
      else {
        var sixthOutput=type[3];
        document.getElementById("trackOutput").innerHTML=sixthOutput;
      }

}








