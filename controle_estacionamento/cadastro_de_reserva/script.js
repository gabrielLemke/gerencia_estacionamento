function formatarPlaca(input) {
    var placa = input.value;

    placa = placa.replace(/[^a-zA-Z0-9]/g, '');

    if (placa.length >= 7) {
      placa = placa.slice(0, 3) + '-' + placa.slice(3, 7);
    }

    input.value = placa;
  }


function validarFormulario() {

    var placa = document.getElementById('placa-input').value;
    var proprietario = document.getElementById('proprietario').value;
    var apartamento = document.getElementById('apartamento').value;
    var bloco = document.getElementById('bloco').value;
    var modelo = document.getElementById('modelo').value;
    var cor = document.getElementById('cor').value;
    var vaga = document.getElementById('vaga').value;

    if (placa === '' || proprietario === '' || apartamento === '' || bloco === '' || modelo === '' || cor === '' || vaga === '') {

      alert('Por favor, preencha todos os campos.');

    } else {

      alert('Reserva cadastrada com sucesso!')
      document.getElementById('meuFormulario').submit();
      
    }

  }