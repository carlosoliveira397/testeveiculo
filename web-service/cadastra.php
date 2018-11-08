<?php
    try{
        $conexao  = mysqli_connect("localhost", "carlos397", "", "etecVeiculo");
        
        $modelo = $_POST['modelo'];
        $cor = $_POST['cor'];
        $fabricante = $_POST['fabricante'];
        $ano = $_POST['ano'];
        $valor = $_POST['valor'];
        
        $query = "INSERT INTO tb_veiculo VALUES(NULL, '$modelo', '$cor', '$fabricante', '$ano', $valor)";
        
        mysqli_query($conexao, $query);
        
        echo "Cadastro efetuado com sucesso!";
    }catch(Exception $e){
        echo "Erro ao cadastrar!";
    }finally{
        $conexao->close();
    }
?>