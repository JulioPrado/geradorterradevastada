
function randomAte(numMaximo){
	 /* 
	 de 0 a numMaximo -1.
	 se colocar numMaximo+1 no argumento, 
	 vai de 1 até numMaximo.
	 */
	return Math.floor(Math.random()*(numMaximo));
}

function randomEntre(min,max){
	/* valor mínimo = min e valor máximo=max */
   return Math.floor(Math.random() * (max-min+1)+min);
}	


function imprimirFicha() {
    /*conteudoImprimir = document.getElementById('ficha').innerHTML;
    document.body.innerHTML = conteudoImprimir;*/
    window.print();

    /*document.location.reload(); */
}

function getNomeAleatorio(){
  let quantidadeDeSilabas=getRandomIntInclusive(2,3);
  let nome="";
  for (contadorSilaba=1;contadorSilaba<=quantidadeDeSilabas;contadorSilaba++){
    nome=nome +  getConsoanteAleatoria() + getVogalAleatoria() ;
  }

  return nome;

}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getVogalAleatoria(){

  let listaVogais="AEOIUY";
  let numeroAleatorio=getRandomIntInclusive(1, 6);

  return listaVogais.substring(numeroAleatorio-1,numeroAleatorio);

}

function getConsoanteAleatoria(){

  let listaConsoantes="BCDFGHJKLMNPQRSTVXWZ";
  let numeroAleatorio=getRandomIntInclusive(1, 20);

  return listaConsoantes.substring(numeroAleatorio-1,numeroAleatorio);

}

/*-------------------------------------- gerar ficha--*/
function gerarPersonagem(tipo){
	
	var personagem={
	'nome': '',
	'idade':undefined,
	'obstrucoes': 0,
	'caracteristicas':[],
	'condicoes':[],
	'tormentos':[]
	}

	switch(tipo){
		case 'humano':

			//define Nome
			function defineNome(){
				personagem.nome=getNomeAleatorio();

				/* depois fazer lista de nomes
				https://gerador-nomes.herokuapp.com
				https://pt.fakenamegenerator.com/gen-random-us-us.php
				*/
			}
			defineNome();

			//define Idade
			 personagem.idade=randomEntre(6,70);

			 //define obstrucoes
			 personagem.obstrucoes=randomEntre(0,6);

			 //define características
			 if (personagem.idade>17) {
			 	personagem.caracteristicas.push(caracProfiss[randomAte(caracProfiss.length)]);
			 }

			 function colocarAleatNoArray(listaOrigem,listaDestino) {
			  	/* se o item randômico já tem no array, ele gera outro item randômico, até achar um que não tenha. */
			  do{
			 		var item = listaOrigem[randomAte(listaOrigem.length)];
			 		console.log('Entrou no laço.')

			 		if (listaDestino.indexOf(item) > -1) {
			 		}else{
			 			listaDestino.push(item);
			 			 //senão dá looping infinito
			 			 break;
			 		}
			 	 }while (listaDestino.indexOf(item) > -1);
			 }

/* atribuições das características totalmente aleatórias ----------*/
			 for (var i=0; i<12;i++){

			 	colocarAleatNoArray(caracTodas,personagem.caracteristicas); 	
			 	
			 }


/* ---------abaixo atribuição das características por nicho -----------------
			 //Atribuindo Características Físicas
			 for (var i=0; i<4;i++){

			 	colocarAleatNoArray(caracFisico,personagem.caracteristicas); 
			 }
		 	
		 	 //Atribuindo Características Mentais
			 for (var i=0; i<4;i++){

			 	colocarAleatNoArray(caracMental,personagem.caracteristicas); 
			 }
			 

			 //Atribuindo Características Motivação
			 for (var i=0; i<4;i++){

			 	colocarAleatNoArray(caracMotiva,personagem.caracteristicas); 
			 }

			 //Atribuindo Características de Defeito
			 for (var i=0; i<4;i++){

			 	colocarAleatNoArray(caracDefeito,personagem.caracteristicas); 
			 }
*/
			 //define condições
			 var qntCondicoes = randomEntre(3,6)

			 for (var i=0; i<qntCondicoes;i++){
			 	colocarAleatNoArray(todasCond,personagem.condicoes);
			 }

			 //define tormentos
			 var qntTormentos = personagem.obstrucoes/2;
			 qntTormentos = qntTormentos.toFixed(0);
			 if (qntTormentos==0) qntTormentos++; /*mínimo 1 tormento*/
			 for (var i=0; i<qntTormentos; i++){
			 	colocarAleatNoArray(listaTormentos,personagem.tormentos)
			 }

			 function preencheHumano(){

				var caracteristicas='';
				var condicoes = '';
				var tormentos = '';
				var conviccao = '';

				switch (personagem.obstrucoes){
					case 1:
						conviccao='⬡⬡⬡⬡|⬡⬡⬡⬡|⬡⬡⬡⬢'
						break;
					case 2:
						conviccao='⬡⬡⬡⬡|⬡⬡⬡⬡|⬡⬡⬢⬢'
						break;
					case 3:
						conviccao='⬡⬡⬡⬡|⬡⬡⬡⬡|⬡⬢⬢⬢'
						break;
					case 4:
						conviccao='⬡⬡⬡⬡|⬡⬡⬡⬡|⬢⬢⬢⬢'
						break;
					case 5:
						conviccao='⬡⬡⬡⬡|⬡⬡⬡⬢|⬢⬢⬢⬢'
						break;
					case 6:
						conviccao='⬡⬡⬡⬡|⬡⬡⬢⬢|⬢⬢⬢⬢'
						break;
					default:
						conviccao='⬡⬡⬡⬡|⬡⬡⬡⬡|⬡⬡⬡⬡'
				 }

				 /* transforma o array em string e adiciona vírgulas e ponto final */
				for (var i=0;i<personagem.caracteristicas.length;i++){
					caracteristicas+=personagem.caracteristicas[i];
					if (i==personagem.caracteristicas.length-1) {
						caracteristicas+='.';
					}else{
						caracteristicas+=', ';
					}
				 }
				for (var i=0;i<personagem.condicoes.length;i++){
					condicoes+=personagem.condicoes[i];
					if (i==personagem.condicoes.length-1) {
						condicoes+='.';
					}else{
						condicoes+=', ';
					}	 	
				 }
				for (var i=0;i<personagem.tormentos.length;i++){
					tormentos+=personagem.tormentos[i];
					if (i==personagem.tormentos.length-1) {
						tormentos+='.';
					}else{
						tormentos+=', ';
					}
				 }

			/* imprime os personagens na div */
				var el=document.getElementById('humano');

			  $ (el).append(
			    "<div class='fichaFinal'>"
			+"						<p>"
			+"							<span class='nomeFicha'>"
			+							personagem.nome+", "+personagem.idade+" anos."
			+"							</span>"
			+"							<br>"
			+"							<span class='negrito'>Características:"
			+"							</span>"
			+							caracteristicas
			+"							<br>"
			+"							<span class='negrito'>Condições:"
			+"							</span>"
			+                            condicoes
			+"							<p>"
			+"							<strong>Tormento: </strong>"
			+                            tormentos
			+"							</p>"
			+"							<p>"
			+"							<strong>Convicção:</strong>"
			+"							<br>"
			+	 						conviccao
			+"							</p>"
			+"						</div>"
			    );
			}

			 preencheHumano();

		break;

		case 'animal':

		break;

		case 'infectado':

		break;

		default: alert('Tipo de personagem inválido!');
	 }	 
 }


/* Botões ------------------------------------------------ */

function limpaDiv(id){
	document.getElementById(id).innerHTML = '';
}

function pedirPersonagem(tipo){
	limpaDiv(tipo);
 	var d = document.getElementById('qnt'+tipo).value;

	for (var i=0; i<d; i++){
		gerarPersonagem(tipo);
	}

	
	
}

/* Características --------------------------------------*/
var caracFisico=[];
var caracMental=[];
var caracMotiva=[];
var caracDefeito=[];
var caracTodas=[];
var caracProfiss=[]; 

caracFisico.push(
	'corpo atlético',
	'resistência invejável',
	'forte como um touro',
	'quase 2m de altura',
	'passos suaves',
	'ágil',
	'rápido',
	'corpo leve',
	'corpo pesado',
	'vários anos de natação',
	'rosto bonito',
	'corpo atraente',
	'muito fôlego',
	'alta tolerância ao frio',
	'alta tolerância ao calor',
	'escalava com frequência',
	'trilheiro',
	'maratonista',
	'sente pouca fome',
	'visão aguçada',
	'imunidade alta',
	'audição aguçada',
	'sabe artes marciais',
	'praticante de boxe',
	'praticante de Muay thai',
	'conhece Jiu-jitsu',
	'bastante flexibilidade',
	'proficiência com armas brancas',
	'mestre das facas',
	'boa mira',
	'sabe atirar',
	'bom de briga'
);

caracMental.push(
	'tem bastante atenção',
	'agradável',
	'valoriza suas amizades',
	'amor é importante',
	'tem autenticidade',
	'alegre',
	'gosta de acolher',
	'atraente',
	'gosta de aventuras',
	'auspicios',
	'se dedica ao máximo',
	'altruísta',
	'ágil',
	'tem fama por sua astúcia',
	'sempre toma cautela',
	'angelical',
	'autossuficiente',
	'pessoa ativa',
	'tem juízo',
	'chatx com higiene',
	'mania de limpeza',
	'apaixonado por alguém',
	'tem zelo com o que importa',
	'jovial',
	'ultra-honesto',
	'ultracorreto',
	'tranquilizante',
	'temperamento forte',
	'gosta de trabalhar',
	'paciente'

);

caracMotiva.push(
	'fé em Deus',
	'fé em si próprio',
	'amor pela família',
	'fé em um futuro bom',
	'vingança',
	'esperança',
	'medo da morte',
	'autocobrança',
	'dívida',
	'rancor'
);

caracProfiss.push(
	'Motorista',
	'Militar',
	'Engenheiro(a) civil',
	'Pedreiro(a)',
	'Empresário(a)',
	'Professor(a)',
	'Policial',
	'Bombeiro(a)',
	'Advogado(a)',
	'Pedreiro(a)',
	'Psicólogo(a)',
	'Médico(a)',
	'Enfermeiro(a)',
	'Dentista',
	'Atleta profissional',
	'Artista',
	'Hacker',
	'Programador(a)',
	'Auxiliar administrativo',
	'Atendente Telemarketing',
	'Açougueiro(a)',
	'Eletricista',
	'Encanador(a)',
	'Cozinheiro(a)',
	'Alfaiate',
	'Pescador(a)',
	'Caçador(a)',
	'Segurança',
	'Piloto(a)',
	'Cientista',
	'Padre/Freira',
	'Biólogo(a)',
	'Químico(a)',
	'Matador(a) de aluguel',
	'Prostituta(o)'
);

caracDefeito.push(
	'QI baixo',
	'impaciente',
	'acima do peso',
	'manca com uma perna',
	'depressivo'
);

caracTodas=caracDefeito.concat(caracMotiva.concat(caracFisico.concat(caracMental)));

/* Condições --------------------------------------*/

var condArmad=[];
var condSaude=[];
var condEmocionais=[];
var todasCond=[];

condArmad.push(
	'sem armas',
	'com porrete',
	'com faca',
	'com pistola'
);

condSaude.push(
	'saudável',
	'com resfriado',
	'desidratadx',
	'com fome'
);

condEmocionais.push(
	'mentalidade otimista',
	'mentalidade pessimista',
	'triste',
	'feliz',
	'exausto',
	'sem fôlego'
);

todasCond=condArmad.concat(condSaude.concat(condEmocionais));

/* Tormentos ---------------------------------------- */
var listaTormentos=[]; 

listaTormentos.push(
	'Acidente',
	'Violência sexual',
	'História envolvendo aborto',
	'Morte de cônjuge',
	'Perda de familiar',
	"Experiência de quase morte",
	"Vítima de tentativa de homicídio",
	'Viu alguém morrer atropelado',
	'Assalto violento',
	'Sequestro'
);
