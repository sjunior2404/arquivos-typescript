const pessoa ={
    nome: 'Mariana',
    idade:28,
    profissao: 'Desenvolvedora'
}

pessoa.idade = 29;


enum Profissao{
    Professora,
    Atriz,
    Desenvolvedora,
    JogadoraDeFutebol
}

interface IPessoa{
    nome:string,
    idade:number,
    profissao:Profissao
}

interface IEstudante extends IPessoa{
    materias:string[],
}

const vanessa:IEstudante ={
    nome:'Vanessa',
    idade:23,
    profissao:Profissao.Desenvolvedora,
    materias:['matematica', 'portugues', 'geografia']
}

function listar(lista:string[]){
    for (const item of lista){
        console.log('-  ',item)
    }
}

listar(vanessa.materias);