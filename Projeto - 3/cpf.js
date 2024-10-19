function validarCpf() {
    const input = document.getElementById('input-cpf').value.replace(/\D/g, '');
    const resultado = document.getElementById('resultado');

    resultado.innerHTML = '';

    if (testaCPF(input)) {
        resultado.innerHTML = `CPF de número ${input} válido.`;
        resultado.style.color = 'green';
    } else {
        resultado.innerHTML = `CPF de número ${input} inválido. Tente novamente.`;
        resultado.style.color = 'red';
    }

    resultado.style.fontWeight = '800';
    resultado.style.fontSize = '.625rem';
    resultado.style.marginTop = '1rem';
}

function testaCPF(strCPF) {
    let Soma;
    let Resto;
    Soma = 0;

    if (strCPF.length !== 11 || /^(\d)\1{10}$/.test(strCPF)) return false;

    for (let i = 1; i <= 9; i++) {
        Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    }

    Resto = (Soma * 10) % 11;

    if ((Resto === 10) || (Resto === 11)) Resto = 0;
    if (Resto !== parseInt(strCPF.substring(9, 10))) return false;

    Soma = 0;
    for (i = 1; i <= 10; i++) {
        Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    }

    Resto = (Soma * 10) % 11;

    if ((Resto === 10) || (Resto === 11)) Resto = 0;
    if (Resto !== parseInt(strCPF.substring(10, 11))) return false;

    return true;
}
