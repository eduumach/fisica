const select32 = document.getElementById("choose3.2");
const quadro32 = document.getElementById("campos_entrada2")

select32.addEventListener("change", (event) => {
    if (select32.value == "Positivo" || select32.value == "Negativo") {
        quadro32.innerHTML = `
        <span>d - Distância (m)</span>
        <input class="entradaNumeros" type="string" placeholder="Ex: 25" id="D32" step="0.01" required>
        <span>Q1 - Carga 1 (C)</span>
        <input class="entradaNumeros" type="string" placeholder="Ex: 1.602*10^-19" id="Q132" step="0.01" required>
        <span>Q2 - Carga 2 (C)</span>
        <input class="entradaNumeros" type="string" placeholder="Ex: 1.602*10^-19" id="Q232" step="0.01" required>
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

}



function calcular3_2() {
    resultadoCompleto.innerHTML = "";
    resultadoResumido.innerHTML = "";
    let d = math.evaluate(document.getElementById("D32").value);
    let Q1 = math.evaluate(document.getElementById("Q132").value);
    let Q2 = math.evaluate(document.getElementById("Q232").value);
    console.log(d, Q1, Q2);
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


