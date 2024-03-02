
let lista = []
let opcao = ""

do{
    let paciente = ""
    for(let i = 0; i < lista.length; i++){
    paciente += (i + 1) + " º - " + lista[i] + "\n"    
    }
    opcao = prompt("Paciente:\n" + paciente + 
    "\nEscolha uma opção: \n1)Novo Paciente - \n2)Consultar Paciente - \n3)Sair "
    )
    switch(opcao){
        case "1":
            const novoPaciente = prompt("Qual o nome do paciente: ")
            lista.push(novoPaciente)
            break
        case "2":
            const pacienteConsultado = lista.shift()
            if(!pacienteConsultado){
                alert("Não tem paciente na fila.")
            }else{
                alert(pacienteConsultado + " foi removido da fila.")
            }
            break
        case "3":
            alert("Saindo...")
            break
        default:
            alert("Erro404 - Erro404 - Erro404 - Erro404")
    }
}while(opcao !== "3");
