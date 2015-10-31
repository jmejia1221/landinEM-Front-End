$(document).ready(function(){
    $("#envio").click(function(){
    	var nom = document.getElementById("nombre").value;
    	var tel = document.getElementById("telefono").value;
    	var em = document.getElementById("email").value;
    	var ciu = document.getElementById("ciudad").value;
    	var men = document.getElementById("mensaje").value;
      $.post("../../landingemanager/php/setcliente.php",
      {
        nombre: nom,
        telefono: tel,
        email: em,
        ciudad: ciu,
        mensaje: men
      },
      function(data,status){
        console.log(data);
        console.log(status);
      });
    });
    
    $('#suscribirse').click(function(){
      var correo = document.getElementById("correo").value;
      $.post("../../landingemanager/php/sendmail.php",
        {
          mail: correo
        },
        function(data, status) {
          console.log(data);
          console.log(status);
        });
    });
});