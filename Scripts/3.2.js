const select32 = document.getElementById("choose3.2");
const quadro32 = document.getElementById("campos_entrada2")

select32.addEventListener("change", (event) => {
    if (select32.value == "Positivo" || select32.value == "Negativo") {
        quadro32.innerHTML = `
        <span>d - Distância (m)</span>
        <div class="entradasContainer">
            <input class="entradaNumeros" type="string" placeholder="Ex: 25" id="D32" step="0.01" required>
            <select class="tipoInput" id="tipo_entrada_32D">
                <option value="m">m</option>
                <option value="cm">cm</option>
                <option value="mm">mm</option>
            </select>
        </div>
        <span>Q1 - Carga 1 (C)</span>
        <div class="entradasContainer">
            <input class="entradaNumeros" type="string" placeholder="Ex: 1.602*10^-19" id="Q132" step="0.01" required>
            <select class="tipoInput" id="tipo_entrada_32Q1">
                <option value="C">C</option>
                <option value="mC">mC</option>
                <option value="µC">µC</option>
                <option value="nC">nC</option>
                <option value="pC">pC</option>
            </select>
        </div>
        <span>Q2 - Carga 2 (C)</span>
        <div class="entradasContainer">
            <input class="entradaNumeros" type="string" placeholder="Ex: 1.602*10^-19" id="Q232" step="0.01" required>
            <select class="tipoInput" id="tipo_entrada_32Q2">
                <option value="C">C</option>
                <option value="mC">mC</option>
                <option value="µC">µC</option>
                <option value="nC">nC</option>
                <option value="pC">pC</option>
            </select>
        </div>
        <div class="buttons" onclick="calcular3_2()">Calcular</div>
        `
    }
    else {
        quadro32.innerHTML = ``
    }

    event.preventDefault()
});


function posicaoPositiva(d, Q1, Q2) {
    const d_base10 = transformToScientificNotation(d);
    const Q1_base10 = transformToScientificNotation(Q1);
    const Q2_base10 = transformToScientificNotation(Q2);
    console.log(d_base10, Q1_base10, Q2_base10);
    // |V1|=|V2|
    resultadoCompleto.innerHTML += `$$ |V1|=|V2| $$`;
    // (K*|Q1|)/d=(K*|Q2|)/(d-x)
    resultadoCompleto.innerHTML += `$$ \\frac{K \\cdot |Q1|}{d}=\\frac{K \\cdot |Q2|}{d-x} $$`;
    resultadoCompleto.innerHTML += `$$ \\frac{K \\cdot ${Q1_base10}}{${d_base10}}=\\frac{K \\cdot ${Q2_base10}}{${d_base10}-x} $$`;
    // (|Q1|)/x=(|Q2|)/(d-x)
    resultadoCompleto.innerHTML += `$$ \\frac{|${Q1_base10}|}{x}=\\frac{|${Q2_base10}|}{${d_base10}-x} $$`;
    // |Q1|*(d-x)=|Q2|*x
    resultadoCompleto.innerHTML += `$$ |${Q1_base10}| \\cdot (${d_base10}-x)=|${Q2_base10}| \\cdot x $$`;
    // (|Q1|*d)-(|Q1|*x)=|Q2|*x
    resultadoCompleto.innerHTML += `$$ |${Q1_base10}| \\cdot ${d_base10}-|${Q1_base10}| \\cdot x=|${Q2_base10}| \\cdot x $$`;
    // (|Q1|*d)=(|Q2|*x)+(|Q1|*x)
    resultadoCompleto.innerHTML += `$$ |${Q1_base10}| \\cdot ${d_base10}=|${Q2_base10}| \\cdot x+|${Q1_base10}| \\cdot x $$`;
    // d=((|Q2|*x)+(|Q1|*x))/Q1
    resultadoCompleto.innerHTML += `$$ ${d_base10}=\\frac{|${Q2_base10}| \\cdot x+|${Q1_base10}| \\cdot x}{|${Q1_base10}|} $$`;
    // d=(x*(|Q1|+|Q2|))/(|Q1|)
    resultadoCompleto.innerHTML += `$$ ${d_base10}=\\frac{x \\cdot (|${Q1_base10}|+|${Q2_base10}|)}{|${Q1_base10}|} $$`;
    // 1/x=((|Q1|+|Q2|))/(|Q1|*d)
    resultadoCompleto.innerHTML += `$$ \\frac{1}{x}=\\frac{|${Q1_base10}|+|${Q2_base10}|}{|${Q1_base10}| \\cdot ${d_base10}} $$`;
    // x=(|Q1|*d)/(|Q1|+|Q2|)
    resultadoCompleto.innerHTML += `$$ x=\\frac{|${Q1_base10}| \\cdot ${d_base10}}{|${Q1_base10}|+|${Q2_base10}|} $$`;
    // x=(|Q1|*d)/(|Q1|+|Q2|)
    resultadoCompleto.innerHTML += `$$ x=\\frac{${Q1_base10} \\cdot ${d_base10}}{${Q1_base10}+${Q2_base10}} $$`;
    const resultado = (Q1 * d) / (Q1 + Q2);
    const resultado_base10 = transformToScientificNotation(resultado);
    resultadoCompleto.innerHTML += `$$ x=${resultado_base10} m$$`;
    resultadoResumido.innerHTML += `$$ x=${resultado_base10} m$$`;
    resultadoResumido.innerHTML += `<p>O resultado encontrado para a equação Positiva é o valor encontrado a cima do ponto.</p>`
}

function posicaoNegativa(d, Q1, Q2) {
    const d_base10 = transformToScientificNotation(d);
    const Q1_base10 = transformToScientificNotation(Q1);
    const Q2_base10 = transformToScientificNotation(Q2);
    // |V1|=|V2|
    resultadoCompleto.innerHTML += `$$ |V1|=|V2| $$`;
    // (K*|Q1|)/d=(K*|Q2|)/(d+x)
    resultadoCompleto.innerHTML += `$$ \\frac{K \\cdot |Q1|}{d}=\\frac{K \\cdot |Q2|}{d+x} $$`;
    resultadoCompleto.innerHTML += `$$ \\frac{K \\cdot ${Q1_base10}}{${d_base10}}=\\frac{K \\cdot ${Q2_base10}}{${d_base10}+x} $$`;
    // (|Q1|)/x=(|Q2|)/(d+x)
    resultadoCompleto.innerHTML += `$$ \\frac{|${Q1_base10}|}{x}=\\frac{|${Q2_base10}|}{${d_base10}+x} $$`;
    // |Q1|*(d+x)=|Q2|*x
    resultadoCompleto.innerHTML += `$$ |${Q1_base10}| \\cdot (${d_base10}+x)=|${Q2_base10}| \\cdot x $$`;
    // (|Q1|*d)+(|Q1|*x)=|Q2|*x
    resultadoCompleto.innerHTML += `$$ |${Q1_base10}| \\cdot ${d_base10}+|${Q1_base10}| \\cdot x=|${Q2_base10}| \\cdot x $$`;
    // (|Q1|*d)=(|Q2|*x)-(|Q1|*x)
    resultadoCompleto.innerHTML += `$$ |${Q1_base10}| \\cdot ${d_base10}=|${Q2_base10}| \\cdot x-|${Q1_base10}| \\cdot x $$`;
    // d=((|Q2|*x)-(|Q1|*x))/Q1
    resultadoCompleto.innerHTML += `$$ ${d_base10}=\\frac{|${Q2_base10}| \\cdot x-|${Q1_base10}| \\cdot x}{|${Q1_base10}|} $$`;
    // d=(x*(|Q1|-|Q2|))/(|Q1|)
    resultadoCompleto.innerHTML += `$$ ${d_base10}=\\frac{x \\cdot (|${Q1_base10}|-|${Q2_base10}|)}{|${Q1_base10}|} $$`;
    // 1/x=((|Q1|-|Q2|))/(|Q1|*d)
    resultadoCompleto.innerHTML += `$$ \\frac{1}{x}=\\frac{|${Q1_base10}|-|${Q2_base10}|}{|${Q1_base10}| \\cdot ${d_base10}} $$`;
    // x=(|Q1|*d)/(|Q1|-|Q2|)
    resultadoCompleto.innerHTML += `$$ x=\\frac{|${Q1_base10}| \\cdot ${d_base10}}{|${Q1_base10}|-|${Q2_base10}|} $$`;
    // x=(|Q1|*d)/(|Q1|-|Q2|)
    resultadoCompleto.innerHTML += `$$ x=\\frac{${Q1_base10} \\cdot ${d_base10}}{${Q1_base10}-${Q2_base10}} $$`;
    const resultado = (Q1 * d) / (Q1 - Q2);
    const resultado_base10 = transformToScientificNotation(resultado);
    resultadoCompleto.innerHTML += `$$ x=${resultado_base10} m$$`;
    resultadoResumido.innerHTML += `$$ x=${resultado_base10} m$$`;
    resultadoResumido.innerHTML += `<p>O resultado encontrado para a equação Negativa é o valor encontrado a cima do ponto.</p>`
    console.log(resultado);
    console.log(typeof resultado);
    console.log(Number.isFinite(resultado));
    if (Number.isFinite(resultado) === false) {
        resultadoResumido.innerHTML = `<p>O resultado da equação é indeterminado, pois a carga 1 e a carga 2 são iguais.</p>`
        resultadoCompleto.innerHTML = `<p>O resultado da equação é indeterminado, pois a carga 1 e a carga 2 são iguais.</p>`
    }
}



function calcular3_2() {
    resultadoCompleto.innerHTML = "";
    resultadoResumido.innerHTML = "";
    let d = conversorDistancia(document.getElementById("tipo_entrada_32D").value, math.evaluate(document.getElementById("D32").value));
    let Q1 = conversorCoulomb(document.getElementById("tipo_entrada_32Q1").value, math.evaluate(document.getElementById("Q132").value));
    let Q2 = conversorCoulomb(document.getElementById("tipo_entrada_32Q2").value, math.evaluate(document.getElementById("Q232").value));
    console.log(d, Q1, Q2);
    if (isNegative(d)){
        resultadoResumido.innerHTML += `<p>Não pode ter distância negativa, por isso convertemos para positiva.</p>`;
    }
    d = math.abs(d);
    Q1 = math.abs(Q1);
    Q2 = math.abs(Q2);
    resultadoResumido.innerHTML += `Quando somamos o modulo do Potencial da Carga 1 mais o modulo do Potencial da Carga 2, chegamos a uma equação com duas soluções, uma positiva e uma negativa.`;
    if (select32.value == "Positivo") {
        posicaoPositiva(d, Q1, Q2);
    } else if (select32.value == "Negativo") {
        posicaoNegativa(d, Q1, Q2);
    } else {
        console.log("Erro");
    }
    resultadoResumido.innerHTML += `<div id="mostrarButton" class="buttons" onclick="mostrarCalculos()">Mostrar Cálculos</div>`
    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}


