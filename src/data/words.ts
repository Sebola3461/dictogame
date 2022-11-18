import { bigDicto } from "./dicto";

const dicto = `[["sagaz", "sagaz"],["âmago", "amago"],["negro", "negro"],["êxito", "exito"],["mexer", "mexer"],["termo", "termo"],["nobre", "nobre"],["senso", "senso"],["algoz", "algoz"],["afeto", "afeto"],["ética", "etica"],["plena", "plena"],["mútua", "mutua"],["tênue", "tenue"],["sutil", "sutil"],["vigor", "vigor"],["fazer", "fazer"],["aquém", "aquem"],["porém", "porem"],["assim", "assim"],["audaz", "audaz"],["seção", "secao"],["sanar", "sanar"],["fosse", "fosse"],["cerne", "cerne"],["inato", "inato"],["ideia", "ideia"],["poder", "poder"],["moral", "moral"],["desde", "desde"],["muito", "muito"],["justo", "justo"],["torpe", "torpe"],["honra", "honra"],["sobre", "sobre"],["quiçá", "quica"],["fútil", "futil"],["anexo", "anexo"],["razão", "razao"],["etnia", "etnia"],["ícone", "icone"],["sonho", "sonho"],["tange", "tange"],["égide", "egide"],["amigo", "amigo"],["lapso", "lapso"],["mútuo", "mutuo"],["expor", "expor"],["haver", "haver"],["casal", "casal"],["hábil", "habil"],["tempo", "tempo"],["dengo", "dengo"],["seara", "seara"],["então", "entao"],["pesar", "pesar"],["ávido", "avido"],["ardil", "ardil"],["boçal", "bocal"],["genro", "genro"],["posse", "posse"],["coser", "coser"],["causa", "causa"],["pária", "paria"],["dizer", "dizer"],["corja", "corja"],["prole", "prole"],["brado", "brado"],["dever", "dever"],["tenaz", "tenaz"],["óbice", "obice"],["saber", "saber"],["graça", "graca"],["detém", "detem"],["crivo", "crivo"],["ápice", "apice"],["ânimo", "animo"],["digno", "digno"],["comum", "comum"],["ânsia", "ansia"],["ceder", "ceder"],["temor", "temor"],["sendo", "sendo"],["culto", "culto"],["assaz", "assaz"],["atroz", "atroz"],["gleba", "gleba"],["pauta", "pauta"],["mundo", "mundo"],["ainda", "ainda"],["censo", "censo"],["fugaz", "fugaz"],["estar", "estar"],["valha", "valha"],["cozer", "cozer"],["vício", "vicio"],["forte", "forte"],["denso", "denso"],["neném", "nenem"],["vulgo", "vulgo"],["revés", "reves"],["pudor", "pudor"],["regra", "regra"],["dogma", "dogma"],["louco", "louco"],["criar", "criar"],["xibiu", "xibiu"],["banal", "banal"],["saúde", "saude"],["clava", "clava"],["round", "round"],["jeito", "jeito"],["atrás", "atras"],["impor", "impor"],["ordem", "ordem"],["pedir", "pedir"],["mercê", "merce"],["pífio", "pifio"],["tenro", "tenro"],["apraz", "apraz"],["desse", "desse"],["reaça", "reaca"],["usura", "usura"],["feliz", "feliz"],["homem", "homem"],["servo", "servo"],["prosa", "prosa"],["sábio", "sabio"],["juízo", "juizo"],["coisa", "coisa"],["viril", "viril"],["mesmo", "mesmo"],["presa", "presa"],["ontem", "ontem"],["cunho", "cunho"],["manso", "manso"],["forma", "forma"],["falar", "falar"],["devir", "devir"],["limbo", "limbo"],["meiga", "meiga"],["afago", "afago"],["fluir", "fluir"],["ébrio", "ebrio"],["posso", "posso"],["vendo", "vendo"],["platô", "plato"],["sério", "serio"],["guisa", "guisa"],["mágoa", "magoa"],["herói", "heroi"],["visar", "visar"],["acaso", "acaso"],["puder", "puder"],["temer", "temer"],["valor", "valor"],["certo", "certo"],["pleno", "pleno"],["cisma", "cisma"],["lugar", "lugar"],["ímpio", "impio"],["afins", "afins"],["bruma", "bruma"],["óbvio", "obvio"],["êxodo", "exodo"],["todos", "todos"],["gerar", "gerar"],["obter", "obter"],["crise", "crise"],["matiz", "matiz"],["praxe", "praxe"],["senil", "senil"],["garbo", "garbo"],["abrir", "abrir"],["havia", "havia"],["fluxo", "fluxo"],["falso", "falso"],["vênia", "venia"],["enfim", "enfim"],["tédio", "tedio"],["fácil", "facil"],["legal", "legal"],["ritmo", "ritmo"],["união", "uniao"],["álibi", "alibi"],["tomar", "tomar"],["visão", "visao"],["burro", "burro"],["pulha", "pulha"],["parvo", "parvo"],["valia", "valia"],["reter", "reter"],["bravo", "bravo"],["vital", "vital"],["favor", "favor"],["prumo", "prumo"],["olhar", "olhar"],["grato", "grato"],["gênio", "genio"],["parco", "parco"],["vivaz", "vivaz"],["laico", "laico"],["levar", "levar"],["casta", "casta"],["reles", "reles"],["possa", "possa"],["morte", "morte"],["ameno", "ameno"],["tecer", "tecer"],["óbito", "obito"],["prime", "prime"],["ranço", "ranco"],["noção", "nocao"],["selar", "selar"],["sábia", "sabia"],["falta", "falta"],["fator", "fator"],["linda", "linda"],["anelo", "anelo"],["façam", "facam"],["noite", "noite"],["cabal", "cabal"],["achar", "achar"],["brega", "brega"],["rogar", "rogar"],["nicho", "nicho"],["farsa", "farsa"],["citar", "citar"],["ouvir", "ouvir"],["coeso", "coeso"],["viver", "viver"],["adiar", "adiar"],["épico", "epico"],["cisão", "cisao"],["fardo", "fardo"],["força", "forca"],["ajuda", "ajuda"],["ativo", "ativo"],["sinto", "sinto"],["passo", "passo"],["gente", "gente"],["calma", "calma"],["haste", "haste"],["leigo", "leigo"],["tendo", "tendo"],["sonso", "sonso"],["único", "unico"],["dúbio", "dubio"],["exato", "exato"],["amplo", "amplo"],["pobre", "pobre"],["carma", "carma"],["imune", "imune"],["cesta", "cesta"],["sesta", "sesta"],["outro", "outro"],["sulco", "sulco"],["rever", "rever"],["lavra", "lavra"],["revel", "revel"],["deter", "deter"],["humor", "humor"],["vemos", "vemos"],["labor", "labor"],["gesto", "gesto"],["árduo", "arduo"],["tende", "tende"],["ciúme", "ciume"],["atuar", "atuar"],["feixe", "feixe"],["velho", "velho"],["claro", "claro"],["ótica", "otica"],["igual", "igual"],["ponto", "ponto"],["ideal", "ideal"],["hiato", "hiato"],["toada", "toada"],["débil", "debil"],["sonsa", "sonsa"],["vácuo", "vacuo"],["terno", "terno"],["ambos", "ambos"],["terra", "terra"],["cauda", "cauda"],["remir", "remir"],["varão", "varao"],["marco", "marco"],["fonte", "fonte"],["senão", "senao"],["jovem", "jovem"],["fusão", "fusao"],["capaz", "capaz"],["probo", "probo"],["líder", "lider"],["inata", "inata"],["leito", "leito"],["advém", "advem"],["ficar", "ficar"],["horda", "horda"],["xeque", "xeque"],["doido", "doido"],["tenra", "tenra"],["farão", "farao"],["relva", "relva"],["velar", "velar"],["algum", "algum"],["vazio", "vazio"],["série", "serie"],["apoio", "apoio"],["coçar", "cocar"],["caçar", "cacar"],["tanto", "tanto"],["papel", "papel"],["pouco", "pouco"],["entre", "entre"],["vimos", "vimos"],["anuir", "anuir"],["frase", "frase"],["rigor", "rigor"],["verso", "verso"],["sente", "sente"],["botar", "botar"],["raiva", "raiva"],["coesa", "coesa"],["dorso", "dorso"],["signo", "signo"],["cruel", "cruel"],["massa", "massa"],["torço", "torco"],["feito", "feito"],["moção", "mocao"],["minha", "minha"],["prece", "prece"],["fauna", "fauna"],["ambas", "ambas"],["credo", "credo"],["morar", "morar"],["preso", "preso"],["covil", "covil"],["casto", "casto"],["ímpar", "impar"],["brisa", "brisa"],["peste", "peste"],["vírus", "virus"],["ciclo", "ciclo"],["lazer", "lazer"],["faina", "faina"],["blasé", "blase"],["chata", "chata"],["furor", "furor"],["fúria", "furia"], ["dócil", "docil"],["nossa", "nossa"],["maior", "maior"],["flora", "flora"],["trama", "trama"],["vetor", "vetor"],["árido", "arido"],["pegar", "pegar"],["houve", "houve"],["adeus", "adeus"],["chuva", "chuva"],["beata", "beata"],["aceso", "aceso"],["setor", "setor"],["manha", "manha"],["banzo", "banzo"],["seita", "seita"],["liame", "liame"],["meses", "meses"],["vulto", "vulto"],["senda", "senda"],["livro", "livro"],["breve", "breve"],["ardor", "ardor"],["sorte", "sorte"],["salvo", "salvo"],["vasto", "vasto"],["pecha", "pecha"],["peixe", "peixe"],["carro", "carro"],["birra", "birra"],["visse", "visse"],["comer", "comer"],["morro", "morro"],["plano", "plano"],["antro", "antro"],["saiba", "saiba"],["prado", "prado"],["reger", "reger"],["ocaso", "ocaso"],["átomo", "atomo"],["nunca", "nunca"],["segue", "segue"],["rezar", "rezar"],["pajem", "pajem"],["aliás", "alias"],["avaro", "avaro"],["saída", "saida"],["ótimo", "otimo"],["junto", "junto"],["séria", "seria"],["áureo", "aureo"],["mudar", "mudar"],["chulo", "chulo"],["sinal", "sinal"],["acima", "acima"],["serão", "serao"],["opção", "opcao"],["anciã", "ancia"],["lenda", "lenda"],["parar", "parar"],["fruir", "fruir"],["treta", "treta"],["fitar", "fitar"],["grupo", "grupo"],["nação", "nacao"],["jazia", "jazia"],["fugir", "fugir"],["andar", "andar"],["brava", "brava"],["leite", "leite"],["bando", "bando"],["puxar", "puxar"],["campo", "campo"],["prazo", "prazo"],["gerir", "gerir"],["parte", "parte"],["rapaz", "rapaz"],["tosco", "tosco"],["norma", "norma"],["alude", "alude"],["motim", "motim"],["tenso", "tenso"],["época", "epoca"],["praia", "praia"],["ídolo", "idolo"],["sinhá", "sinha"],["exame", "exame"],["tirar", "tirar"],["vilão", "vilao"],["risco", "risco"],["agora", "agora"],["arcar", "arcar"],["avião", "aviao"],["psico", "psico"],["malta", "malta"],["reino", "reino"],["anais", "anais"],["praga", "praga"],["venal", "venal"],["antes", "antes"],["índio", "indio"],["quota", "quota"],["aonde", "aonde"],["soldo", "soldo"],["corpo", "corpo"],["logro", "logro"],["preto", "preto"],["quase", "quase"],["sumir", "sumir"],["cheio", "cheio"],["traga", "traga"],["voraz", "voraz"],["texto", "texto"],["filho", "filho"],["fixar", "fixar"],["pompa", "pompa"],["certa", "certa"],["virão", "virao"],["prova", "prova"],["turba", "turba"],["cópia", "copia"],["estão", "estao"],["apego", "apego"],["oásis", "oasis"],["conta", "conta"],["verbo", "verbo"],["exijo", "exijo"],["nódoa", "nodoa"],["acesa", "acesa"],["áurea", "aurea"],["alado", "alado"],["caixa", "caixa"],["solto", "solto"],["ligar", "ligar"],["turva", "turva"],["messe", "messe"],["festa", "festa"],["nível", "nivel"],["átrio", "atrio"],["perda", "perda"],["coito", "coito"],["grave", "grave"],["tocar", "tocar"],["manhã", "manha"],["oxalá", "oxala"],["apelo", "apelo"],["verve", "verve"],["lindo", "lindo"],["doído", "doido"],["fraco", "fraco"],["livre", "livre"],["parva", "parva"],["pardo", "pardo"],["afora", "afora"],["trupe", "trupe"],["fatos", "fatos"],["dessa", "dessa"],["mente", "mente"],["fatal", "fatal"],["parca", "parca"],["opaco", "opaco"],["fenda", "fenda"],["sabia", "sabia"],["alçar", "alcar"],["tinha", "tinha"],["jirau", "jirau"],["navio", "navio"],["elite", "elite"],["magia", "magia"],["viria", "viria"],["astro", "astro"],["lidar", "lidar"],["faixa", "faixa"],["firme", "firme"],["ficha", "ficha"],["glosa", "glosa"],["ético", "etico"],["autor", "autor"],["retém", "retem"],["supra", "supra"],["grata", "grata"],["bater", "bater"],["verba", "verba"],["reses", "reses"],["cioso", "cioso"],["salve", "salve"],["pique", "pique"],["calda", "calda"],["longe", "longe"],["junco", "junco"],["cousa", "cousa"],["deixa", "deixa"],["vezes", "vezes"],["atual", "atual"],["privê", "prive"],["macio", "macio"],["irmão", "irmao"],["douto", "douto"],["pagão", "pagao"],["sexta", "sexta"],["bicho", "bicho"],["molho", "molho"],["sarça", "sarca"],["posto", "posto"],["torso", "torso"],["porta", "porta"],["supor", "supor"],["abriu", "abriu"],["light", "light"],["cânon", "canon"],["extra", "extra"],["judeu", "judeu"],["curso", "curso"],["locus", "locus"],["caber", "caber"],["besta", "besta"],["asilo", "asilo"],["bioma", "bioma"],["turvo", "turvo"],["nosso", "nosso"],["ígneo", "igneo"],["órfão", "orfao"],["abuso", "abuso"],["drops", "drops"],["rádio", "radio"],["desta", "desta"],["vosso", "vosso"],["vídeo", "video"],["rouca", "rouca"],["combo", "combo"],["zelar", "zelar"],["pisar", "pisar"],["ruína", "ruina"],["culpa", "culpa"],["bônus", "bonus"],["vinha", "vinha"],["júlia", "julia"],["menos", "menos"],["baixo", "baixo"],["agudo", "agudo"],["ereto", "ereto"],["paira", "paira"],["finda", "finda"],["advir", "advir"],["calão", "calao"],["gosto", "gosto"],["estio", "estio"],["facto", "facto"],["feudo", "feudo"],["super", "super"],["facho", "facho"],["sítio", "sitio"],["traço", "traco"],["cútis", "cutis"],["suave", "suave"],["urgia", "urgia"],["surja", "surja"],["meigo", "meigo"],["tetra", "tetra"],["amena", "amena"],["turma", "turma"],["pilar", "pilar"],["autos", "autos"],["tento", "tento"],["rumor", "rumor"],["louça", "louca"],["chama", "chama"],["ações", "acoes"],["cocho", "cocho"],["museu", "museu"],["clean", "clean"],["lápis", "lapis"],["mosto", "mosto"],["pífia", "pifia"],["local", "local"],["acolá", "acola"],["pódio", "podio"],["lasso", "lasso"],["geral", "geral"],["hobby", "hobby"],["optar", "optar"],["boato", "boato"],["medir", "medir"],["aluno", "aluno"],["refém", "refem"],["brabo", "brabo"],["drama", "drama"],["páreo", "pareo"],["chato", "chato"],["rubro", "rubro"],["peito", "peito"],["mesma", "mesma"],["folga", "folga"],["pacto", "pacto"],["crime", "crime"],["poema", "poema"],["ponha", "ponha"],["piada", "piada"],["metiê", "metie"],["ávida", "avida"],["letal", "letal"],["penta", "penta"],["móvel", "movel"],["cacho", "cacho"],["teste", "teste"],["feroz", "feroz"],["vigia", "vigia"],["golpe", "golpe"],["coral", "coral"],["aroma", "aroma"],["hoste", "hoste"],["monte", "monte"],["clima", "clima"],["pasmo", "pasmo"],["vetar", "vetar"],["açude", "acude"],["passa", "passa"],["poeta", "poeta"],["rival", "rival"],["fazia", "fazia"],["cover", "cover"],["verde", "verde"],["riste", "riste"],["ecoar", "ecoar"],["troça", "troca"],["daqui", "daqui"],["cetro", "cetro"],["lição", "licao"],["finjo", "finjo"],["forem", "forem"],["fórum", "forum"],["carta", "carta"],["axila", "axila"],["tacha", "tacha"],["monge", "monge"],["plebe", "plebe"],["ateia", "ateia"],["artur", "artur"],["calmo", "calmo"],["busca", "busca"],["súcia", "sucia"],["ébano", "ebano"],["lesse", "lesse"],["idoso", "idoso"],["escol", "escol"],["tribo", "tribo"],["falha", "falha"],["plumo", "plumo"],["briga", "briga"],["swing", "swing"],["roupa", "roupa"],["venha", "venha"],["conto", "conto"],["aviso", "aviso"],["macro", "macro"],["tarde", "tarde"],["plaga", "plaga"],["sarau", "sarau"],["perco", "perco"],["cargo", "cargo"],["chefe", "chefe"],["fruto", "fruto"],["vento", "vento"],["farta", "farta"],["viram", "viram"],["amiga", "amiga"],["átimo", "atimo"],["légua", "legua"],["civil", "civil"],["grama", "grama"],["única", "unica"],["berro", "berro"],["virar", "virar"],["pedra", "pedra"],["manga", "manga"],["arado", "arado"],["catre", "catre"],["ornar", "ornar"],["saldo", "saldo"],["seixo", "seixo"],["surto", "surto"],["bença", "benca"],["sósia", "sosia"],["casar", "casar"],["ímpia", "impia"],["corso", "corso"],["troca", "troca"],["fosso", "fosso"],["beijo", "beijo"],["nuvem", "nuvem"],["traje", "traje"],["estro", "estro"],["assar", "assar"],["bruta", "bruta"],["mangá", "manga"],["magna", "magna"],["úteis", "uteis"],["gíria", "giria"],["tiver", "tiver"],["deste", "deste"],["itens", "itens"],["recém", "recem"],["trato", "trato"],["pinho", "pinho"],["porte", "porte"],["tição", "ticao"],["vazão", "vazao"],["vedar", "vedar"],["tutor", "tutor"],["amado", "amado"],["depor", "depor"],["arfar", "arfar"],["silvo", "silvo"],["canso", "canso"],["jejum", "jejum"],["bazar", "bazar"],["renda", "renda"],["irado", "irado"],["âmbar", "ambar"],["perto", "perto"],["deram", "deram"],["gabar", "gabar"],["grota", "grota"],["mídia", "midia"],["cifra", "cifra"],["bruto", "bruto"],["amada", "amada"],["rural", "rural"],["inter", "inter"],["má-fé", "ma-fe"],["feita", "feita"],["areia", "areia"],["laudo", "laudo"],["órgão", "orgao"],["pavor", "pavor"],["tchau", "tchau"],["nesse", "nesse"],["bucho", "bucho"],["pasma", "pasma"],["régio", "regio"],["fossa", "fossa"],["clero", "clero"],["segar", "segar"],["odiar", "odiar"],["stand", "stand"],["minar", "minar"],["vadio", "vadio"],["meche", "meche"],["vagar", "vagar"],["pomar", "pomar"],["troco", "troco"],["molde", "molde"],["rocha", "rocha"],["close", "close"],["mamãe", "mamae"],["aviar", "aviar"],["canto", "canto"],["negar", "negar"],["xucro", "xucro"],["sótão", "sotao"],["guria", "guria"],["cenho", "cenho"],["lesão", "lesao"],["visto", "visto"],["lesto", "lesto"],["jogar", "jogar"],["bolsa", "bolsa"],["cinto", "cinto"],["densa", "densa"],["proto", "proto"],["largo", "largo"],["paiol", "paiol"],["morfo", "morfo"],["horto", "horto"],["chula", "chula"],["marca", "marca"],["invés", "inves"],["ruído", "ruido"],["ileso", "ileso"],["pugna", "pugna"],["vista", "vista"],["volta", "volta"],["penso", "penso"],["urdir", "urdir"],["podar", "podar"],["dúbia", "dubia"],["ufano", "ufano"],["vasta", "vasta"],["cheia", "cheia"],["mocho", "mocho"],["varoa", "varoa"],["cível", "civel"],["frota", "frota"],["úbere", "ubere"],["tenha", "tenha"],["santo", "santo"],["bulir", "bulir"],["úmido", "umido"],["logos", "logos"],["velha", "velha"],["piche", "piche"],["linha", "linha"],["esgar", "esgar"],["culta", "culta"],["ágape", "agape"],["apear", "apear"],["ferpa", "ferpa"],["cerca", "cerca"],["nessa", "nessa"],["resto", "resto"],["fundo", "fundo"],["natal", "natal"],["peita", "peita"],["verão", "verao"],["pólis", "polis"],["narco", "narco"],["misto", "misto"],["manto", "manto"],["nesta", "nesta"],["etapa", "etapa"],["jazer", "jazer"],["símio", "simio"],["monta", "monta"],["coroa", "coroa"],["canil", "canil"],["letra", "letra"],["demão", "demao"],["ceita", "ceita"],["ardis", "ardis"],["preço", "preco"],["trago", "trago"],["final", "final"],["chaga", "chaga"],["barão", "barao"],["troço", "troco"],["findo", "findo"],["campa", "campa"],["gemer", "gemer"],["matar", "matar"],["lábia", "labia"],["mover", "mover"],["álamo", "alamo"],["banto", "banto"],["cosmo", "cosmo"],["álbum", "album"],["seiva", "seiva"],["fazes", "fazes"],["redor", "redor"],["todas", "todas"],["venho", "venho"],["folia", "folia"],["porca", "porca"],["áudio", "audio"],["retro", "retro"],["dança", "danca"],["salmo", "salmo"],["barro", "barro"],["folha", "folha"],["punha", "punha"],["axial", "axial"],["burra", "burra"],["sabor", "sabor"],["bolso", "bolso"],["louro", "louro"],["limpo", "limpo"],["queda", "queda"],["rente", "rente"],["calor", "calor"],["farol", "farol"],["neste", "neste"],["arroz", "arroz"],["lousa", "lousa"],["calça", "calca"],["salva", "salva"],["firma", "firma"],["lutar", "lutar"],["sigla", "sigla"],["mimar", "mimar"],["coevo", "coevo"],["torna", "torna"],["enjoo", "enjoo"],["baixa", "baixa"],["calvo", "calvo"],["míope", "miope"],["solta", "solta"],["macho", "macho"],["veloz", "veloz"],["ousar", "ousar"],["justa", "justa"],["fugiu", "fugiu"],["tumba", "tumba"],["zumbi", "zumbi"],["gueto", "gueto"],["logia", "logia"],["longo", "longo"],["nácar", "nacar"],["corar", "corar"],["chave", "chave"],["reler", "reler"],["vazia", "vazia"],["bedel", "bedel"],["forro", "forro"],["fátuo", "fatuo"],["penca", "penca"],["farto", "farto"],["vário", "vario"],["cacto", "cacto"],["obtém", "obtem"],["lucro", "lucro"],["sexto", "sexto"],["sinta", "sinta"],["mania", "mania"],["repor", "repor"],["subir", "subir"],["sugar", "sugar"],["urgir", "urgir"],["quite", "quite"],["custo", "custo"],["sofia", "sofia"],["puído", "puido"],["passe", "passe"],["ultra", "ultra"],["staff", "staff"],["valer", "valer"],["louca", "louca"],["sadio", "sadio"],["nariz", "nariz"],["versa", "versa"],["mimos", "mimos"],["harém", "harem"],["cardo", "cardo"],["usual", "usual"],["viger", "viger"],["refil", "refil"],["hífen", "hifen"],["lento", "lento"],["dados", "dados"],["árdua", "ardua"],["modal", "modal"],["outra", "outra"],["corte", "corte"],["sócio", "socio"],["rédea", "redea"],["choça", "choca"],["ferir", "ferir"],["ceifa", "ceifa"],["garra", "garra"]]`;

export function getWord() {
  let item =
    JSON.parse(dicto)[Math.floor(Math.random() * JSON.parse(dicto).length)];
  return {
    latim: item[1],
    pt: item[0],
  };
}

export function getWordPT(word: string) {
  let items: Array<string[]> = JSON.parse(dicto);

  let item = items.find((a) => a[1] == word);

  if (!item) items = bigDicto;

  item = items.find((a) => a[1] == word);

  if (!item) return word;

  return item[0];
}

export function validWord(word: string) {
  let items = bigDicto;

  const valid = items.find((i) => i[1] == word);

  return valid ? true : false;
}
