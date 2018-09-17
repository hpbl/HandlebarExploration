$(function  () {
  var shoesData = [
    {name:"Nike", price:199.00 }, 
    {name:"Loafers", price:59.00 }, 
    {name:"Wing Tip", price:259.00 }
  ];

   // Captura o html do template dentro da tag script
  var theTemplateScript = $("#shoe-template").html(); 
​
   // Compila o template
   var theTemplate = Handlebars.compile(theTemplateScript); 
   $(".shoesNav").append(theTemplate(shoesData)); 
​
  ​// Passamos o objeto shoesData para ser compilado na função do handlebars.
  // A função irá inserir todos os valores do objeto nos seus devidos lugares no HTML e retorna o HTML como uma string. Então usamos jQuery para adicionar este conteúdo na página.
});