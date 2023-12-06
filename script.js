function selecionarSistema(selecao) {
    document.querySelector(".resultado_resumido").innerHTML= ""
    document.querySelector(".resultado_completo").innerHTML = ""
    document.querySelector(".resultado_completo").style.display = "none"
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

function converterParaNotacao10x(numero) {
    let notacaoCientifica = numero.toExponential().split('e');
    let base = parseFloat(notacaoCientifica[0]);
    let expoente = parseFloat(notacaoCientifica[1]);
  
    return `${base.toFixed(2)} ⋅ 10^{${expoente}}`;
}

function mostrarCalculos() {
    document.querySelector(".resultado_completo").style.display = "block"
}

function transformToScientificNotation(number) {
    const numericValue = Number(number);
    if (isNaN(numericValue)) {
        return 'Invalid number';
    } else if (Number.isInteger(numericValue) && (numericValue > -1000 && numericValue < 1000)) {
        return numericValue.toString();
    } else if (numericValue > -1000 && numericValue < 1000) {
        return math.format(numericValue, { notation: 'fixed', precision: 5 });
    }

    const scientificNotation = math.format(numericValue, { notation: 'exponential', precision: 3 });

    const [mantissa, exponent] = scientificNotation.split('e');
    const n = Number(exponent);

    const latexString = `${mantissa} \\cdot 10^{${n}}`;

    return latexString;
}