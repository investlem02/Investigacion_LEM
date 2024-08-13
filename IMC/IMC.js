function calcularIMC() {
    // Asi obtenemos los datos que nos interesan (valores de entrada)
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('Altura').value);

    // Condiciones para que los valores sean validos
    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
        alert("Por favor, ingrese valores válidos para el peso y la altura.");
        return;
    }

    // Calcular el IMC (Proceso de datos)
    const imc = peso / (altura * altura);

     // Determinar el rango del IMC (Salida de datos)
     let categoria;
     if (imc < 18.5) {
         categoria = 'Bajo peso';
     } else if (imc >= 18.5 && imc < 24.9) {
         categoria = 'Normal';
     } else if (imc >= 25 && imc < 29.9) {
         categoria = 'Sobrepeso';
     } else {
         categoria = 'Obesidad';
     }

    // Salida de datos o resultados
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.textContent = `Tu IMC es ${imc.toFixed(2)} (${categoria})`;
}