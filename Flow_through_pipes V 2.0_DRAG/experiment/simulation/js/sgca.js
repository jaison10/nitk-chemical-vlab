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
        document.getElementById("buttonsList").style.visibility = "visible";
        document.getElementById("demoButton").style.cursor = "pointer";
        // document.getElementById("labelButton").style.cursor = "pointer";
        document.getElementById("demoButton").onclick = function() {
            goto6th();
        }
    } else if (chosenActivity == 2) {
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
        document.getElementById("demoOne").style.visibility = "visible";
        document.getElementById("labelButton").style.cursor = "pointer";
        document.getElementById("labelButton").onclick = function() {
            gotoLabel();
        }
    } else if (chosenActivity == 2) {
        document.getElementById("demoTwo").style.visibility = "visible";
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
        document.getElementById("demoButton").onclick = function() {
            goto6th();
        }
        document.getElementById("setupButton").style.cursor = "pointer";
        document.getElementById("setupButton").onclick = function() {
            gotoSetup();
        }
    } else if (chosenActivity == 2) {
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
        console.log("clicked for setup");
        document.getElementById("greenColor").style.visibility = "hidden";
        document.getElementById("nextButton").style.visibility = "hidden";
        document.getElementById("nextButton").style.zIndex = -1;

        goBacktoStep2();
    }
    document.getElementById("labelButton").onclick = function() {
        hideAllExperimentParts();
        gotoLabel();
    }
    document.getElementById("demoButton").onclick = function() {
        hideAllExperimentParts();
        goto6th();
    }
}

function hideAllExperimentParts() {
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

var x = 0;
var numberOfClicks = 0;
var h1Val = 35.00
var h2Val = 35.00
var valOfRato = 0.00;

function fluidMoveAndPinMove(angle) {
    h1Val = 35.00
    h2Val = 35.00
    valOfRato = 0.00;
    document.getElementById("waterPourSecondLongOne").style.visibility = "visible";
    document.getElementById("gatewayRotate").style.cursor = "auto";
    // console.log("clicked");
    // document.getElementById("gatewayRotate").onclick = "";

    if (processFluid == "Water" && manoFluid == "Mercury") {
        numberOfClicks += 1;

        if (numberOfClicks == 1) {
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

                valOfRato = valOfRato + 0.539;
                valOfRatoNew = valOfRato.toFixed(2);

                document.getElementById("leftCm").innerText = h1New;
                document.getElementById("rightCm").innerText = h2New;
                document.getElementById("ratoReadings").innerText = valOfRatoNew;
                console.log(h1Val);
                if (h1Val == 42.00) {
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
                    document.getElementById("gatewayRotate").onclick = function() {
                        fluidMoveAndPinMove();
                    }
                }
                document.getElementById("addtoTableButton").onclick = function() {
                    var table = document.getElementById("observeTable");
                    table.style.border = "solid 2px #fff";
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
                    cell4.innerHTML = h1New;
                    cell5.innerHTML = h2New;
                    document.getElementById("addtoTableButton").style.visibility = "hidden";
                }
                document.getElementById("obserButton").onclick = function() {
                    gotoObservation();
                }
                document.getElementById("goBackButton").onclick = function() {
                    goBacktoStep2();
                }

            }, 28.57);
        }

        if (numberOfClicks == 2) {
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

                valOfRato = valOfRato + 0.262;
                valOfRatoNew = valOfRato.toFixed(2);

                document.getElementById("leftCm").innerText = h1New;
                document.getElementById("rightCm").innerText = h2New;
                document.getElementById("ratoReadings").innerText = valOfRatoNew;
                console.log(h1Val);
                if (h1Val == 49.00) {
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
                    document.getElementById("gatewayRotate").onclick = function() {
                        fluidMoveAndPinMove();
                    }
                }

                document.getElementById("addtoTableButton").onclick = function() {
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
                    cell4.innerHTML = h1New;
                    cell5.innerHTML = h2New;
                    document.getElementById("addtoTableButton").style.visibility = "hidden";
                }
                document.getElementById("obserButton").onclick = function() {
                    gotoObservation();
                }
                document.getElementById("goBackButton").onclick = function() {
                    goBacktoStep2();
                }

            }, 28.57);
        }

        if (numberOfClicks == 3) {
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

                valOfRato = valOfRato + 0.208;
                valOfRatoNew = valOfRato.toFixed(2);

                document.getElementById("leftCm").innerText = h1New;
                document.getElementById("rightCm").innerText = h2New;
                document.getElementById("ratoReadings").innerText = valOfRatoNew;
                console.log(h1Val);
                if (h1Val == 56.00) {
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
                    document.getElementById("gatewayRotate").onclick = function() {
                        fluidMoveAndPinMove();
                    }
                }

                document.getElementById("addtoTableButton").onclick = function() {
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
                    cell4.innerHTML = h1New;
                    cell5.innerHTML = h2New;
                    document.getElementById("addtoTableButton").style.visibility = "hidden";
                }
                document.getElementById("obserButton").onclick = function() {
                    gotoObservation();
                }
                document.getElementById("goBackButton").onclick = function() {
                    goBacktoStep2();
                }

            }, 28.57);
        }

        if (numberOfClicks == 4) {
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

                valOfRato = valOfRato + 0.1813;
                valOfRatoNew = valOfRato.toFixed(2);

                document.getElementById("leftCm").innerText = h1New;
                document.getElementById("rightCm").innerText = h2New;
                document.getElementById("ratoReadings").innerText = valOfRatoNew;
                console.log(h1Val);
                if (h1Val == 63.00) {
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
                    document.getElementById("gatewayRotate").onclick = function() {
                        fluidMoveAndPinMove();
                    }
                }

                document.getElementById("addtoTableButton").onclick = function() {
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
                    cell4.innerHTML = h1New;
                    cell5.innerHTML = h2New;
                    document.getElementById("addtoTableButton").style.visibility = "hidden";
                }
                document.getElementById("obserButton").onclick = function() {
                    gotoObservation();
                }
                document.getElementById("goBackButton").onclick = function() {
                    goBacktoStep2();
                }

            }, 28.57);
        }

        if (numberOfClicks == 5) {
            document.getElementById("infoAboutWhatToDo").innerText = "";

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

                valOfRato = valOfRato + 0.164;
                valOfRatoNew = valOfRato.toFixed(2);

                document.getElementById("leftCm").innerText = h1New;
                document.getElementById("rightCm").innerText = h2New;
                document.getElementById("ratoReadings").innerText = valOfRatoNew;
                console.log(h1Val);
                if (h1Val == 70.00) {
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

                    document.getElementById("infoAboutWhatToDo").innerText = "Manometric fluid is about to overflow. Change the Manometer!";
                    document.getElementById("infoAboutWhatToDo").style.color = "red";
                }

                document.getElementById("obserButton").onclick = function() {
                    gotoObservation();
                }
                document.getElementById("goBackButton").onclick = function() {
                    goBacktoStep2();
                }

            }, 28.57);
        }
    } else if (processFluid == "Kerosene" && manoFluid == "Mercury") {
        numberOfClicks += 1;

        if (numberOfClicks == 1) {
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

                valOfRato = valOfRato + 0.518;
                valOfRatoNew = valOfRato.toFixed(2);

                document.getElementById("leftCm").innerText = h1New;
                document.getElementById("rightCm").innerText = h2New;
                document.getElementById("ratoReadings").innerText = valOfRatoNew;
                console.log(h1Val);
                if (h1Val == 42.00) {
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
                    document.getElementById("gatewayRotate").onclick = function() {
                        fluidMoveAndPinMove();
                    }
                }
                document.getElementById("addtoTableButton").onclick = function() {
                    var table = document.getElementById("observeTable");
                    table.style.border = "solid 2px #fff";
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
                    cell4.innerHTML = h1New;
                    cell5.innerHTML = h2New;
                    document.getElementById("addtoTableButton").style.visibility = "hidden";
                }
                document.getElementById("obserButton").onclick = function() {
                    gotoObservation();
                }
                document.getElementById("goBackButton").onclick = function() {
                    goBacktoStep2();
                }

            }, 28.57);
        }

        if (numberOfClicks == 2) {
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

                valOfRato = valOfRato + 0.253;
                valOfRatoNew = valOfRato.toFixed(2);

                document.getElementById("leftCm").innerText = h1New;
                document.getElementById("rightCm").innerText = h2New;
                document.getElementById("ratoReadings").innerText = valOfRatoNew;
                console.log(h1Val);
                if (h1Val == 49.00) {
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
                    document.getElementById("gatewayRotate").onclick = function() {
                        fluidMoveAndPinMove();
                    }
                }

                document.getElementById("addtoTableButton").onclick = function() {
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
                    cell4.innerHTML = h1New;
                    cell5.innerHTML = h2New;
                    document.getElementById("addtoTableButton").style.visibility = "hidden";
                }
                document.getElementById("obserButton").onclick = function() {
                    gotoObservation();
                }
                document.getElementById("goBackButton").onclick = function() {
                    goBacktoStep2();
                }

            }, 28.57);
        }

        if (numberOfClicks == 3) {
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

                valOfRato = valOfRato + 0.199;
                valOfRatoNew = valOfRato.toFixed(2);

                document.getElementById("leftCm").innerText = h1New;
                document.getElementById("rightCm").innerText = h2New;
                document.getElementById("ratoReadings").innerText = valOfRatoNew;
                console.log(h1Val);
                if (h1Val == 56.00) {
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
                    document.getElementById("gatewayRotate").onclick = function() {
                        fluidMoveAndPinMove();
                    }
                }

                document.getElementById("addtoTableButton").onclick = function() {
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
                    cell4.innerHTML = h1New;
                    cell5.innerHTML = h2New;
                    document.getElementById("addtoTableButton").style.visibility = "hidden";
                }
                document.getElementById("obserButton").onclick = function() {
                    gotoObservation();
                }
                document.getElementById("goBackButton").onclick = function() {
                    goBacktoStep2();
                }

            }, 28.57);
        }

        if (numberOfClicks == 4) {
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

                valOfRato = valOfRato + 0.175;
                valOfRatoNew = valOfRato.toFixed(2);

                document.getElementById("leftCm").innerText = h1New;
                document.getElementById("rightCm").innerText = h2New;
                document.getElementById("ratoReadings").innerText = valOfRatoNew;
                console.log(h1Val);
                if (h1Val == 63.00) {
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
                    document.getElementById("gatewayRotate").onclick = function() {
                        fluidMoveAndPinMove();
                    }
                }

                document.getElementById("addtoTableButton").onclick = function() {
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
                    cell4.innerHTML = h1New;
                    cell5.innerHTML = h2New;
                    document.getElementById("addtoTableButton").style.visibility = "hidden";
                }
                document.getElementById("obserButton").onclick = function() {
                    gotoObservation();
                }
                document.getElementById("goBackButton").onclick = function() {
                    goBacktoStep2();
                }

            }, 28.57);
        }

        if (numberOfClicks == 5) {
            document.getElementById("infoAboutWhatToDo").innerText = "";

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

                valOfRato = valOfRato + 0.156;
                valOfRatoNew = valOfRato.toFixed(2);

                document.getElementById("leftCm").innerText = h1New;
                document.getElementById("rightCm").innerText = h2New;
                document.getElementById("ratoReadings").innerText = valOfRatoNew;
                console.log(h1Val);
                if (h1Val == 70.00) {
                    valOfRatoNew = 36.42;
                    valOfRatoNew = 36.42;
                    document.getElementById("ratoReadings").innerText = valOfRatoNew;

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

                    document.getElementById("infoAboutWhatToDo").innerText = "Manometric fluid is about to overflow. Change the Manometer!";
                    document.getElementById("infoAboutWhatToDo").style.color = "red";
                }

                document.getElementById("obserButton").onclick = function() {
                    gotoObservation();
                }
                document.getElementById("goBackButton").onclick = function() {
                    goBacktoStep2();
                }

            }, 28.57);
        }
    } else if (processFluid == "Kerosene" && manoFluid == "Carbon tetrachloride") {
        numberOfClicks += 1;

        if (numberOfClicks == 1) {
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

                valOfRato = valOfRato + 0.1039;
                valOfRatoNew = valOfRato.toFixed(2);

                document.getElementById("leftCm").innerText = h1New;
                document.getElementById("rightCm").innerText = h2New;
                document.getElementById("ratoReadings").innerText = valOfRatoNew;
                console.log(h1Val);
                if (h1Val == 42.00) {
                    // valOfRato =    2.92
                    // valOfRatoNew = 2.92;
                    // document.getElementById("ratoReadings").innerText = valOfRatoNew;

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
                    document.getElementById("gatewayRotate").onclick = function() {
                        fluidMoveAndPinMove();
                    }
                }
                document.getElementById("addtoTableButton").onclick = function() {
                    var table = document.getElementById("observeTable");
                    table.style.color = "#fff";
                    table.style.border = "solid 2px #fff";

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
                document.getElementById("obserButton").onclick = function() {
                    gotoObservation();
                }
                document.getElementById("goBackButton").onclick = function() {
                    goBacktoStep2();
                }

            }, 28.57);
        }

        if (numberOfClicks == 2) {
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

                valOfRato = valOfRato + 0.051;
                valOfRatoNew = valOfRato.toFixed(2);

                document.getElementById("leftCm").innerText = h1New;
                document.getElementById("rightCm").innerText = h2New;
                document.getElementById("ratoReadings").innerText = valOfRatoNew;
                console.log(h1Val);
                if (h1Val == 49.00) {
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
                    document.getElementById("gatewayRotate").onclick = function() {
                        fluidMoveAndPinMove();
                    }
                }

                document.getElementById("addtoTableButton").onclick = function() {
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
                    cell4.innerHTML = h1New;
                    cell5.innerHTML = h2New;
                    document.getElementById("addtoTableButton").style.visibility = "hidden";
                }
                document.getElementById("obserButton").onclick = function() {
                    gotoObservation();
                }
                document.getElementById("goBackButton").onclick = function() {
                    goBacktoStep2();
                }

            }, 28.57);
        }

        if (numberOfClicks == 3) {
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

                valOfRato = valOfRato + 0.041;
                valOfRatoNew = valOfRato.toFixed(2);

                document.getElementById("leftCm").innerText = h1New;
                document.getElementById("rightCm").innerText = h2New;
                document.getElementById("ratoReadings").innerText = valOfRatoNew;
                console.log(h1Val);
                if (h1Val == 56.00) {
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
                    document.getElementById("gatewayRotate").onclick = function() {
                        fluidMoveAndPinMove();
                    }
                }

                document.getElementById("addtoTableButton").onclick = function() {
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
                    cell4.innerHTML = h1New;
                    cell5.innerHTML = h2New;
                    document.getElementById("addtoTableButton").style.visibility = "hidden";
                }
                document.getElementById("obserButton").onclick = function() {
                    gotoObservation();
                }
                document.getElementById("goBackButton").onclick = function() {
                    goBacktoStep2();
                }

            }, 28.57);
        }

        if (numberOfClicks == 4) {
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

                valOfRato = valOfRato + 0.036;
                valOfRatoNew = valOfRato.toFixed(2);

                document.getElementById("leftCm").innerText = h1New;
                document.getElementById("rightCm").innerText = h2New;
                document.getElementById("ratoReadings").innerText = valOfRatoNew;
                console.log(h1Val);
                if (h1Val == 63.00) {
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
                    document.getElementById("gatewayRotate").onclick = function() {
                        fluidMoveAndPinMove();
                    }
                }

                document.getElementById("addtoTableButton").onclick = function() {
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
                    cell4.innerHTML = h1New;
                    cell5.innerHTML = h2New;
                    document.getElementById("addtoTableButton").style.visibility = "hidden";
                }
                document.getElementById("obserButton").onclick = function() {
                    gotoObservation();
                }
                document.getElementById("goBackButton").onclick = function() {
                    goBacktoStep2();
                }

            }, 28.57);
        }

        if (numberOfClicks == 5) {
            document.getElementById("infoAboutWhatToDo").innerText = "";

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

                valOfRato = valOfRato + 0.033;
                valOfRatoNew = valOfRato.toFixed(2);

                document.getElementById("leftCm").innerText = h1New;
                document.getElementById("rightCm").innerText = h2New;
                document.getElementById("ratoReadings").innerText = valOfRatoNew;
                console.log(h1Val);
                if (h1Val == 70.00) {

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

                    document.getElementById("infoAboutWhatToDo").innerText = "Manometric fluid is about to overflow. Change the Manometer!";
                    document.getElementById("infoAboutWhatToDo").style.color = "red";
                }

                document.getElementById("obserButton").onclick = function() {
                    gotoObservation();
                }
                document.getElementById("goBackButton").onclick = function() {
                    goBacktoStep2();
                }

            }, 28.57);
        }
    } else if (processFluid == "Water" && manoFluid == "Carbon tetrachloride") {
        console.log("HERE");
        console.log("Chosen pipe dia is: ", chosenPipeDia);
        if (chosenPipeDia == 0.25) {
            console.log("Current deg: ", angle);

            h1Val = (356 - angle) * 0.196;
            valOfRato = (356 - angle) * 0.019;
            valOfRatoNew = valOfRato.toFixed(2);
            h1New = h1Val.toFixed(2);

            h2Val = 70 - (356 - angle) * 0.196;
            h2New = h2Val.toFixed(2);

            if (h1New >= 68) {
                h1New = 70;
                h2New = 0;
                valOfRatoNew = 6.67;
            }
            document.getElementById("leftCm").innerText = (h1New);
            document.getElementById("rightCm").innerText = h2New;
            document.getElementById("ratoReadings").innerText = (valOfRatoNew);
        } else if (chosenPipeDia == 0.50) {
            console.log("Current deg: ", angle);

            h1Val = (356 - angle) * 0.196;
            valOfRato = (356 - angle) * 0.0798;
            valOfRatoNew = valOfRato.toFixed(2);
            h1New = h1Val.toFixed(2);

            h2Val = 70 - (356 - angle) * 0.196;
            h2New = h2Val.toFixed(2);

            // if(h1New >= 68){
            // 	h1New = 70;
            // 	h2New = 0;
            // 	valOfRatoNew = 6.67;
            // }
            document.getElementById("leftCm").innerText = (h1New);
            document.getElementById("rightCm").innerText = h2New;
            document.getElementById("ratoReadings").innerText = (valOfRatoNew);
        } else if (chosenPipeDia == 1.00) {
            console.log("Current deg: ", angle);

            h1Val = (356 - angle) * 0.11236;
            valOfRato = (356 - angle) * 0.11236;
            valOfRatoNew = valOfRato.toFixed(2);
            h1New = h1Val.toFixed(2);

            h2Val = 70 - (356 - angle) * 0.11236;
            h2New = h2Val.toFixed(2);

            // if(h1New >= 68){
            // 	h1New = 70;
            // 	h2New = 0;
            // 	valOfRatoNew = 6.67;
            // }
            document.getElementById("leftCm").innerText = (h1New);
            document.getElementById("rightCm").innerText = h2New;
            document.getElementById("ratoReadings").innerText = (valOfRatoNew);
        } else if (chosenPipeDia == 1.50) {
            console.log("Current deg: ", angle);

            h1Val = (356 - angle) * 0.0983;
            valOfRato = (356 - angle) * 0.11236;
            valOfRatoNew = valOfRato.toFixed(2);
            h1New = h1Val.toFixed(2);

            h2Val = 70 - (356 - angle) * 0.0983;
            h2New = h2Val.toFixed(2);

            // if(h1New >= 68){
            // 	h1New = 70;
            // 	h2New = 0;
            // 	valOfRatoNew = 6.67;
            // }
            document.getElementById("leftCm").innerText = (h1New);
            document.getElementById("rightCm").innerText = h2New;
            document.getElementById("ratoReadings").innerText = (valOfRatoNew);
        }
    }

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

    document.getElementById("observeTable").style.visibility = "visible";
    document.getElementById("setupButton").onclick = function() {
        goBacktoStep2();
    }
}

function goBacktoStep2() {
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