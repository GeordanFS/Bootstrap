let assunto = window.document.getElementById('assunto')
let email = document.querySelector("#email")
let mensagem = document.querySelector("#mensagem")
let assuntoOk = false
let emailOk = false
let mensagemOk = false



function validaAssunto() {
    let txt = document.querySelector("#txtassunto")
    if(assunto.value.length <3){
       txt.innerHTML="Assunto inválido"
       txt.style.color="red"
       assuntoOk=false
    }
       else{
        txt.style.display="none"
        assuntoOk=true
    }


    }
    function validaEmail() {
        let txt = document.querySelector("#txtEmail")
        if(email.value.indexOf("@")==-1 || email.value.indexOf(".")==-1){
           txt.innerHTML="Email inválido"
           txt.style.color="red"
           emailOk=false
        }
           else{
            txt.innerHTML="Email válido" 
            txt.style.color="green"
            emailOk=true
        }}

        function validaMensagem() {
            let txt = document.querySelector("#txtMensagem")
            if(mensagem.value.length >=100){
               txt.innerHTML="Texto muito grande, digite até 100 caracteres"
               txt.style.backgroundColor="red"
               txt.style.color="black"
               txt.style.display="block"
               mensagemOk=false
            }
               else{
                txt.style.display="none"
                mensagemOk=true
            }}

    function enviar(){
        if(assuntoOk==true && emailOk==true && mensagemOk==true){
            alert("Formulário enviado")
        }
        else{
            alert("Preencha os campos corretamente")
        }
    }

