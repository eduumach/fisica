const select33 = document.getElementById("choose3.3");
const quadro33 = document.getElementById("campos_entrada3")



function calculateDerivative(expression, key, variables) {
    const derivative = math.derivative(expression, key);
    const negative = math.simplify('-' + `(${derivative})`);
    const substitute = negative.compile();
    const result = substitute.evaluate(variables);

    if (result == Infinity) {
        throw new Error("O resultado da derivada é indeterminado.");
    }

    return { negative: negative.toString(), result: result };
}


function calculateComVariaveis(expression, variables) {
    const equivalent = { x: "i", y: "j", z: "k" };
    let variableCalculations = {};

    for (const key in variables) {
        variableCalculations[key] = calculateDerivative(expression, key, variables);
    }

    let finalExpressionNegative = '';
    let finalExpression = '';

    for (const key in variableCalculations) {
        const { negative, result } = variableCalculations[key];
        finalExpressionNegative += `(${negative}${equivalent[key]}) + `;
        finalExpression += `(${result}${equivalent[key]}) + `;
        resultadoResumido.innerHTML += `<p>Valor do Campo Elétrico (E) no eixo ${key}: ${negative}</p>`;
    }

    console.log(finalExpressionNegative);
    console.log(finalExpression);

    finalExpressionNegative = finalExpressionNegative.replace(/\+ $/, '');
    finalExpression = finalExpression.replace(/\+ $/, '');

    resultadoResumido.innerHTML += `$$ \\overrightarrow{E}=(${finalExpressionNegative}) $$`;
    resultadoResumido.innerHTML += `$$ \\overrightarrow{E}=(${finalExpression}) $$`;
}


function calcular3_3() {
    resultadoResumido.innerHTML = "";
    resultadoResumido.innerHTML = "";
    let f = document.getElementById("formula3_3").value;
    let x = math.evaluate(document.getElementById("X3_3").value);
    let y = math.evaluate(document.getElementById("Y3_3").value);
    let z = math.evaluate(document.getElementById("Z3_3").value);
    console.log(f, x, y, z);

    const variables = {
        x: x,
        y: y,
        z: z
    };

    calculateComVariaveis(f, variables);
    // resultadoResumido.innerHTML += `<div id="mostrarButton" class="buttons" onclick="mostrarCalculos()">Mostrar Cálculos</div>`
    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}
