 

function recarrega(){
    location.reload();
}

function muda(elemento){
    
    jogador = document.getElementById('valor');
    
    if (jogador.innerHTML == 'X') {
        let player = document.getElementById('troca_'+elemento);
        let HTMLTemporario = player.innerHTML;
      
        if (HTMLTemporario != "" || HTMLTemporario.length >= 1) {
           
            Swal.fire({
                position: 'center',
                title: 'Já Foi escolhido',
                showConfirmButton: false,
                timer: 1000
              });
        }else{
           

              let HTMLNovo = 'X'; 
              HTMLTemporario = HTMLNovo + HTMLTemporario;
              player.innerHTML = HTMLTemporario;
              jogador.innerHTML = "0";
      
      
              Swal.fire({
                  position: 'center',
                  title: 'Jogador 0',
                  showConfirmButton: false,
                  timer: 1000
                });

        }
    }else{
        let player = document.getElementById('troca_'+elemento);
        let HTMLTemporario = player.innerHTML;

        if (HTMLTemporario != "" || HTMLTemporario.length >= 1) {
           
            Swal.fire({
                position: 'center',
                title: 'Já Foi escolhido',
                showConfirmButton: false,
                timer: 1000
              });
        }else{
          
            let HTMLNovo = '0'; 
            HTMLTemporario = HTMLNovo + HTMLTemporario;
            player.innerHTML = HTMLTemporario;
            jogador.innerHTML = "X";


            Swal.fire({
                position: 'center',
                title: 'Jogador X',
                showConfirmButton: false,
                timer: 1000
            });
        }

    }
    
      
}  
