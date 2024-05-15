function generarCorreo() {
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var fechaNacimiento = document.getElementById("fechaNacimiento").value;
    
    // Obtener las iniciales de los nombres y apellidos
    var iniciales = nombre.charAt(0) + apellidos.split(" ")[0].charAt(0) + apellidos.split(" ")[1].charAt(0);
    
    // Calcular el dominio del correo
    var dominio = (new Date().getFullYear() - new Date(fechaNacimiento).getFullYear()) < 2000 ? "@gmail.com" : "@hotmail.com";
    
    // Generar el correo
    var correo = iniciales.toLowerCase() + (new Date().getFullYear() - new Date(fechaNacimiento).getFullYear()) + dominio;
    
    // Mostrar el correo generado
    document.getElementById("resultadoCorreo").innerHTML = "Correo generado: " + correo;
  }
