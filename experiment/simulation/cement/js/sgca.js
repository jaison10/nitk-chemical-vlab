
//on click of next button
var mpointer=0;
var repeat =0;
var a,p,lastp,n,b,q,flag=0,avg,average;

var values=[[125.3,188.3,394.7,347.7,63.00,407.5,0.79,3.111],
			[125.3,188.9,395.1,347.7,63.6,407.5,0.79,3.101],
			[125.3,189.6,395.6,347.7,64.3,407.5,0.79,3.097],
			[125.3,189.8,396.1,347.7,64.5,407.5,0.79,3.165],
			[125.3,190,396.5,347.7,64.7,407.5,0.79,3.215]];
			
p=Math.floor(Math.random()*(4)); 		
 

function navNext()
{
  for (temp = 0; temp <= 7 ; temp++) 
  { 
      document.getElementById('canvas'+temp).style.visibility="hidden";
  }

 simsubscreennum+=1;
 document.getElementById('canvas'+(simsubscreennum)).style.visibility="visible";
 document.getElementById('nextButton').style.visibility="hidden";
 magic();
}


var ca;
var questions=["Capacity of Le-Chatelier Flask used for determining</br> Specific Gravity of Cement is",
				"The amount of cement taken is calculated as ",
				"Care should be taken for the Kerosene to be free from water.",
				"If the cement is exposed to extreme moisture content due to bad weather</br> conditions, then the specific gravity of cement may go up to "];
				
var options2=[["100ml","250ml","500ml","1000ml"],//250ml
			  ["W1+W2","W1-W2","W2-W1","W2"],//W2-W1
			  ["True","False"],//True
			  ["3.9","3.11","3.16","3.19"]];//3.19
			  
function validateAnswer(qn,ans,left,top)
{
	 $("#answer").empty();
	document.getElementById("a").innerHTML="";
	document.getElementById("questDiv").style="position:absolute; font-size:14px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:"+left+";top:"+top+";";
	document.getElementById("q").innerHTML=questions[qn];
	el = document.createElement("option");
	el.textContent = " ";
	el.value = " ";
	answer.appendChild(el);
  
	for(j=0;j<options2[qn].length;j++)
	{
		opt = options2[qn][j];

		el = document.createElement("option");
		el.textContent = opt;
		el.value = opt;
		answer.appendChild(el);
		$("#answer").change(function()
		{
			ca=$(this).children("option:selected").val();
			if(options2[qn][ans]==ca)
			{
				document.getElementById("a").innerHTML="Correct Answer!";
			}
			else
			{
				document.getElementById("a").innerHTML="Wrong! Answer is "+options2[qn][ans];
			}
			setTimeout(function()
			{
				document.getElementById("questDiv").style.visibility="hidden";
				document.getElementById("nextButton").style.visibility="visible";
			},1500);
		});
	}
}

//-----------------------------------------blink arrow on the next step---------------------------------------------
//blink arrow on the next step
function animatearrow()
{
   if (document.getElementById('arrow1').style.visibility=="hidden")
       document.getElementById('arrow1').style.visibility="visible";
   else
       document.getElementById('arrow1').style.visibility="hidden";
}

//stop blinking arrow
function myStopFunction() 
{
clearInterval(myInt);
document.getElementById('arrow1').style.visibility="hidden";
}

//-------------------------------------function magic starts here----------------------------------------------------

function magic()
{
	
	if (simsubscreennum==1)
	{
		// this is for STEP1
		refresh1();
		
		document.getElementById('nextButton').style.visibility="hidden";
	}
	
	else if (simsubscreennum==2)
	{
		if(chosenActivity == 1){
			console.log("One has chosen!");
			document.getElementById("labelImage").style.visibility = "visible";
			document.getElementById('nextButton').style.visibility="visible";
		}
		else{
			console.log("2 has chosen");
		}
	}

	else if (simsubscreennum==3)
	{
		if(chosenActivity == 1){
			document.getElementById("labelImage").style.visibility = "hidden";
			document.getElementById("experimentSetup").style.visibility = "visible";
			document.getElementById('nextButton').style.visibility="visible";
		}
		else{
			console.log("2 has chosen");
		}
		
	}
	else if (simsubscreennum==4)
	{
		if(chosenActivity == 1){
			document.getElementById("experimentSetup").style.visibility = "hidden";
			document.getElementById('nextButton').style.visibility="hidden";
		}
		else{
			console.log("2 has chosen");
		}
		
	}
	else if (simsubscreennum==5)
	{
				refresh1();

		document.getElementById('flask5').style.visibility="visible";
	    document.getElementById('nob5-1').style.visibility="visible";
        document.getElementById('a7').style.visibility="hidden";
	    document.getElementById('a8').style.visibility="hidden";
        document.getElementById('k3').style.visibility="hidden";
		document.getElementById('nextButton').style.visibility="hidden";
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 190px; top: 190px; height: 40px; z-index: 10;";
			
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		
		
		document.getElementById('nob5-1').onclick=function() { step5(); };
				
	}
	else if (simsubscreennum==6)
	{
		refresh1();
	}
	else if (simsubscreennum==7)
	{
	
	}
}

// ADDED By Jaison.
var chosenActivity

function selectAction(n)
{	
	chosenActivity = n
	console.log(chosenActivity);
	navNext();
}

var pipeLength = 1;

function setPipeLength(){
	pipeLength = document.getElementById("pipeLength").value;
	console.log(pipeLength);
}

var chosenPipeDia = 025;

function setPipeDia(){
	chosenPipeDia = document.getElementById("pipeDiaSelect").value;
	console.log(chosenPipeDia);
}

var processFluid = "water"

function setProcessFluid(){
	processFluid = document.getElementById("processFluid").value;
	console.log(processFluid);
}

var manoFluid = "carbontetra"

function setManoFluid(){
	manoFluid = document.getElementById("manoFluid").value;
	console.log(manoFluid);
}

function refresh1()
{
	document.getElementById('hand').style.transformOrigin = "";
	document.getElementById('hand').style.animation = "";
	document.getElementById('hand3').style.transformOrigin = "";
	document.getElementById('hand3').style.animation = "";
	document.getElementById('hand4').style.transformOrigin = "";
	document.getElementById('hand4').style.animation = "";
	document.getElementById('hand5').style.transformOrigin = "";
	document.getElementById('hand5').style.animation = "";
	document.getElementById("arrow1").style.animation = "";

	 
	 document.getElementById('v1').innerHTML="";
	 document.getElementById('v2').innerHTML="";
	 document.getElementById('v3').innerHTML="";
	 document.getElementById('v4').innerHTML="";
	 document.getElementById('v5').innerHTML="";
	 		 
	
}



// ADDITIONS
var count = 0;
//this count is to show the nomenclature of airfoil.
function changeNomen(){
	//removing zooming arrow of previous airfoil
	document.getElementById("arr-air").style.visibility =  'hidden';

	document.getElementById("change-airfoilButton").style.visibility = "hidden";
	// document.getElementById("change-airfoilButton").style = "width: 10%";
	document.getElementById("a2").style.visibility = 'hidden';
	var button = document.getElementById("nextButton");
	button.style.visibility = 'visible';

	document.getElementById("a3").style.visibility = 'hidden';
	count = count + 1;
	// for(i=1;i<=7;i++){
	// 	document.getElementById("air0"+i).style.visibility = 'hidden';
	// }
	// document.getElementById("air0"+count).style.visibility = 'visible';
	document.getElementById("nomen-list").style.visibility = 'visible';
	document.getElementById("air01").style.visibility = 'visible';
}
function airfoilNomen(n){
	
	for(var i=1;i<8;i++){
		document.getElementById("air0"+i).style.visibility = 'hidden';	
	}
	document.getElementById("air0"+n).style.visibility = 'visible';
	document.getElementById("air0"+n).style.animation = "fadeIn 1.5s forwards";
	
	//Displaying only names on fixed image.
// 	var x = document.getElementById("content-"+n);
// 	x.style.visibility = "visible";
}



//------------------------------LIFT CALCULATION PART---------------------------------------//
function calculateLift(l){
	document.getElementById("calc-lift-part"+(l)).style.visibility = "hidden";
	document.getElementById("solve-equation"+(l)).style.visibility = "visible";
}
function showCompare(l){
	document.getElementById("show-eqn"+(l)).style.visibility = "hidden";
	document.getElementById("calculate-lift"+(l)).style.visibility = "visible";
}
function verifyLift(l){
	var liftval = document.getElementById("lift-input"+(l)).value;
	if(!liftval && liftval==""){
		document.getElementById("outputLift"+(l)).textContent = "Enter some value!";
		document.getElementById("outputLift"+(l)).classList.add("setColorNoInput");
		document.getElementById("outputLift"+(l)).classList.remove("setColorCorrectInput");
		document.getElementById("outputLift"+(l)).classList.remove( "setColorIncorrectInput");
	}
	else if(liftval == 80){
		document.getElementById("outputLift"+(l)).textContent = "Correct answer!";
		document.getElementById("outputLift"+(l)).classList.add ("setColorCorrectInput");
		document.getElementById("outputLift"+(l)).classList.remove("setColorNoInput");
		document.getElementById("outputLift"+(l)).classList.remove( "setColorIncorrectInput");
		document.getElementById("nextButton").style.visibility = "visible";
	}
	else{
		document.getElementById("outputLift"+(l)).textContent = "Incorrect answer!";
		document.getElementById("outputLift"+(l)).classList.add("setColorIncorrectInput");
		document.getElementById("outputLift"+(l)).classList.remove("setColorNoInput");
		document.getElementById("outputLift"+(l)).classList.remove( "setColorCorrectInput");
	}
}