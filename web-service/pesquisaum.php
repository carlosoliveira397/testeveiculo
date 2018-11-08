<?php
    try{
        $conexao = mysqli_connect("localhost", "carlos397", "", "etecVeiculo");
        
        $codigo = $_GET['codigo'];
        
        $query = "SELECT * FROM tb_veiculo WHERE cd_veiculo = $codigo";
        
        $result = mysqli_query($conexao, $query);
        
        $linha = mysqli_fetch_assoc($result);
        
        $registro = array(
            'veiculo' => array(
                array(
                    'codigo' => $linha['cd_veiculo'],
                    'modelo' => $linha['nm_modelo'],
                    'cor' => $linha['nm_cor'],
                    'fabricante' => $linha['nm_fabricante'],
                    'ano' => $linha['dt_ano'],
                    'valor' => $linha['vl_preco']
                )
            )
        );
        
        echo json_encode($registro);
        
    }catch(Exception $e){
        echo "Erro ao pesquisar o veículo!";
    }finally{
        $conexao -> close();
    }
?>