const select31 = document.getElementById("choose3.1");
const resultadoResumido = document.querySelector(".resultado_resumido");
let resultadoCompleto = document.querySelector(".resultado_completo");
const quadro31 = document.getElementById("campos_entrada1");

select31.addEventListener("change", (event) => {
    if (select31.value == "V") {
        quadro31.innerHTML = `
        <span>K - Constante [K: N m²/C²]</span>
        <div class="entradasContainer">
            <input class="entradaNumeros" type="string" placeholder="Ex: 9*10^9" id="K31" step="0.01" required>
        </div>
        <span>Q - Carga total [C]</span>
        <div class="entradasContainer">
            <input class="entradaNumeros" type="string" placeholder="Ex: 1.602*10^-19" id="Q31" step="0.01" required>
            <select class="tipoInput" id="tipo_entrada_31Q">
                <option value="C">C</option>
                <option value="mC">mC</option>
                <option value="µC">µC</option>
                <option value="nC">nC</option>
                <option value="pC">pC</option>
            </select>
        </div>
        <span>d - Distância [m]</span>
        <div class="entradasContainer">
            <input class="entradaNumeros" type="string" placeholder="Ex: 25" id="d31" step="0.01" required>
            <select class="tipoInput" id="tipo_entrada_31D">
                <option value="m">m</option>
                <option value="cm">cm</option>
                <option value="mm">mm</option>
            </select>
        </div>
        <div class="buttons" onclick="calcular3_1()">Calcular</div>
        <div class="buttons" id="buttonMostrarVideo" onclick="mostrarVideo(1)">Explicação em video</div>
        `
    } else if (select31.value == "Q") {
        quadro31.innerHTML = `
        <span>K - Constante [K: N m²/C²]</span>
        <div class="entradasContainer">
            <input class="entradaNumeros" type="string" placeholder="Ex: 9*10^9" id="K31" step="0.01" required>
        </div>
        <span>V - Diferença de potencial [V]</span>
        <div class="entradasContainer">
            <input class="entradaNumeros" type="string" placeholder="Ex: 16" id="V31" step="0.01" required>
            <select class="tipoInput" id="tipo_entrada_31V">
                <option value="C">C</option>
                <option value="mC">mC</option>
                <option value="µC">µC</option>
                <option value="nC">nC</option>
                <option value="pC">pC</option>
            </select>
        </div>
        <span>d - Distância [m]</span>
        <div class="entradasContainer">
            <input class="entradaNumeros" type="string" placeholder="Ex: 25" id="d31" step="0.01" required>
            <select class="tipoInput" id="tipo_entrada_31D">
                <option value="m">m</option>
                <option value="cm">cm</option>
                <option value="mm">mm</option>
            </select>
        </div>
        <div class="buttons" onclick="calcular3_1()">Calcular</div>
        <div class="buttons" id="buttonMostrarVideo" onclick="mostrarVideo(1)">Explicação em video</div>
        `
    } else if (select31.value == "d") {
        quadro31.innerHTML = `
        <span>K - Constante [K: N m²/C²]</span>
        <input class="entradaNumeros" type="string" placeholder="Ex: 9*10^9" id="K31" step="0.01" required>
        <span>V - Diferença de potencial [V]</span>
        <div class="entradasContainer">
            <input class="entradaNumeros" type="string" placeholder="Ex: 16"id="V31" step="0.01" required>
        </div>        
        <span>Q - Carga total [C]</span>
        <div class="entradasContainer">
            <input class="entradaNumeros" type="string" placeholder="Ex: 1.602*10^-19" id="Q31" step="0.01" required>
            <select class="tipoInput" id="tipo_entrada_31Q">
                <option value="C">C</option>
                <option value="mC">mC</option>
                <option value="µC">µC</option>
                <option value="nC">nC</option>
                <option value="pC">pC</option>
            </select>
        </div>
        <div class="buttons" onclick="calcular3_1()">Calcular</div>
        <div class="buttons" id="buttonMostrarVideo" onclick="mostrarVideo(1)">Explicação em video</div>
        `
    }
    else {
        quadro31.innerHTML = ``
    }

    event.preventDefault()
});

function diferencaPotencial(K, Q, d) {
    const K_base10 = transformToScientificNotation(K);
    const Q_base10 = transformToScientificNotation(Q);
    const d_base10 = transformToScientificNotation(d);
    resultadoCompleto.innerHTML += `$$ V = \\frac{K \\cdot Q}{d} $$`;
    resultadoCompleto.innerHTML += `$$ V = \\frac{${K_base10} \\cdot ${Q_base10}}{${d_base10}} $$`;
    const r1 = K * Q;
    const r1_base10 = transformToScientificNotation(r1);
    resultadoCompleto.innerHTML += `$$ V = \\frac{${r1_base10}}}{${d_base10}} $$`;
    const resultado = r1 / d;
    const resultado_base10 = transformToScientificNotation(resultado);
    resultadoCompleto.innerHTML += `$$ V = ${resultado_base10} V $$`;
    resultadoResumido.innerHTML += `$$ V = ${resultado_base10} V $$`;
    resultadoResumido.innerHTML += `<p>O resultado em volts do potencial elétrico no ponto p gerado pela carga Q</p>`
}

function cargaTotal(K, V, d) {
    const K_base10 = transformToScientificNotation(K);
    const V_base10 = transformToScientificNotation(V);
    const d_base10 = transformToScientificNotation(d);
    resultadoCompleto.innerHTML += `$$ V = \\frac{K \\cdot Q}{d} $$`;
    resultadoCompleto.innerHTML += `$$ Q = \\frac{V \\cdot d}{K} $$`;
    resultadoCompleto.innerHTML += `$$ Q = \\frac{${V_base10} \\cdot ${d_base10}}{${K_base10}} $$`;
    const r1 = V * d;
    const r1_base10 = transformToScientificNotation(r1);
    resultadoCompleto.innerHTML += `$$ Q = \\frac{${r1_base10}}{${K}} $$`;
    const resultado = r1 / K;
    const resultado_base10 = transformToScientificNotation(resultado);
    resultadoCompleto.innerHTML += `$$ Q = ${resultado_base10} C $$`;
    resultadoResumido.innerHTML += `$$ Q = ${resultado_base10} C $$`;
    resultadoResumido.innerHTML += `<p>O resultado em coulombs da quantidade de carga é encontrado a partir do pontencial eletrico no ponto p</p>`
}

function distancia(K, V, Q) {
    const K_base10 = transformToScientificNotation(K);
    const V_base10 = transformToScientificNotation(V);
    const Q_base10 = transformToScientificNotation(Q);
    resultadoCompleto.innerHTML += `$$ V = \\frac{K \\cdot Q}{d} $$`;
    resultadoCompleto.innerHTML += `$$ d = \\frac{K \\cdot Q}{V} $$`;
    resultadoCompleto.innerHTML += `$$ d = \\frac{${K_base10} \\cdot ${Q_base10}}{${V_base10}} $$`;
    const r1 = K * Q;
    const r1_base10 = transformToScientificNotation(r1);
    resultadoCompleto.innerHTML += `$$ d = \\frac{${r1_base10}}{${V}} $$`;
    const resultado = r1 / V;
    const resultado_base10 = transformToScientificNotation(resultado);
    resultadoCompleto.innerHTML += `$$ d = ${resultado_base10} m $$`;
    resultadoResumido.innerHTML += `$$ d = ${resultado_base10} m $$`;
    resultadoResumido.innerHTML += `<p>O resultado em metros da distancia do ponto p há carga , é encontrada através da relação entre pontencial elétrico e a  carga</p>`
}

function calcular3_1() {
    resultadoCompleto.innerHTML = "";
    resultadoResumido.innerHTML = "";

    if (select31.value == "V") {
        let K = math.evaluate(document.getElementById("K31").value);
        let Q = conversorCoulomb(document.getElementById("tipo_entrada_31Q").value, math.evaluate(document.getElementById("Q31").value));
        let d = conversorDistancia(document.getElementById("tipo_entrada_31D").value, math.evaluate(document.getElementById("d31").value));
        if (isNegative(d)){
            resultadoResumido.innerHTML += `<p>Não pode ter distância negativa, por isso convertemos para positiva.</p>`
        }
        d = math.abs(d);
        diferencaPotencial(K, Q, d);
    } else if (select31.value == "Q") {
        let K = math.evaluate(document.getElementById("K31").value);
        let d = conversorDistancia(document.getElementById("tipo_entrada_31D").value, math.evaluate(document.getElementById("d31").value));
        let V = conversorCoulomb(document.getElementById("tipo_entrada_31V").value, math.evaluate(document.getElementById("V31").value));
        if (isNegative(d)){
            resultadoResumido.innerHTML += `<p>Não pode ter distância negativa, por isso convertemos para positiva.</p>`
        }
        d = math.abs(d);
        cargaTotal(K, V, d);
    } else if (select31.value == "d") {
        let K = math.evaluate(document.getElementById("K31").value);
        let Q = conversorCoulomb(document.getElementById("tipo_entrada_31Q").value, math.evaluate(document.getElementById("Q31").value));
        let V = math.evaluate(document.getElementById("V31").value);
        distancia(K, V, Q);
    } else {
        console.log("erro");
    }

    resultadoResumido.innerHTML += `<div id="mostrarButton" class="buttons" onclick="mostrarCalculos()">Mostrar Cálculos</div>`

    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}

