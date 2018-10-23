// This is a JavaScript file
$(document).on("click","#btnCadastrar", function(){
  $(location).attr("href","cadastra.html");
});

$(document).on("click","#btnPesquisar", function(){
  $(location).attr("href","pesquisa.html");
});

$(document).on("click", "#btnCancelar", function(){
  $(location).attr("href", "index.html");
});

$(document).on("click","#btnEnviar", function(){
  var parametros = {
    "modelo": $("#txtModelo").val(),
    "cor": $("#txtCor").val(),
    "fabricante": $("#txtFabricante").val(),
    "ano": $("#dtAno").val(),
    "valor": $("#nrValor").val()
  };
  
  $.ajax({
    type:"post",
    url:"https://testeveiculoc9-carlos397.c9users.io/cadastra.php",
    data: parametros,
    success: function(data){
      navigator.notification.alert(data);
      $("#txtModelo").val("");
      $("#txtCor").val("");
      $("#txtFabricante").val("");
      $("#dtAno").val("");
      $("#nrValor").val("");
    },
    error:function(data){
      navigator.notification.alert("erro: "+data);
    }
  });
});

function pesquisar(){
  $.ajax({
    type:"post",
    url: "https://testeveiculoc9-carlos397.c9users.io/pesquisa.php",
    dataType: "json",
    success: function(data){
      var itemLista = "";
      $.each(data.veiculo, function(i, dados){
        itemLista += "<option value='"+dados.codigo+"'>"+dados.modelo+"</option>";
      });
      $("#lista").html(itemLista);
    },
    error:function(data){
      navigator.notification.alert("erro: "+data);
    }
  });
}