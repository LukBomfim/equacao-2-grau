var atxt = document.getElementById("a")
var btxt = document.getElementById("b")
var ctxt = document.getElementById("c")
var respostaDelta = document.getElementById("respostaDelta")
var respostaBhaskara = document.getElementById("respostaBhaskara")

function limpar(){
    atxt.value = ''
    btxt.value = ''
    ctxt.value = ''
    respostaDelta.innerHTML = ''
    respostaBhaskara.innerHTML = ''
}
function calcular(){
    var a = Number(atxt.value)
    var b = Number(btxt.value)
    var c = Number(ctxt.value)
    var delta = (b**2) - (4*a*c)
    var x1 = Math.floor(((-b + Math.sqrt(delta)) / (2*a)) * 100) / 100
    var x2 = Math.floor(((-b - Math.sqrt(delta)) / (2*a)) * 100) / 100

    // Cálculo de Delta Δ
    respostaDelta.innerHTML = 
    `
    Δ = ${b}² - 4.${a}.${c} <br>
    Δ = ${b**2} - ${4*a}.${c} <br>
    Δ = ${b**2} - ${4*a*c} <br>
    <div id="resultadoDelta"> Δ = ${(b**2) - (4*a*c)}
    </div> <br>
    `
    
    // Mensagem de Erro caso o Delta seja negativo
    if (delta < 0){ 
        respostaBhaskara.innerHTML = `
        <div id="msgErro"> 
            Não é possível calcular. 
            Valor de delta é negativo!
        </div>
        `
    } else{
        // Cálculo de Bhaskara
        respostaBhaskara.innerHTML = 
        `
        <div class="x">
            x' = 
            <sup> ${-b} + √${delta}</sup>
            /
            <sub>2.${a}</sub> <br>

            x' = 
            <sup> ${-b} + ${Math.sqrt(delta)}</sup>
            /
            <sub>${2*a}</sub> <br>

            x' = 
            <sup> ${-b + Math.sqrt(delta)}</sup>
            /
            <sub>${2*a}</sub> <br>

            <div class="resultadoBhaskara">
                x' = ${x1}
            </div>
            
            <br>
        </div>

        <div class="x">
            x" = 
            <sup> ${-b} - √${delta}</sup>
            /
            <sub>2.${a}</sub> <br>

            x" = 
            <sup> ${-b} - ${Math.sqrt(delta)}</sup>
            /
            <sub>${2*a}</sub> <br>

            x" = 
            <sup> ${-b - Math.sqrt(delta)}</sup>
            /
            <sub>${2*a}</sub> <br>

            <div class="resultadoBhaskara">
                x" = ${x2}
            </div>

            <br>
        <div class="x">

        <div id="resultado">
            S = {${x1}, ${x2}}
        </div>
        `
    }
}
