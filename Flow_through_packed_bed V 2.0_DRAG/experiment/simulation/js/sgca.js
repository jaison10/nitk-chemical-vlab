//on click of next button
var mpointer = 0;
var repeat = 0;
var a, p, lastp, n, b, q, flag = 0,
    avg, average;


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("nextButton").style.visibility = "hidden";
    setTimeout(() => {
        var start = document.getElementById("start");
        start.innerText = "FLOW THROUGH PACKED BED";
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
                // document.getElementById("infoAboutWhatToDo").innerText = "Click on Gatewall to rotate it."

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
        document.getElementById('overflow').style.visibility = "hidden";

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


////////////        For experimental values       ////////////
var pbLength = 0.5;

function setPBLength() {
    pbLength = document.getElementById('pbLength').value;
    console.log("pbLength " + pbLength);

}
var pBMaterial = "25mm Raschig ring";
var speri = 0.33;
var spsurfarea = 190;
var voidfrac = 0.73;

function setPBMaterial() {
    pBMaterial = document.getElementById('packMatSelect').value;
    console.log(pBMaterial);


    if (pBMaterial == "25mm Raschig ring") {
        speri = 0.33;
        spsurfarea = 190;
        voidfrac = 0.73;
    } else if (pBMaterial == "25mm Berl saddle") {
        speri = 0.3;
        spsurfarea = 249;
        voidfrac = 0.68;
    } else if (pBMaterial == "13mm berl saddle") {
        speri = 0.3;
        spsurfarea = 249;
        voidfrac = 0.68;
    } else if (pBMaterial == "Glass beads of 4mm size") {
        speri = 1;
        spsurfarea = 810;
        voidfrac = 0.46;
    }
    console.log("pBMaterial: " + pBMaterial);
    console.log("speri: " + speri);
    console.log("spsurfarea: " + spsurfarea);
    console.log("voidfrac: " + voidfrac);
}
var pipeLength = 1;
var pbDia = 0.25;
var actualPipeDia = 0.0092,
    area;

function setPBDia() {
    pbDia = document.getElementById("pbDiaSelect").value;
    console.log(pbDia);


    if (pbDia == 0.25)
        actualPipeDia = 0.0092;
    else if (pbDia == 0.50)
        actualPipeDia = 0.0157;
    else if (pbDia == 1.00)
        actualPipeDia = 0.0266;
    else if (pbDia == 1.50)
        actualPipeDia = 0.0408;
    else if (pbDia == 2.50)
        actualPipeDia = 0.0627;




    area = (3.14 / 4) * Math.pow(actualPipeDia, 2);
    console.log("area " + area);
    console.log("actualPipeDia " + actualPipeDia);
    console.log("pbDia " + pbDia);
}

function setPipeLength() {
    pipeLength = document.getElementById("pipeLength").value;
    console.log(pipeLength);
}

var chosenPipeDia = 0.25;

function setPipeDia() {
    chosenPipeDia = document.getElementById("pipeDiaSelect").value;
    console.log(chosenPipeDia);
}

var processFluid = "Water";
var densitypf = 1000;
var Viscositypf = 0.001;
var densitymf = 1600;

function setProcessFluid() {
    processFluid = document.getElementById("processFluid").value;
    console.log(processFluid);
    if (processFluid == "Water") {
        densitypf = 1000;
        viscositypf = 0.001;
    } else if (processFluid == "Kerosene") {
        densitypf = 820;
        viscositypf = 0.00215;
    }
    console.log("dpf: " + densitypf);
    console.log("vpf: " + Viscositypf);
}

var manoFluid = "Carbon tetrachloride";

function setManoFluid() {
    manoFluid = document.getElementById("manoFluid").value;
    console.log(manoFluid);
    if (manoFluid == "Carbon tetrachloride") {
        densitymf = 1600;
    } else if (manoFluid == "Mercury") {
        densitymf = 13600;
    }
    console.log(manoFluid);
    console.log("dmf: " + densitymf);
}

////////////        For evaluation values       ////////////
var pbLengthEval = 0.5;

function setPBLengthEval() {
    pbLengthEval = document.getElementById('pbLengthEval').value;
    console.log("pbLength " + pbLengthEval);

}
var pBMaterialEval = "25mm Raschig ring";
var speriEval = 0.33;
var spsurfareaEval = 190;
var voidfracEval = 0.73;

function setPBMaterialEval() {
    pBMaterialEval = document.getElementById('packMatSelectEval').value;
    console.log(pBMaterial);


    if (pBMaterialEval == "25mm Raschig ring") {
        speriEval = 0.33;
        spsurfareaEval = 190;
        voidfracEval = 0.73;
    } else if (pBMaterialEval == "25mm Berl saddle") {
        speriEval = 0.3;
        spsurfareaEval = 249;
        voidfracEval = 0.68;
    } else if (pBMaterialEval == "13mm berl saddle") {
        speriEval = 0.3;
        spsurfareaEval = 249;
        voidfracEval = 0.68;
    } else if (pBMaterialEval == "Glass beads of 4mm size") {
        speriEval = 1;
        spsurfareaEval = 810;
        voidfracEval = 0.46;
    }
    console.log("pBMaterial: " + pBMaterialEval);
    console.log("speri: " + speriEval);
    console.log("spsurfarea: " + spsurfareaEval);
    console.log("voidfrac: " + voidfracEval);
}
var pipeLength = 1;
var pbDiaEval = 0.25;
var actualPipeDiaEval = 0.0092,
    areaEval;

function setPBDiaEval() {
    pbDiaEval = document.getElementById("pbDiaSelectEval").value;
    console.log(pbDiaEval);


    if (pbDiaEval == 0.25)
        actualPipeDiaEval = 0.0092;
    else if (pbDiaEval == 0.50)
        actualPipeDiaEval = 0.0157;
    else if (pbDiaEval == 1.00)
        actualPipeDiaEval = 0.0266;
    else if (pbDiaEval == 1.50)
        actualPipeDiaEval = 0.0408;
    else if (pbDiaEval == 2.50)
        actualPipeDiaEval = 0.0627;




    areaEval = (3.14 / 4) * Math.pow(actualPipeDiaEval, 2);
    console.log("area " + areaEval);
    console.log("actualPipeDia " + actualPipeDiaEval);
    console.log("pbDia " + pbDiaEval);
}

// function setPipeLength() {
//     pipeLength = document.getElementById("pipeLength").value;
//     console.log(pipeLength);
// }

// var chosenPipeDia = 0.25;

// function setPipeDia() {
//     chosenPipeDia = document.getElementById("pipeDiaSelect").value;
//     console.log(chosenPipeDia);
// }

var processFluidEval = "Water";
var edensitypf = 1000;
var eViscositypf = 0.001;
var edensitymf = 1600;

function setProcessFluidEval() {
    processFluidEval = document.getElementById("processFluidEval").value;
    console.log(processFluidEval);
    if (processFluidEval == "Water") {
        edensitypf = 1000;
        eViscositypf = 0.001;
    } else if (processFluidEval == "Kerosene") {
        edensitypf = 820;
        eViscositypf = 0.00215;
    }
    console.log("dpf: " + edensitypf);
    console.log("vpf: " + eViscositypf);
}

var manoFluidEval = "Carbon tetrachloride";

function setManoFluidEval() {
    manoFluidEval = document.getElementById("manoFluidEval").value;
    console.log(manoFluidEval);
    if (manoFluidEval == "Carbon tetrachloride") {
        edensitymf = 1600;
    } else if (manoFluidEval == "Mercury") {
        edensitymf = 13600;
    }
    console.log(manoFluidEval);
    console.log("dmf: " + edensitymf);
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

    // valOfRato = (356 - angle) * 0.1066;
    // valOfRatoNew = valOfRato.toFixed(2);
    console.log("Val of Rato is ", valOfRatoNew);

    if (manoFluid == "Mercury") {
        valOfRato = (356 - angle) * 0.0198;
        console.log("multiplier: 0.0198"); //prior;0.1066..for mercury maxrota-37.92

    } else {
        valOfRato = (356 - angle) * 0.1020;
        console.log("multiplier: 0.1020"); //prior;0.1066..for mercury maxrota-6.53

    }
    console.log("Val of Rato is ", valOfRato);

    if (valOfRato < 0) {
        valOfRato = 0;
        h1New = 35.00;
        h2New = 35.00;
    }
    valOfRatoNew = valOfRato.toFixed(2);
    console.log("Val of Rato is ", valOfRatoNew);

    document.getElementById("waterPourSecondLongOne").style.visibility = "hidden";
    document.getElementById("gatewayRotate").style.cursor = "auto";

    document.getElementById("addtoTableButton").style.visibility = "visible";
    console.log("pBMaterial: " + pBMaterial);
    console.log("speri: " + speri);
    console.log("spsurfarea: " + spsurfarea);
    console.log("voidfrac: " + voidfrac);
    console.log("actualPipeDia " + actualPipeDia);
    console.log("pbDia " + pbDia);
    //find area
    area = (3.14 / 4) * Math.pow(actualPipeDia, 2);
    console.log("area " + area);

    //find dp
    var Dp = 6 * (1 - voidfrac) / (speri * spsurfarea);
    console.log("Dp " + Dp);

    //find velocity
    var velocity = valOfRatoNew / (60000 * area);
    console.log("velocity " + velocity);

    //find Nre
    var Nre = (actualPipeDia * velocity * densitypf) / (Viscositypf / 1000);
    console.log("Nre " + Nre);

    //find friction
    var friction = (150 * (1 - voidfrac) / (speri * Nre)) + 1.75;
    console.log("friction " + friction);

    //find pressure drop
    console.log("pbLength " + pbLength);
    var hw = (friction * pbLength * Math.pow((velocity * 1000), 2) * (1 - voidfrac) / (Math.pow(voidfrac, 3) * 1000 * speri * Dp * 1000 * 9.8));
    console.log("hw " + hw);


    //find deltaH
    var deltaH = hw * densitypf / (densitymf - densitypf);
    console.log("deltaH " + deltaH);

    //half value to be added
    var halfDh = deltaH / 2;


    console.log("halfDh= " + halfDh);
    console.log("h1= " + h1New);
    console.log("h2= " + h2New);
    h1New = 35.00 + halfDh;
    console.log("The h1 new dec fixed is: ", h1New);
    h2New = 35.00 - halfDh;
    console.log("The h2 new dec fixed is: ", h2New);
    console.log("The h1 val is: ", h1New);
    console.log("The h2  val is: ", h2New);

    h1Final = h1New.toFixed(2);
    h2Final = h2New.toFixed(2);
    console.log("The h1 final val is: ", h1Final);
    console.log("The h2 final val is: ", h2Final);

    if (h1Final >= 69) {
        h1Final = 70;
        h2Final = 0;
        // valOfRatoNew = ;
        console.log("Overflow condition");
        document.getElementById('overflow').style.visibility = "visible";


    }



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



    document.getElementById("leftCm").innerText = (h1Final);
    document.getElementById("rightCm").innerText = h2Final;
    document.getElementById("ratoReadings").innerText = (valOfRatoNew);

    document.getElementById("leftPinkFluid").style.height = parseInt(37) + parseInt(heightLeftNew) + "px";
    document.getElementById("leftPinkFluid").style.top = parseInt(222) - parseInt(topLeftNew) + "px";
    document.getElementById("rightPinkFluid").style.height = parseInt(37) - parseInt(heightRightNew) + "px";
    document.getElementById("rightPinkFluid").style.top = parseInt(222) + parseInt(topRightNew) + "px";
    document.getElementById("rotatePin").style.top = parseInt(259) - parseInt(topPinNew) + "px";

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
        gotoObservation();
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

var lpm, pres, reyn, fric, deltaP;
var den, diaMeter, lpmConvVelocity, visco, calculatedReyn, denMano, presInMeter, hf, calculatedFricFact;

function evaluateConfig() {
    var table = document.getElementById("configInputTable");
    var resultTable = document.getElementById("configResultTable");

    var rowCountPost = table.rows.length - 1;

    console.log("Total rows: ", rowCountPost);
    for (var z = 1; z <= rowCountPost; z++) {
        var out = document.getElementById("showResRey");
        out.innerText = "Calculating...";

        // taking values from columns
        lpm = document.getElementById("inputSet" + z + "0").value;
        pres = document.getElementById("inputSet" + z + "1").value;
        reyn = document.getElementById("inputSet" + z + "2").value;
        fric = document.getElementById("inputSet" + z + "3").value;

        presInMeter = pres / 100;

        console.log("Diameter is inch: ", pbDiaEval);
        console.log("Diameter of the pipe in meter is: ", actualPipeDiaEval);
        console.log("Radius is: ", (actualPipeDiaEval / 2));

        //area 
        areaEval = (3.14 / 4) * Math.pow(actualPipeDiaEval, 2);
        console.log("area " + areaEval);

        //velocity
        lpmConvVelocity = lpm / (60000 * areaEval); // convert lpm to m3/s              V E L O C I T Y
        console.log("Velocity value is: ", lpmConvVelocity);

        console.log("Viscosity value of " + processFluid + " at 20 deg C is: ", eViscositypf);
        console.log("Density of " + processFluidEval + " fluid is: ", edensitypf);

        // Calculate Reynold's
        calculatedReyn = ((edensitypf * actualPipeDiaEval * lpmConvVelocity) / eViscositypf);
        calculatedReyn = calculatedReyn.toFixed(5); // ======    toFixed(5)
        console.log("Calculated Reynold's value is: ", calculatedReyn);

        // // // calculate hf value		
        // hf = (((denMano - den) * presInMeter) / den);
        // console.log("Calculated hf value's: ", hf);

        //deltaP
        console.log("presInMeter" + presInMeter);

        deltaP = presInMeter * edensitypf * 9.81;
        console.log("deltaP" + deltaP);

        //value of G
        var G = (lpm * edensitypf) / areaEval / 60000;
        console.log("G " + G);
        console.log("G2 " + Math.pow(G, 2));


        //dp value
        var dp = 6 * (1 - voidfracEval) / (speriEval * spsurfareaEval);
        console.log("dp " + dp);

        var outFric = document.getElementById("showResInFric");

        // ========================================================= Friction Factor calculation.

        console.log("Manometric density value of " + manoFluidEval + " is: ", edensitymf);
        console.log("speriEval: " + speriEval);
        console.log("spsurfareaEval: " + spsurfareaEval);
        console.log("voidfracEval: " + voidfracEval);

        console.log("Length of pipe is: ", pbLengthEval);
        // calculate FF
        calculatedFricFact = (deltaP / pbLengthEval) * ((edensitypf * speriEval * dp) / Math.pow(G, 2)) * Math.pow((voidfracEval / (1 - voidfracEval)), 3);

        // calculatedFricFact = (calculatedFricFact * 10000).toFixed(5);
        calculatedFricFact = (calculatedFricFact).toFixed(5);
        console.log("Calculated F F value is: ", (calculatedFricFact));
        if (isNaN(calculatedFricFact)) {
            calculatedFricFact = (0.000).toFixed(5);

        }
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
            // if (rowCounttt > 0) {
            //     for (var xx = 1; xx <= rowCounttt; xx++) {
            //         table.deleteRow(1);
            //     }
            // }
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