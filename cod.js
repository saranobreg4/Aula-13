var idade
idade = prompt("Digite a idade: ")
if(idade > 15 && idade < 18 || idade > 70 )
    {
        document.write("Voto não obrigatório.")
    }
    else if(idade < 16)
    {
        document.write("Não poderá votar.")
    }
    else
    {
        document.write("Você poderá votar.")
    }