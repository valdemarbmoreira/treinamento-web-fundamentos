 let form = document.getElementById("form");

 form.addEventListener("submit", function(event) {

     event.preventDefault();

     const name = form.elements["nome"].value;
     const email = form.elements["email"].value;
     const message = form.elements["mensagem"].value;

     console.log("Nome:", name);
     console.log("E-mail:", email);
     console.log("Mensagem:", message);

 });