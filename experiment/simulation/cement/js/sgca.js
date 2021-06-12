
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


// var ca;
// var questions=["Capacity of Le-Chatelier Flask used for determining</br> Specific Gravity of Cement is",
// 				"The amount of cement taken is calculated as ",
// 				"Care should be taken for the Kerosene to be free from water.",
// 				"If the cement is exposed to extreme moisture content due to bad weather</br> conditions, then the specific gravity of cement may go up to "];
				
// var options2=[["100ml","250ml","500ml","1000ml"],//250ml
// 			  ["W1+W2","W1-W2","W2-W1","W2"],//W2-W1
// 			  ["True","False"],//True
// 			  ["3.9","3.11","3.16","3.19"]];//3.19
			  
// function validateAnswer(qn,ans,left,top)
// {
// 	 $("#answer").empty();
// 	document.getElementById("a").innerHTML="";
// 	document.getElementById("questDiv").style="position:absolute; font-size:14px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:"+left+";top:"+top+";";
// 	document.getElementById("q").innerHTML=questions[qn];
// 	el = document.createElement("option");
// 	el.textContent = " ";
// 	el.value = " ";
// 	answer.appendChild(el);
  
// 	for(j=0;j<options2[qn].length;j++)
// 	{
// 		opt = options2[qn][j];

// 		el = document.createElement("option");
// 		el.textContent = opt;
// 		el.value = opt;
// 		answer.appendChild(el);
// 		$("#answer").change(function()
// 		{
// 			ca=$(this).children("option:selected").val();
// 			if(options2[qn][ans]==ca)
// 			{
// 				document.getElementById("a").innerHTML="Correct Answer!";
// 			}
// 			else
// 			{
// 				document.getElementById("a").innerHTML="Wrong! Answer is "+options2[qn][ans];
// 			}
// 			setTimeout(function()
// 			{
// 				document.getElementById("questDiv").style.visibility="hidden";
// 				document.getElementById("nextButton").style.visibility="visible";
// 			},1500);
// 		});
// 	}
// }

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
			document.getElementById("obserButton").onclick = "";
			document.getElementById("goBackButton").onclick = "";
			document.getElementById("experimentSetup").style.visibility = "hidden";
			document.getElementById('nextButton').style.visibility="hidden";

			document.getElementById("experimentID").style.visibility = "visible";
			document.getElementById("obserButton").style.visibility = "visible";

			document.getElementById("greenColor").style.cursor = "pointer";
			document.getElementById("greenColor").style.visibility = "visible";
			
			document.getElementById("greenColor").onclick = function(){
				document.getElementById("greenColor").style.visibility = "hidden";
				document.getElementById("redColor").style.visibility = "visible";

				// Show the water flow.
				document.getElementById("gatewayRotate").style.cursor = "pointer";
				document.getElementById("gatewayRotate").onclick = function(){
					fluidMoveAndPinMove();
				}
			}
			
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

var processFluid = "Water"

function setProcessFluid(){
	processFluid = document.getElementById("processFluid").value;
	console.log(processFluid);
}

var manoFluid = "Carbol tetrachloride"

function setManoFluid(){
	manoFluid = document.getElementById("manoFluid").value;
	console.log(manoFluid);
}

var x = 0;
function fluidMoveAndPinMove(){
	document.getElementById("gatewayRotate").style.cursor = "auto";
	console.log("clicked");
	document.getElementById("leftFluid").classList.add("moveLeftFluid");
	document.getElementById("rightFluid").classList.add("moveRightFluid");
	document.getElementById("rotatePin").classList.add("movePin");
	document.getElementById("gatewayRotate").classList.add("rotateGatewall");

	var h1Val = 35.00
	var h2Val = 35.00
	var valOfRato = 0.00;
	valueChange = setInterval(() => {
		h1Val = h1Val + 0.25;
		h1New = h1Val.toFixed(2);

		h2Val = h2Val - 0.25;
		h2New = h2Val.toFixed(2);

		valOfRato = valOfRato + 0.26;
		valOfRatoNew = valOfRato.toFixed(2);

		document.getElementById("leftCm").innerText = h1New;
		document.getElementById("rightCm").innerText = h2New;
		document.getElementById("ratoReadings").innerText = valOfRatoNew;

		if(h1Val == 70){
			console.log("Stopped at ", h1Val, "  ", h2Val, "  ", valOfRatoNew);
			clearInterval(valueChange);
			document.getElementById("gatewayRotate").classList.remove("rotateGatewall");
		}
	}, 28.57);

	setTimeout(() => {
		document.getElementById("leftFluid").style.visibility = "hidden";
		document.getElementById("rightFluid").style.visibility = "hidden";
		document.getElementById("leftFluidFinal").style.visibility = "visible";
		document.getElementById("rightFluidFinal").style.visibility = "visible";
		document.getElementById("rotatePin").style.visibility = "hidden";
		document.getElementById("rotatePinFinal").style.visibility = "visible";

		var table = document.getElementById("observeTable");
		var row = table.insertRow((x+1));
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		var cell4 = row.insertCell(3);
		var cell5 = row.insertCell(4);
		cell1.innerHTML = processFluid;
		cell2.innerHTML = manoFluid;
		cell3.innerHTML = h1New;
		cell4.innerHTML = h2New;
		cell5.innerHTML = valOfRatoNew;

		// var tblRow = `<tr>
		// 				<td>
		// 					${processFluid}
		// 				</td>
		// 				<td>
		// 					${manoFluid}
		// 				</td>
		// 				<td>
		// 					${h1New}
		// 				</td>
		// 				<td>
		// 					${h2New}
		// 				</td>
		// 				<td>
		// 					${valOfRatoNew}
		// 				</td>
		// 			</tr>`;
		// table.append(tblRow);

		document.getElementById("obserButton").onclick = function(){
			gotoObservation();
		}
		document.getElementById("goBackButton").onclick = function(){
			goBacktoStep2();
		}
	}, 4000);

}

function gotoObservation(){
	console.log("go to observ.");
	document.getElementById("experimentID").style.visibility = "hidden";
	document.getElementById("leftFluidFinal").style.visibility = "hidden";
	document.getElementById("rightFluidFinal").style.visibility = "hidden";
	document.getElementById("rotatePinFinal").style.visibility = "hidden";
	document.getElementById("redColor").style.visibility = "hidden";
	document.getElementById("obserButton").style.visibility = "hidden";

	document.getElementById("observeTable").style.visibility = "visible";
}

function goBacktoStep2(){

	document.getElementById("experimentID").style.visibility = "hidden";
	document.getElementById("leftFluidFinal").style.visibility = "hidden";
	document.getElementById("rightFluidFinal").style.visibility = "hidden";
	document.getElementById("rotatePinFinal").style.visibility = "hidden";
	document.getElementById("redColor").style.visibility = "hidden";
	document.getElementById("obserButton").style.visibility = "hidden";


	document.getElementById("observeTable").style.visibility = "hidden";

	simsubscreennum = 3;
	document.getElementById('canvas'+(4)).style.visibility="hidden";

	document.getElementById('canvas'+(simsubscreennum)).style.visibility="visible";
	document.getElementById("experimentSetup").style.visibility = "visible";
	document.getElementById('nextButton').style.visibility="visible";
}