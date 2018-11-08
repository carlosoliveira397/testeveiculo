<?php
    try{
        $conexao = mysqli_connect("localhost", "carlos397", "", "etecVeiculo");
        
        $query = "SELECT * FROM tb_veiculo ORDER BY cd_veiculo ASC";
        
        $result = mysqli_query($conexao, $query);
        
        $registro = array(
          'veiculo' => array()  
        );
        
        $i = 0;
        
        while($linha = mysqli_fetch_assoc($result)){
            $registro['veiculo'][$i] = array(
                'codigo' => $linha['cd_veiculo'],
                'modelo' => $linha['nm_modelo'],
                'cor' => $linha['nm_cor'],
                'fabricante' => $linha['nm_fabricante'],
                'ano' => $linha['dt_ano'],
                'valor' => $linha['vl_preco']
            );
            $i++;
        }
        
        echo json_encode($registro);
        
    }catch(Exception $e){
        echo "Erro ao pesquisar!";
    }finally{
        $conexao -> close();
    }
?>