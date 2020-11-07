/* Variables para cifrar */
const desplazamiento = document.getElementById("desplazamiento");
const texto = document.getElementById("texto");
const textoCifrado = document.getElementById("cifrado");

/* Variables para descifrar */
const desplazamientoparadescifrar = document.getElementById("desplazamientoparadescifrar");
const textodescifrar = document.getElementById("txtdescifrar");
const textodescifrado = document.getElementById("descifrado");

function cifrado() {
	const textoIngresado = texto.value;
	textoCifrado.value = textoIngresado.split('').map(c => {
		let mayus = (c === c.toUpperCase()) ? true : false;
		let valorEntero = c.toLowerCase().charCodeAt(0);
		if (valorEntero >= 97 && valorEntero <= 122) {
			const valorDesplazamiento = parseInt(desplazamiento.value);
			document.getElementById("valor").innerHTML = valorDesplazamiento;
			if (valorEntero + valorDesplazamiento > 122)
				valorEntero = 97 + (valorEntero - 122) + valorDesplazamiento - 1;
			else
				valorEntero = valorEntero + valorDesplazamiento;
		}
		let cifrado = String.fromCharCode(valorEntero);
		return mayus ? cifrado.toUpperCase() : cifrado;
	}).join('');
}

function descifrado() {
	const textoIngresado = textodescifrar.value;
	textodescifrado.value = textoIngresado.split('').map(c => {
		let mayus = (c === c.toUpperCase()) ? true : false;
		let valorEntero = c.toLowerCase().charCodeAt(0);
		if (valorEntero >= 97 && valorEntero <= 122) {
			const valorDesplazamiento = parseInt(desplazamientoparadescifrar.value);
			document.getElementById("valorparadescifrar").innerHTML = valorDesplazamiento;
			if (valorEntero + valorDesplazamiento > 122)
				valorEntero = 97 - (valorEntero + 122) - valorDesplazamiento + 1;
			else
				valorEntero = valorEntero - valorDesplazamiento;
		}
		let cifrado = String.fromCharCode(valorEntero);
		return mayus ? cifrado.toUpperCase() : cifrado;
	}).join('');
}


texto.addEventListener("keyup", cifrado);
textodescifrar.addEventListener("keyup", descifrado);
desplazamiento.addEventListener("change", cifrado);
desplazamientoparadescifrar.addEventListener("change", descifrado);