<?php
    try{
        $conexao = mysqli_connect("localhost", "carlos397", "", "etecVeiculo");
        
        $codigo = $_POST['codigo'];
        $modelo = $_POST['modelo'];
        $cor = $_POST['cor'];
        $fabricante = $_POST['fabricante'];
        $ano = $_POST['ano'];
        $valor = $_POST['valor'];
        
        $query = "UPDATE tb_veiculo SET nm_modelo = '$modelo', nm_cor = '$cor', nm_fabricante = '$fabricante', dt_ano = '$ano', vl_preco = '$valor' WHERE cd_veiculo = $codigo";//<!> verifica sintaxe
        
        mysqli_query($conexao, $query);
        
        echo "Dado atualizado!";
        
    }catch(Exception $e){
        echo "Erro ao atualizar!";
    }finally{
        $conexao -> close();
    }
?>