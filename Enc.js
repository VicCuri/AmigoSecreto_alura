function encriptar(){
		var frase = document.getElementById("textoEncriptar").value.toLowerCase();
		var textoE = frase.replace(/e/img, "enter");
		var textoE = textoE.replace(/i/img, "imes");
		var textoE = textoE.replace(/a/img, "ai");
		var textoE = textoE.replace(/o/img, "ober");
		var textoE = textoE.replace(/u/img, "ufat");

		document.getElementById("textoD").innerHTML = textoE;
	}
