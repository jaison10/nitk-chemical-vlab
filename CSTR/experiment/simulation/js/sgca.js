//on click of next button
var mpointer = 0;
var repeat = 0;
var a, p, lastp, n, b, q, flag = 0,
    avg, average;


document.addEventListener('DOMContentLoaded', () => {
    // document.getElementById("nextButton").style.visibility = "hidden";
    setTimeout(() => {
        var start = document.getElementById("start");
        start.innerText = "Reaction Kinetic studies in mixed flow reactor";
        start.style.fontSize = "30px";
        start.classList.add("content-shine");
        start.style.left = "410px";
        start.style.top = "170px";
        document.getElementById("landingPageButton").style.visibility = "visible";
        document.getElementById("landingPageButton").style.cursor = "pointer";
        document.getElementById("landingPageButton").onclick = function() {
            gotoPage1();
        }
    }, 3000);
});

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
    // document.getElementById('nextButton').style.visibility = "hidden";
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
var dataOn = 0;

function magic() {

    if (simsubscreennum == 1) {
        document.getElementById("observeTable").style.visibility = "hidden";
        // this is for STEP1
        // document.getElementById("completeSetUp").style.visibility = "hidden";
        // document.getElementById("human").style.visibility = "hidden";
        // document.getElementById('nextButton').style.visibility="hidden";
    } else if (simsubscreennum == 2) {
        document.getElementById("observeTable").style.visibility = "hidden";
        // document.getElementById("waterPourSecondLongOne").style.visibility = "hidden";
        // document.getElementById("waterPourFirst").style.visibility = "hidden";
        // document.getElementById("waterFlow").style.visibility = "hidden";
        if (chosenActivity == 1) {
            console.log("One has chosen!");
            document.getElementById("experimentSetup").style.visibility = "hidden";
            document.getElementById("labelImage").style.visibility = "visible";
            // document.getElementById('nextButton').style.visibility = "hidden";
            document.getElementById("configExp").style.visibility = "hidden";
        } else {
            console.log("2 has chosen");
            document.getElementById("step2Heading").innerText = "Choose"
            document.getElementById("configExp").style.visibility = "visible";
            // document.getElementById('nextButton').style.visibility = "hidden";
        }
    } else if (simsubscreennum == 3) {
        document.getElementById("observeTable").style.visibility = "hidden";
        // document.getElementById("waterPourSecondLongOne").style.visibility = "hidden";
        // document.getElementById("waterPourFirst").style.visibility = "hidden";
        // document.getElementById("waterFlow").style.visibility = "hidden";
        if (chosenActivity == 1) {
            document.getElementById("labelImage").style.visibility = "hidden";
            document.getElementById("experimentSetup").style.visibility = "visible";
            // document.getElementById('nextButton').style.visibility = "hidden";
            document.getElementById("evaluatePart").style.visibility = "hidden";
        } else {
            console.log("2 has chosen");
            // document.getElementById("step3Heading").innerText = "Evaluation!"
            document.getElementById("configExp").style.visibility = "hidden";
            // document.getElementById('nextButton').style.visibility = "hidden";

            document.getElementById("evaluatePart").style.visibility = "visible";
        }

    } else if (simsubscreennum == 4) {
        document.getElementById("observeTable").style.visibility = "hidden";
        // document.getElementById("waterPourSecondLongOne").style.visibility = "hidden";
        // document.getElementById("waterPourFirst").style.visibility = "hidden";
        // document.getElementById("waterFlow").style.visibility = "hidden";
        if (chosenActivity == 1) {
            // document.getElementById("waterSteady").style.visibility = "visible";

            // document.getElementById("infoAboutWhatToDo").innerText = "Click on Green button to start the motor.";
            // document.getElementById("infoAboutWhatToDo").style.color = "white";
            // document.getElementById('nextButton').style.visibility = "hidden";

            document.getElementById("step4Heading").innerText = "Experiment";
            // document.getElementById("ratoReadings").innerText = "0.00";
            // if (manoFluid == "Carbon tetrachloride") {
            //     document.getElementById("bottomU").style.visibility = "hidden";
            //     document.getElementById("leftFluid").style.visibility = "hidden";
            //     document.getElementById("rightFluid").style.visibility = "hidden";
            //     document.getElementById("bottomPinkU").style.visibility = "visible";
            //     document.getElementById("leftPinkFluid").style.visibility = "visible";
            //     document.getElementById("rightPinkFluid").style.visibility = "visible";
            // } else if (manoFluid == "Mercury") {
            //     document.getElementById("bottomU").style.visibility = "visible";
            //     document.getElementById("leftFluid").style.visibility = "visible";
            //     document.getElementById("rightFluid").style.visibility = "visible";

            //     document.getElementById("bottomPinkU").style.visibility = "hidden";
            //     document.getElementById("leftPinkFluid").style.visibility = "hidden";
            //     document.getElementById("rightPinkFluid").style.visibility = "hidden";
            // }

            numberOfClicks = 0;
            h1Val = 35.00
            h2Val = 35.00
            valOfRato = 0.00;

            // document.getElementById("rotatePinSecond").style.visibility = "hidden";
            // document.getElementById("rotatePinThird").style.visibility = "hidden";
            // document.getElementById("rotatePinForth").style.visibility = "hidden";
            // document.getElementById("rotatePinFifth").style.visibility = "hidden";
            // document.getElementById("rotatePinFinal").style.visibility = "hidden";
            // document.getElementById("rotatePin").style.visibility = "visible";

            document.getElementById("obserButton").onclick = "";
            document.getElementById("goBackButton").onclick = function() {
                if (dataOn == 0) {

                    document.getElementById('displayExpValues').style.visibility = "visible";
                    dataOn = 1;
                    console.log(dataOn);
                } else if (dataOn == 1) {
                    document.getElementById('displayExpValues').style.visibility = "hidden";
                    dataOn = 0;
                    console.log(dataOn);
                }

            }
            document.getElementById("experimentSetup").style.visibility = "hidden";
            // document.getElementById('nextButton').style.visibility = "hidden";

            document.getElementById("experimentID").style.visibility = "visible";
            document.getElementById("obserButton").style.visibility = "visible";
            document.getElementById("infoAboutWhatToDo").innerText = "Rotate the left gatewall to set flowrate of NaOH."
            var rotateElement = document.getElementById("gatewayRotate1");
            new Propeller(rotateElement, {
                inertia: 0,
                speed: 0,
                onRotate: function() {
                    console.log(this.angle);
                    fluidMoveAndPinMove(this.angle, 1);
                }
            });

            // function onRotate() {
            //     console.log(this.angle);
            // fluidMoveAndPinMove(this.angle, 1);

            //     console.log("deg", this.degree);
            // }
            var rotateElement2 = document.getElementById("gatewayRotate2");
            console.log("listen up yo" + rotateElement2);
            new Propeller(rotateElement2, {
                inertia: 0,
                speed: 0,
                onRotate: function() {
                    console.log(this.angle);
                    fluidMoveAndPinMove(this.angle, 2);
                }
            });
            console.log("before Rotate1");

            // function onRotate2() {
            //     console.log("Rotate1");

            //     console.log(this.angle);


            //     console.log("deg", this.degree);
            // }
            // document.getElementById("greenColor").style.cursor = "pointer";
            // document.getElementById("greenColor").style.visibility = "visible";

            // document.getElementById("greenColor").onclick = function() {
            //     document.getElementById("greenColor").style.visibility = "hidden";
            //     document.getElementById("redColor").style.visibility = "visible";

            // Change the NOTE content.
            // document.getElementById("infoAboutWhatToDo").innerText = "Click on Gatewall to rotate it."

            // water starts flowing.
            // document.getElementById("waterPourFirst").style.visibility = "visible";
            // changing the steady water to flowing one.
            // document.getElementById("waterSteady").style.visibility = "hidden";
            // document.getElementById("waterFlow").style.visibility = "visible";

            // Show the water flow.
            // document.getElementById("gatewayRotate").style.cursor = "pointer";
            // document.getElementById("gatewayRotate").propeller({
            // 	inertia: 0, speed: 0
            // });
            // var rotateElement = document.getElementById("gatewayRotate");
            // new Propeller(rotateElement, {
            //     inertia: 0,
            //     speed: 0,
            //     onRotate
            // });

            // function onRotate() {
            //     console.log(this.angle);
            //     fluidMoveAndPinMove(this.angle);

            //     // console.log("deg", this.degree);
            // }

        } else {
            console.log("2 has chosen");
        }

    } else if (simsubscreennum == 6) {
        if (chosenActivity == 1) {
            // document.getElementById("waterPourSecondLongOne").style.visibility = "hidden";
            // document.getElementById("waterPourFirst").style.visibility = "hidden";
            // document.getElementById("waterFlow").style.visibility = "hidden";

            document.getElementById("observeTable").style.visibility = "hidden";
            document.getElementById("experimentSetup").style.visibility = "hidden";
            document.getElementById("labelImage").style.visibility = "hidden";
            // document.getElementById('nextButton').style.visibility = "hidden";
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
        document.getElementById("buttonsList").style.visibility = "visible";
        document.getElementById("demoButton").style.cursor = "pointer";
        // document.getElementById("labelButton").style.cursor = "pointer";
        document.getElementById("demoButton").onclick = function() {
            document.getElementById('displayExpValues').style.visibility = "hidden";
            goto6th();
        }
    } else if (chosenActivity == 2) {
        document.getElementById("buttonsListEval").style.visibility = "visible";
        document.getElementById("demoButtonEval").style.cursor = "pointer";
        // document.getElementById("labelButton").style.cursor = "pointer";
        document.getElementById("demoButtonEval").onclick = function() {
            document.getElementById('displayExpValues').style.visibility = "hidden";

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
        document.getElementById("demoOne").style.visibility = "visible";
        document.getElementById("labelButton").style.cursor = "pointer";
        document.getElementById("labelButton").onclick = function() {
            document.getElementById('displayExpValues').style.visibility = "hidden";

            gotoLabel();
        }
    } else if (chosenActivity == 2) {
        document.getElementById("demoTwo").style.visibility = "visible";
        document.getElementById("labelButtonEval").style.cursor = "pointer";
        document.getElementById("labelButtonEval").onclick = function() {
            document.getElementById('displayExpValues').style.visibility = "hidden";

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
        document.getElementById("demoButton").onclick = function() {
            document.getElementById('displayExpValues').style.visibility = "hidden";

            goto6th();
        }
        document.getElementById("setupButton").style.cursor = "pointer";
        document.getElementById("setupButton").onclick = function() {
            document.getElementById('displayExpValues').style.visibility = "hidden";

            gotoSetup();
        }
    } else if (chosenActivity == 2) {
        document.getElementById("demoButtonEval").onclick = function() {
            document.getElementById('displayExpValues').style.visibility = "hidden";

            console.log("Pressed demo");
            // document.getElementById("configExp").style.visibility = "hidden";
            goto6th();
        }
        document.getElementById("setupButtonEval").style.cursor = "pointer";
        document.getElementById("setupButtonEval").onclick = function() {
            document.getElementById('displayExpValues').style.visibility = "hidden";

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
        document.getElementById('displayExpValues').style.visibility = "hidden";

        document.getElementById('overflow').style.visibility = "hidden";
        gotoExp();
    }
    if (chosenActivity == 2) {
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

function gotoExp() {
    console.log("Experiment part.");
    for (temp = 0; temp <= 6; temp++) {
        document.getElementById('canvas' + temp).style.visibility = "hidden";
    }
    simsubscreennum = 4;
    document.getElementById('canvas' + simsubscreennum).style.visibility = "visible";
    magic();

    document.getElementById("setupButton").onclick = function() {
        document.getElementById('displayExpValues').style.visibility = "hidden";

        document.getElementById('overflow').style.visibility = "hidden";

        console.log("clicked for setup");
        // document.getElementById("greenColor").style.visibility = "hidden";
        // document.getElementById("nextButton").style.visibility = "hidden";
        // document.getElementById("nextButton").style.zIndex = -1;

        goBacktoStep2();
    }
    document.getElementById("labelButton").onclick = function() {
        document.getElementById('displayExpValues').style.visibility = "hidden";

        hideAllExperimentParts();
        gotoLabel();
    }
    document.getElementById("demoButton").onclick = function() {
        document.getElementById('displayExpValues').style.visibility = "hidden";

        hideAllExperimentParts();
        goto6th();
    }
}

function hideAllExperimentParts() {
    document.getElementById('displayExpValues').style.visibility = "hidden";

    document.getElementById('overflow').style.visibility = "hidden";
    document.getElementById("experimentID").style.visibility = "hidden";
    // document.getElementById("waterSteady").style.visibility = "hidden";
    document.getElementById("obserButton").style.visibility = "hidden";
    // document.getElementById("bottomPinkU").style.visibility = "hidden";
    // document.getElementById("leftFluidFinal").style.visibility = "hidden";
    // document.getElementById("rightFluidFinal").style.visibility = "hidden";
    // document.getElementById("leftFluid").style.visibility = "hidden";
    // document.getElementById("rightFluid").style.visibility = "hidden";
    // document.getElementById("leftFluidSecond").style.visibility = "hidden";
    // document.getElementById("rightFluidSecond").style.visibility = "hidden";
    // document.getElementById("leftFluidThird").style.visibility = "hidden";
    // document.getElementById("rightFluidThird").style.visibility = "hidden";
    // document.getElementById("leftFluidForth").style.visibility = "hidden";
    // document.getElementById("rightFluidForth").style.visibility = "hidden";
    // document.getElementById("leftFluidFifth").style.visibility = "hidden";
    // document.getElementById("rightFluidFifth").style.visibility = "hidden";
    // document.getElementById("bottomU").style.visibility = "hidden";

    // document.getElementById("rotatePin").style.visibility = "hidden";
    // document.getElementById("rotatePinFinal").style.visibility = "hidden";
    // document.getElementById("rotatePinSecond").style.visibility = "hidden";
    // document.getElementById("rotatePinThird").style.visibility = "hidden";
    // document.getElementById("rotatePinForth").style.visibility = "hidden";
    // document.getElementById("rotatePinFifth").style.visibility = "hidden";

    // document.getElementById("greenColor").style.visibility = "hidden";
    // document.getElementById("redColor").style.visibility = "hidden";
    document.getElementById("obserButton").style.visibility = "hidden";

    // document.getElementById("leftPinkFluidFinal").style.visibility = "hidden";
    // document.getElementById("rightPinkFluidFinal").style.visibility = "hidden";
    // document.getElementById("leftPinkFluid").style.visibility = "hidden";
    // document.getElementById("rightPinkFluid").style.visibility = "hidden";
    // document.getElementById("leftPinkFluidSecond").style.visibility = "hidden";
    // document.getElementById("rightPinkFluidSecond").style.visibility = "hidden";
    // document.getElementById("leftPinkFluidThird").style.visibility = "hidden";
    // document.getElementById("rightPinkFluidThird").style.visibility = "hidden";
    // document.getElementById("leftPinkFluidForth").style.visibility = "hidden";
    // document.getElementById("rightPinkFluidForth").style.visibility = "hidden";
    // document.getElementById("leftPinkFluidFifth").style.visibility = "hidden";
    // document.getElementById("rightPinkFluidFifth").style.visibility = "hidden";
    // document.getElementById("bottomPinkU").style.visibility = "hidden";
}

// ADDED By Jaison.
var chosenActivity

function selectAction(n) {
    chosenActivity = n
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

var processFluid = "Water"

function setProcessFluid() {
    processFluid = document.getElementById("processFluid").value;
    console.log(processFluid);
}

var manoFluid = "Carbon tetrachloride"

function setManoFluid() {
    manoFluid = document.getElementById("manoFluid").value;
    console.log(manoFluid);
}

var reactorVolume = 1;

function setReactorVolume() {
    reactorVolume = document.getElementById("reactorVolume").value * 1000;
    document.getElementById('reactVol').innerText = reactorVolume + " Liter(s)";
    console.log(reactorVolume);

}

var initialMRR = 1;

function setInitialMRR() {
    initialMRR = document.getElementById("initialMRR").value;
    console.log(initialMRR);
}

var reactionTemp = 30;

function setReactorTemp() {
    reactionTemp = document.getElementById("reactionTemp").value;
    document.getElementById('reactTemp').innerText = reactionTemp + " degree Celsius";
    console.log(reactionTemp);
}
var acetConcen = 0.020;
var ohConcen = 0.020;
// slider
function rangeSlideEthyl(value) {


    acetConcen = document.getElementById('acConc').value;
    document.getElementById('rangeValueEthyl').innerHTML = acetConcen + " M";
    document.getElementById('acetConc').innerHTML = acetConcen + " M";
    console.log(acetConcen);
}

function rangeSlideNaOH(value) {
    ohConcen = document.getElementById('ohConc').value;
    document.getElementById('rangeValueNaOH').innerHTML = ohConcen + " M";
    document.getElementById('ohConce').innerHTML = ohConcen + " M";
    console.log(ohConcen);
}

// Values from experimental page of experiment PART, not the evaluation.:
var firstML = 1;

function setMLone() {
    firstML = document.getElementById("firstMLValue").value;
    console.log(firstML);
}

var secondML = 1;

function setMLtwo() {
    firstML = document.getElementById("secondMLValue").value;
    console.log(firstML);
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

function fluidMoveAndPinMove(angle, n) {
    h1Val = 0.00
    h2Val = 0.00
    valOfRato1 = 0.00;
    valOfRato2 = 0.00;
    h1Final = 0.00;
    valOfRatoNew1 = 0.00;
    valOfRatoNew2 = 0.00;
    h2Final = 0.00;
    console.log("Gatewall:  " + n);
    console.log("yo here we are");

    // document.getElementById("waterPourSecondLongOne").style.visibility = "visible";
    if (n == 1) {
        document.getElementById("gatewayRotate1").style.cursor = "auto";
        valOfRato1 = (356 - angle) * 0.0983;
        valOfRatoNew1 = valOfRato1.toFixed(2);
        console.log("Val of Rato is ", valOfRatoNew1);
        // if (valOfRatoNew >= 39) {
        //     // h1Final = 38;
        //     // h2Final = 32;
        //     valOfRatoNew = 40;
        //     console.log("Overflow condition");
        //     document.getElementById('overflow').style.visibility = "visible";

        // }
        document.getElementById("leftRota").innerText = (valOfRatoNew1) + "LPH";
    }
    if (n == 2) {
        console.log("yo here we are");
        document.getElementById("gatewayRotate2").style.cursor = "auto";
        valOfRato2 = (356 - angle) * 0.0983;
        valOfRatoNew2 = valOfRato2.toFixed(2);
        console.log("Val of Rato is ", valOfRatoNew2);
        // if (valOfRatoNew >= 39) {
        //     // h1Final = 38;
        //     // h2Final = 32;
        //     valOfRatoNew = 40;
        //     console.log("Overflow condition");
        //     document.getElementById('overflow').style.visibility = "visible";

        // }
        document.getElementById("rightRota").innerText = (valOfRatoNew2) + "LPH";
    }
    // document.getElementById("gatewayRotate2").style.cursor = "auto";

    // document.getElementById("addtoTableButton").style.visibility = "visible";


    // 
    document.getElementById("addtoTableButton").onclick = function() {
        document.getElementById("addtoTableButton").style.visibility = "hidden";
        var table = document.getElementById("observeTable");
        table.style.color = "#fff";
        // var n = 1;
        var row = table.insertRow(1);
        // row.id="row"+n;n++;
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
        gotoObservation();
    }
}



function gotoObservation() {
    console.log("go to observ.");
    // document.getElementById("waterFlow").style.visibility = "hidden";
    // document.getElementById("waterSteady").style.visibility = "hidden";
    // document.getElementById("addtoTableButton").style.visibility = "hidden";

    // document.getElementById("waterPourFirst").style.visibility = "hidden";
    // document.getElementById("waterPourSecondLongOne").style.visibility = "hidden";

    document.getElementById("step4Heading").innerText = "Observations";
    document.getElementById("experimentID").style.visibility = "hidden";

    // document.getElementById("leftFluidFinal").style.visibility = "hidden";
    // document.getElementById("rightFluidFinal").style.visibility = "hidden";
    // document.getElementById("leftFluid").style.visibility = "hidden";
    // document.getElementById("rightFluid").style.visibility = "hidden";
    // document.getElementById("leftFluidSecond").style.visibility = "hidden";
    // document.getElementById("rightFluidSecond").style.visibility = "hidden";
    // document.getElementById("leftFluidThird").style.visibility = "hidden";
    // document.getElementById("rightFluidThird").style.visibility = "hidden";
    // document.getElementById("leftFluidForth").style.visibility = "hidden";
    // document.getElementById("rightFluidForth").style.visibility = "hidden";
    // document.getElementById("leftFluidFifth").style.visibility = "hidden";
    // document.getElementById("rightFluidFifth").style.visibility = "hidden";
    // document.getElementById("bottomU").style.visibility = "hidden";

    // document.getElementById("rotatePin").style.visibility = "hidden";
    // document.getElementById("rotatePinFinal").style.visibility = "hidden";
    // document.getElementById("rotatePinSecond").style.visibility = "hidden";
    // document.getElementById("rotatePinThird").style.visibility = "hidden";
    // document.getElementById("rotatePinForth").style.visibility = "hidden";
    // document.getElementById("rotatePinFifth").style.visibility = "hidden";


    // document.getElementById("redColor").style.visibility = "hidden";
    document.getElementById("obserButton").style.visibility = "hidden";

    // document.getElementById("leftPinkFluidFinal").style.visibility = "hidden";
    // document.getElementById("rightPinkFluidFinal").style.visibility = "hidden";
    // document.getElementById("leftPinkFluid").style.visibility = "hidden";
    // document.getElementById("rightPinkFluid").style.visibility = "hidden";
    // document.getElementById("leftPinkFluidSecond").style.visibility = "hidden";
    // document.getElementById("rightPinkFluidSecond").style.visibility = "hidden";
    // document.getElementById("leftPinkFluidThird").style.visibility = "hidden";
    // document.getElementById("rightPinkFluidThird").style.visibility = "hidden";
    // document.getElementById("leftPinkFluidForth").style.visibility = "hidden";
    // document.getElementById("rightPinkFluidForth").style.visibility = "hidden";
    // document.getElementById("leftPinkFluidFifth").style.visibility = "hidden";
    // document.getElementById("rightPinkFluidFifth").style.visibility = "hidden";
    // document.getElementById("bottomPinkU").style.visibility = "hidden";

    document.getElementById("observeTable").style.visibility = "visible";
    document.getElementById("setupButton").onclick = function() {
        document.getElementById('displayExpValues').style.visibility = "hidden";

        document.getElementById('overflow').style.visibility = "hidden";
        goBacktoStep2();
    }
}

function goBacktoStep2() {
    // document.getElementById("leftFluid").style.height = "37px";
    // document.getElementById("leftFluid").style.top = "222px";
    // document.getElementById("rightFluid").style.height = "37px";
    // document.getElementById("rightFluid").style.top = "222px";
    // document.getElementById("rotatePin").style.top = "259px";

    // document.getElementById("leftPinkFluid").style.height = "37px";
    // document.getElementById("leftPinkFluid").style.top = "222px";
    // document.getElementById("rightPinkFluid").style.height = "37px";
    // document.getElementById("rightPinkFluid").style.top = "222px";
    // document.getElementById("rotatePin").style.top = "259px";

    h1Val = 35.00
    h2Val = 35.00
    h1New = 35.00
    h2New = 35.00
    valOfRatoNew = 0.00;
    valOfRato = 0.00;
    // document.getElementById("leftCm").innerText = (h1New);
    // document.getElementById("rightCm").innerText = h2New;
    // document.getElementById("ratoReadings").innerText = (valOfRatoNew);

    // document.getElementById("nextButton").style.visibility = "hidden";
    // document.getElementById("nextButton").style.zIndex = -1;
    // document.getElementById('nextButton').style.visibility = "hidden";

    // document.getElementById("waterFlow").style.visibility = "hidden";
    // document.getElementById("waterSteady").style.visibility = "hidden";
    // document.getElementById("addtoTableButton").style.visibility = "hidden";

    // document.getElementById("waterPourFirst").style.visibility = "hidden";
    // document.getElementById("waterPourSecondLongOne").style.visibility = "hidden";


    document.getElementById("experimentID").style.visibility = "hidden";

    // document.getElementById("leftFluidFinal").style.visibility = "hidden";
    // document.getElementById("rightFluidFinal").style.visibility = "hidden";
    // document.getElementById("leftFluid").style.visibility = "hidden";
    // document.getElementById("rightFluid").style.visibility = "hidden";
    // document.getElementById("leftFluidSecond").style.visibility = "hidden";
    // document.getElementById("rightFluidSecond").style.visibility = "hidden";
    // document.getElementById("leftFluidThird").style.visibility = "hidden";
    // document.getElementById("rightFluidThird").style.visibility = "hidden";
    // document.getElementById("leftFluidForth").style.visibility = "hidden";
    // document.getElementById("rightFluidForth").style.visibility = "hidden";
    // document.getElementById("leftFluidFifth").style.visibility = "hidden";
    // document.getElementById("rightFluidFifth").style.visibility = "hidden";
    // document.getElementById("bottomU").style.visibility = "hidden";

    // document.getElementById("rotatePin").style.visibility = "hidden";
    // document.getElementById("rotatePinFinal").style.visibility = "hidden";
    // document.getElementById("rotatePinSecond").style.visibility = "hidden";
    // document.getElementById("rotatePinThird").style.visibility = "hidden";
    // document.getElementById("rotatePinForth").style.visibility = "hidden";
    // document.getElementById("rotatePinFifth").style.visibility = "hidden";

    // document.getElementById("redColor").style.visibility = "hidden";
    document.getElementById("obserButton").style.visibility = "hidden";

    // document.getElementById("leftPinkFluidFinal").style.visibility = "hidden";
    // document.getElementById("rightPinkFluidFinal").style.visibility = "hidden";
    // document.getElementById("leftPinkFluid").style.visibility = "hidden";
    // document.getElementById("rightPinkFluid").style.visibility = "hidden";
    // document.getElementById("leftPinkFluidSecond").style.visibility = "hidden";
    // document.getElementById("rightPinkFluidSecond").style.visibility = "hidden";
    // document.getElementById("leftPinkFluidThird").style.visibility = "hidden";
    // document.getElementById("rightPinkFluidThird").style.visibility = "hidden";
    // document.getElementById("leftPinkFluidForth").style.visibility = "hidden";
    // document.getElementById("rightPinkFluidForth").style.visibility = "hidden";
    // document.getElementById("leftPinkFluidFifth").style.visibility = "hidden";
    // document.getElementById("rightPinkFluidFifth").style.visibility = "hidden";

    // document.getElementById("bottomPinkU").style.visibility = "hidden";


    document.getElementById("observeTable").style.visibility = "hidden";

    simsubscreennum = 3;
    document.getElementById('canvas' + (4)).style.visibility = "hidden";

    document.getElementById('canvas' + (simsubscreennum)).style.visibility = "visible";
    document.getElementById("experimentSetup").style.visibility = "visible";
    // document.getElementById('nextButton').style.visibility = "visible";
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