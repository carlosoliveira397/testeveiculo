// This is a JavaScript file
$(document).on("click","#btnCadastrar", function(){
  $(location).attr("href","cadastra.html");
});

$(document).on("click","#btnPesquisar", function(){
  $(location).attr("href","pesquisa.html");
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

$(document).on("change","#lista", function(){
  var codigoSelecionado = $("option:selected", ("#lista")).val();
  $.ajax({
    type:"get",
    url:"https://testeveiculoc9-carlos397.c9users.io/pesquisaum.php",
    data:"codigo="+codigoSelecionado,
    dataType: "json",
    success: function(data){
       navigator.notification.alert("erro: "+data);
      $.each(data.veiculo, function(i, data){
        $("#codigo").val(data.codigo);
        $("#txtModelo").val(data.modelo);
        $("#txtCor").val(data.cor);
        $("#txtFabricante").val(data.fabricante);
        $("#dtAno").val(data.ano);
        $("#nrValor").val(data.valor);
      });
    },
    error: function(data){
      navigator.notification.alert("erro: "+data);
    }
  });
});

$(document).on("click","#btnDeletar", function(){
    var codigoSelecionado = $("option:selected", ("#lista")).val();
    $.ajax({
      type:"get",
      url:"https://testeveiculoc9-carlos397.c9users.io/deleta.php",
      data:"codigo="+codigoSelecionado,
       success: function(data){
            navigator.notification.alert(data);
            location.reload();
        },
        error:function(data){
          navigator.notification.alert("erro: "+data);
        }
    });
});

$(document).on("click","#btnAlterar", function(){
    var parametros = {
      "codigo": $("#codigo").val(),
      "modelo": $("#txtModelo").val(),
      "cor": $("#txtCor").val(),
      "fabricante": $("#txtFabricante").val(),
      "ano": $("#dtAno").val(),
      "valor": $("#nrValor").val()
    };
    $.ajax({
        type:"post",
        url:"https://testeveiculoc9-carlos397.c9users.io/altera.php",
        data: parametros,
        success: function(data){
          navigator.notification.alert(data);
          location.reload();
        },
        error:function(data){
          navigator.notification.alert("erro: "+data);
        }
    });
});

$(document).on("click", "#btnEditar", function(){
  habilita();
});

$(document).on("click", "#btnCancelar", function(){
  desabilita();
  $("#txtModelo").val("");
  $("#txtCor").val("");
  $("#txtFabricante").val("");
  $("#dtAno").val("");
  $("#nrValor").val("");
});

function desabilita(){
  $("#txtModelo").prop('readonly',true);
  $("#txtCor").prop('readonly',true);
  $("#txtFabricante").prop('readonly',true);
  $("#dtAno").prop('readonly',true);
  $("#nrValor").prop('readonly',true);
}

function habilita(){
  $("#txtModelo").prop('readonly',false);
  $("#txtCor").prop('readonly',false);
  $("#txtFabricante").prop('readonly',false);
  $("#dtAno").prop('readonly',false);
  $("#nrValor").prop('readonly',false);
}