"use strict";

const fs = require("fs");
const path = require("path");

const readImage = (imageName) => {
  const imagePath = path.resolve(__dirname, `../img/obras/${imageName}.webp`);

  try {
    fs.accessSync(imagePath, fs.constants.F_OK);
    return fs.readFileSync(imagePath);
  } catch (error) {
    console.error(`Image ${imageName} not found.`);
    return null;
  }
};

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("obras", [
      {
        nome: "Nausicaä do Vale do Vento",
        sinopse:
          "Mil se passaram após a Terra ser varrida pela Guerra dos Sete Dias de Fogo. O planeta se tornou hostil, cheio de florestas tóxicas e insetos gigantes. Enquanto tenta navegar nesse mundo de perigos, a princesa Nausicaä, a soberana de um pequeno reino, tenta de todas as formas salvar o seu povo e impedir que duas nações entrem em guerra e se destruam em um planeta agonizante.",
        duracao: 117,
        data: new Date("1984-03-11"),
        avaliacao: 9.3,
        imagem: readImage("Nausicaä-do-Vale-do-Vento"),
      },
      {
        nome: "O Castelo no Céu",
        sinopse:
          "Sheeta, uma jovem órfã que possui um colar misterioso se une ao mineiro Pazu para procurar uma lendária cidade flutuante. Mas a dupla é perseguida por gananciosos piratas aéreos.",
        duracao: 124,
        data: new Date("1986-08-02"),
        avaliacao: 9.2,
        imagem: readImage("O-Castelo-no-Céu"),
      },
      {
        nome: "Meu Amigo Totoro",
        sinopse:
          "As irmãs Satsuki e Mei se mudam para o campo para ficar mais perto do hospital onde sua mãe está internada. Lá conhecem os Totoros, adoráveis criaturas místicas e alegres, que só podem ser vistas pelas crianças. Com eles, as duas irmãs viverão mágicas aventuras no campo.",
        duracao: 86,
        data: new Date("1988-04-16"),
        avaliacao: 9.4,
        imagem: readImage("Meu-Amigo-Totoro"),
      },
      {
        nome: "Túmulo dos Vagalumes",
        sinopse:
          "Os irmão Setsuko e Seita vivem no Japão em meio a Segunda Guerra Mundial. Após a morte da mãe em um bombardeio e a convocação do pai para a Guerra, eles vão morar com alguns parentes. Insatisfeitos, saem da cidade e acabam em um abrigo na floresta.",
        duracao: 89,
        data: new Date("1988-04-16"),
        avaliacao: 9.7,
        imagem: readImage("Túmulo-dos-Vagalumes"),
      },
      {
        nome: "O Serviço de Entregas da Kiki",
        sinopse:
          "Por ordem de sua mãe, Kiki parte para um aprendizado de um ano, acompanhada por seu gato preto. A um comando de sua vassoura mágica, ela vai parar na charmosa cidadezinha de Moreoastal. Infelizmente, os hotéis locais não aceitam bruxas e a polícia a flagra fazendo algumas travessuras.",
        duracao: 102,
        data: new Date("1989-07-29"),
        avaliacao: 9.4,
        imagem: readImage("O-Serviço-de-Entregas-da-Kiki"),
      },
      {
        nome: "Memórias de Ontem",
        sinopse:
          "Taeko é uma mulher solteira que se dedica apenas ao trabalho. Ela sai de sua nativa Tóquio pela primeira vez e viaja a Yamagata para visitar a família da irmã durante a colheita anual de açafrão-bastardo. Ao longo da viagem, ela começa a questionar se sua vida estressante é o que desejava quando jovem.",
        duracao: 118,
        data: new Date("1991-07-20"),
        avaliacao: 8.2,
        imagem: readImage("Memórias-de-Ontem"),
      },
      {
        nome: "Porco Rosso: O Último Herói Romântico",
        sinopse:
          "Transformado em uma espécie de porco humano, um piloto tenta salvar vítimas de piratas.",
        duracao: 94,
        data: new Date("1992-07-18"),
        avaliacao: 8.9,
        imagem: readImage("Porco-Rosso-O-Último-Herói-Romântico"),
      },
      {
        nome: "Eu Posso Ouvir o Oceano",
        sinopse:
          "A chegada de uma bela estudante de Tóquio provoca uma problema na relação entre dois melhores amigos.",
        duracao: 72,
        data: new Date("1993-05-05"),
        avaliacao: 7.8,
        imagem: readImage("Eu-Posso-Ouvir-o-Oceano"),
      },
      {
        nome: "PomPoko: A Grande Batalha dos Guaxinins",
        sinopse:
          "Os humanos estão expulsando os guaxinins de seu lar, mas eles estão prontos para lutar e revidar.",
        duracao: 119,
        data: new Date("1994-07-16"),
        avaliacao: 7.8,
        imagem: readImage("PomPoko-A-Grande-Batalha-dos-Guaxinins"),
      },
      {
        nome: "Sussurros do Coração",
        sinopse:
          "Shizuku, uma estudante que sonha ser uma escritora e decide, durante o verão, ler vinte livros. Mas, curiosamente, todas as edições que Shizuki pegou na biblioteca já haviam sido lidas por um tal de Seiji Amasawa.",
        duracao: 106,
        data: new Date("1995-07-15"),
        avaliacao: 9,
        imagem: readImage("Sussurros-do-Coração"),
      },
      {
        nome: "Princesa Mononoke",
        sinopse:
          "Um príncipe, em busca de uma cura, luta em uma guerra entre a mata e uma colônia mineira. Nesta aventura ele conhece Mononoke.",
        duracao: 134,
        data: new Date("1997-07-12"),
        avaliacao: 9.4,
        imagem: readImage("Princesa-Mononoke"),
      },
      {
        nome: "Meus Vizinhos, Os Yamadas",
        sinopse:
          "A família Yamada é uma família como todas as outras, com os mesmos dilemas, alegrias e descobertas. Os pais lidam com cada situação com humor, tentando demonstrar todo o amor que sentem pelos filhos.",
        duracao: 104,
        data: new Date("1999-07-17"),
        avaliacao: 6.8,
        imagem: readImage("Meus-Vizinhos-Os-Yamadas"),
      },
      {
        nome: "A Viagem de Chihiro",
        sinopse:
          "Chihiro e seus pais estão se mudando para uma cidade diferente. A caminho da nova casa, o pai decide pegar um atalho. Eles se deparam com uma mesa repleta de comida, embora ninguém esteja por perto. Chihiro sente o perigo, mas seus pais começam a comer. Quando anoitece, eles se transformam em porcos. Agora, apenas Chihiro pode salvá-los.",
        duracao: 125,
        data: new Date("2001-07-20"),
        avaliacao: 9.5,
        imagem: readImage("A-Viagem-de-Chihiro"),
      },
      {
        nome: "O Reino dos Gatos",
        sinopse:
          "Haru salva um gato que estava prestes a ser atropelado por um caminhão e descobre que ele é, na verdade, um príncipe. Por gratidão o Rei dos Gatos a pede em casamento, e a menina é levada para o Reino dos Gatos. Agora, ela quer sua liberdade.",
        duracao: 74,
        data: new Date("2002-07-19"),
        avaliacao: 8.7,
        imagem: readImage("O-Reino-dos-Gatos"),
      },
      {
        nome: "O Castelo Animado",
        sinopse:
          "Uma bruxa lança uma terrível maldição sobre a jovem Sophie transformando-a em uma velha. Desesperada, ela embarca em uma odisseia em busca do mago Howl, um misterioso feiticeiro que pode ajudá-la a reverter o feitiço.",
        duracao: 119,
        data: new Date("2004-11-20"),
        avaliacao: 9.6,
        imagem: readImage("O-Castelo-Animado"),
      },
      {
        nome: "Contos de Terramar",
        sinopse:
          "O mago Ged observa que o mundo está em desequilíbrio e conhece Arren, um jovem príncipe que diz estar sendo perseguido por uma sombra. Os dois se unem para descobrir o que está causando a instabilidade e encontram a bruxa Kumo.",
        duracao: 115,
        data: new Date("2006-07-29"),
        avaliacao: 7.3,
        imagem: readImage("Contos-de-Terramar"),
      },
      {
        nome: "Ponyo - Uma Amizade que Veio do Mar",
        sinopse:
          "O garoto Sousuke encontra um peixinho dourado preso em uma garrafa e decide libertá-lo, sem saber que se trata da deusa do mar Ponyo. Filha de um poderoso mago, ela se comove com a atitude do menino e usa a magia do pai para se transformar em humana. Dessa forma, acredita poder fortalecer a amizade com Sousuke. Porém, a substância de sua poção mágica pode colocar em risco o vilarejo onde mora o menino.",
        duracao: 103,
        data: new Date("2008-07-19"),
        avaliacao: 9.1,
        imagem: readImage("Ponyo-Uma-Amizade-que-Veio-do-Mar"),
      },
      {
        nome: "O Mundo dos Pequeninos",
        sinopse:
          "Arrietty e sua família são seres pequenos, moram sob uma casa antiga e sobrevivem roubando itens da casa dos humanos e colocando a culpa em gatos e ratos. Quando o jovem Shawn se hospeda na casa, fica amigo de Arrietty, colocando o segredo em risco.",
        duracao: 94,
        data: new Date("2010-07-17"),
        avaliacao: 8.8,
        imagem: readImage("O-Mundo-dos-Pequeninos"),
      },
      {
        nome: "Da Colina Kokuriko",
        sinopse:
          "Os adolescentes Umi e Shun lutam para preservar um velho edifício que vai ser demolido por causa das Olimpíadas de Tóquio.",
        duracao: 91,
        data: new Date("2011-07-16"),
        avaliacao: 8.5,
        imagem: readImage("Da-Colina-Kokuriko"),
      },
      {
        nome: "Vidas ao Vento",
        sinopse:
          "Jiro Horikoshi é um jovem que vive em uma cidade no interior do Japão. Ele tem o sonho de voar em um avião com formato de pássaro. A partir desse sonho, Jiro decide que construir um avião como deseja e colocá-lo no ar é a meta de sua vida. Durante a busca pela realização deste objetivo, ele conhece Naoko, uma jovem encantadora por quem se apaixona. No entanto, Naoko fica profundamente doente, sem saber se sobreviverá, e os planos de Jiro podem estar prestes a mudar.",
        duracao: 126,
        data: new Date("2013-07-20"),
        avaliacao: 9,
        imagem: readImage("Vidas-ao-Vento"),
      },
      {
        nome: "O Conto da Princesa Kaguya",
        sinopse:
          "Kaguya era uma bebê que foi encontrada dentro de um tronco de bambu brilhante. Passado o tempo, ela se transforma em uma bela jovem que passa a ser cobiçada por cinco nobres, dentre eles, o próprio imperador.",
        duracao: 137,
        data: new Date("2013-11-23"),
        avaliacao: 8.5,
        imagem: readImage("O-Conto-da Princesa-Kaguya"),
      },
      {
        nome: "As Memórias de Marnie",
        sinopse:
          "Anna, uma menina solitária e curiosa, decide explorar uma velha mansão abandonada e conhece uma garota loira misteriosa que somente ela consegue ver.",
        duracao: 103,
        data: new Date("2014-07-19"),
        avaliacao: 8.8,
        imagem: readImage("As-Memórias-de-Marnie"),
      },
      {
        nome: "Aya e a Bruxa",
        sinopse:
          "Uma órfã teimosa e corajosa é adotada por uma bruxa e se torna sua aprendiz nas artes mágicas.",
        duracao: 82,
        data: new Date("2020-12-30"),
        avaliacao: 5.9,
        imagem: readImage("Aya-e-a-Bruxa"),
      },
      {
        nome: "O Menino e a Garça",
        sinopse:
          "Mahito, um menino de 12 anos, luta para se estabelecer em uma nova cidade após a morte de sua mãe. Quando uma garça falante conta para Mahito que sua mãe ainda está viva, ele entra em uma torre abandonada em busca dela, o que o leva para outro mundo.",
        duracao: 124,
        data: new Date("2023-07-14"),
        avaliacao: 8.9,
        imagem: readImage("O-Menino-e-a-Garça"),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("obras", null, {});
  },
};
