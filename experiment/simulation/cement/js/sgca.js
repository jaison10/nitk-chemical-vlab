
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
			document.getElementById("configExp").style.visibility = "hidden";
		}
		else{
			console.log("2 has chosen");
			document.getElementById("configExp").style.visibility = "visible";
			document.getElementById('nextButton').style.visibility="visible";
		}
	}

	else if (simsubscreennum==3)
	{
		if(chosenActivity == 1){
			document.getElementById("labelImage").style.visibility = "hidden";
			document.getElementById("experimentSetup").style.visibility = "visible";
			document.getElementById('nextButton').style.visibility="visible";
			document.getElementById("evaluatePart").style.visibility = "hidden";
		}
		else{
			console.log("2 has chosen");
			document.getElementById("configExp").style.visibility = "hidden";
			document.getElementById('nextButton').style.visibility="hidden";
			
			document.getElementById("evaluatePart").style.visibility = "visible";
		}
		
	}
	else if (simsubscreennum==4)
	{
		if(chosenActivity == 1){
			if(manoFluid == "Carbol tetrachloride"){
				document.getElementById("bottomU").style.visibility = "hidden";
				document.getElementById("leftFluid").style.visibility = "hidden";
				document.getElementById("rightFluid").style.visibility = "hidden";
				document.getElementById("bottomPinkU").style.visibility = "visible";
				document.getElementById("leftPinkFluid").style.visibility = "visible";
				document.getElementById("rightPinkFluid").style.visibility = "visible";
			}
			else if(manoFluid == "Mercury"){
				document.getElementById("bottomU").style.visibility = "visible";
				document.getElementById("leftFluid").style.visibility = "visible";
				document.getElementById("rightFluid").style.visibility = "visible";

				document.getElementById("bottomPinkU").style.visibility = "hidden";
				document.getElementById("leftPinkFluid").style.visibility = "hidden";
				document.getElementById("rightPinkFluid").style.visibility = "hidden";
			}
			
			numberOfClicks = 0;
			numberOfClicks = 0;
			h1Val = 35.00
			h2Val = 35.00
			valOfRato = 0.00;

			document.getElementById("rotatePinSecond").style.visibility = "hidden";
			document.getElementById("rotatePinThird").style.visibility = "hidden";
			document.getElementById("rotatePinFinal").style.visibility = "hidden";
			document.getElementById("rotatePin").style.visibility = "visible";

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
var numberOfClicks = 0;
var h1Val = 35.00
var h2Val = 35.00
var valOfRato = 0.00;

function fluidMoveAndPinMove(){
	document.getElementById("gatewayRotate").style.cursor = "auto";
	console.log("clicked");

	if( processFluid == "Water" &&  manoFluid == "Mercury"){
		numberOfClicks += 1;
		
		if(numberOfClicks == 1){
			document.getElementById("leftFluid").classList.add("KMLeftFluid1");
			document.getElementById("rightFluid").classList.add("KMRightFluid1");
			document.getElementById("rotatePin").classList.add("movePin1");
			document.getElementById("gatewayRotate").classList.add("rotateGatewall");
			document.getElementById("addtoTableButton").style.visibility = "hidden";
			
			valueChange = setInterval(() => {
				h1Val = h1Val + 0.25;
				h1New = h1Val.toFixed(2);
		
				h2Val = h2Val - 0.25;
				h2New = h2Val.toFixed(2);
		
				valOfRato = valOfRato + 0.27;
				valOfRatoNew = valOfRato.toFixed(2);
		
				document.getElementById("leftCm").innerText = h1New;
				document.getElementById("rightCm").innerText = h2New;
				document.getElementById("ratoReadings").innerText = valOfRatoNew;
				console.log(h1Val);
				if(h1Val == 42.00){
					document.getElementById("gatewayRotate").classList.remove("rotateGatewall");
					clearInterval(valueChange);		
					document.getElementById("gatewayRotate").style.cursor = "pointer";

					document.getElementById("leftFluid").style.visibility = "hidden";
					document.getElementById("rightFluid").style.visibility = "hidden";
					document.getElementById("leftFluidSecond").style.visibility = "visible";
					document.getElementById("rightFluidSecond").style.visibility = "visible";

					document.getElementById("leftFluid").classList.remove("KMLeftFluid1");
					document.getElementById("rightFluid").classList.remove("KMRightFluid1");

					document.getElementById("rotatePin").style.visibility = "hidden";
					document.getElementById("rotatePin").classList.remove("movePin1");
					document.getElementById("rotatePinSecond").style.visibility = "visible";
					document.getElementById("addtoTableButton").style.visibility = "visible";
				}
				document.getElementById("addtoTableButton").onclick = function(){
					var table = document.getElementById("observeTable");
					var row = table.insertRow(1);
					var cell1 = row.insertCell(0);
					var cell2 = row.insertCell(1);
					var cell3 = row.insertCell(2);
					var cell4 = row.insertCell(3);
					var cell5 = row.insertCell(4);
					cell1.innerHTML = processFluid;
					cell2.innerHTML = manoFluid;
					cell3.innerHTML = valOfRatoNew;
					cell4.innerHTML = h1New;
					cell5.innerHTML = h2New;
					document.getElementById("addtoTableButton").style.visibility = "hidden";
				}
					document.getElementById("obserButton").onclick = function(){
						gotoObservation();
					}
					document.getElementById("goBackButton").onclick = function(){
						goBacktoStep2();
					}
				
			}, 28.57);
		}

		if(numberOfClicks == 2){
			document.getElementById("leftFluidSecond").classList.add("KMLeftFluid2");
			document.getElementById("rightFluidSecond").classList.add("KMRightFluid2");
			document.getElementById("rotatePinSecond").classList.add("movePin2");
			document.getElementById("gatewayRotate").classList.add("rotateGatewall");
			
			document.getElementById("addtoTableButton").style.visibility = "hidden";

			valueChange = setInterval(() => {
				h1Val = h1Val + 0.25;
				h1New = h1Val.toFixed(2);
		
				h2Val = h2Val - 0.25;
				h2New = h2Val.toFixed(2);
		
				valOfRato = valOfRato + 0.27;
				valOfRatoNew = valOfRato.toFixed(2);
		
				document.getElementById("leftCm").innerText = h1New;
				document.getElementById("rightCm").innerText = h2New;
				document.getElementById("ratoReadings").innerText = valOfRatoNew;
				console.log(h1Val);
				if(h1Val == 49.00){
					document.getElementById("gatewayRotate").classList.remove("rotateGatewall");
					clearInterval(valueChange);	
					document.getElementById("gatewayRotate").style.cursor = "pointer";

					document.getElementById("leftFluidSecond").style.visibility = "hidden";
					document.getElementById("rightFluidSecond").style.visibility = "hidden";
					document.getElementById("leftFluidThird").style.visibility = "visible";
					document.getElementById("rightFluidThird").style.visibility = "visible";

					document.getElementById("leftFluidSecond").classList.remove("KMLeftFluid2");
					document.getElementById("rightFluidSecond").classList.remove("KMRightFluid2");

					document.getElementById("rotatePinThird").style.visibility = "visible";
					document.getElementById("rotatePinSecond").classList.remove("movePin2");
					document.getElementById("rotatePinSecond").style.visibility = "hidden";
					document.getElementById("addtoTableButton").style.visibility = "visible";
				}

				document.getElementById("addtoTableButton").onclick = function(){
					var table = document.getElementById("observeTable");
					var row = table.insertRow(1);
					var cell1 = row.insertCell(0);
					var cell2 = row.insertCell(1);
					var cell3 = row.insertCell(2);
					var cell4 = row.insertCell(3);
					var cell5 = row.insertCell(4);
					cell1.innerHTML = processFluid;
					cell2.innerHTML = manoFluid;
					cell3.innerHTML = valOfRatoNew;
					cell4.innerHTML = h1New;
					cell5.innerHTML = h2New;
					document.getElementById("addtoTableButton").style.visibility = "hidden";
				}
					document.getElementById("obserButton").onclick = function(){
						gotoObservation();
					}
					document.getElementById("goBackButton").onclick = function(){
						goBacktoStep2();
					}
				
			}, 28.57);
		}

		if(numberOfClicks == 3){
			document.getElementById("leftFluidThird").classList.add("KMLeftFluid3");
			document.getElementById("rightFluidThird").classList.add("KMRightFluid3");
			document.getElementById("rotatePinThird").classList.add("movePin3");
			document.getElementById("gatewayRotate").classList.add("rotateGatewall");
			
			document.getElementById("addtoTableButton").style.visibility = "hidden";

			valueChange = setInterval(() => {
				h1Val = h1Val + 0.25;
				h1New = h1Val.toFixed(2);
		
				h2Val = h2Val - 0.25;
				h2New = h2Val.toFixed(2);
		
				valOfRato = valOfRato + 0.27;
				valOfRatoNew = valOfRato.toFixed(2);
		
				document.getElementById("leftCm").innerText = h1New;
				document.getElementById("rightCm").innerText = h2New;
				document.getElementById("ratoReadings").innerText = valOfRatoNew;
				console.log(h1Val);
				if(h1Val == 56.00){
					document.getElementById("gatewayRotate").classList.remove("rotateGatewall");
					clearInterval(valueChange);	
					document.getElementById("gatewayRotate").style.cursor = "pointer";

					document.getElementById("leftFluidThird").style.visibility = "hidden";
					document.getElementById("rightFluidThird").style.visibility = "hidden";
					document.getElementById("leftFluidForth").style.visibility = "visible";
					document.getElementById("rightFluidForth").style.visibility = "visible";

					document.getElementById("leftFluidThird").classList.remove("KMLeftFluid3");
					document.getElementById("rightFluidThird").classList.remove("KMRightFluid3");

					document.getElementById("rotatePinForth").style.visibility = "visible";
					document.getElementById("rotatePinThird").classList.remove("movePin3");
					document.getElementById("rotatePinThird").style.visibility = "hidden";
					document.getElementById("addtoTableButton").style.visibility = "visible";
				}

				document.getElementById("addtoTableButton").onclick = function(){
					var table = document.getElementById("observeTable");
					var row = table.insertRow(1);
					var cell1 = row.insertCell(0);
					var cell2 = row.insertCell(1);
					var cell3 = row.insertCell(2);
					var cell4 = row.insertCell(3);
					var cell5 = row.insertCell(4);
					cell1.innerHTML = processFluid;
					cell2.innerHTML = manoFluid;
					cell3.innerHTML = valOfRatoNew;
					cell4.innerHTML = h1New;
					cell5.innerHTML = h2New;
					document.getElementById("addtoTableButton").style.visibility = "hidden";
				}
					document.getElementById("obserButton").onclick = function(){
						gotoObservation();
					}
					document.getElementById("goBackButton").onclick = function(){
						goBacktoStep2();
					}
				
			}, 28.57);
		}

		if(numberOfClicks == 4){
			document.getElementById("leftFluidForth").classList.add("KMLeftFluid4");
			document.getElementById("rightFluidForth").classList.add("KMRightFluid4");
			document.getElementById("rotatePinForth").classList.add("movePin4");
			document.getElementById("gatewayRotate").classList.add("rotateGatewall");
			
			document.getElementById("addtoTableButton").style.visibility = "hidden";

			valueChange = setInterval(() => {
				h1Val = h1Val + 0.25;
				h1New = h1Val.toFixed(2);
		
				h2Val = h2Val - 0.25;
				h2New = h2Val.toFixed(2);
		
				valOfRato = valOfRato + 0.27;
				valOfRatoNew = valOfRato.toFixed(2);
		
				document.getElementById("leftCm").innerText = h1New;
				document.getElementById("rightCm").innerText = h2New;
				document.getElementById("ratoReadings").innerText = valOfRatoNew;
				console.log(h1Val);
				if(h1Val == 63.00){
					document.getElementById("gatewayRotate").classList.remove("rotateGatewall");
					clearInterval(valueChange);	
					document.getElementById("gatewayRotate").style.cursor = "pointer";

					document.getElementById("leftFluidForth").style.visibility = "hidden";
					document.getElementById("rightFluidForth").style.visibility = "hidden";
					document.getElementById("leftFluidFifth").style.visibility = "visible";
					document.getElementById("rightFluidFifth").style.visibility = "visible";

					document.getElementById("leftFluidForth").classList.remove("KMLeftFluid4");
					document.getElementById("rightFluidForth").classList.remove("KMRightFluid4");

					document.getElementById("rotatePinFifth").style.visibility = "visible";
					document.getElementById("rotatePinForth").classList.remove("movePin4");
					document.getElementById("rotatePinForth").style.visibility = "hidden";
					document.getElementById("addtoTableButton").style.visibility = "visible";
				}

				document.getElementById("addtoTableButton").onclick = function(){
					var table = document.getElementById("observeTable");
					var row = table.insertRow(1);
					var cell1 = row.insertCell(0);
					var cell2 = row.insertCell(1);
					var cell3 = row.insertCell(2);
					var cell4 = row.insertCell(3);
					var cell5 = row.insertCell(4);
					cell1.innerHTML = processFluid;
					cell2.innerHTML = manoFluid;
					cell3.innerHTML = valOfRatoNew;
					cell4.innerHTML = h1New;
					cell5.innerHTML = h2New;
					document.getElementById("addtoTableButton").style.visibility = "hidden";
				}
					document.getElementById("obserButton").onclick = function(){
						gotoObservation();
					}
					document.getElementById("goBackButton").onclick = function(){
						goBacktoStep2();
					}
				
			}, 28.57);
		}

		if(numberOfClicks == 5){
			document.getElementById("leftFluidFifth").classList.add("KMLeftFluid5");
			document.getElementById("rightFluidFifth").classList.add("KMRightFluid5");
			document.getElementById("rotatePinFifth").classList.add("movePin5");
			document.getElementById("gatewayRotate").classList.add("rotateGatewall");
			document.getElementById("gatewayRotate").style.cursor = "none";
			
			document.getElementById("addtoTableButton").style.visibility = "hidden";

			valueChange = setInterval(() => {
				h1Val = h1Val + 0.25;
				h1New = h1Val.toFixed(2);
		
				h2Val = h2Val - 0.25;
				h2New = h2Val.toFixed(2);
		
				valOfRato = valOfRato + 0.27;
				valOfRatoNew = valOfRato.toFixed(2);
		
				document.getElementById("leftCm").innerText = h1New;
				document.getElementById("rightCm").innerText = h2New;
				document.getElementById("ratoReadings").innerText = valOfRatoNew;
				console.log(h1Val);
				if(h1Val == 70.00){
					document.getElementById("gatewayRotate").classList.remove("rotateGatewall");
					clearInterval(valueChange);	
					document.getElementById("gatewayRotate").onclick = "";	
					
					document.getElementById("leftFluidFifth").style.visibility = "hidden";
					document.getElementById("rightFluidFifth").style.visibility = "hidden";
					document.getElementById("leftFluidFinal").style.visibility = "visible";
					document.getElementById("rightFluidFinal").style.visibility = "visible";

					document.getElementById("leftFluidFifth").classList.remove("KMLeftFluid5");
					document.getElementById("rightFluidFifth").classList.remove("KMRightFluid5");

					document.getElementById("rotatePinFifth").style.visibility = "hidden";
					document.getElementById("rotatePinFifth").classList.remove("movePin5");
					document.getElementById("rotatePinFinal").style.visibility = "visible";
				}
				
					document.getElementById("obserButton").onclick = function(){
						gotoObservation();
					}
					document.getElementById("goBackButton").onclick = function(){
						goBacktoStep2();
					}
				
			}, 28.57);
		}
	}
	else if( processFluid == "Kerosene" &&  manoFluid == "Mercury" ){
		numberOfClicks += 1;
		
		if(numberOfClicks == 1){
			document.getElementById("leftFluid").classList.add("KMLeftFluid1");
			document.getElementById("rightFluid").classList.add("KMRightFluid1");
			document.getElementById("rotatePin").classList.add("movePin1");
			document.getElementById("gatewayRotate").classList.add("rotateGatewall");
			document.getElementById("addtoTableButton").style.visibility = "hidden";
			
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
				console.log(h1Val);
				if(h1Val == 42.00){
					document.getElementById("gatewayRotate").classList.remove("rotateGatewall");
					clearInterval(valueChange);		
					document.getElementById("gatewayRotate").style.cursor = "pointer";

					document.getElementById("leftFluid").style.visibility = "hidden";
					document.getElementById("rightFluid").style.visibility = "hidden";
					document.getElementById("leftFluidSecond").style.visibility = "visible";
					document.getElementById("rightFluidSecond").style.visibility = "visible";

					document.getElementById("leftFluid").classList.remove("KMLeftFluid1");
					document.getElementById("rightFluid").classList.remove("KMRightFluid1");

					document.getElementById("rotatePin").style.visibility = "hidden";
					document.getElementById("rotatePin").classList.remove("movePin1");
					document.getElementById("rotatePinSecond").style.visibility = "visible";
					document.getElementById("addtoTableButton").style.visibility = "visible";
				}
				document.getElementById("addtoTableButton").onclick = function(){
					var table = document.getElementById("observeTable");
					var row = table.insertRow(1);
					var cell1 = row.insertCell(0);
					var cell2 = row.insertCell(1);
					var cell3 = row.insertCell(2);
					var cell4 = row.insertCell(3);
					var cell5 = row.insertCell(4);
					cell1.innerHTML = processFluid;
					cell2.innerHTML = manoFluid;
					cell3.innerHTML = valOfRatoNew;
					cell4.innerHTML = h1New;
					cell5.innerHTML = h2New;
					document.getElementById("addtoTableButton").style.visibility = "hidden";
				}
					document.getElementById("obserButton").onclick = function(){
						gotoObservation();
					}
					document.getElementById("goBackButton").onclick = function(){
						goBacktoStep2();
					}
				
			}, 28.57);
		}

		if(numberOfClicks == 2){
			document.getElementById("leftFluidSecond").classList.add("KMLeftFluid2");
			document.getElementById("rightFluidSecond").classList.add("KMRightFluid2");
			document.getElementById("rotatePinSecond").classList.add("movePin2");
			document.getElementById("gatewayRotate").classList.add("rotateGatewall");
			
			document.getElementById("addtoTableButton").style.visibility = "hidden";

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
				console.log(h1Val);
				if(h1Val == 49.00){
					document.getElementById("gatewayRotate").classList.remove("rotateGatewall");
					clearInterval(valueChange);	
					document.getElementById("gatewayRotate").style.cursor = "pointer";

					document.getElementById("leftFluidSecond").style.visibility = "hidden";
					document.getElementById("rightFluidSecond").style.visibility = "hidden";
					document.getElementById("leftFluidThird").style.visibility = "visible";
					document.getElementById("rightFluidThird").style.visibility = "visible";

					document.getElementById("leftFluidSecond").classList.remove("KMLeftFluid2");
					document.getElementById("rightFluidSecond").classList.remove("KMRightFluid2");

					document.getElementById("rotatePinThird").style.visibility = "visible";
					document.getElementById("rotatePinSecond").classList.remove("movePin2");
					document.getElementById("rotatePinSecond").style.visibility = "hidden";
					document.getElementById("addtoTableButton").style.visibility = "visible";
				}

				document.getElementById("addtoTableButton").onclick = function(){
					var table = document.getElementById("observeTable");
					var row = table.insertRow(1);
					var cell1 = row.insertCell(0);
					var cell2 = row.insertCell(1);
					var cell3 = row.insertCell(2);
					var cell4 = row.insertCell(3);
					var cell5 = row.insertCell(4);
					cell1.innerHTML = processFluid;
					cell2.innerHTML = manoFluid;
					cell3.innerHTML = valOfRatoNew;
					cell4.innerHTML = h1New;
					cell5.innerHTML = h2New;
					document.getElementById("addtoTableButton").style.visibility = "hidden";
				}
					document.getElementById("obserButton").onclick = function(){
						gotoObservation();
					}
					document.getElementById("goBackButton").onclick = function(){
						goBacktoStep2();
					}
				
			}, 28.57);
		}

		if(numberOfClicks == 3){
			document.getElementById("leftFluidThird").classList.add("KMLeftFluid3");
			document.getElementById("rightFluidThird").classList.add("KMRightFluid3");
			document.getElementById("rotatePinThird").classList.add("movePin3");
			document.getElementById("gatewayRotate").classList.add("rotateGatewall");
			
			document.getElementById("addtoTableButton").style.visibility = "hidden";

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
				console.log(h1Val);
				if(h1Val == 56.00){
					document.getElementById("gatewayRotate").classList.remove("rotateGatewall");
					clearInterval(valueChange);	
					document.getElementById("gatewayRotate").style.cursor = "pointer";

					document.getElementById("leftFluidThird").style.visibility = "hidden";
					document.getElementById("rightFluidThird").style.visibility = "hidden";
					document.getElementById("leftFluidForth").style.visibility = "visible";
					document.getElementById("rightFluidForth").style.visibility = "visible";

					document.getElementById("leftFluidThird").classList.remove("KMLeftFluid3");
					document.getElementById("rightFluidThird").classList.remove("KMRightFluid3");

					document.getElementById("rotatePinForth").style.visibility = "visible";
					document.getElementById("rotatePinThird").classList.remove("movePin3");
					document.getElementById("rotatePinThird").style.visibility = "hidden";
					document.getElementById("addtoTableButton").style.visibility = "visible";
				}

				document.getElementById("addtoTableButton").onclick = function(){
					var table = document.getElementById("observeTable");
					var row = table.insertRow(1);
					var cell1 = row.insertCell(0);
					var cell2 = row.insertCell(1);
					var cell3 = row.insertCell(2);
					var cell4 = row.insertCell(3);
					var cell5 = row.insertCell(4);
					cell1.innerHTML = processFluid;
					cell2.innerHTML = manoFluid;
					cell3.innerHTML = valOfRatoNew;
					cell4.innerHTML = h1New;
					cell5.innerHTML = h2New;
					document.getElementById("addtoTableButton").style.visibility = "hidden";
				}
					document.getElementById("obserButton").onclick = function(){
						gotoObservation();
					}
					document.getElementById("goBackButton").onclick = function(){
						goBacktoStep2();
					}
				
			}, 28.57);
		}

		if(numberOfClicks == 4){
			document.getElementById("leftFluidForth").classList.add("KMLeftFluid4");
			document.getElementById("rightFluidForth").classList.add("KMRightFluid4");
			document.getElementById("rotatePinForth").classList.add("movePin4");
			document.getElementById("gatewayRotate").classList.add("rotateGatewall");
			
			document.getElementById("addtoTableButton").style.visibility = "hidden";

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
				console.log(h1Val);
				if(h1Val == 63.00){
					document.getElementById("gatewayRotate").classList.remove("rotateGatewall");
					clearInterval(valueChange);	
					document.getElementById("gatewayRotate").style.cursor = "pointer";

					document.getElementById("leftFluidForth").style.visibility = "hidden";
					document.getElementById("rightFluidForth").style.visibility = "hidden";
					document.getElementById("leftFluidFifth").style.visibility = "visible";
					document.getElementById("rightFluidFifth").style.visibility = "visible";

					document.getElementById("leftFluidForth").classList.remove("KMLeftFluid4");
					document.getElementById("rightFluidForth").classList.remove("KMRightFluid4");

					document.getElementById("rotatePinFifth").style.visibility = "visible";
					document.getElementById("rotatePinForth").classList.remove("movePin4");
					document.getElementById("rotatePinForth").style.visibility = "hidden";
					document.getElementById("addtoTableButton").style.visibility = "visible";
				}

				document.getElementById("addtoTableButton").onclick = function(){
					var table = document.getElementById("observeTable");
					var row = table.insertRow(1);
					var cell1 = row.insertCell(0);
					var cell2 = row.insertCell(1);
					var cell3 = row.insertCell(2);
					var cell4 = row.insertCell(3);
					var cell5 = row.insertCell(4);
					cell1.innerHTML = processFluid;
					cell2.innerHTML = manoFluid;
					cell3.innerHTML = valOfRatoNew;
					cell4.innerHTML = h1New;
					cell5.innerHTML = h2New;
					document.getElementById("addtoTableButton").style.visibility = "hidden";
				}
					document.getElementById("obserButton").onclick = function(){
						gotoObservation();
					}
					document.getElementById("goBackButton").onclick = function(){
						goBacktoStep2();
					}
				
			}, 28.57);
		}

		if(numberOfClicks == 5){
			document.getElementById("leftFluidFifth").classList.add("KMLeftFluid5");
			document.getElementById("rightFluidFifth").classList.add("KMRightFluid5");
			document.getElementById("rotatePinFifth").classList.add("movePin5");
			document.getElementById("gatewayRotate").classList.add("rotateGatewall");
			document.getElementById("gatewayRotate").style.cursor = "none";
			
			document.getElementById("addtoTableButton").style.visibility = "hidden";

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
				console.log(h1Val);
				if(h1Val == 70.00){
					document.getElementById("gatewayRotate").classList.remove("rotateGatewall");
					clearInterval(valueChange);	
					document.getElementById("gatewayRotate").onclick = "";	
					
					document.getElementById("leftFluidFifth").style.visibility = "hidden";
					document.getElementById("rightFluidFifth").style.visibility = "hidden";
					document.getElementById("leftFluidFinal").style.visibility = "visible";
					document.getElementById("rightFluidFinal").style.visibility = "visible";

					document.getElementById("leftFluidFifth").classList.remove("KMLeftFluid5");
					document.getElementById("rightFluidFifth").classList.remove("KMRightFluid5");

					document.getElementById("rotatePinFifth").style.visibility = "hidden";
					document.getElementById("rotatePinFifth").classList.remove("movePin5");
					document.getElementById("rotatePinFinal").style.visibility = "visible";
				}
				
					document.getElementById("obserButton").onclick = function(){
						gotoObservation();
					}
					document.getElementById("goBackButton").onclick = function(){
						goBacktoStep2();
					}
				
			}, 28.57);
		}
	}
	else if( processFluid == "Kerosene" &&  manoFluid == "Carbol tetrachloride" ){
		numberOfClicks += 1;
		
		if(numberOfClicks == 1){
			document.getElementById("leftPinkFluid").classList.add("KMLeftFluid1");
			document.getElementById("rightPinkFluid").classList.add("KMRightFluid1");
			document.getElementById("rotatePin").classList.add("movePin1");
			document.getElementById("gatewayRotate").classList.add("rotateGatewall");
			document.getElementById("addtoTableButton").style.visibility = "hidden";
			
			valueChange = setInterval(() => {
				h1Val = h1Val + 0.25;
				h1New = h1Val.toFixed(2);
		
				h2Val = h2Val - 0.25;
				h2New = h2Val.toFixed(2);
		
				valOfRato = valOfRato + 0.053;
				valOfRatoNew = valOfRato.toFixed(2);
		
				document.getElementById("leftCm").innerText = h1New;
				document.getElementById("rightCm").innerText = h2New;
				document.getElementById("ratoReadings").innerText = valOfRatoNew;
				console.log(h1Val);
				if(h1Val == 42.00){
					document.getElementById("gatewayRotate").classList.remove("rotateGatewall");
					clearInterval(valueChange);		
					document.getElementById("gatewayRotate").style.cursor = "pointer";

					document.getElementById("leftPinkFluid").style.visibility = "hidden";
					document.getElementById("rightPinkFluid").style.visibility = "hidden";
					document.getElementById("leftPinkFluidSecond").style.visibility = "visible";
					document.getElementById("rightPinkFluidSecond").style.visibility = "visible";

					document.getElementById("leftPinkFluid").classList.remove("KMLeftFluid1");
					document.getElementById("rightPinkFluid").classList.remove("KMRightFluid1");

					document.getElementById("rotatePin").style.visibility = "hidden";
					document.getElementById("rotatePin").classList.remove("movePin1");
					document.getElementById("rotatePinSecond").style.visibility = "visible";
					document.getElementById("addtoTableButton").style.visibility = "visible";
				}
				document.getElementById("addtoTableButton").onclick = function(){
					var table = document.getElementById("observeTable");
					var row = table.insertRow(1);
					var cell1 = row.insertCell(0);
					var cell2 = row.insertCell(1);
					var cell3 = row.insertCell(2);
					var cell4 = row.insertCell(3);
					var cell5 = row.insertCell(4);
					cell1.innerHTML = processFluid;
					cell2.innerHTML = manoFluid;
					cell3.innerHTML = valOfRatoNew;
					cell4.innerHTML = h1New;
					cell5.innerHTML = h2New;
					document.getElementById("addtoTableButton").style.visibility = "hidden";
				}
					document.getElementById("obserButton").onclick = function(){
						gotoObservation();
					}
					document.getElementById("goBackButton").onclick = function(){
						goBacktoStep2();
					}
				
			}, 28.57);
		}

		if(numberOfClicks == 2){
			document.getElementById("leftPinkFluidSecond").classList.add("KMLeftFluid2");
			document.getElementById("rightPinkFluidSecond").classList.add("KMRightFluid2");
			document.getElementById("rotatePinSecond").classList.add("movePin2");
			document.getElementById("gatewayRotate").classList.add("rotateGatewall");
			
			document.getElementById("addtoTableButton").style.visibility = "hidden";

			valueChange = setInterval(() => {
				h1Val = h1Val + 0.25;
				h1New = h1Val.toFixed(2);
		
				h2Val = h2Val - 0.25;
				h2New = h2Val.toFixed(2);
		
				valOfRato = valOfRato + 0.053;
				valOfRatoNew = valOfRato.toFixed(2);
		
				document.getElementById("leftCm").innerText = h1New;
				document.getElementById("rightCm").innerText = h2New;
				document.getElementById("ratoReadings").innerText = valOfRatoNew;
				console.log(h1Val);
				if(h1Val == 49.00){
					document.getElementById("gatewayRotate").classList.remove("rotateGatewall");
					clearInterval(valueChange);	
					document.getElementById("gatewayRotate").style.cursor = "pointer";

					document.getElementById("leftPinkFluidSecond").style.visibility = "hidden";
					document.getElementById("rightPinkFluidSecond").style.visibility = "hidden";
					document.getElementById("leftPinkFluidThird").style.visibility = "visible";
					document.getElementById("rightPinkFluidThird").style.visibility = "visible";

					document.getElementById("leftPinkFluidSecond").classList.remove("KMLeftFluid2");
					document.getElementById("rightPinkFluidSecond").classList.remove("KMRightFluid2");

					document.getElementById("rotatePinThird").style.visibility = "visible";
					document.getElementById("rotatePinSecond").classList.remove("movePin2");
					document.getElementById("rotatePinSecond").style.visibility = "hidden";
					document.getElementById("addtoTableButton").style.visibility = "visible";
				}

				document.getElementById("addtoTableButton").onclick = function(){
					var table = document.getElementById("observeTable");
					var row = table.insertRow(1);
					var cell1 = row.insertCell(0);
					var cell2 = row.insertCell(1);
					var cell3 = row.insertCell(2);
					var cell4 = row.insertCell(3);
					var cell5 = row.insertCell(4);
					cell1.innerHTML = processFluid;
					cell2.innerHTML = manoFluid;
					cell3.innerHTML = valOfRatoNew;
					cell4.innerHTML = h1New;
					cell5.innerHTML = h2New;
					document.getElementById("addtoTableButton").style.visibility = "hidden";
				}
					document.getElementById("obserButton").onclick = function(){
						gotoObservation();
					}
					document.getElementById("goBackButton").onclick = function(){
						goBacktoStep2();
					}
				
			}, 28.57);
		}

		if(numberOfClicks == 3){
			document.getElementById("leftPinkFluidThird").classList.add("KMLeftFluid3");
			document.getElementById("rightPinkFluidThird").classList.add("KMRightFluid3");
			document.getElementById("rotatePinThird").classList.add("movePin3");
			document.getElementById("gatewayRotate").classList.add("rotateGatewall");
			
			document.getElementById("addtoTableButton").style.visibility = "hidden";

			valueChange = setInterval(() => {
				h1Val = h1Val + 0.25;
				h1New = h1Val.toFixed(2);
		
				h2Val = h2Val - 0.25;
				h2New = h2Val.toFixed(2);
		
				valOfRato = valOfRato + 0.053;
				valOfRatoNew = valOfRato.toFixed(2);
		
				document.getElementById("leftCm").innerText = h1New;
				document.getElementById("rightCm").innerText = h2New;
				document.getElementById("ratoReadings").innerText = valOfRatoNew;
				console.log(h1Val);
				if(h1Val == 56.00){
					document.getElementById("gatewayRotate").classList.remove("rotateGatewall");
					clearInterval(valueChange);	
					document.getElementById("gatewayRotate").style.cursor = "pointer";

					document.getElementById("leftPinkFluidThird").style.visibility = "hidden";
					document.getElementById("rightPinkFluidThird").style.visibility = "hidden";
					document.getElementById("leftPinkFluidForth").style.visibility = "visible";
					document.getElementById("rightPinkFluidForth").style.visibility = "visible";

					document.getElementById("leftPinkFluidThird").classList.remove("KMLeftFluid3");
					document.getElementById("rightPinkFluidThird").classList.remove("KMRightFluid3");

					document.getElementById("rotatePinForth").style.visibility = "visible";
					document.getElementById("rotatePinThird").classList.remove("movePin3");
					document.getElementById("rotatePinThird").style.visibility = "hidden";
					document.getElementById("addtoTableButton").style.visibility = "visible";
				}

				document.getElementById("addtoTableButton").onclick = function(){
					var table = document.getElementById("observeTable");
					var row = table.insertRow(1);
					var cell1 = row.insertCell(0);
					var cell2 = row.insertCell(1);
					var cell3 = row.insertCell(2);
					var cell4 = row.insertCell(3);
					var cell5 = row.insertCell(4);
					cell1.innerHTML = processFluid;
					cell2.innerHTML = manoFluid;
					cell3.innerHTML = valOfRatoNew;
					cell4.innerHTML = h1New;
					cell5.innerHTML = h2New;
					document.getElementById("addtoTableButton").style.visibility = "hidden";
				}
					document.getElementById("obserButton").onclick = function(){
						gotoObservation();
					}
					document.getElementById("goBackButton").onclick = function(){
						goBacktoStep2();
					}
				
			}, 28.57);
		}

		if(numberOfClicks == 4){
			document.getElementById("leftPinkFluidForth").classList.add("KMLeftFluid4");
			document.getElementById("rightPinkFluidForth").classList.add("KMRightFluid4");
			document.getElementById("rotatePinForth").classList.add("movePin4");
			document.getElementById("gatewayRotate").classList.add("rotateGatewall");
			
			document.getElementById("addtoTableButton").style.visibility = "hidden";

			valueChange = setInterval(() => {
				h1Val = h1Val + 0.25;
				h1New = h1Val.toFixed(2);
		
				h2Val = h2Val - 0.25;
				h2New = h2Val.toFixed(2);
		
				valOfRato = valOfRato + 0.053;
				valOfRatoNew = valOfRato.toFixed(2);
		
				document.getElementById("leftCm").innerText = h1New;
				document.getElementById("rightCm").innerText = h2New;
				document.getElementById("ratoReadings").innerText = valOfRatoNew;
				console.log(h1Val);
				if(h1Val == 63.00){
					document.getElementById("gatewayRotate").classList.remove("rotateGatewall");
					clearInterval(valueChange);	
					document.getElementById("gatewayRotate").style.cursor = "pointer";

					document.getElementById("leftPinkFluidForth").style.visibility = "hidden";
					document.getElementById("rightPinkFluidForth").style.visibility = "hidden";
					document.getElementById("leftPinkFluidFifth").style.visibility = "visible";
					document.getElementById("rightPinkFluidFifth").style.visibility = "visible";

					document.getElementById("leftPinkFluidForth").classList.remove("KMLeftFluid4");
					document.getElementById("rightPinkFluidForth").classList.remove("KMRightFluid4");

					document.getElementById("rotatePinFifth").style.visibility = "visible";
					document.getElementById("rotatePinForth").classList.remove("movePin4");
					document.getElementById("rotatePinForth").style.visibility = "hidden";
					document.getElementById("addtoTableButton").style.visibility = "visible";
				}

				document.getElementById("addtoTableButton").onclick = function(){
					var table = document.getElementById("observeTable");
					var row = table.insertRow(1);
					var cell1 = row.insertCell(0);
					var cell2 = row.insertCell(1);
					var cell3 = row.insertCell(2);
					var cell4 = row.insertCell(3);
					var cell5 = row.insertCell(4);
					cell1.innerHTML = processFluid;
					cell2.innerHTML = manoFluid;
					cell3.innerHTML = valOfRatoNew;
					cell4.innerHTML = h1New;
					cell5.innerHTML = h2New;
					document.getElementById("addtoTableButton").style.visibility = "hidden";
				}
					document.getElementById("obserButton").onclick = function(){
						gotoObservation();
					}
					document.getElementById("goBackButton").onclick = function(){
						goBacktoStep2();
					}
				
			}, 28.57);
		}

		if(numberOfClicks == 5){
			document.getElementById("leftPinkFluidFifth").classList.add("KMLeftFluid5");
			document.getElementById("rightPinkFluidFifth").classList.add("KMRightFluid5");
			document.getElementById("rotatePinFifth").classList.add("movePin5");
			document.getElementById("gatewayRotate").classList.add("rotateGatewall");
			document.getElementById("gatewayRotate").style.cursor = "none";
			
			document.getElementById("addtoTableButton").style.visibility = "hidden";

			valueChange = setInterval(() => {
				h1Val = h1Val + 0.25;
				h1New = h1Val.toFixed(2);
		
				h2Val = h2Val - 0.25;
				h2New = h2Val.toFixed(2);
		
				valOfRato = valOfRato + 0.053;
				valOfRatoNew = valOfRato.toFixed(2);
		
				document.getElementById("leftCm").innerText = h1New;
				document.getElementById("rightCm").innerText = h2New;
				document.getElementById("ratoReadings").innerText = valOfRatoNew;
				console.log(h1Val);
				if(h1Val == 70.00){
					document.getElementById("gatewayRotate").classList.remove("rotateGatewall");
					clearInterval(valueChange);	
					document.getElementById("gatewayRotate").onclick = "";	
					
					document.getElementById("leftPinkFluidFifth").style.visibility = "hidden";
					document.getElementById("rightPinkFluidFifth").style.visibility = "hidden";
					document.getElementById("leftPinkFluidFinal").style.visibility = "visible";
					document.getElementById("rightPinkFluidFinal").style.visibility = "visible";

					document.getElementById("leftPinkFluidFifth").classList.remove("KMLeftFluid5");
					document.getElementById("rightPinkFluidFifth").classList.remove("KMRightFluid5");

					document.getElementById("rotatePinFifth").style.visibility = "hidden";
					document.getElementById("rotatePinFifth").classList.remove("movePin5");
					document.getElementById("rotatePinFinal").style.visibility = "visible";
				}
				
					document.getElementById("obserButton").onclick = function(){
						gotoObservation();
					}
					document.getElementById("goBackButton").onclick = function(){
						goBacktoStep2();
					}
				
			}, 28.57);
		}
	}
	else if( processFluid == "Water" &&  manoFluid == "Carbol tetrachloride" ){
		numberOfClicks += 1;
		
		if(numberOfClicks == 1){
			document.getElementById("leftPinkFluid").classList.add("KMLeftFluid1");
			document.getElementById("rightPinkFluid").classList.add("KMRightFluid1");
			document.getElementById("rotatePin").classList.add("movePin1");
			document.getElementById("gatewayRotate").classList.add("rotateGatewall");
			document.getElementById("addtoTableButton").style.visibility = "hidden";
			
			valueChange = setInterval(() => {
				h1Val = h1Val + 0.25;
				h1New = h1Val.toFixed(2);
		
				h2Val = h2Val - 0.25;
				h2New = h2Val.toFixed(2);
		
				valOfRato = valOfRato + 0.048;
				valOfRatoNew = valOfRato.toFixed(2);
		
				document.getElementById("leftCm").innerText = h1New;
				document.getElementById("rightCm").innerText = h2New;
				document.getElementById("ratoReadings").innerText = valOfRatoNew;
				console.log(h1Val);
				if(h1Val == 42.00){
					document.getElementById("gatewayRotate").classList.remove("rotateGatewall");
					clearInterval(valueChange);		
					document.getElementById("gatewayRotate").style.cursor = "pointer";

					document.getElementById("leftPinkFluid").style.visibility = "hidden";
					document.getElementById("rightPinkFluid").style.visibility = "hidden";
					document.getElementById("leftPinkFluidSecond").style.visibility = "visible";
					document.getElementById("rightPinkFluidSecond").style.visibility = "visible";

					document.getElementById("leftPinkFluid").classList.remove("KMLeftFluid1");
					document.getElementById("rightPinkFluid").classList.remove("KMRightFluid1");

					document.getElementById("rotatePin").style.visibility = "hidden";
					document.getElementById("rotatePin").classList.remove("movePin1");
					document.getElementById("rotatePinSecond").style.visibility = "visible";
					document.getElementById("addtoTableButton").style.visibility = "visible";
				}
				document.getElementById("addtoTableButton").onclick = function(){
					var table = document.getElementById("observeTable");
					var row = table.insertRow(1);
					var cell1 = row.insertCell(0);
					var cell2 = row.insertCell(1);
					var cell3 = row.insertCell(2);
					var cell4 = row.insertCell(3);
					var cell5 = row.insertCell(4);
					cell1.innerHTML = processFluid;
					cell2.innerHTML = manoFluid;
					cell3.innerHTML = valOfRatoNew;
					cell4.innerHTML = h1New;
					cell5.innerHTML = h2New;
					document.getElementById("addtoTableButton").style.visibility = "hidden";
				}
					document.getElementById("obserButton").onclick = function(){
						gotoObservation();
					}
					document.getElementById("goBackButton").onclick = function(){
						goBacktoStep2();
					}
				
			}, 28.57);
		}

		if(numberOfClicks == 2){
			document.getElementById("leftPinkFluidSecond").classList.add("KMLeftFluid2");
			document.getElementById("rightPinkFluidSecond").classList.add("KMRightFluid2");
			document.getElementById("rotatePinSecond").classList.add("movePin2");
			document.getElementById("gatewayRotate").classList.add("rotateGatewall");
			
			document.getElementById("addtoTableButton").style.visibility = "hidden";

			valueChange = setInterval(() => {
				h1Val = h1Val + 0.25;
				h1New = h1Val.toFixed(2);
		
				h2Val = h2Val - 0.25;
				h2New = h2Val.toFixed(2);
		
				valOfRato = valOfRato + 0.048;
				valOfRatoNew = valOfRato.toFixed(2);
		
				document.getElementById("leftCm").innerText = h1New;
				document.getElementById("rightCm").innerText = h2New;
				document.getElementById("ratoReadings").innerText = valOfRatoNew;
				console.log(h1Val);
				if(h1Val == 49.00){
					document.getElementById("gatewayRotate").classList.remove("rotateGatewall");
					clearInterval(valueChange);	
					document.getElementById("gatewayRotate").style.cursor = "pointer";

					document.getElementById("leftPinkFluidSecond").style.visibility = "hidden";
					document.getElementById("rightPinkFluidSecond").style.visibility = "hidden";
					document.getElementById("leftPinkFluidThird").style.visibility = "visible";
					document.getElementById("rightPinkFluidThird").style.visibility = "visible";

					document.getElementById("leftPinkFluidSecond").classList.remove("KMLeftFluid2");
					document.getElementById("rightPinkFluidSecond").classList.remove("KMRightFluid2");

					document.getElementById("rotatePinThird").style.visibility = "visible";
					document.getElementById("rotatePinSecond").classList.remove("movePin2");
					document.getElementById("rotatePinSecond").style.visibility = "hidden";
					document.getElementById("addtoTableButton").style.visibility = "visible";
				}

				document.getElementById("addtoTableButton").onclick = function(){
					var table = document.getElementById("observeTable");
					var row = table.insertRow(1);
					var cell1 = row.insertCell(0);
					var cell2 = row.insertCell(1);
					var cell3 = row.insertCell(2);
					var cell4 = row.insertCell(3);
					var cell5 = row.insertCell(4);
					cell1.innerHTML = processFluid;
					cell2.innerHTML = manoFluid;
					cell3.innerHTML = valOfRatoNew;
					cell4.innerHTML = h1New;
					cell5.innerHTML = h2New;
					document.getElementById("addtoTableButton").style.visibility = "hidden";
				}
					document.getElementById("obserButton").onclick = function(){
						gotoObservation();
					}
					document.getElementById("goBackButton").onclick = function(){
						goBacktoStep2();
					}
				
			}, 28.57);
		}

		if(numberOfClicks == 3){
			document.getElementById("leftPinkFluidThird").classList.add("KMLeftFluid3");
			document.getElementById("rightPinkFluidThird").classList.add("KMRightFluid3");
			document.getElementById("rotatePinThird").classList.add("movePin3");
			document.getElementById("gatewayRotate").classList.add("rotateGatewall");
			
			document.getElementById("addtoTableButton").style.visibility = "hidden";

			valueChange = setInterval(() => {
				h1Val = h1Val + 0.25;
				h1New = h1Val.toFixed(2);
		
				h2Val = h2Val - 0.25;
				h2New = h2Val.toFixed(2);
		
				valOfRato = valOfRato + 0.048;
				valOfRatoNew = valOfRato.toFixed(2);
		
				document.getElementById("leftCm").innerText = h1New;
				document.getElementById("rightCm").innerText = h2New;
				document.getElementById("ratoReadings").innerText = valOfRatoNew;
				console.log(h1Val);
				if(h1Val == 56.00){
					document.getElementById("gatewayRotate").classList.remove("rotateGatewall");
					clearInterval(valueChange);	
					document.getElementById("gatewayRotate").style.cursor = "pointer";

					document.getElementById("leftPinkFluidThird").style.visibility = "hidden";
					document.getElementById("rightPinkFluidThird").style.visibility = "hidden";
					document.getElementById("leftPinkFluidForth").style.visibility = "visible";
					document.getElementById("rightPinkFluidForth").style.visibility = "visible";

					document.getElementById("leftPinkFluidThird").classList.remove("KMLeftFluid3");
					document.getElementById("rightPinkFluidThird").classList.remove("KMRightFluid3");

					document.getElementById("rotatePinForth").style.visibility = "visible";
					document.getElementById("rotatePinThird").classList.remove("movePin3");
					document.getElementById("rotatePinThird").style.visibility = "hidden";
					document.getElementById("addtoTableButton").style.visibility = "visible";
				}

				document.getElementById("addtoTableButton").onclick = function(){
					var table = document.getElementById("observeTable");
					var row = table.insertRow(1);
					var cell1 = row.insertCell(0);
					var cell2 = row.insertCell(1);
					var cell3 = row.insertCell(2);
					var cell4 = row.insertCell(3);
					var cell5 = row.insertCell(4);
					cell1.innerHTML = processFluid;
					cell2.innerHTML = manoFluid;
					cell3.innerHTML = valOfRatoNew;
					cell4.innerHTML = h1New;
					cell5.innerHTML = h2New;
					document.getElementById("addtoTableButton").style.visibility = "hidden";
				}
					document.getElementById("obserButton").onclick = function(){
						gotoObservation();
					}
					document.getElementById("goBackButton").onclick = function(){
						goBacktoStep2();
					}
				
			}, 28.57);
		}

		if(numberOfClicks == 4){
			document.getElementById("leftPinkFluidForth").classList.add("KMLeftFluid4");
			document.getElementById("rightPinkFluidForth").classList.add("KMRightFluid4");
			document.getElementById("rotatePinForth").classList.add("movePin4");
			document.getElementById("gatewayRotate").classList.add("rotateGatewall");
			
			document.getElementById("addtoTableButton").style.visibility = "hidden";

			valueChange = setInterval(() => {
				h1Val = h1Val + 0.25;
				h1New = h1Val.toFixed(2);
		
				h2Val = h2Val - 0.25;
				h2New = h2Val.toFixed(2);
		
				valOfRato = valOfRato + 0.048;
				valOfRatoNew = valOfRato.toFixed(2);
		
				document.getElementById("leftCm").innerText = h1New;
				document.getElementById("rightCm").innerText = h2New;
				document.getElementById("ratoReadings").innerText = valOfRatoNew;
				console.log(h1Val);
				if(h1Val == 63.00){
					document.getElementById("gatewayRotate").classList.remove("rotateGatewall");
					clearInterval(valueChange);	
					document.getElementById("gatewayRotate").style.cursor = "pointer";

					document.getElementById("leftPinkFluidForth").style.visibility = "hidden";
					document.getElementById("rightPinkFluidForth").style.visibility = "hidden";
					document.getElementById("leftPinkFluidFifth").style.visibility = "visible";
					document.getElementById("rightPinkFluidFifth").style.visibility = "visible";

					document.getElementById("leftPinkFluidForth").classList.remove("KMLeftFluid4");
					document.getElementById("rightPinkFluidForth").classList.remove("KMRightFluid4");

					document.getElementById("rotatePinFifth").style.visibility = "visible";
					document.getElementById("rotatePinForth").classList.remove("movePin4");
					document.getElementById("rotatePinForth").style.visibility = "hidden";
					document.getElementById("addtoTableButton").style.visibility = "visible";
				}

				document.getElementById("addtoTableButton").onclick = function(){
					var table = document.getElementById("observeTable");
					var row = table.insertRow(1);
					var cell1 = row.insertCell(0);
					var cell2 = row.insertCell(1);
					var cell3 = row.insertCell(2);
					var cell4 = row.insertCell(3);
					var cell5 = row.insertCell(4);
					cell1.innerHTML = processFluid;
					cell2.innerHTML = manoFluid;
					cell3.innerHTML = valOfRatoNew;
					cell4.innerHTML = h1New;
					cell5.innerHTML = h2New;
					document.getElementById("addtoTableButton").style.visibility = "hidden";
				}
					document.getElementById("obserButton").onclick = function(){
						gotoObservation();
					}
					document.getElementById("goBackButton").onclick = function(){
						goBacktoStep2();
					}
				
			}, 28.57);
		}

		if(numberOfClicks == 5){
			document.getElementById("leftPinkFluidFifth").classList.add("KMLeftFluid5");
			document.getElementById("rightPinkFluidFifth").classList.add("KMRightFluid5");
			document.getElementById("rotatePinFifth").classList.add("movePin5");
			document.getElementById("gatewayRotate").classList.add("rotateGatewall");
			document.getElementById("gatewayRotate").style.cursor = "none";
			
			document.getElementById("addtoTableButton").style.visibility = "hidden";

			valueChange = setInterval(() => {
				h1Val = h1Val + 0.25;
				h1New = h1Val.toFixed(2);
		
				h2Val = h2Val - 0.25;
				h2New = h2Val.toFixed(2);
		
				valOfRato = valOfRato + 0.048;
				valOfRatoNew = valOfRato.toFixed(2);
		
				document.getElementById("leftCm").innerText = h1New;
				document.getElementById("rightCm").innerText = h2New;
				document.getElementById("ratoReadings").innerText = valOfRatoNew;
				console.log(h1Val);
				if(h1Val == 70.00){
					document.getElementById("gatewayRotate").classList.remove("rotateGatewall");
					clearInterval(valueChange);	
					document.getElementById("gatewayRotate").onclick = "";	
					
					document.getElementById("leftPinkFluidFifth").style.visibility = "hidden";
					document.getElementById("rightPinkFluidFifth").style.visibility = "hidden";
					document.getElementById("leftPinkFluidFinal").style.visibility = "visible";
					document.getElementById("rightPinkFluidFinal").style.visibility = "visible";

					document.getElementById("leftPinkFluidFifth").classList.remove("KMLeftFluid5");
					document.getElementById("rightPinkFluidFifth").classList.remove("KMRightFluid5");

					document.getElementById("rotatePinFifth").style.visibility = "hidden";
					document.getElementById("rotatePinFifth").classList.remove("movePin5");
					document.getElementById("rotatePinFinal").style.visibility = "visible";
				}
				
					document.getElementById("obserButton").onclick = function(){
						gotoObservation();
					}
					document.getElementById("goBackButton").onclick = function(){
						goBacktoStep2();
					}
				
			}, 28.57);
		}
	}
	
}


function gotoObservation(){
	console.log("go to observ.");
	document.getElementById("experimentID").style.visibility = "hidden";
	document.getElementById("leftFluidFinal").style.visibility = "hidden";
	document.getElementById("rightFluidFinal").style.visibility = "hidden";
	document.getElementById("rotatePinFinal").style.visibility = "hidden";
	document.getElementById("bottomU").style.visibility = "hidden";

	document.getElementById("redColor").style.visibility = "hidden";
	document.getElementById("obserButton").style.visibility = "hidden";

	document.getElementById("leftPinkFluidFinal").style.visibility = "hidden";
	document.getElementById("rightPinkFluidFinal").style.visibility = "hidden";
	document.getElementById("bottomPinkU").style.visibility = "hidden";

	document.getElementById("observeTable").style.visibility = "visible";
	
}

function goBacktoStep2(){

	document.getElementById("experimentID").style.visibility = "hidden";
	document.getElementById("leftFluidFinal").style.visibility = "hidden";
	document.getElementById("rightFluidFinal").style.visibility = "hidden";
	document.getElementById("rotatePinFinal").style.visibility = "hidden";
	document.getElementById("bottomU").style.visibility = "hidden";
	
	document.getElementById("redColor").style.visibility = "hidden";
	document.getElementById("obserButton").style.visibility = "hidden";

	document.getElementById("leftPinkFluidFinal").style.visibility = "hidden";
	document.getElementById("rightPinkFluidFinal").style.visibility = "hidden";
	document.getElementById("bottomPinkU").style.visibility = "hidden";
	

	document.getElementById("observeTable").style.visibility = "hidden";

	simsubscreennum = 3;
	document.getElementById('canvas'+(4)).style.visibility="hidden";

	document.getElementById('canvas'+(simsubscreennum)).style.visibility="visible";
	document.getElementById("experimentSetup").style.visibility = "visible";
	document.getElementById('nextButton').style.visibility="visible";
}


// ============================  EVALUATION PART

var pipeLengthEval = 1;

function setPipeLengthEval(){
	pipeLengthEval = document.getElementById("pipeLengthEval").value;
	console.log(pipeLengthEval);
}

var chosenPipeDiaEval = 025;

function setPipeDiaEval(){
	chosenPipeDiaEval = document.getElementById("pipeDiaSelectEval").value;
	console.log(chosenPipeDiaEval);
}

var processFluidEval = "Water"

function setProcessFluidEval(){
	processFluidEval = document.getElementById("processFluidEval").value;
	console.log(processFluidEval);
}

var manoFluidEval = "Carbol tetrachloride"

function setManoFluidEval(){
	manoFluidEval = document.getElementById("manoFluidEval").value;
	console.log(manoFluidEval);
}

// Step 3

var evalSets = 1;

function setEvalSets(){
	evalSets = document.getElementById("evalSets").value;
	console.log(evalSets);

	var table = document.getElementById("configResultTable");

	var rowCount = table.rows.length-1;
	console.log("Pre count:  ",rowCount);
	if(rowCount>0){
		for(var x = 1; x <= rowCount; x++){
			table.deleteRow(1);
		}
	}

	for(var i=1; i<= evalSets; i++ ){
		var row = table.insertRow(i);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		var cell4 = row.insertCell(3);
		cell1.innerHTML = `<input name="length" id="inputSet${i}0" style="width:80px">`;
		cell2.innerHTML = `<input name="length" id="inputSet${i}1" style="width:80px">`;
		cell3.innerHTML = `<input name="length" id="inputSet${i}2" style="width:80px">`;
		cell4.innerHTML = `<input name="length" id="inputSet${i}3" style="width:80px">`;
	}

}

function evaluateConfig(){
	var table = document.getElementById("configResultTable");
	var rowCountPost = table.rows.length-1;
	// if(evalSets == 1){
	// 	rowCountPost = 1;
	// }
	console.log("Total rows: ",rowCountPost);
	for(var z = 1; z<= rowCountPost; z++){
		for(var y=0; y<=3; y++){
			console.log(document.getElementById("inputSet"+z+y).value);
		}
	}
}
