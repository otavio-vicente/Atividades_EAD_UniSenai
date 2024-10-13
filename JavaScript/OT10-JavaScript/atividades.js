//1. Criando um Convite: Use a concatenação de strings para criar um
//convite. Inclua o nome do destinatário, o tipo de evento e a data, usando
//variáveis
let destinatarioNome = "Choin";
let evento = "churrasco";
let data = "13/10/2024"
let convite = "Olá " + destinatarioNome + ", você está sendo convidado a para participar do " + evento + " que será realizado no dia " + data + ", aguardo retorno."
console.log(convite);

console.log("\n==============================================\n");

//2. Diário de Bordo: Escreva um pequeno diário de bordo usando template
//literals, incluindo data, local e uma descrição do que aconteceu no dia.
let dataExpedicao = "10 de outubro de 2024";
let local = "Pico do Itapeva";
let expedicao = "Expedição à Serra da Mantiqueira";
let descrição = `Diário de Bordo - ${expedicao} \nData: ${dataExpedicao}.\n Local: ${local}.\n Descrição do Dia: Hoje, começamos a trilha às 7h da manhã. A caminhada foi desafiadora, com trechos íngremes e escorregadios devido à umidade. No caminho, avistamos diversas espécies de aves e algumas flores nativas, que trouxeram cor ao ambiente cinza.`;
console.log(descrição);

console.log("\n==============================================\n");

//3. Redator de Notícias: Crie uma string que represente uma notícia,
//utilizando o método replace() para substituir um fato errado por um
//correto.
let noticia = "Uma equipe de cientistas da Universidade de Oceanografia da Costa Oeste anunciou hoje a descoberta de uma ilha desconhecida no Oceano Pacífico. A ilha, chamada de 'Ilha de Esperança', foi identificada durante uma expedição de rotina para mapear os fundos marinhos da região."
console.log("Antes do replace: " + noticia);
console.log("------------------------------------------------");
let noticiaCorrigida = noticia.replace("hoje", "a poucos minutos");
console.log("Após o replace: " + noticiaCorrigida);

console.log("\n==============================================\n");

//4. Caixa de Comentários: Use o método trim() para limpar os
//comentários dos usuários antes de publicá-los em um blog ou fórum.

let comentario = "      Adorei o post! 💖 A forma como você explicou sobre o impacto das pequenas mudanças no nosso dia a dia realmente me fez refletir. Comecei a implementar algumas dicas e já sinto a diferença! Estou ansiosa para ver como isso vai evoluir ao longo do tempo. Continue compartilhando suas experiências, são super inspiradoras! 😊     ";
let comentarioSemEspaco = comentario.trim();
console.log(comentarioSemEspaco);

console.log("\n==============================================\n");

//5. Carta para um Amigo: Utilize \\n para formatar uma carta para um
//amigo, com saudação, corpo da mensagem e despedida, cada um em
//uma nova linha.

let cartaParaAmigo = `Caro Amigo,

Espero que esta mensagem te encontre bem! Estava pensando em todas as nossas aventuras e como sinto falta dos nossos momentos juntos. Vamos marcar um encontro em breve?

Aguardo sua resposta!

Um grande abraço,
Otávio`;

console.log(cartaParaAmigo);

console.log("\n==============================================\n");

//6. Citações Famosas: Crie uma string que inclua uma citação famosa de
//uma pessoa, utilizando caracteres de escape para incluir aspas na
//citação
let citacao = "Albert Einstein disse: \"A imaginação é mais importante que o conhecimento.\"";
console.log(citacao);
