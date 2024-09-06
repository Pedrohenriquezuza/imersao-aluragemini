function pesquisar() {
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value;
  
  console.log(campoPesquisa);

  if (!campoPesquisa){
    section.innerHTML = "<p> Não foi encontrado.<br> Você precisa digitar o nome de um atleta ou um esporte </p>"
    return
  }

  campoPesquisa = campoPesquisa.toLowerCase()

  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";

  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase()
    //Se titulo includes campoPesquisa 
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){

      //Cria um novo elemento
      resultados += `<div class="item-resultado">
    <h2><a href="#">${dado.titulo}</a></h2>

    <p class="descricao-meta">${dado.descricao}</p>
    
    <a href=${dado.link} target="_blank">Saiba Mais</a>
    </div>`;
    }
  } 

  if (!resultados){
    resultados = "<p> Não foi encontrado. Você precisa digitar o nome de um atleta ou um esporte </p>"
  }

  section.innerHTML = resultados;
}

/*if (campoPesquisa == dados[0].titulo){

}*/