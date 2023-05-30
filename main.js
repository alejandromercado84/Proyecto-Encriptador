function verificarEntrada()
{
  const regex = /^[a-z\s]+$/; // Expresión que solo permite letras minúsculas y espacios
  const texto = document.getElementById("texto").value.trim(); // Agregar trim() para eliminar espacios en blanco

  if(texto === "") {
    alert("Inserte un texto antes de encriptar o desencriptar");
    return false;
  }

  if (!regex.test(texto)) {
    alert("Sólo se permite letras minúsculas y espacios");
    return false;
  }

  return true;
}

function encriptar()
{
  if(!verificarEntrada())
    {
      return;
    }

  let texto = document.getElementById("texto").value;
  let resultado = "";

  for (let i = 0; i < texto.length; i++)
  {
    switch (texto[i])
    {
      case "e":
        resultado += "enter"; // += es resultado = resultado + (letras que queramos)
        break;
      case "i":
        resultado += "imes";
        break;
      case "a":
        resultado += "ai";
        break;
      case "o":
        resultado += "ober";
        break;
      case "u":
        resultado += "ufat";
        break;
      default:
        resultado += texto[i];
        break;
    }
  }
  document.getElementById("resultado").value = resultado;
}

function desencriptar()
{
  if (!verificarEntrada())
  {
    return;
  }
  var texto = document.getElementById("texto").value;
  var resultado = "";

  for (var i = 0; i < texto.length; i++)
  {
    if (i < texto.length - 4)
    {
      switch (texto.substring(i, i + 5))
      {
        case "enter":
          resultado += "e";
          i += 4;
          break;
        case "imes":
          resultado += "i";
          i += 4;
          break;
        case "ai":
          resultado += "a";
          i += 1;
          break;
        case "ober":
          resultado += "o";
          i += 3;
          break;
        case "ufat":
          resultado += "u";
          i += 3;
          break;
        default:
          resultado += texto[i];
          break;
      }
    }
    else
      {
        resultado += texto[i];
      }
  }

  // Reemplazamos todas las ocurrencias de "enter", "imes", "ai", "ober" y "ufat" con sus respectivas letras.
  resultado = resultado.replace(/enter/g, "e"); //g es de global
  resultado = resultado.replace(/imes/g, "i");
  resultado = resultado.replace(/ai/g, "a");
  resultado = resultado.replace(/ober/g, "o");
  resultado = resultado.replace(/ufat/g, "u");

  document.getElementById("resultado").value = resultado;
}