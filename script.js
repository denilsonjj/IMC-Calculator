function calculate() {
    var height = (document.getElementById("height").value / 100)
    var weight = document.getElementById("weight").value
    
    var imc = weight / height ** 2;
    var text=""

    if (imc < 18.5) {
        text=("Você está magro") 
    } else if (imc < 25) {
        text=("Peso normal")

    } else if (imc < 29.9) {
        text=("Sobre peso")
    } else if (imc < 34.9) {
        text=("Obesidade grau 1")
    }else if (imc < 39.9) {
        text=("Obesidade grau 2")

    }
    else if (imc > 40) {
        text=("Obesidade Mórbida")
    }
    document.getElementById("text_area").innerText=text
}


