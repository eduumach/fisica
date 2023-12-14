function selecionarSistema(selecao) {
    aulasContainer = document.getElementById("aulasContainer")
    aulasVideo = document.getElementById("aulasVideo")
    button = document.getElementById("buttonMostrarVideo")
    document.querySelector(".resultado_resumido").innerHTML= ""
    document.querySelector(".resultado_completo").innerHTML = ""
    document.querySelector(".resultado_completo").style.display = "none"
    aulasContainer.style.display = "none"
    button.innerHTML = 'Explicação em video'
    aulasVideo.innerHTML = ''
    if (selecao == 1) {
        document.querySelector("#sistema3_1").style.display = "flex"
        document.querySelector("#sistema3_2").style.display = "none"
        document.querySelector("#sistema3_3").style.display = "none"
    } else if (selecao == 2) {
        document.querySelector("#sistema3_1").style.display = "none"
        document.querySelector("#sistema3_2").style.display = "flex"
        document.querySelector("#sistema3_3").style.display = "none"
    } else {
        document.querySelector("#sistema3_1").style.display = "none"
        document.querySelector("#sistema3_2").style.display = "none"
        document.querySelector("#sistema3_3").style.display = "flex"
    }
    
}

function mostrarVideo(selecao){
    aulasContainer = document.getElementById("aulasContainer")
    aulasVideo = document.getElementById("aulasVideo")
    button = document.getElementById("buttonMostrarVideo")
    if (selecao === 1 && aulasContainer.style.display == "none") {
        aulasContainer.style.display = "block"
        button.innerHTML = 'Ocultar Vídeo'
        aulasVideo.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/fy6mrzjZs4g?si=aOjDm-oOw-bBPSkv&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    }else if (selecao === 2 && aulasContainer.style.display == "none") {
        aulasContainer.style.display = "block"
        button.innerHTML = 'Ocultar Vídeo'
        aulasVideo.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/Dm2-yNktp9o?si=emLUOK2M-8lrCAes&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    }else if (selecao === 3 && aulasContainer.style.display == "none") {
        aulasContainer.style.display = "block"
        button.innerHTML = 'Ocultar Vídeo'
        aulasVideo.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/RRSagcMQOMI?si=Q9Ss7plmkPl4YFBo&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    }else {
        aulasContainer.style.display = "none"
        button.innerHTML = 'Explicação em video'
    }
}


function converterParaNotacao10x(numero) {
    let notacaoCientifica = numero.toExponential().split('e');
    let base = parseFloat(notacaoCientifica[0]);
    let expoente = parseFloat(notacaoCientifica[1]);
  
    return `${base.toFixed(2)} ⋅ 10^{${expoente}}`;
}

function mostrarCalculos() {
    if (document.querySelector(".resultado_completo").style.display == "none") {
        document.querySelector(".resultado_completo").style.display = "block"
        document.querySelector("#mostrarButton").innerHTML = 'Ocultar Cálculos'
    } else {
        document.querySelector(".resultado_completo").style.display = "none"
        document.querySelector("#mostrarButton").innerHTML = 'Mostrar Cálculos'
    }
}

function transformToScientificNotation(number) {
    console.log(number);
    const numericValue = Number(number);
    if (isNaN(numericValue)) {
        return 'Invalid number';
    } else if (Number.isInteger(numericValue) && numericValue > -1000 && numericValue < 1000) {
        return numericValue.toString();
    }

    const scientificNotation = math.format(numericValue, { notation: 'exponential', precision: 3 });

    const [mantissa, exponent] = scientificNotation.split('e');
    const n = Number(exponent);

    const latexString = `${mantissa} \\cdot 10^{${n}}`;

    return latexString;
}

function isNegative(number) {
    return number < 0;
}