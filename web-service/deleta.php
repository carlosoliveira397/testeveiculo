<?php
    try{
        $conexao = mysqli_connect("localhost", "carlos397", "", "etecVeiculo");
        
        $codigo = $_GET['codigo'];
        
        $query = "DELETE FROM tb_veiculo WHERE cd_veiculo = $codigo";
        
        $result = mysqli_query($conexao, $query);
        
        echo "Dado deletado!";
        
    }catch(Exception $e){
        echo "Erro ao deletar!";
    }finally{
        $conexao -> close();
    }
?>