
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


function imprimirFichas() {
    /*conteudoImprimir = document.getElementById('ficha').innerHTML;
    document.body.innerHTML = conteudoImprimir;*/
    window.print();

    /*document.location.reload(); */
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
				
				var nome= listaNome[randomAte(listaNome.length)];
				var sobrenome= listaSobrenome[randomAte(listaSobrenome.length)];

				personagem.nome=nome+' '+sobrenome;
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

				if (personagem.obstrucoes>4&&personagem.obstrucoes<9) {
					personagem.condicoes.push("Atormentado");
				} else if (personagem.obstrucoes>8) {
					personagem.condicoes.push("Extremamente atormentado");
				}

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
			+"							<p><span class='negrito'>Características:"
			+"							</span>"
			+							caracteristicas
			+"							</p>"
			+"							<p><span class='negrito'>Condições:"
			+"							</span>"
			+                            condicoes
			+"							</p>"
			+"							<p><span class='negrito'>Tormentos: </span>"
			+                            tormentos
			+"							</p>"
			+"							<p class='centro'>"
			+"							<span class='negrito'>Convicção:</span>"
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
	'estatura muito acima da média',
	'passos suaves',
	'ágil',
	'passos rápidos',
	'equilíbrio perfeito',
	'corpo leve',
	'corpo pesado',
	'vários anos de natação',
	'rosto bonito',
	'corpo dentro dos padrões de beleza',
	'muito fôlego',
	'alta tolerância ao frio',
	'alta tolerância ao calor',
	'escalava com frequência',
	'adora trilhas',
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
	'aparência angelical',
	'mestre das facas',
	'boa mira',
	'sabe atirar',
	'sabe brigar'
);

caracMental.push(
	'ótimo senso de direção',
	'técnicas de persuasão',
	'tem bastante atenção',
	'agradável',
	'valoriza suas amizades',
	'amor é importante',
	'tem autenticidade',
	'alegre',
	'gosta de acolher',
	'atraente',
	'gosta de aventuras',
	'sempre se organiza',
	'planejamento é essencial',
	'se dedica ao máximo',
	'altruísta',
	'ágil',
	'tem fama por sua astúcia',
	'sempre toma cautela',
	'autossuficiente',
	'pessoa ativa',
	'tem juízo',
	'chatx com higiene',
	'mania de limpeza',
	'apaixonadx por alguém',
	'tem zelo com o que importa',
	'jovial',
	'ultra-honestx',
	'ultracorretx',
	'sabe tranquilizar',
	'temperamento forte',
	'gosta de trabalhar',
	'paciente',
	'evita problemas',
	'não confia em ninguém',
	'exala liderança',
	'enciclopédia humana',
	'sobrevivência é o que importa',
	'sabe fazer armadilhas',
	'militante de esquerda',
	'militante de direita',
	'todos devem ser salvos',
	'todos os infectados devem ser erradicados',
	'sabe técnicas de tortura',
	'sabe primeiros socorros'
);

caracMotiva.push(
	'fé em Deus',
	'fé em si próprio',
	'amor pela família',
	'fé em um futuro bom',
	'movidx por vingança',
	'esperança sempre',
	'medo da morte',
	'autocobrança',
	'movidx por uma dívida emocional com alguém',
	'movidx por rancor'
);

caracProfiss.push(
	'Acadêmico(a)',
	'Motorista',
	'Militar',
	'Engenheiro(a) civil',
	'Pedreiro(a)',
	'Empresário(a)',
	'Professor(a)',
	'Policial',
	'Jornalista',
	'Bombeiro(a)',
	'Advogado(a)',
	'Pedreiro(a)',
	'Psicólogo(a)',
	'Médico(a)',
	'Enfermeiro(a)',
	'Dentista',
	'Atleta profissional',
	'Artista',
	'Técnico de TI',
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
	'Lider religioso',
	'Biólogo(a)',
	'Químico(a)',
	'Matador(a) de aluguel',
	'Prostituta(o)',
	'Operário(a) de fábrica',
	'Gerente de fábrica',
	'Farmacêutico(a)',
	'Fazendeiro(a)',
	'Vendedor(a)'
);

caracDefeito.push(
	'compulsão por mentir',
	'elitista',
	'xenofóbicx',
	'racista',
	'antissocial',
	'insônia',
	'arrogante',
	'tem claustrofobia',
	'orgulhosx',
	'QI baixo',
	'impaciente',
	'acima do peso',
	'desnutridx',
	'problema respiratório',
	'excessivamente magrx',
	'manca com uma perna',
	'resistência baixa',
	'baixa estatura',
	'passos pesados',
	'desengonçadx',
	'movimentos lentos',
	'pensamento lento',
	'não sabe nadar',
	'beleza não é seu forte',
	'baixa tolerância ao frio',
	'baixa tolerância ao calor',
	'medo de altura',
	'não se sente bem em florestas',
	'não tem muito condicionamento físico',
	'come um boi se deixar',
	'problema de visão',
	'baixa imunidade',
	'audição prejudicada',
	'luta corporal não é o seu forte',
	'mira boa como a de um cego',
	'desatentx',
	'pessoa desagradável',
	'não liga muito para os outros',
	'não acredita em amor',
	'não consegue dizer não',
	'triste a maior parte do tempo',
	'ninguém é bem-vindo',
	'prefere ficar na zona de conforto',
	'não se arrisca por nada',
	'não gosta de receber conselhos',
	'faz tudo com má vontade',
	'pessoa desastrada',
	'dependente dos outros',
	'preguiça em pessoa',
	'faz tudo nas coxas',
	'imprudente',
	'higiene precária',
	'deixa sujeira em qualquer lugar',
	'ódio incontrolável por alguém',
	'não consegue se importar com nada além de si mesmo',
	'ranzinza',
	'desonestidade',
	'o mundo é dos espertos',
	'regras foram feitas para serem quebradas',
	'se afoba por qualquer coisa',
	'pessoa difícil de lidar',
	'odeia qualquer tipo de trabalho',
	'impaciente',
	'depressivo',
	'vício em medicamento',
	'vício em alguma droga',
	'vício em álcool',
	'vício em cigarro',
	'vício em jogos de azar/cartas',
	'doença sem cura - tratamento contínuo',
	'cegx',
	'surdx',
	'alguns dentes a menos',
	'não gosta de barulhos altos',
	'pavor de ratos e baratas',
	'medo de cachorros',
	'fobia de dirigir',
	'anti-vacinas e anti-ciência'
);

caracTodas=caracDefeito.concat(caracMotiva.concat(caracFisico.concat(caracMental)));

/* Condições --------------------------------------*/

var condArmad=[];
var condSaude=[];
var condEmocionais=[];
var todasCond=[];

condArmad.push(
	'armadx com pedaço de madeira',
	'armadx com barra de ferro',
	'armadx com faca',
	'armadx com facão',
	'armadx com pistola',
	'armadx com arma de fogo',
	'improvisando ferramenta comum como arma',
	'com arma de alto calibre e muita munição',
	'com colete a prova de balas',
	'com veículo'
);

condSaude.push(
	'bem alimentadx',
	'bem descansadx',
	'com resfriado',
	'desidratadx',
	'com fome',
	'sem fôlego',
	'com ânsia de vômito',
	'com pressão baixa',
	'assustadx',
	'surto neurótico',
	'dor de dente',
	'dor de barriga',
	'dor de cabeça',
	'com um ferimento leve',
	'diversos ferimentos leves',
	'ferimento mediano - já melhorando',
	'ferimento mediano - precisando de cuidados',
	'ferimento mediano infeccionando',
	'ferimento grave - mas estável',
	'ferimento grave - precisando de cuidados',
	'ferimento gravíssimo e perdendo muito sangue',
	'ferimento de bala',
	'dores musculares',
	'desnutrição',
	'doença de pele',
	'precisando de remédios',
	'DST',
	'câimbras',
	'tornozelo torcido',
	'dor nas costas'

);

condEmocionais.push(
	'em crise de ansiedade',
	'em crise de pânico',
	'triste',
	'feliz',
	'motivadx',
	'desanimadx',
	'desconfiadx'
);

todasCond=condArmad.concat(condSaude.concat(condEmocionais));

/* Tormentos ---------------------------------------- */
var listaTormentos=[]; 

listaTormentos.push(
	'Acidente de veículo',
	'Violência sexual',
	'História envolvendo aborto',
	'Morte de cônjuge',
	'Perda de familiar',
	"Experiência de quase morte",
	"Vítima de tentativa de homicídio",
	'Viu alguém morrer atropelado',
	'Assalto violento',
	'Sequestro',
	'Viu alguém ser devorado por infectados',
	'Sente remorso por não estar com a família quando mais precisaram',
	'Fui obrigado a deixar um amigo/familiar ser devorado para sobreviver',
	'Teve amigo/familiar assassinado por um humano atrás de comida/suprimentos',
	'Precisou matar um amigo/familiar que se infectou',
	'Presenciou uma chacina',
	'Presenciou uma criança ser devorada por um infectado',
	'Para se salvar abandonou amigo/familiar em situação de perigo envolvendo infectados e até hoje não sabe o que aconteceu',
	'Viu pessoas divididas em pedaços',
	'Já sofreu tortura'
);

/* Nomes --------------------------------------------- */
/* depois fazer lista de nomes
				https://gerador-nomes.herokuapp.com
				https://pt.fakenamegenerator.com/gen-random-us-us.php
				*/
var listaNome=[];
var listaSobrenome=[];

listaNome.push(
	'Rafael',
	'Bruno',
	'Tiago',
	'Daniel',
	'Miguel',
	'Julio',
	'Eduardo',
	'Eduarda',
	'Rafaela',
	'Daniela',
	'Julia',
	'Mateus',
	'Sandy',
	'Lucas',
	'Diana',
	'Andre',
	'Flávia',
	'Caroline',
	'Thabata'
);

listaSobrenome.push(
	'Estevam',
	'Silva',
	'Santos',
	'Ferreira',
	'Nascimento',
	'Perez',
	'Militão',
	'Monteiro',
	'Abdala',
	'Santiago',
	'Pereira',
	'Arruda'
);