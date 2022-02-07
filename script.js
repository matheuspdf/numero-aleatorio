// //atribui um número aleatório entre 1 e 100, calculando usando um algoritmo matemático
let numeroAleatorio = Math.floor(Math.random() * 100) + 1

// //três variaveis criadas para guardar uma referência para os parágrafos resultantes no HTML, e são usadas para inserir valores nos parágrafos no código:
let palpites = document.querySelector('.palpites')
let ultimoResultado = document.querySelector('.ultimoResultado')
let baixoOuAlto = document.querySelector('.baixoOuAlto')

// //duas variáveis que armazenam referências para o campo de texto e o botão de envio, são usados para controlar o envio do palpite
let envioPalpite = document.querySelector('.envioPalpite')
let campoPalpite = document.querySelector('.campoPalpite')

// //são usadas para armazenar a contagem dos palpites do usuário, e o outro é uma referência para o botão de reset, que não existe ainda (mas irá existir).
let contagemPalpites = 1
let botaoReinicio

/* ------------------------------------------------------------- */

function conferirPalpite() {
  var palpiteUsuario = Number(campoPalpite.value)
  if (contagemPalpites === 1) {
    palpites.textContent = 'Palpites anteriores: '
  }
  palpites.textContent += palpiteUsuario + ' '

  if (palpiteUsuario === numeroAleatorio) {
    ultimoResultado.textContent = 'Parabéns! Você acertou!'
    ultimoResultado.style.backgroundColor = 'green'
    baixoOuAlto.textContent = ''
    configFimDeJogo()
  } else if (contagemPalpites === 10) {
    ultimoResultado.textContent = '!!!FIM DE JOGO!!!'
    baixoOuAlto.textContent = ''
    configFimDeJogo()
  } else {
    ultimoResultado.textContent = 'Errado!'
    ultimoResultado.style.backgroundColor = 'red'
    if (palpiteUsuario < numeroAleatorio) {
      baixoOuAlto.textContent = 'Seu palpite está muito baixo!'
    } else if (palpiteUsuario > numeroAleatorio) {
      baixoOuAlto.textContent = 'Seu palpite está muito alto!'
    }
  }

  contagemPalpites++
  campoPalpite.value = ''
  campoPalpite.focus()
}

envioPalpite.addEventListener('click', conferirPalpite)

function configFimDeJogo() {
  campoPalpite.disabled = true
  envioPalpite.disabled = true
  botaoReinicio = document.createElement('button')
  botaoReinicio.textContent = 'Iniciar novo jogo'
  document.body.appendChild(botaoReinicio)
  botaoReinicio.addEventListener('click', reiniciarJogo)
}

function reiniciarJogo() {
  contagemPalpites = 1

  var reiniciarParas = document.querySelectorAll('.resultadoParas p')
  for (var i = 0; i < reiniciarParas.length; i++) {
    reiniciarParas[i].textContent = ''
  }

  botaoReinicio.parentNode.removeChild(botaoReinicio)

  campoPalpite.disabled = false
  envioPalpite.disabled = false
  campoPalpite.value = ''
  campoPalpite.focus()

  ultimoResultado.style.backgroundColor = 'white'

  numeroAleatorio = Math.floor(Math.random() * 100) + 1
}
