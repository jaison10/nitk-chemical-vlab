//on click of next button
var mpointer = 0;
var repeat = 0;
var a, p, lastp, n, b, q, flag = 0,
    avg, average;


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("nextButton").style.visibility = "hidden";
    setTimeout(() => {
        var start = document.getElementById("start");
        start.innerText = "FLOW THROUGH PIPES";
        start.style.fontSize = "xx-large";
        start.classList.add("content-shine");
        start.style.left = "570px";
        start.style.top = "170px";
        document.getElementById("landingPageButton").style.visibility = "visible";
        document.getElementById("landingPageButton").style.cursor = "pointer";
        document.getElementById("landingPageButton").onclick = function() {
            gotoPage1();
        }
    }, 3000);
});

//erin
function goToStart(id){
    var s= document.getElementById(id);
    s.innerText="Click to choose Experiment or Evaluation";
    s.onclick=function(){
        document.getElementById('canvas1').style.visibility="visible";
        document.getElementById('canvas5').style.visibility = "hidden";
        document.getElementById('canvas4').style.visibility = "hidden";
        document.getElementById('canvas3').style.visibility = "hidden";
        document.getElementById('canvas6').style.visibility = "hidden";
        document.getElementById('canvas2').style.visibility = "hidden";
        document.getElementById('displayExpValues').style.visibility = "hidden";
        document.getElementById('demoOne').style.visibility = "hidden";
        document.getElementById('configExp').style.visibility = "hidden";
        document.getElementById('evaluatePart').style.visibility = "hidden";
        //eriii
        document.getElementById("buttonsList").style.visibility = "hidden";
        document.getElementById("buttonsListEval").style.visibility = "hidden";

        hideAllExperimentParts();
        console.log("hideworked");
    }
    // s.style.paddingTop="2px";
    s.style.fontSize="12px";
   
    /* margin:0px; */
    // s.style.marginLeft="0px";
    // xx-large
    // s.style.fontSize ="15px";
    //s.classList.add("title2 h3");
}
function changeOriginal(id){
    var r= document.getElementById(id);
    r.innerText="Flow Through Pipes";
    //xx-large
    // r.style.fontSize = "20px";
    // r.style.paddingTop="2px";
    // r.style.fontSize="15px";
    // r.style.animatearrowmarginLeft="40px";
    //r.classList.add("title2 h3");

}
// erin end

function gotoPage1() {
    for (temp = 0; temp <= 4; temp++) {
        document.getElementById('canvas' + temp).style.visibility = "hidden";
    }
    simsubscreennum = 1;
    document.getElementById('canvas' + simsubscreennum).style.visibility = "visible";
    magic();
}


function navNext() {
    for (temp = 0; temp <= 4; temp++) {
        document.getElementById('canvas' + temp).style.visibility = "hidden";
    }

    simsubscreennum += 1;
    document.getElementById('canvas' + (simsubscreennum)).style.visibility = "visible";
    document.getElementById('nextButton').style.visibility = "hidden";
    magic();
}

//-----------------------------------------blink arrow on the next step---------------------------------------------
//blink arrow on the next step
function animatearrow() {
    if (document.getElementById('arrow1').style.visibility == "hidden")
        document.getElementById('arrow1').style.visibility = "visible";
    else
        document.getElementById('arrow1').style.visibility = "hidden";
}

//stop blinking arrow
function myStopFunction() {
    clearInterval(myInt);
    document.getElementById('arrow1').style.visibility = "hidden";
}

//-------------------------------------function magic starts here----------------------------------------------------

function magic() {

    if (simsubscreennum == 1) {
        document.getElementById("observeTable").style.visibility = "hidden";
        // this is for STEP1
        // document.getElementById("completeSetUp").style.visibility = "hidden";
        // document.getElementById("human").style.visibility = "hidden";
        // document.getElementById('nextButton').style.visibility="hidden";
    } else if (simsubscreennum == 2) {
        document.getElementById("observeTable").style.visibility = "hidden";
        document.getElementById("waterPourSecondLongOne").style.visibility = "hidden";
        document.getElementById("waterPourFirst").style.visibility = "hidden";
        document.getElementById("waterFlow").style.visibility = "hidden";
        if (chosenActivity == 1) {
            console.log("One has chosen!");
            //eriii
            // document.getElementById("buttonsListEval").style.visibility = "hidden";

            document.getElementById("experimentSetup").style.visibility = "hidden";
            document.getElementById("labelImage").style.visibility = "visible";
            document.getElementById('nextButton').style.visibility = "hidden";
            document.getElementById("configExp").style.visibility = "hidden";
        } else {
            console.log("2 has chosen");
            document.getElementById("step2Heading").innerText = "Choose"
            document.getElementById("configExp").style.visibility = "visible";
            document.getElementById('nextButton').style.visibility = "hidden";
        }
    } else if (simsubscreennum == 3) {
        document.getElementById("observeTable").style.visibility = "hidden";
        document.getElementById("waterPourSecondLongOne").style.visibility = "hidden";
        document.getElementById("waterPourFirst").style.visibility = "hidden";
        document.getElementById("waterFlow").style.visibility = "hidden";
        if (chosenActivity == 1) {
            //eriii
            // document.getElementById("buttonsListEval").style.visibility = "hidden";

            document.getElementById("labelImage").style.visibility = "hidden";
            document.getElementById("experimentSetup").style.visibility = "visible";
            document.getElementById('nextButton').style.visibility = "hidden";
            document.getElementById("evaluatePart").style.visibility = "hidden";
        } else {
            console.log("2 has chosen");
            document.getElementById("step3Heading").innerText = "Evaluation!"
            document.getElementById("configExp").style.visibility = "hidden";
            document.getElementById('nextButton').style.visibility = "hidden";

            document.getElementById("evaluatePart").style.visibility = "visible";
        }

    } else if (simsubscreennum == 4) {
        document.getElementById("observeTable").style.visibility = "hidden";
        document.getElementById("waterPourSecondLongOne").style.visibility = "hidden";
        document.getElementById("waterPourFirst").style.visibility = "hidden";
        document.getElementById("waterFlow").style.visibility = "hidden";
        if (chosenActivity == 1) {
            document.getElementById("waterSteady").style.visibility = "visible";
            //eriii
            // document.getElementById("buttonsListEval").style.visibility = "hidden";

            document.getElementById("infoAboutWhatToDo").innerText = "Click on Green button to start the motor.";
            document.getElementById("infoAboutWhatToDo").style.color = "white";
            document.getElementById('nextButton').style.visibility = "hidden";

            document.getElementById("step4Heading").innerText = "Experiment";
            document.getElementById("ratoReadings").innerText = "0.00";
            if (manoFluid == "Carbon tetrachloride") {
                document.getElementById("bottomU").style.visibility = "hidden";
                document.getElementById("leftFluid").style.visibility = "hidden";
                document.getElementById("rightFluid").style.visibility = "hidden";
                document.getElementById("bottomPinkU").style.visibility = "visible";
                document.getElementById("leftPinkFluid").style.visibility = "visible";
                document.getElementById("rightPinkFluid").style.visibility = "visible";
            } else if (manoFluid == "Mercury") {
                document.getElementById("bottomU").style.visibility = "visible";
                document.getElementById("leftFluid").style.visibility = "visible";
                document.getElementById("rightFluid").style.visibility = "visible";

                document.getElementById("bottomPinkU").style.visibility = "hidden";
                document.getElementById("leftPinkFluid").style.visibility = "hidden";
                document.getElementById("rightPinkFluid").style.visibility = "hidden";
            }

            numberOfClicks = 0;
            h1Val = 35.00
            h2Val = 35.00
            valOfRato = 0.00;

            document.getElementById("rotatePinSecond").style.visibility = "hidden";
            document.getElementById("rotatePinThird").style.visibility = "hidden";
            document.getElementById("rotatePinForth").style.visibility = "hidden";
            document.getElementById("rotatePinFifth").style.visibility = "hidden";
            document.getElementById("rotatePinFinal").style.visibility = "hidden";
            document.getElementById("rotatePin").style.visibility = "visible";

            document.getElementById("obserButton").onclick = "";
            document.getElementById("goBackButton").onclick = "";
            document.getElementById("experimentSetup").style.visibility = "hidden";
            document.getElementById('nextButton').style.visibility = "hidden";

            document.getElementById("experimentID").style.visibility = "visible";
            document.getElementById("obserButton").style.visibility = "visible";

            document.getElementById("greenColor").style.cursor = "pointer";
            document.getElementById("greenColor").style.visibility = "visible";

            document.getElementById("greenColor").onclick = function() {
                document.getElementById("greenColor").style.visibility = "hidden";
                document.getElementById("redColor").style.visibility = "visible";

                // Change the NOTE content.
                document.getElementById("infoAboutWhatToDo").innerText = "Click on Gatewall to rotate it."

                // water starts flowing.
                document.getElementById("waterPourFirst").style.visibility = "visible";
                // changing the steady water to flowing one.
                document.getElementById("waterSteady").style.visibility = "hidden";
                document.getElementById("waterFlow").style.visibility = "visible";

                // Show the water flow.
                // document.getElementById("gatewayRotate").style.cursor = "pointer";
                // document.getElementById("gatewayRotate").propeller({
                // 	inertia: 0, speed: 0
                // });
                var rotateElement = document.getElementById("gatewayRotate");
                new Propeller(rotateElement, {
                    inertia: 0,
                    speed: 0,
                    onRotate
                });

                function onRotate() {
                    console.log(this.angle);
                    fluidMoveAndPinMove(this.angle);

                    // console.log("deg", this.degree);
                }

            }

        } else {
            console.log("2 has chosen");
        }

    } else if (simsubscreennum == 6) {
        if (chosenActivity == 1) {
            //eriii
        // document.getElementById("buttonsListEval").style.visibility = "hidden";

            document.getElementById("waterPourSecondLongOne").style.visibility = "hidden";
            document.getElementById("waterPourFirst").style.visibility = "hidden";
            document.getElementById("waterFlow").style.visibility = "hidden";

            document.getElementById("observeTable").style.visibility = "hidden";
            document.getElementById("experimentSetup").style.visibility = "hidden";
            document.getElementById("labelImage").style.visibility = "hidden";
            document.getElementById('nextButton').style.visibility = "hidden";
        }
    }
}

function dragAndRotate() {

}


function gotoPage5() {
    for (temp = 0; temp <= 4; temp++) {
        document.getElementById('canvas' + temp).style.visibility = "hidden";
    }
    simsubscreennum = 5;
    document.getElementById('canvas' + simsubscreennum).style.visibility = "visible";
    document.getElementById("titleLarge").style.visibility = "hidden";
    document.getElementById("titleSmall").style.visibility = "visible";
    if (chosenActivity == 1) {
        //eriii
        // document.getElementById("buttonsListEval").style.visibility = "hidden";

        document.getElementById("buttonsList").style.visibility = "visible";
        document.getElementById("demoButton").style.cursor = "pointer";
        // document.getElementById("labelButton").style.cursor = "pointer";
        document.getElementById("demoButton").onclick = function() {
            goto6th();
        }
    } else if (chosenActivity == 2) {
        //eriii
         document.getElementById("buttonsListEval").style.visibility = "visible";

        document.getElementById("demoButtonEval").style.cursor = "pointer";
        // document.getElementById("labelButton").style.cursor = "pointer";
        document.getElementById("demoButtonEval").onclick = function() {
            goto6th();
        }
    }
    // document.getElementById("labelButton").onclick = function(){
    // 	gotoLabel();
    // }
}

function goto6th() {
    console.log("At 6th canvas");
    for (temp = 0; temp <= 6; temp++) {
        document.getElementById('canvas' + temp).style.visibility = "hidden";
    }
    simsubscreennum = 6;
    document.getElementById('canvas' + simsubscreennum).style.visibility = "visible";
    magic();

    if (chosenActivity == 1) {
        //eriii
        // document.getElementById("buttonsListEval").style.visibility = "hidden";

        document.getElementById("demoOne").style.visibility = "visible";
        document.getElementById("labelButton").style.cursor = "pointer";
        document.getElementById("labelButton").onclick = function() {
            gotoLabel();
        }
    } else if (chosenActivity == 2) {
        document.getElementById("demoTwo").style.visibility = "visible";

        //eriii
        document.getElementById("buttonsListEval").style.visibility = "visible";

        document.getElementById("labelButtonEval").style.cursor = "pointer";
        document.getElementById("labelButtonEval").onclick = function() {
            gotoLabel();
        }
    }
}

function gotoLabel() {
    for (temp = 0; temp <= 6; temp++) {
        document.getElementById('canvas' + temp).style.visibility = "hidden";
    }
    simsubscreennum = 2;
    document.getElementById('canvas' + simsubscreennum).style.visibility = "visible";
    magic();

    if (chosenActivity == 1) {
        //eriii
        // document.getElementById("buttonsListEval").style.visibility = "hidden";

        document.getElementById("demoButton").onclick = function() {
            goto6th();
        }
        document.getElementById("setupButton").style.cursor = "pointer";
        document.getElementById("setupButton").onclick = function() {
            gotoSetup();
        }
    } else if (chosenActivity == 2) {
        //eriii
        // document.getElementById("buttonsList").style.visibility = "hidden";

        document.getElementById("demoButtonEval").onclick = function() {
            console.log("Pressed demo");
            // document.getElementById("configExp").style.visibility = "hidden";
            goto6th();
        }
        document.getElementById("setupButtonEval").style.cursor = "pointer";
        document.getElementById("setupButtonEval").onclick = function() {
            gotoSetup();
        }
    }

}

function gotoSetup() {
    h1Val = 35.00
    h2Val = 35.00
    valOfRato = 0.00;
    console.log("Going to setup");
    for (temp = 0; temp <= 6; temp++) {
        document.getElementById('canvas' + temp).style.visibility = "hidden";
    }
    simsubscreennum = 3;
    document.getElementById('canvas' + simsubscreennum).style.visibility = "visible";
    magic();

    document.getElementById("expButton").style.cursor = "pointer";
    document.getElementById("expButton").onclick = function() {
        document.getElementById('overflow').style.visibility = "hidden";
        gotoExp();
    }
    if (chosenActivity == 2) {
        // document.getElementById("demoButton").style.visibility = "hidden";
        // document.getElementById("labelButton").style.visibility = "hidden";
        // document.getElementById("setupButton").style.visibility = "hidden";
        // document.getElementById("expButton").style.visibility = "hidden";

        //eriii
        // document.getElementById("buttonsList").style.visibility = "hidden";
        
        document.getElementById("labelButtonEval").onclick = function() {
            goBacktoStep2Eval();
        }
        document.getElementById("demoButtonEval").onclick = function() {
            goBacktoStep1Eval();
        }
    }

}

function goBacktoStep1Eval() {
    console.log("Going to 6th one");
    document.getElementById("configExp").style.visibility = "hidden";
    document.getElementById("evaluatePart").style.visibility = "hidden";
    for (temp = 0; temp <= 6; temp++) {
        document.getElementById('canvas' + temp).style.visibility = "hidden";
    }
    simsubscreennum = 6;
    document.getElementById('canvas' + simsubscreennum).style.visibility = "visible";
    magic();
}

function goBacktoStep2Eval() {
    console.log("Going to second");
    document.getElementById("evaluatePart").style.visibility = "hidden";
    for (temp = 0; temp <= 6; temp++) {
        document.getElementById('canvas' + temp).style.visibility = "hidden";
    }
    simsubscreennum = 2;
    document.getElementById('canvas' + simsubscreennum).style.visibility = "visible";

    magic();
}
var flagForObserTable = false;
var flagForDisplayExpValues = false;
function gotoExp() {
    console.log("Experiment part.");
    // erin
    document.getElementById("obcanvas").style.visibility = "hidden";
    document.getElementById("displayExpValues").style.visibility = "hidden";
    for (temp = 0; temp <= 6; temp++) {
        document.getElementById('canvas' + temp).style.visibility = "hidden";
    }
    simsubscreennum = 4;
    document.getElementById('canvas' + simsubscreennum).style.visibility = "visible";
    magic();
    
    if(processFluid=="Water"){
        densitypf=1000;
        viscositypf=0.85;
    }
    else{
        densitypf=820;
        viscositypf=2.15;
    }

    if(manoFluid=="Carbon tetrachloride")
        mfdensity=1600;
    else
        mfdensity=13600;
// eriii
        document.getElementById("obserButton").onclick = function(){
            console.log("Clicking on observation button ");
            flagForObserTable = !flagForObserTable;
            observeTable(flagForObserTable);
            document.getElementById("displayExpValues").style.visibility = "hidden";
        }
	document.getElementById("experiButton").onclick = function(){
		console.log("Clicking on exp button inside fluidMove");
		flagForDisplayExpValues = !flagForDisplayExpValues;
		displayExpValues(flagForDisplayExpValues);
    // eriii
        document.getElementById("observeTable").style.visibility = "hidden";
        document.getElementById("obcanvas").style.visibility = "hidden";
        document.getElementById("remSelRead").style.visibility = "hidden";
        document.getElementById("remAllRead").style.visibility = "hidden";
        document.getElementById("emailTable").style.visibility = "hidden";
    }
    document.getElementById("setupButton").onclick = function() {
        document.getElementById('overflow').style.visibility = "hidden";
        
        //eriii
        document.getElementById("obcanvas").style.visibility = "hidden";
        document.getElementById("remSelRead").style.visibility = "hidden";
        document.getElementById("remAllRead").style.visibility = "hidden";
        document.getElementById("emailTable").style.visibility = "hidden";

        console.log("clicked for setup");
        document.getElementById("greenColor").style.visibility = "hidden";
        document.getElementById("nextButton").style.visibility = "hidden";
        document.getElementById("nextButton").style.zIndex = -1;
        document.getElementById("displayExpValues").style.visibility = "hidden";
        flagForDisplayExpValues = false;
        console.log("The flag value on moving to the Setup is: ", flagForDisplayExpValues);
        flagForObserTable = false;
        console.log("The flag value on moving to the Setup is: ", flagForObserTable);
        goBacktoStep2();
    }
    document.getElementById("labelButton").onclick = function() {
        hideAllExperimentParts();
        //eriii
        document.getElementById("obcanvas").style.visibility = "hidden";
        document.getElementById("remSelRead").style.visibility = "hidden";
        document.getElementById("remAllRead").style.visibility = "hidden";
        document.getElementById("emailTable").style.visibility = "hidden";
        document.getElementById("displayExpValues").style.visibility = "hidden";
        flagForDisplayExpValues = false;
        console.log("The flag value on moving to the Setup is: ", flagForDisplayExpValues);
        flagForObserTable = false;
        console.log("The flag value on moving to the Setup is: ", flagForObserTable);
        gotoLabel();
    }
    document.getElementById("demoButton").onclick = function() {
        hideAllExperimentParts();
        //eriii
        document.getElementById("obcanvas").style.visibility = "hidden";
        document.getElementById("remSelRead").style.visibility = "hidden";
        document.getElementById("remAllRead").style.visibility = "hidden";
        document.getElementById("emailTable").style.visibility = "hidden";

        document.getElementById("displayExpValues").style.visibility = "hidden";
        flagForDisplayExpValues = false;
        console.log("The flag value on moving to the Setup is: ", flagForDisplayExpValues);
        flagForObserTable = false;
        console.log("The flag value on moving to the Setup is: ", flagForObserTable);
        goto6th();
    }
}

function hideAllExperimentParts() {
    document.getElementById('overflow').style.visibility = "hidden";
    document.getElementById("experimentID").style.visibility = "hidden";
    document.getElementById("waterSteady").style.visibility = "hidden";
    document.getElementById("obserButton").style.visibility = "hidden";
    document.getElementById("bottomPinkU").style.visibility = "hidden";
    document.getElementById("leftFluidFinal").style.visibility = "hidden";
    document.getElementById("rightFluidFinal").style.visibility = "hidden";
    document.getElementById("leftFluid").style.visibility = "hidden";
    document.getElementById("rightFluid").style.visibility = "hidden";
    document.getElementById("leftFluidSecond").style.visibility = "hidden";
    document.getElementById("rightFluidSecond").style.visibility = "hidden";
    document.getElementById("leftFluidThird").style.visibility = "hidden";
    document.getElementById("rightFluidThird").style.visibility = "hidden";
    document.getElementById("leftFluidForth").style.visibility = "hidden";
    document.getElementById("rightFluidForth").style.visibility = "hidden";
    document.getElementById("leftFluidFifth").style.visibility = "hidden";
    document.getElementById("rightFluidFifth").style.visibility = "hidden";
    document.getElementById("bottomU").style.visibility = "hidden";
    //erin
    document.getElementById("demoOne").style.visibility = "hidden";
    document.getElementById("demoTwo").style.visibility = "hidden";
    document.getElementById("displayExpValues").style.visibility = "hidden";
    document.getElementById("labelImage").style.visibility = "hidden";
    document.getElementById("experimentSetup").style.visibility = "hidden";
    document.getElementById("observeTable").style.visibility = "hidden";
    document.getElementById("obcanvas").style.visibility = "hidden";
    document.getElementById("remSelRead").style.visibility = "hidden";
    document.getElementById("remAllRead").style.visibility = "hidden";
    document.getElementById("emailTable").style.visibility = "hidden";
    
    //erinend
    document.getElementById("rotatePin").style.visibility = "hidden";
    document.getElementById("rotatePinFinal").style.visibility = "hidden";
    document.getElementById("rotatePinSecond").style.visibility = "hidden";
    document.getElementById("rotatePinThird").style.visibility = "hidden";
    document.getElementById("rotatePinForth").style.visibility = "hidden";
    document.getElementById("rotatePinFifth").style.visibility = "hidden";

    document.getElementById("greenColor").style.visibility = "hidden";
    document.getElementById("redColor").style.visibility = "hidden";
    document.getElementById("obserButton").style.visibility = "hidden";

    document.getElementById("leftPinkFluidFinal").style.visibility = "hidden";
    document.getElementById("rightPinkFluidFinal").style.visibility = "hidden";
    document.getElementById("leftPinkFluid").style.visibility = "hidden";
    document.getElementById("rightPinkFluid").style.visibility = "hidden";
    document.getElementById("leftPinkFluidSecond").style.visibility = "hidden";
    document.getElementById("rightPinkFluidSecond").style.visibility = "hidden";
    document.getElementById("leftPinkFluidThird").style.visibility = "hidden";
    document.getElementById("rightPinkFluidThird").style.visibility = "hidden";
    document.getElementById("leftPinkFluidForth").style.visibility = "hidden";
    document.getElementById("rightPinkFluidForth").style.visibility = "hidden";
    document.getElementById("leftPinkFluidFifth").style.visibility = "hidden";
    document.getElementById("rightPinkFluidFifth").style.visibility = "hidden";
    document.getElementById("bottomPinkU").style.visibility = "hidden";
}

// ADDED By Jaison.
var chosenActivity;

function selectAction(n) {
    chosenActivity = n;
    console.log(chosenActivity);
    simsubscreennum = 5;
    gotoPage5();
}

var pipeLength = 1;

function setPipeLength() {
    pipeLength = document.getElementById("pipeLength").value;
    console.log(pipeLength);
}

var chosenPipeDia = 0.25;

function setPipeDia() {
    chosenPipeDia = document.getElementById("pipeDiaSelect").value;
    console.log(chosenPipeDia);
}

var actualPipeDia= 0.92;

var processFluid = "Water";
function setProcessFluid() {
    processFluid = document.getElementById("processFluid").value;
    console.log(processFluid);
}

var densitypf =1000;
var viscositypf=0.85;


var manoFluid = "Carbon tetrachloride"
var mfdensity=1600;
function setManoFluid(){
	manoFluid = document.getElementById("manoFluid").value;
	console.log(manoFluid);
}



var x = 0;
var numberOfClicks = 0;
var h1Val = 35.00
var h2Val = 35.00
var valOfRato = 0.00;
var valOfRatoNew = 0.00;
var h1Final = 35.00;
var h2Final = 35.00;
var h1New = 35.00;
var h2New = 35.00;

var heightLeft = 0;
var heightLeftNew = 0;
var heightRight = 0;
var heightRightNew = 0;

var topLeft = 0;
var topLeftNew = 0;
var topRight = 0;
var topRightNew = 0;

var heightPin = 0;
var heightPinNew = 0;
var topPin = 0;
var topPinNew = 0;

function fluidMoveAndPinMove(angle) {
    h1Val = 0.00
    h2Val = 0.00
    valOfRato = 0.00;
    h1Final = 0.00;
    valOfRatoNew = 0.00;
    h2Final = 0.00;

    document.getElementById("waterPourSecondLongOne").style.visibility = "visible";
    document.getElementById("gatewayRotate").style.cursor = "auto";

    document.getElementById("addtoTableButton").style.visibility = "visible";


    if (processFluid == "Water" && manoFluid == "Mercury") {
        if (chosenPipeDia == 0.25) {
            heightLeft = (356 - angle) * 0.093;
            heightLeftNew = heightLeft.toFixed(0);
            topLeft = (356 - angle) * 0.096;
            topLeftNew = topLeft.toFixed(0);

            heightRight = (356 - angle) * 0.104;
            heightRightNew = heightLeft.toFixed(0);
            topRight = (356 - angle) * 0.093;
            topRightNew = topLeft.toFixed(0);

            topPin = (356 - angle) * 0.19;
            topPinNew = topPin.toFixed(0);

            h1Val = (356 - angle) * 0.099;
            h1New = parseFloat(35) + parseFloat(h1Val);
            console.log("The h1 new dec fixed is: ", h1New);

            valOfRato = (356 - angle) * 0.1066;
            valOfRatoNew = valOfRato.toFixed(2);
            console.log("Val of Rato is ", valOfRatoNew);

            h2Val = (356 - angle) * 0.099;
            h2New = parseFloat(35) - parseFloat(h2Val);

            h1Final = h1New.toFixed(2);
            h2Final = h2New.toFixed(2);
            console.log("The h1 final val is: ", h1Final);

            if (h1Final >= 69) {
                h1Final = 70;
                h2Final = 0;
                valOfRatoNew = 37.92;
                console.log("Overflow condition");
                document.getElementById('overflow').style.visibility = "visible";


            }
        } else if (chosenPipeDia == 0.50) {
            heightLeft = (356 - angle) * 0.014;
            heightLeftNew = heightLeft.toFixed(0);
            topLeft = (356 - angle) * 0.014;
            topLeftNew = topLeft.toFixed(0);

            heightRight = (356 - angle) * 0.011;
            heightRightNew = heightLeft.toFixed(0);
            topRight = (356 - angle) * 0.011;
            topRightNew = topLeft.toFixed(0);

            topPin = (356 - angle) * 0.21;
            topPinNew = topPin.toFixed(0);

            h1Val = (356 - angle) * 0.0084;
            h1New = parseFloat(35) + parseFloat(h1Val);
            console.log("The h1 new dec fixed is: ", h1New);

            valOfRato = (356 - angle) * 0.1124;
            valOfRatoNew = valOfRato.toFixed(2);
            console.log("Val of Rato is ", valOfRatoNew);

            h2Val = (356 - angle) * 0.0084;
            h2New = parseFloat(35) - parseFloat(h2Val);

            h1Final = h1New.toFixed(2);
            h2Final = h2New.toFixed(2);
            console.log("The h1 final val is: ", h1Final);

            if (valOfRatoNew >= 39) {
                h1Final = 38;
                h2Final = 32;
                valOfRatoNew = 40;
                console.log("Overflow condition");
                document.getElementById('overflow').style.visibility = "visible";

            }
        } else if (chosenPipeDia == 1.00) {
            heightLeft = (356 - angle) * 0;
            heightLeftNew = heightLeft.toFixed(0);
            topLeft = (356 - angle) * 0;
            topLeftNew = topLeft.toFixed(0);

            heightRight = (356 - angle) * 0;
            heightRightNew = heightLeft.toFixed(0);
            topRight = (356 - angle) * 0;
            topRightNew = topLeft.toFixed(0);

            topPin = (356 - angle) * 0.21;
            topPinNew = topPin.toFixed(0);

            h1Val = (356 - angle) * 0.00056;
            h1New = parseFloat(35) + parseFloat(h1Val);
            console.log("The h1 new dec fixed is: ", h1New);

            valOfRato = (356 - angle) * 0.1124;
            valOfRatoNew = valOfRato.toFixed(2);
            console.log("Val of Rato is ", valOfRatoNew);

            h2Val = (356 - angle) * 0.00056;
            h2New = parseFloat(35) - parseFloat(h2Val);

            h1Final = h1New.toFixed(2);
            h2Final = h2New.toFixed(2);
            console.log("The h1 final val is: ", h1Final);

            if (valOfRatoNew >= 39) {
                h1Final = 35.2;
                h2Final = 34.8;
                valOfRatoNew = 40;
                console.log("Overflow condition");
                document.getElementById('overflow').style.visibility = "visible";

            }
        } else if (chosenPipeDia == 1.50) {
            heightLeft = (356 - angle) * 0;
            heightLeftNew = heightLeft.toFixed(0);
            topLeft = (356 - angle) * 0;
            topLeftNew = topLeft.toFixed(0);

            heightRight = (356 - angle) * 0;
            heightRightNew = heightLeft.toFixed(0);
            topRight = (356 - angle) * 0;
            topRightNew = topLeft.toFixed(0);

            topPin = (356 - angle) * 0.21;
            topPinNew = topPin.toFixed(0);

            h1Val = (356 - angle) * 0;
            h1New = parseFloat(35) + parseFloat(h1Val);
            console.log("The h1 new dec fixed is: ", h1New);

            valOfRato = (356 - angle) * 0.1124;
            valOfRatoNew = valOfRato.toFixed(2);
            console.log("Val of Rato is ", valOfRatoNew);

            h2Val = (356 - angle) * 0;
            h2New = parseFloat(35) - parseFloat(h2Val);

            h1Final = h1New.toFixed(2);
            h2Final = h2New.toFixed(2);
            console.log("The h1 final val is: ", h1Final);

            if (valOfRatoNew >= 39) {
                h1Final = 35;
                h2Final = 35;
                valOfRatoNew = 40;
                console.log("Overflow condition");
                document.getElementById('overflow').style.visibility = "visible";

            }
        }
        document.getElementById("leftCm").innerText = (h1Final);
        document.getElementById("rightCm").innerText = h2Final;
        document.getElementById("ratoReadings").innerText = (valOfRatoNew);

        document.getElementById("leftFluid").style.height = parseInt(37) + parseInt(heightLeftNew) + "px";
        document.getElementById("leftFluid").style.top = parseInt(222) - parseInt(topLeftNew) + "px";
        document.getElementById("rightFluid").style.height = parseInt(37) - parseInt(heightRightNew) + "px";
        document.getElementById("rightFluid").style.top = parseInt(222) + parseInt(topRightNew) + "px";
        document.getElementById("rotatePin").style.top = parseInt(259) - parseInt(topPinNew) + "px";
    } else if (processFluid == "Kerosene" && manoFluid == "Mercury") {
        if (chosenPipeDia == 0.25) {
            heightLeft = (356 - angle) * 0.093;
            heightLeftNew = heightLeft.toFixed(0);
            topLeft = (356 - angle) * 0.096;
            topLeftNew = topLeft.toFixed(0);

            heightRight = (356 - angle) * 0.104;
            heightRightNew = heightLeft.toFixed(0);
            topRight = (356 - angle) * 0.093;
            topRightNew = topLeft.toFixed(0);

            topPin = (356 - angle) * 0.04;
            topPinNew = topPin.toFixed(0);

            h1Val = (356 - angle) * 0.099;
            h1New = parseFloat(35) + parseFloat(h1Val);
            console.log("The h1 new dec fixed is: ", h1New);

            valOfRato = (356 - angle) * 0.1023;
            valOfRatoNew = valOfRato.toFixed(2);
            console.log("Val of Rato is ", valOfRatoNew);

            h2Val = (356 - angle) * 0.099;
            h2New = parseFloat(35) - parseFloat(h2Val);

            h1Final = h1New.toFixed(2);
            h2Final = h2New.toFixed(2);
            console.log("The h1 final val is: ", h1Final);

            if (h1Final >= 69) {
                h1Final = 70;
                h2Final = 0;
                valOfRatoNew = 36.42;
                console.log("Overflow condition");
                document.getElementById('overflow').style.visibility = "visible";

            }
        } else if (chosenPipeDia == 0.50) {
            heightLeft = (356 - angle) * 0.04;
            heightLeftNew = heightLeft.toFixed(0);
            topLeft = (356 - angle) * 0.034;
            topLeftNew = topLeft.toFixed(0);

            heightRight = (356 - angle) * 0.021;
            heightRightNew = heightLeft.toFixed(0);
            topRight = (356 - angle) * 0.022;
            topRightNew = topLeft.toFixed(0);

            topPin = (356 - angle) * 0.21;
            topPinNew = topPin.toFixed(0);

            h1Val = (356 - angle) * 0.0093;
            h1New = parseFloat(35) + parseFloat(h1Val);
            console.log("The h1 new dec fixed is: ", h1New);

            valOfRato = (356 - angle) * 0.1124;
            valOfRatoNew = valOfRato.toFixed(2);
            console.log("Val of Rato is ", valOfRatoNew);

            h2Val = (356 - angle) * 0.0093;
            h2New = parseFloat(35) - parseFloat(h2Val);

            h1Final = h1New.toFixed(2);
            h2Final = h2New.toFixed(2);
            console.log("The h1 final val is: ", h1Final);

            if (valOfRatoNew >= 39) {
                h1Final = 38.3;
                h2Final = 31.7;
                valOfRatoNew = 40;
                console.log("Overflow condition");
                document.getElementById('overflow').style.visibility = "visible";

            }
        } else if (chosenPipeDia == 1.00) {
            heightLeft = (356 - angle) * 0.006;
            heightLeftNew = heightLeft.toFixed(0);
            topLeft = (356 - angle) * 0.009;
            topLeftNew = topLeft.toFixed(0);

            heightRight = (356 - angle) * 0.006;
            heightRightNew = heightLeft.toFixed(0);
            topRight = (356 - angle) * 0.009;
            topRightNew = topLeft.toFixed(0);

            topPin = (356 - angle) * 0.21;
            topPinNew = topPin.toFixed(0);

            h1Val = (356 - angle) * 0.000842;
            h1New = parseFloat(35) + parseFloat(h1Val);
            console.log("The h1 new dec fixed is: ", h1New);

            valOfRato = (356 - angle) * 0.1124;
            valOfRatoNew = valOfRato.toFixed(2);
            console.log("Val of Rato is ", valOfRatoNew);

            h2Val = (356 - angle) * 0.000842;
            h2New = parseFloat(35) - parseFloat(h2Val);

            h1Final = h1New.toFixed(2);
            h2Final = h2New.toFixed(2);
            console.log("The h1 final val is: ", h1Final);

            if (valOfRatoNew >= 39) {
                h1Final = 35.3;
                h2Final = 34.7;
                valOfRatoNew = 40;
                console.log("Overflow condition");
                document.getElementById('overflow').style.visibility = "visible";

            }
        } else if (chosenPipeDia == 1.50) {
            heightLeft = (356 - angle) * 0;
            heightLeftNew = heightLeft.toFixed(0);
            topLeft = (356 - angle) * 0;
            topLeftNew = topLeft.toFixed(0);

            heightRight = (356 - angle) * 0;
            heightRightNew = heightLeft.toFixed(0);
            topRight = (356 - angle) * 0;
            topRightNew = topLeft.toFixed(0);

            topPin = (356 - angle) * 0.21;
            topPinNew = topPin.toFixed(0);

            h1Val = (356 - angle) * 0;
            h1New = parseFloat(35) + parseFloat(h1Val);
            console.log("The h1 new dec fixed is: ", h1New);

            valOfRato = (356 - angle) * 0.1124;
            valOfRatoNew = valOfRato.toFixed(2);
            console.log("Val of Rato is ", valOfRatoNew);

            h2Val = (356 - angle) * 0;
            h2New = parseFloat(35) - parseFloat(h2Val);

            h1Final = h1New.toFixed(2);
            h2Final = h2New.toFixed(2);
            console.log("The h1 final val is: ", h1Final);

            if (valOfRatoNew >= 39) {
                h1Final = 35;
                h2Final = 35;
                valOfRatoNew = 40;
                console.log("Overflow condition");
                document.getElementById('overflow').style.visibility = "visible";

            }
        }
        document.getElementById("leftCm").innerText = (h1Final);
        document.getElementById("rightCm").innerText = h2Final;
        document.getElementById("ratoReadings").innerText = (valOfRatoNew);

        document.getElementById("leftFluid").style.height = parseInt(37) + parseInt(heightLeftNew) + "px";
        document.getElementById("leftFluid").style.top = parseInt(222) - parseInt(topLeftNew) + "px";
        document.getElementById("rightFluid").style.height = parseInt(37) - parseInt(heightRightNew) + "px";
        document.getElementById("rightFluid").style.top = parseInt(222) + parseInt(topRightNew) + "px";
        document.getElementById("rotatePin").style.top = parseInt(259) - parseInt(topPinNew) + "px";
    } else if (processFluid == "Kerosene" && manoFluid == "Carbon tetrachloride") {
        if (chosenPipeDia == 0.25) {

            heightLeft = (356 - angle) * 0.093;
            heightLeftNew = heightLeft.toFixed(0);
            topLeft = (356 - angle) * 0.096;
            topLeftNew = topLeft.toFixed(0);

            heightRight = (356 - angle) * 0.104;
            heightRightNew = heightLeft.toFixed(0);
            topRight = (356 - angle) * 0.093;
            topRightNew = topLeft.toFixed(0);

            topPin = (356 - angle) * 0.04;
            topPinNew = topPin.toFixed(0);


            h1Val = (356 - angle) * 0.099;
            h1New = parseFloat(35) + parseFloat(h1Val);
            console.log("The h1 new dec fixed is: ", h1New);

            valOfRato = (356 - angle) * 0.021;
            valOfRatoNew = valOfRato.toFixed(2);
            console.log("Val of Rato is ", valOfRatoNew);

            h2Val = (356 - angle) * 0.099;
            h2New = parseFloat(35) - parseFloat(h2Val);

            h1Final = h1New.toFixed(2);
            h2Final = h2New.toFixed(2);
            console.log("The h1 final val is: ", h1Final);

            if (h1Final >= 69) {
                h1Final = 70;
                h2Final = 0;
                valOfRatoNew = 7.42;
                console.log("Overflow condition");
                document.getElementById('overflow').style.visibility = "visible";

            }
        } else if (chosenPipeDia == 0.50) {

            heightLeft = (356 - angle) * 0.093;
            heightLeftNew = heightLeft.toFixed(0);
            topLeft = (356 - angle) * 0.096;
            topLeftNew = topLeft.toFixed(0);

            heightRight = (356 - angle) * 0.104;
            heightRightNew = heightLeft.toFixed(0);
            topRight = (356 - angle) * 0.093;
            topRightNew = topLeft.toFixed(0);

            topPin = (356 - angle) * 0.14;
            topPinNew = topPin.toFixed(0);


            h1Val = (356 - angle) * 0.099;
            h1New = parseFloat(35) + parseFloat(h1Val);
            console.log("The h1 new dec fixed is: ", h1New);

            valOfRato = (356 - angle) * 0.089;
            valOfRatoNew = valOfRato.toFixed(2);
            console.log("Val of Rato is ", valOfRatoNew);

            h2Val = (356 - angle) * 0.099;
            h2New = parseFloat(35) - parseFloat(h2Val);

            h1Final = h1New.toFixed(2);
            h2Final = h2New.toFixed(2);
            console.log("The h1 final val is: ", h1Final);

            if (h1Final >= 69) {
                h1Final = 70;
                h2Final = 0;
                valOfRatoNew = 31.42;
                console.log("Overflow condition");
                document.getElementById('overflow').style.visibility = "visible";

            }
        } else if (chosenPipeDia == 1.00) {
            heightLeft = (356 - angle) * 0.04;
            heightLeftNew = heightLeft.toFixed(0);
            topLeft = (356 - angle) * 0.034;
            topLeftNew = topLeft.toFixed(0);

            heightRight = (356 - angle) * 0.02;
            heightRightNew = heightLeft.toFixed(0);
            topRight = (356 - angle) * 0.022;
            topRightNew = topLeft.toFixed(0);

            topPin = (356 - angle) * 0.21;
            topPinNew = topPin.toFixed(0);

            h1Val = (356 - angle) * 0.0124;
            h1New = parseFloat(35) + parseFloat(h1Val);
            console.log("The h1 new dec fixed is: ", h1New);

            valOfRato = (356 - angle) * 0.1124;
            valOfRatoNew = valOfRato.toFixed(2);
            console.log("Val of Rato is ", valOfRatoNew);

            h2Val = (356 - angle) * 0.0124;
            h2New = parseFloat(35) - parseFloat(h2Val);

            h1Final = h1New.toFixed(2);
            h2Final = h2New.toFixed(2);
            console.log("The h1 final val is: ", h1Final);

            if (valOfRatoNew >= 39) {
                h1Final = 39.4;
                h2Final = 30.6;
                valOfRatoNew = 40;
                console.log("Overflow condition");
                document.getElementById('overflow').style.visibility = "visible";

            }
        } else if (chosenPipeDia == 1.50) {

            heightLeft = (356 - angle) * 0.006;
            heightLeftNew = heightLeft.toFixed(0);
            topLeft = (356 - angle) * 0.009;
            topLeftNew = topLeft.toFixed(0);

            heightRight = (356 - angle) * 0.006;
            heightRightNew = heightLeft.toFixed(0);
            topRight = (356 - angle) * 0.009;
            topRightNew = topLeft.toFixed(0);

            topPin = (356 - angle) * 0.21;
            topPinNew = topPin.toFixed(0);


            h1Val = (356 - angle) * 0.0017;
            h1New = parseFloat(35) + parseFloat(h1Val);
            console.log("The h1 new dec fixed is: ", h1New);

            valOfRato = (356 - angle) * 0.1124;
            valOfRatoNew = valOfRato.toFixed(2);
            console.log("Val of Rato is ", valOfRatoNew);

            h2Val = (356 - angle) * 0.0017;
            h2New = parseFloat(35) - parseFloat(h2Val);

            h1Final = h1New.toFixed(2);
            h2Final = h2New.toFixed(2);
            console.log("The h1 final val is: ", h1Final);

            if (valOfRatoNew >= 39) {
                h1Final = 35.6;
                h2Final = 34.4;
                valOfRatoNew = 40;
                console.log("Overflow condition");
                document.getElementById('overflow').style.visibility = "visible";

            }
        }
        document.getElementById("leftCm").innerText = (h1Final);
        document.getElementById("rightCm").innerText = h2Final;
        document.getElementById("ratoReadings").innerText = (valOfRatoNew);

        document.getElementById("leftPinkFluid").style.height = parseInt(37) + parseInt(heightLeftNew) + "px";
        document.getElementById("leftPinkFluid").style.top = parseInt(222) - parseInt(topLeftNew) + "px";
        document.getElementById("rightPinkFluid").style.height = parseInt(37) - parseInt(heightRightNew) + "px";
        document.getElementById("rightPinkFluid").style.top = parseInt(222) + parseInt(topRightNew) + "px";
        document.getElementById("rotatePin").style.top = parseInt(259) - parseInt(topPinNew) + "px";
    } else if (processFluid == "Water" && manoFluid == "Carbon tetrachloride") {
        console.log("HERE");
        console.log("Chosen pipe dia is: ", chosenPipeDia);
        if (chosenPipeDia == 0.25) {
            console.log("Current deg: ", angle);

            heightLeft = (356 - angle) * 0.093;
            heightLeftNew = heightLeft.toFixed(0);
            topLeft = (356 - angle) * 0.096;
            topLeftNew = topLeft.toFixed(0);

            heightRight = (356 - angle) * 0.104;
            heightRightNew = heightLeft.toFixed(0);
            topRight = (356 - angle) * 0.093;
            topRightNew = topLeft.toFixed(0);

            topPin = (356 - angle) * 0.04;
            topPinNew = topPin.toFixed(0);


            h1Val = (356 - angle) * 0.099;
            h1New = parseFloat(35) + parseFloat(h1Val);
            console.log("The h1 new dec fixed is: ", h1New);

            valOfRato = (356 - angle) * 0.019;
            valOfRatoNew = valOfRato.toFixed(2);
            console.log("Val of Rato is ", valOfRatoNew);

            h2Val = (356 - angle) * 0.099;
            h2New = parseFloat(35) - parseFloat(h2Val);

            h1Final = h1New.toFixed(2);
            h2Final = h2New.toFixed(2);
            console.log("The h1 final val is: ", h1Final);

            if (h1Final >= 69) {
                h1Final = 70;
                h2Final = 0;
                valOfRatoNew = 6.67;
                console.log("Overflow condition");
                document.getElementById("overflow").style.visibility = "visible";

            }

        } else if (chosenPipeDia == 0.50) {
            console.log("Current deg: ", angle);

            h1Val = (356 - angle) * 0.098;
            valOfRato = (356 - angle) * 0.0798;
            valOfRatoNew = valOfRato.toFixed(2);
            h1New = parseFloat(35) + parseFloat(h1Val);

            h2Val = (356 - angle) * 0.098;
            h2New = parseFloat(35) - parseFloat(h2Val);
            h1Final = h1New.toFixed(2);
            h2Final = h2New.toFixed(2);
            console.log("H1 value is: ", h1Final);

            heightLeft = (356 - angle) * 0.093;
            heightLeftNew = heightLeft.toFixed(0);
            topLeft = (356 - angle) * 0.096;
            topLeftNew = topLeft.toFixed(0);

            heightRight = (356 - angle) * 0.104;
            heightRightNew = heightLeft.toFixed(0);
            topRight = (356 - angle) * 0.093;
            topRightNew = topLeft.toFixed(0);

            topPin = (356 - angle) * 0.14;
            topPinNew = topPin.toFixed(0);

            if (h1Final >= 68) {
                h1Final = 70;
                h2Final = 0;
                valOfRatoNew = 28.42;
                console.log("Overflow condition");
                document.getElementById('overflow').style.visibility = "visible";

            }

        } else if (chosenPipeDia == 1.00) {
            console.log("Current deg: ", angle);

            h1Val = (356 - angle) * 0.0146;
            valOfRato = (356 - angle) * 0.11236;
            valOfRatoNew = valOfRato.toFixed(2);
            h1New = parseFloat(35) + parseFloat(h1Val);

            h2Val = (356 - angle) * 0.0146;
            h2New = parseFloat(35) - parseFloat(h2Val);
            h1Final = h1New.toFixed(2);
            h2Final = h2New.toFixed(2);

            heightLeft = (356 - angle) * 0.04;
            heightLeftNew = heightLeft.toFixed(0);
            topLeft = (356 - angle) * 0.034;
            topLeftNew = topLeft.toFixed(0);

            heightRight = (356 - angle) * 0.02;
            heightRightNew = heightLeft.toFixed(0);
            topRight = (356 - angle) * 0.022;
            topRightNew = topLeft.toFixed(0);

            topPin = (356 - angle) * 0.21;
            topPinNew = topPin.toFixed(0);

            if (valOfRatoNew >= 39) {
                h1Final = 40.2;
                h2Final = 29.8;
                valOfRatoNew = 40;
                console.log("Overflow condition");
                document.getElementById('overflow').style.visibility = "visible";

            }

        } else if (chosenPipeDia == 1.50) {
            console.log("Current deg: ", angle);

            h1Val = (356 - angle) * 0.00196;
            valOfRato = (356 - angle) * 0.11236;
            valOfRatoNew = valOfRato.toFixed(2);
            h1New = parseFloat(35) + parseFloat(h1Val);

            h2Val = (356 - angle) * 0.00196;
            h2New = parseFloat(35) - parseFloat(h2Val);
            h1Final = h1New.toFixed(2);
            h2Final = h2New.toFixed(2);

            heightLeft = (356 - angle) * 0.006;
            heightLeftNew = heightLeft.toFixed(0);
            topLeft = (356 - angle) * 0.009;
            topLeftNew = topLeft.toFixed(0);

            heightRight = (356 - angle) * 0.006;
            heightRightNew = heightLeft.toFixed(0);
            topRight = (356 - angle) * 0.009;
            topRightNew = topLeft.toFixed(0);

            topPin = (356 - angle) * 0.21;
            topPinNew = topPin.toFixed(0);

            if (valOfRatoNew >= 39) {
                h1Final = 35.70;
                h2Final = 34.30;
                valOfRatoNew = 40;
                console.log("Overflow condition");
                document.getElementById('overflow').style.visibility = "visible";

            }

        }
        document.getElementById("leftCm").innerText = (h1Final);
        document.getElementById("rightCm").innerText = h2Final;
        document.getElementById("ratoReadings").innerText = (valOfRatoNew);

        document.getElementById("leftPinkFluid").style.height = parseInt(37) + parseInt(heightLeftNew) + "px";
        document.getElementById("leftPinkFluid").style.top = parseInt(222) - parseInt(topLeftNew) + "px";
        document.getElementById("rightPinkFluid").style.height = parseInt(37) - parseInt(heightRightNew) + "px";
        document.getElementById("rightPinkFluid").style.top = parseInt(222) + parseInt(topRightNew) + "px";
        document.getElementById("rotatePin").style.top = parseInt(259) - parseInt(topPinNew) + "px";
    }
    document.getElementById("addtoTableButton").onclick = function() {
        document.getElementById("addtoTableButton").style.visibility = "hidden";
        var table = document.getElementById("observeTable");
        table.style.color = "#fff";
        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        cell1.innerHTML = processFluid;
        cell2.innerHTML = manoFluid;
        cell3.innerHTML = valOfRatoNew;
        cell4.innerHTML = h1Final;
        cell5.innerHTML = h2Final;
        
    }
    document.getElementById("obserButton").onclick = function() {
        // erin
        console.log("Clicking on observ button ");
            flagForObserTable = !flagForObserTable;
            observeTable(flagForObserTable);

        gotoObservation();
    }
}

// ERIN
function observeTable(flag){
    console.log("Clicking on observe button");
    console.log("the flag value is"+flag);
    if(flag){
		document.getElementById("obcanvas").style.visibility = "visible";
        document.getElementById("observeTable").style.visibility = "visible";


	}
	else{
		document.getElementById("obcanvas").style.visibility = "hidden";
        document.getElementById("observeTable").style.visibility = "hidden";
    }


}
function displayExpValues(flag){
	console.log("Clicking on exp button");
	// for (temp = 0; temp <= 7 ; temp++) 
	// { 
	// 	document.getElementById('canvas'+temp).style.visibility="hidden";
	// }
	// simsubscreennum = 4;
	// document.getElementById('canvas'+simsubscreennum).style.visibility="visible";
	// simsubscreennum = 8;
	// document.getElementById('canvas'+simsubscreennum).style.visibility="visible";
	// magic();
	if(flag){
		document.getElementById("displayExpValues").style.visibility = "visible";
	}
	else
		document.getElementById("displayExpValues").style.visibility = "hidden";

	document.getElementById("pilen").innerHTML=pipeLength+"meter(s)";
	document.getElementById("nompidia").innerHTML=chosenPipeDia+"inch";
	document.getElementById("acpidia").innerHTML=actualPipeDia+" cm";
	document.getElementById("prflu").innerHTML=processFluid;
	document.getElementById("dprflu").innerHTML=densitypf+" Kg per Cubic meter"
	document.getElementById("vprflu").innerHTML=viscositypf+" centiPoise";
	document.getElementById("mflu").innerHTML=manoFluid;
	document.getElementById("dmflu").innerHTML=mfdensity+" Kg per Cubic meter";

}



function gotoObservation() {
    console.log("go to observ.");

    document.getElementById("waterFlow").style.visibility = "hidden";
    document.getElementById("waterSteady").style.visibility = "hidden";
    document.getElementById("addtoTableButton").style.visibility = "hidden";

    document.getElementById("waterPourFirst").style.visibility = "hidden";
    document.getElementById("waterPourSecondLongOne").style.visibility = "hidden";

    document.getElementById("step4Heading").innerText = "Observations";
    document.getElementById("experimentID").style.visibility = "hidden";

    document.getElementById("leftFluidFinal").style.visibility = "hidden";
    document.getElementById("rightFluidFinal").style.visibility = "hidden";
    document.getElementById("leftFluid").style.visibility = "hidden";
    document.getElementById("rightFluid").style.visibility = "hidden";
    document.getElementById("leftFluidSecond").style.visibility = "hidden";
    document.getElementById("rightFluidSecond").style.visibility = "hidden";
    document.getElementById("leftFluidThird").style.visibility = "hidden";
    document.getElementById("rightFluidThird").style.visibility = "hidden";
    document.getElementById("leftFluidForth").style.visibility = "hidden";
    document.getElementById("rightFluidForth").style.visibility = "hidden";
    document.getElementById("leftFluidFifth").style.visibility = "hidden";
    document.getElementById("rightFluidFifth").style.visibility = "hidden";
    document.getElementById("bottomU").style.visibility = "hidden";

    document.getElementById("rotatePin").style.visibility = "hidden";
    document.getElementById("rotatePinFinal").style.visibility = "hidden";
    document.getElementById("rotatePinSecond").style.visibility = "hidden";
    document.getElementById("rotatePinThird").style.visibility = "hidden";
    document.getElementById("rotatePinForth").style.visibility = "hidden";
    document.getElementById("rotatePinFifth").style.visibility = "hidden";


    document.getElementById("redColor").style.visibility = "hidden";
    //erin
    document.getElementById("obserButton").style.visibility = "visible";
    // document.getElementById("obcanvas").style.visibility = "visible";
    document.getElementById("greenColor").style.visibility = "hidden";
    // document.getElementById("remSelRead").style.visibility = "visible";
    // document.getElementById("remAllRead").style.visibility = "visible";
    // document.getElementById("emailTable").style.visibility = "visible";

    document.getElementById("leftPinkFluidFinal").style.visibility = "hidden";
    document.getElementById("rightPinkFluidFinal").style.visibility = "hidden";
    document.getElementById("leftPinkFluid").style.visibility = "hidden";
    document.getElementById("rightPinkFluid").style.visibility = "hidden";
    document.getElementById("leftPinkFluidSecond").style.visibility = "hidden";
    document.getElementById("rightPinkFluidSecond").style.visibility = "hidden";
    document.getElementById("leftPinkFluidThird").style.visibility = "hidden";
    document.getElementById("rightPinkFluidThird").style.visibility = "hidden";
    document.getElementById("leftPinkFluidForth").style.visibility = "hidden";
    document.getElementById("rightPinkFluidForth").style.visibility = "hidden";
    document.getElementById("leftPinkFluidFifth").style.visibility = "hidden";
    document.getElementById("rightPinkFluidFifth").style.visibility = "hidden";
    document.getElementById("bottomPinkU").style.visibility = "hidden";

    // document.getElementById("observeTable").style.visibility = "visible";
    document.getElementById("setupButton").onclick = function() {
        document.getElementById('overflow').style.visibility = "hidden";
        goBacktoStep2();
    }
}

function goBacktoStep2() {
    document.getElementById("leftFluid").style.height = "37px";
    document.getElementById("leftFluid").style.top = "222px";
    document.getElementById("rightFluid").style.height = "37px";
    document.getElementById("rightFluid").style.top = "222px";
    document.getElementById("rotatePin").style.top = "259px";

    document.getElementById("leftPinkFluid").style.height = "37px";
    document.getElementById("leftPinkFluid").style.top = "222px";
    document.getElementById("rightPinkFluid").style.height = "37px";
    document.getElementById("rightPinkFluid").style.top = "222px";
    document.getElementById("rotatePin").style.top = "259px";

    h1Val = 35.00
    h2Val = 35.00
    h1New = 35.00
    h2New = 35.00
    valOfRatoNew = 0.00;
    valOfRato = 0.00;
    document.getElementById("leftCm").innerText = (h1New);
    document.getElementById("rightCm").innerText = h2New;
    document.getElementById("ratoReadings").innerText = (valOfRatoNew);

    document.getElementById("nextButton").style.visibility = "hidden";
    document.getElementById("nextButton").style.zIndex = -1;
    document.getElementById('nextButton').style.visibility = "hidden";

    document.getElementById("waterFlow").style.visibility = "hidden";
    document.getElementById("waterSteady").style.visibility = "hidden";
    document.getElementById("addtoTableButton").style.visibility = "hidden";

    document.getElementById("waterPourFirst").style.visibility = "hidden";
    document.getElementById("waterPourSecondLongOne").style.visibility = "hidden";


    document.getElementById("experimentID").style.visibility = "hidden";

    document.getElementById("leftFluidFinal").style.visibility = "hidden";
    document.getElementById("rightFluidFinal").style.visibility = "hidden";
    document.getElementById("leftFluid").style.visibility = "hidden";
    document.getElementById("rightFluid").style.visibility = "hidden";
    document.getElementById("leftFluidSecond").style.visibility = "hidden";
    document.getElementById("rightFluidSecond").style.visibility = "hidden";
    document.getElementById("leftFluidThird").style.visibility = "hidden";
    document.getElementById("rightFluidThird").style.visibility = "hidden";
    document.getElementById("leftFluidForth").style.visibility = "hidden";
    document.getElementById("rightFluidForth").style.visibility = "hidden";
    document.getElementById("leftFluidFifth").style.visibility = "hidden";
    document.getElementById("rightFluidFifth").style.visibility = "hidden";
    document.getElementById("bottomU").style.visibility = "hidden";

    document.getElementById("rotatePin").style.visibility = "hidden";
    document.getElementById("rotatePinFinal").style.visibility = "hidden";
    document.getElementById("rotatePinSecond").style.visibility = "hidden";
    document.getElementById("rotatePinThird").style.visibility = "hidden";
    document.getElementById("rotatePinForth").style.visibility = "hidden";
    document.getElementById("rotatePinFifth").style.visibility = "hidden";

    document.getElementById("redColor").style.visibility = "hidden";
    document.getElementById("obserButton").style.visibility = "hidden";

    document.getElementById("leftPinkFluidFinal").style.visibility = "hidden";
    document.getElementById("rightPinkFluidFinal").style.visibility = "hidden";
    document.getElementById("leftPinkFluid").style.visibility = "hidden";
    document.getElementById("rightPinkFluid").style.visibility = "hidden";
    document.getElementById("leftPinkFluidSecond").style.visibility = "hidden";
    document.getElementById("rightPinkFluidSecond").style.visibility = "hidden";
    document.getElementById("leftPinkFluidThird").style.visibility = "hidden";
    document.getElementById("rightPinkFluidThird").style.visibility = "hidden";
    document.getElementById("leftPinkFluidForth").style.visibility = "hidden";
    document.getElementById("rightPinkFluidForth").style.visibility = "hidden";
    document.getElementById("leftPinkFluidFifth").style.visibility = "hidden";
    document.getElementById("rightPinkFluidFifth").style.visibility = "hidden";

    document.getElementById("bottomPinkU").style.visibility = "hidden";


    document.getElementById("observeTable").style.visibility = "hidden";

    simsubscreennum = 3;
    document.getElementById('canvas' + (4)).style.visibility = "hidden";

    document.getElementById('canvas' + (simsubscreennum)).style.visibility = "visible";
    document.getElementById("experimentSetup").style.visibility = "visible";
    document.getElementById('nextButton').style.visibility = "visible";
}


// ============================  EVALUATION PART

var pipeLengthEval = 1;

function setPipeLengthEval() {
    pipeLengthEval = document.getElementById("pipeLengthEval").value;
    console.log(pipeLengthEval);
}

var chosenPipeDiaEval = 0.25;

function setPipeDiaEval() {
    chosenPipeDiaEval = document.getElementById("pipeDiaSelectEval").value;
    console.log(chosenPipeDiaEval);
}

var processFluidEval = "Water"

function setProcessFluidEval() {
    processFluidEval = document.getElementById("processFluidEval").value;
    console.log(processFluidEval);
}

var manoFluidEval = "Carbon tetrachloride"

function setManoFluidEval() {
    manoFluidEval = document.getElementById("manoFluidEval").value;
    console.log(manoFluidEval);
}

// Step 3

var evalSets = 1;

function setEvalSets() {
    evalSets = document.getElementById("evalSets").value;
    console.log(evalSets);

    var table = document.getElementById("configInputTable");

    var rowCount = table.rows.length - 1;
    console.log("Pre count:  ", rowCount);
    if (rowCount > 0) {
        for (var x = 1; x <= rowCount; x++) {
            table.deleteRow(1);
        }
    }

    for (var i = 1; i <= evalSets; i++) {
        var row = table.insertRow(i);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        cell1.innerHTML = `<input name="length" id="inputSet${i}0" style="width:90px" type="number">`;
        cell2.innerHTML = `<input name="length" id="inputSet${i}1" style="width:90px" type="number">`;
        cell3.innerHTML = `<input name="length" id="inputSet${i}2" style="width:90px" type="number">`;
        cell4.innerHTML = `<input name="length" id="inputSet${i}3" style="width:90px" type="number">`;
    }

}

var lpm, pres, reyn, fric;
var den, diaMeter, lpmConvVelocity, visco, calculatedReyn, denMano, presInMeter, hf, calculatedFricFact;

function evaluateConfig() {
    var table = document.getElementById("configInputTable");
    var resultTable = document.getElementById("configResultTable");

    var rowCountPost = table.rows.length - 1;

    console.log("Total rows: ", rowCountPost);
    for (var z = 1; z <= rowCountPost; z++) {
        var out = document.getElementById("showResRey");
        out.innerText = "Calculating..."

        // taking values from columns
        lpm = document.getElementById("inputSet" + z + "0").value;
        pres = document.getElementById("inputSet" + z + "1").value;
        reyn = document.getElementById("inputSet" + z + "2").value;
        fric = document.getElementById("inputSet" + z + "3").value;

        presInMeter = pres / 100;
        if (processFluidEval == "Water") {
            den = 1000;
            // visco = 0.89;
            visco = 0.001;
        } else if (processFluidEval == "Kerosene") {
            den = 820;
            // visco = 0.00164;
            visco = 0.00215;
        }
        diaMeter = chosenPipeDiaEval / 39.37; // convert inch to meter
        console.log("Diameter is inch: ", chosenPipeDiaEval);
        console.log("Diameter of the pipe in meter is: ", diaMeter);
        console.log("Radius is: ", (diaMeter / 2));
        lpmConvVelocity = (lpm * 0.000017) / (3.14 * (diaMeter / 2) * (diaMeter / 2)); // convert lpm to m3/s              V E L O C I T Y
        console.log("Velocity value is: ", lpmConvVelocity);
        // if(manoFluidEval == "Carbon tetrachloride"){
        // 	visco = 0.901;
        // }
        // else if(manoFluidEval == "Mercury"){
        // 	visco = 1.55;
        // }
        console.log("Viscosity value of " + processFluid + " at 20 deg C is: ", visco);
        console.log("Density of " + processFluidEval + " fluid is: ", den);
        // Calculate Reynold's
        calculatedReyn = ((den * diaMeter * lpmConvVelocity) / visco);
        calculatedReyn = calculatedReyn.toFixed(5); // ======    toFixed(5)
        console.log("Calculated Reynold's value is: ", calculatedReyn);


        var outFric = document.getElementById("showResInFric");

        // ========================================================= Friction Factor calculation.
        if (manoFluidEval == "Carbon tetrachloride") {
            denMano = 1600;
        } else if (manoFluidEval == "Mercury") {
            denMano = 13600;
        }
        console.log("Manometric density value of " + manoFluidEval + " is: ", denMano);

        // calculate hf value		
        hf = (((denMano - den) * presInMeter) / den);
        console.log("Calculated hf value's: ", hf);

        console.log("Length of pipe is: ", pipeLengthEval);
        // calculate FF
        calculatedFricFact = ((2 * 9.8 * diaMeter * hf) / (4 * pipeLengthEval * lpmConvVelocity * lpmConvVelocity));
        calculatedFricFact = calculatedFricFact * 10000;
        calculatedFricFact = calculatedFricFact.toFixed(5); //========     toFixed(5)
        console.log("Calculated F F value is: ", calculatedFricFact);

        // Compare Reynold's and Friction Factor.
        console.log("The rey value taken in is: ", reyn);
        setTimeout(() => {
            // if the count of rows in result table is more than 3, increase the top of both of the result showing paragraph.
            var resultTable = document.getElementById("configResultTable");
            var rowCountPost = resultTable.rows.length - 1;
            // ======================================================= VERIFICATION MESSAGE
            // if(rowCountPost > 3){
            // 	out.style.top = "250px";
            // 	outFric.style.top = "280px";
            // }

            // if(calculatedReyn == reyn){
            // 	out.innerText = "Reynold's value is correct!";
            // 	out.style.color = "green";

            // }
            // else{
            // 	out.innerText = "Reynold's value is incorrect!";
            // 	out.style.color = "red";
            // }
            // if(calculatedFricFact == fric){
            // 	outFric.innerText = "Fraction Factot value is correct!";
            // 	outFric.style.color = "green";

            // }
            // else{
            // 	outFric.innerText = "Fraction Factot value is incorrect!";
            // 	outFric.style.color = "red";
            // }

            //   -----------------------       DELETING ALL ROWS AND CHANGING THE NUMBER OF SETS BACK TO 0.
            var table = document.getElementById("configInputTable");
            table.style.color = "#fff";
            var rowCounttt = table.rows.length - 1;
            console.log("Count of rows after showing result is:  ", rowCounttt);
            document.getElementById("evalSets").value = 0;
            if (rowCounttt > 0) {
                for (var xx = 1; xx <= rowCounttt; xx++) {
                    table.deleteRow(1);
                }
            }
            out.innerText = "";
        }, 300);
        setTimeout(() => {
            out.innerText = "";
            outFric.innerText = "";
        }, 5000);

        // Add to result table.
        var row = resultTable.insertRow(z);
        row.style.color = "#fff";
        var reyCell = row.insertCell(0);
        var fricCell = row.insertCell(1);
        reyCell.innerHTML = calculatedReyn;
        fricCell.innerHTML = calculatedFricFact;
    }
}

