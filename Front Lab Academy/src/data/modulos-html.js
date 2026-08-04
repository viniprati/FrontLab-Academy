const HTML_COURSE_SOURCE = String.raw`
COMO LER ESTA APOSTILA

HTML e uma linguagem de marcacao. Ela nao e feita para resolver contas, repetir
acoes ou guardar dados em banco. Sua tarefa principal e descrever documentos:
qual trecho e titulo, qual e paragrafo, qual e link, qual e imagem, qual e
campo de formulario e quais regioes formam uma pagina.

Uma marcacao geralmente tem esta forma:

<elemento atributo="valor">conteudo</elemento>

<elemento> e a tag de abertura.
atributo="valor" acrescenta informacao ou comportamento ao elemento.
conteudo pode ser texto ou outros elementos.
</elemento> e a tag de fechamento. A barra informa que aquela caixa terminou.

Exemplo:

<a href="https://example.com">Visitar exemplo</a>

O elemento e a, que representa um link.
O atributo href guarda o destino.
O conteudo e o texto clicavel.
A tag final encerra a area clicavel.

Existem elementos vazios, que nao recebem conteudo interno:

<img src="foto.jpg" alt="Descricao da foto">
<input type="text" name="nome">
<meta charset="UTF-8">
<link rel="stylesheet" href="style.css">

Esta apostila esta guardada como material de leitura no editor. Os exemplos
mostram as tags como codigo de estudo.

===============================================================================
01 INTRODUCAO AO HTML
===============================================================================

HTML significa HyperText Markup Language.

HyperText, ou hipertexto, e um texto capaz de conectar documentos por links.
Antes da web, era comum ler uma folha do inicio ao fim. Na web, uma palavra
pode levar a uma pagina, arquivo, secao, imagem, video ou formulario.

Markup, ou marcacao, significa adicionar significado ao conteudo. Compare:

Meu Curso
Comece hoje.

com:

<h1>Meu Curso</h1>
<p>Comece hoje.</p>

Para os olhos os dois podem parecer texto. Para o navegador, tecnologias de
acessibilidade e buscadores, o segundo informa que "Meu Curso" e o titulo mais
importante e "Comece hoje." e um paragrafo.

HTML cria uma arvore de elementos. Se uma tag esta dentro de outra, ela e
filha daquela tag:

<article>
    <h2>Aula de HTML</h2>
    <p>Aprenda tags.</p>
</article>

article e pai de h2 e p. h2 e p sao irmaos, pois pertencem ao mesmo pai.
Essa ideia de familia e essencial para entender organizacao e, depois, CSS.

HTML nao e aparencia. Um h1 costuma vir grande e forte por estilo padrao do
navegador, mas ele deve ser escolhido por ser o titulo principal, nao por ser
grande. Cor, fonte, espacamento e posicao pertencem ao CSS.

HTML tambem nao e logica de aplicacao. Ele pode declarar um botao, mas a acao
sofisticada de abrir menus, corrigir respostas ou salvar progresso costuma
envolver JavaScript e um sistema servidor.

Termos fundamentais:

elemento: a unidade HTML completa, como <p>Texto</p>.
tag: a marcacao de abertura ou fechamento, como <p> e </p>.
atributo: uma configuracao dentro da abertura, como lang="pt-br".
conteudo: texto ou elementos encaixados dentro de outro elemento.
documento: o arquivo HTML completo.

===============================================================================
02 COMO A WEB FUNCIONA
===============================================================================

A web e um sistema em que um cliente pede recursos a um servidor.

Cliente e normalmente o navegador. Ele interpreta HTML, CSS, imagens,
fontes, audio, video e JavaScript para apresentar uma pagina.

Servidor e um computador ou servico preparado para responder aos pedidos. Um
arquivo criado apenas no seu computador ainda nao esta publicado para outras
pessoas; quando hospedado em um servidor, passa a ser acessivel por endereco.

URL e o endereco de um recurso:

https://www.exemplo.com/cursos/html/index.html

Partes importantes:

https          protocolo seguro usado na comunicacao.
www.exemplo.com dominio, nome do servidor.
/cursos/html/  caminho de pastas no endereco.
index.html     recurso solicitado.

Quando o visitante acessa uma pagina:

1. O navegador interpreta a URL.
2. Descobre a qual servidor o dominio corresponde.
3. Faz uma requisicao HTTP pedindo o recurso.
4. O servidor responde com um status e o conteudo.
5. Se a resposta for HTML, o navegador comeca a interpreta-la.
6. Ao encontrar CSS, imagens ou scripts, faz novos pedidos.
7. Constroi uma arvore interna chamada DOM.
8. Mostra o resultado ao usuario.

Status comuns de resposta:

200 significa que o recurso foi encontrado.
301 ou 302 significa redirecionamento para outro endereco.
404 significa que o caminho pedido nao foi encontrado.
500 significa erro no servidor.

Exemplo de dependencias em HTML:

<link rel="stylesheet" href="css/site.css">
<img src="images/logo.png" alt="Marca do curso">
<script src="js/menu.js"></script>

O documento pede outros tres recursos. Se a pasta ou nome do arquivo estiver
incorreto, o pedido falha mesmo que a tag esteja escrita corretamente.

HTML entregue pelo servidor pode ser estatico ou gerado dinamicamente. Um
arquivo .html simples e estatico: seu conteudo ja existe. Em sites com login,
produtos ou mensagens, um sistema pode criar o HTML da resposta usando dados.

===============================================================================
03 ESTRUTURA BASICA DE UM DOCUMENTO HTML
===============================================================================

Um documento moderno com configuracoes essenciais e:

<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Titulo unico e descritivo da pagina</title>
    </head>
    <body>
        <h1>Assunto principal</h1>
        <p>Conteudo visivel.</p>
    </body>
</html>

<!DOCTYPE html>

E uma declaracao, nao um elemento visual. Informa ao navegador que o codigo
deve seguir o padrao moderno HTML5. Sem ela, alguns navegadores podem ativar
um modo de compatibilidade historico e interpretar layout de forma inesperada.

<html lang="pt-br">

E o elemento raiz: todos os outros elementos pertencem a ele. O atributo lang
informa o idioma predominante. Um leitor de tela pode usar pronuncia correta,
e ferramentas de traducao e busca recebem informacao melhor.

<head>

Contem metadados e recursos da pagina. Em geral nao contem o texto principal
que o visitante le. Inclui codificacao, titulo, descricao, links para CSS,
icone, informacoes de compartilhamento e outras configuracoes.

<meta charset="UTF-8">

Deve aparecer cedo no head. UTF-8 inclui letras acentuadas, caracteres de
varios idiomas e simbolos. Sem codificacao correta, "informacao" com acentos
poderia aparecer com caracteres quebrados.

<meta name="viewport" content="width=device-width, initial-scale=1.0">

Indica que a largura de referencia deve acompanhar a tela do dispositivo e
que o zoom inicial e normal. E indispensavel para paginas responsivas em
celulares.

<title>

E o titulo documental, visto na aba, historico, favoritos e normalmente no
resultado de busca. Nao substitui o h1 visivel.

<body>

Contem a estrutura percebida pelo usuario: cabecalho, conteudo, formularios,
imagens, links e rodape.

A indentacao nao e necessaria para o navegador desenhar o documento, mas e
necessaria para humanos entenderem aninhamento e evitarem erros.

===============================================================================
04 TAGS PRINCIPAIS DO HTML
===============================================================================

As tags podem ser entendidas por familias.

Estrutura documental:

<html> documento completo
<head> informacoes da pagina
<body> conteudo do documento

Regioes semanticas:

<header> introducao ou cabecalho
<nav> conjunto importante de navegacao
<main> conteudo principal unico
<section> secao tematica
<article> conteudo independente
<aside> conteudo complementar
<footer> informacoes de encerramento

Texto:

<h1> ate <h6> titulos hierarquicos
<p> paragrafo
<strong> importancia forte
<em> enfase
<blockquote> citacao extensa
<code> trecho de codigo
<pre> texto pre-formatado, preserva espacos e linhas

Conexoes e midia:

<a> link
<img> imagem
<audio> audio
<video> video
<iframe> conteudo incorporado de outro documento

Agrupamento:

<ul> lista nao ordenada
<ol> lista ordenada
<li> item de lista
<table> dados tabulares
<div> agrupador generico em bloco
<span> agrupador generico dentro de texto

Interacao e coleta de dados:

<form> formulario
<label> rotulo de campo
<input> entrada compacta
<select> escolha em lista
<option> opcao de select
<textarea> entrada extensa
<button> botao
<fieldset> grupo de campos
<legend> nome do grupo

Uma tag correta e aquela que representa o significado do conteudo. O HTML fica
mais compreensivel quando a escolha vem da funcao e nao do visual desejado.

===============================================================================
05 TEXTOS E PARAGRAFOS
===============================================================================

Um paragrafo e representado por <p>. Ele agrupa frases que desenvolvem uma
ideia. Navegadores normalmente exibem paragrafo em bloco, começando em uma
nova linha e com margem, mas o significado e anterior ao estilo.

<p>HTML descreve o conteudo de uma pagina.</p>
<p>CSS controla a apresentacao visual desse conteudo.</p>

Texto digitado com quebras e espacos extras no arquivo nao mantem, em regra,
os mesmos espacos no resultado. O navegador colapsa sequencias de espaco em
um espaco visual dentro do fluxo normal.

<p>
    Esta frase     ainda costuma aparecer
    como texto continuo no navegador.
</p>

Para representar mudanca de ideia, use outro p. Para uma quebra realmente
necessaria dentro da mesma informacao, pode-se usar <br>, como em versos ou
um endereco postal. Nao use muitos br para criar espaco visual; isso e CSS.

Marcacoes textuais importantes:

<strong>Atenção:</strong> o prazo termina hoje.

strong comunica importancia, nao apenas negrito.

<em>Realmente</em> precisamos validar o formulario.

em comunica enfase de voz, frequentemente exibida em italico.

<small>Termos e condicoes aplicaveis.</small>

small representa observacao secundaria, como texto legal curto.

<mark>HTML semantico</mark>

mark representa trecho destacado como relevante no contexto, como resultado
de busca em um texto.

Entidades HTML representam caracteres que teriam funcao especial ou que se
prefere codificar:

&lt; produz sinal de menor usado para mostrar uma tag como texto.
&gt; produz sinal de maior.
&amp; produz o caractere e comercial.
&copy; produz simbolo de direitos autorais.

Em um documento UTF-8, acentos podem ser escritos diretamente. Entidades
continuam uteis quando um caractere conflita com a sintaxe.

===============================================================================
06 TITULOS E HIERARQUIA DE CONTEUDO
===============================================================================

Titulos formam o sumario logico do documento. Existem seis niveis:

<h1>Assunto geral da pagina</h1>
<h2>Primeira secao principal</h2>
<h3>Subassunto da primeira secao</h3>
<h4>Detalhe do subassunto</h4>
<h2>Segunda secao principal</h2>

h1 identifica o tema principal daquele documento. h2 divide esse tema em
grandes secoes. h3 subdivide um h2, e assim por diante.

Exemplo para uma pagina de curso:

<h1>Curso Completo de HTML</h1>

<section>
    <h2>Formularios</h2>
    <article>
        <h3>Campos de Texto</h3>
        <p>Conteudo...</p>
    </article>
    <article>
        <h3>Selecao de Opcoes</h3>
        <p>Conteudo...</p>
    </article>
</section>

Um erro frequente e escolher h4 porque ele aparece menor, mesmo quando o
conteudo e diretamente subordinado a h2. Aparencia se regula com CSS:

h2 {
    font-size: 1.25rem;
}

A hierarquia correta beneficia:

leitores de tela, que podem listar e pular por titulos;
buscadores, que identificam os assuntos;
leitores, que escaneiam a pagina;
desenvolvedores, que compreendem a estrutura.

Titulos nao devem ser usados para transformar qualquer frase em texto grande.
Uma chamada decorativa sem papel de secao pode ser um p estilizado; um titulo
deve anunciar o conteudo que vem em seguida.

===============================================================================
07 COMENTARIOS NO HTML
===============================================================================

Comentarios permitem deixar instrucoes para leitores do codigo sem fazer o
texto participar do documento visivel. Esta apostila inteira usa esse recurso.

A sintaxe real de comentario tem uma abertura formada por sinal de menor,
exclamacao e dois hifens, e um fechamento formado por dois hifens e sinal de
maior. Como esta apostila ja esta dentro de um comentario, a sintaxe nao e
repetida literalmente aqui para nao encerrar o bloco antes da hora.

Usos adequados:

explicar uma decisao que nao e obvia;
separar secoes em um arquivo educativo;
registrar uma observacao provisoria de manutencao;
orientar quem esta aprendendo.

Usos inadequados:

guardar senha, token ou informacao privada;
deixar grandes blocos de codigo antigo indefinidamente;
explicar algo que o proprio nome claro ja explica;
usar comentarios para esconder problemas em vez de corrigi-los.

Comentarios ainda sao enviados a quem recebe o arquivo HTML. Isso significa
que um visitante pode visualizar o codigo-fonte e le-los. Invisivel na tela
nao significa secreto.

Tambem e importante saber que um comentario HTML nao deve conter internamente
uma sequencia de dois hifens. Em materiais longos, separadores com sinais de
igual sao uma escolha segura.

===============================================================================
08 ATRIBUTOS HTML
===============================================================================

Atributos sao informacoes adicionadas na tag de abertura:

<elemento nome="valor">conteudo</elemento>

Exemplo:

<a href="curso.html" class="botao" id="curso-html">Abrir curso</a>

href define para onde o link navega.
class associa uma ou mais categorias reutilizaveis, principalmente para CSS.
id identifica um elemento unico no documento e pode servir a ancora, CSS ou JS.

Atributos globais podem ser usados em quase todos os elementos:

id="contato"
class="card destaque"
title="Informacao complementar"
lang="en"
hidden
data-modulo="01"

Um id nao deve ser repetido na mesma pagina:

<section id="introducao">...</section>
<section id="introducao">...</section>  incorreto, pois cria ambiguidade.

Uma class pode ser repetida e pode conter mais de um nome:

<article class="card concluido">...</article>
<article class="card">...</article>

O primeiro recebe as categorias card e concluido; o segundo apenas card.

Atributos booleanos valem pela presenca:

<input type="email" required>
<option disabled>Escolha uma opcao</option>
<video controls></video>

required presente significa obrigatorio. Nao se escreve required="false" para
desligar; remove-se o atributo.

Atributos data guardam informacao personalizada:

<article data-modulo="08" data-nivel="iniciante">Atributos</article>

Eles nao fornecem comportamento sozinhos, mas JavaScript pode consulta-los.

===============================================================================
09 LINKS EXTERNOS
===============================================================================

O elemento <a> cria uma ancora navegavel. Um link externo aponta para recurso
fora do site atual e normalmente usa URL completa.

<a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML">
    Documentacao de HTML
</a>

href e obrigatorio para que a ancora seja efetivamente um link. O texto do
link deve informar o destino. "Documentacao de HTML" e melhor que "clique
aqui", pois faz sentido mesmo quando lido isoladamente.

Abrir em nova aba:

<a
    href="https://example.com"
    target="_blank"
    rel="noopener noreferrer"
>
    Abrir site de referencia
</a>

target="_blank" solicita novo contexto de navegacao, geralmente nova aba.
rel="noopener" impede que a pagina aberta obtenha acesso indevido a pagina
origem por window.opener.
rel="noreferrer" evita o envio da origem como referencia em alguns cenarios.

Links para outros protocolos:

<a href="mailto:contato@example.com">Enviar email</a>
<a href="tel:+5511999999999">Telefonar</a>

mailto e tel dependem de aplicativos configurados no aparelho; nao enviam
mensagem automaticamente.

Links externos precisam ser claros sobre o destino quando a mudanca de site
puder surpreender o usuario.

===============================================================================
10 LINKS INTERNOS
===============================================================================

Links internos conectam documentos pertencentes ao mesmo projeto. Eles
permitem construir um site com varias paginas.

Estrutura:

projeto/
    index.html
    images/
        logo.png
    paginas/
        sobre.html
        contato.html

Dentro de index.html:

<a href="paginas/sobre.html">Sobre</a>
<a href="paginas/contato.html">Contato</a>

O navegador parte da pasta do arquivo atual, entra em paginas e abre o alvo.

Dentro de paginas/sobre.html:

<a href="../index.html">Voltar ao inicio</a>
<img src="../images/logo.png" alt="Marca">

Dois pontos seguidos de barra significam subir um nivel de pasta.

Um link interno pode apontar para uma pagina e para uma secao dentro dela:

<a href="paginas/contato.html#formulario">Ir direto ao formulario</a>

Nesse caso o navegador carrega contato.html e procura id="formulario".

Links devem ser testados a partir de cada arquivo. Um caminho que funciona em
index.html pode nao funcionar dentro de uma pasta mais profunda.

===============================================================================
11 ANCORAS NA PAGINA
===============================================================================

Uma ancora por fragmento leva a um elemento identificado no mesmo documento.
O fragmento e a parte da URL iniciada por #.

<nav aria-label="Sumario da aula">
    <a href="#conceito">Conceito</a>
    <a href="#exemplos">Exemplos</a>
    <a href="#exercicios">Exercicios</a>
</nav>

<section id="conceito">
    <h2>Conceito</h2>
</section>

<section id="exemplos">
    <h2>Exemplos</h2>
</section>

<section id="exercicios">
    <h2>Exercicios</h2>
</section>

Ao clicar no primeiro link, a URL pode terminar em #conceito e o navegador
desloca a pagina ate o elemento correspondente.

Boas escolhas de id:

id="formulario-contato"
id="tabela-de-precos"
id="acessibilidade"

Escolhas problematicas:

ids repetidos;
nomes sem significado como id="x";
espacos dentro do id.

Link para o topo:

<a href="#inicio">Voltar ao inicio</a>

Para isso, algum elemento no inicio precisa ter id="inicio".

Ancoras tambem ajudam a compartilhar um trecho especifico de paginas longas.

===============================================================================
12 IMAGENS NO HTML
===============================================================================

Imagem e inserida com o elemento vazio <img>:

<img
    src="images/aula-html.png"
    alt="Codigo HTML aberto em um editor"
    width="800"
    height="450"
>

src e a origem do arquivo. Pode ser caminho local do site ou URL externa.
alt e alternativa textual, estudada com profundidade no proximo modulo.
width e height declaram dimensoes intrinsecas em pixels. Isso ajuda o
navegador a reservar o espaco correto antes do arquivo terminar de baixar,
reduzindo saltos no layout.

Formatos:

JPEG e adequado para fotografias, com compressao que reduz tamanho.
PNG aceita transparencia e preserva nitidez, mas pode ficar pesado.
WebP e moderno e frequentemente menor para imagens na web.
SVG descreve formas vetoriais, adequado a logos e icones escalaveis.
GIF suporta animacoes simples, mas video costuma ser mais eficiente para cenas.

Imagem com legenda semantica:

<figure>
    <img src="images/dom.png" alt="Arvore DOM de uma pagina de aula">
    <figcaption>Elementos HTML organizados como arvore.</figcaption>
</figure>

figure agrupa uma midia autocontida.
figcaption fornece legenda visivel associada.
alt e figcaption nao precisam repetir exatamente a mesma frase: alt atende a
funcao alternativa da imagem; legenda contextualiza a ilustracao.

Para desempenho, imagens devem ser dimensionadas e otimizadas. Um arquivo
gigante reduzido apenas pelo CSS ainda precisa ser baixado inteiro.

===============================================================================
13 TEXTO ALTERNATIVO E ACESSIBILIDADE EM IMAGENS
===============================================================================

alt nao e um campo para colocar qualquer frase. Ele deve substituir a funcao
que a imagem exerce naquele contexto.

Imagem informativa:

<img
    src="grafico-conclusao.png"
    alt="Conclusao das aulas aumentou de 40 por cento em abril para 75 por cento em maio"
>

O alt transmite a informacao importante, nao apenas "grafico".

Imagem que e link:

<a href="index.html">
    <img src="logo.svg" alt="Pagina inicial da Escola HTML">
</a>

Aqui a funcao do link e mais importante do que descrever formas da logo.

Imagem decorativa:

<img src="detalhe-azul.svg" alt="">

Alt vazio informa que tecnologia assistiva pode ignora-la. Se fosse escrito
"onda azul decorativa" sem necessidade, o usuario ouviria ruido repetitivo.

Imagem que acompanha texto ja suficiente:

<button type="button">
    <img src="icone-busca.svg" alt="">
    Buscar aulas
</button>

O texto do botao ja anuncia a acao, portanto o icone pode ser silencioso.

Evite:

alt="imagem"
alt="foto"
alt="icone"
alt igual ao nome do arquivo

Essas frases raramente comunicam o que a pessoa precisa saber.

Quando uma imagem complexa, como infografico, exige explicacao longa, forneca
um resumo no alt e descricao detalhada no texto proximo.

===============================================================================
14 CAMINHOS RELATIVOS E ABSOLUTOS
===============================================================================

Caminho e a instrucao usada para localizar um recurso.

Caminho relativo parte da localizacao do documento atual:

<img src="images/logo.png" alt="Marca">

Se esta tag estiver em projeto/index.html, ela procura:
projeto/images/logo.png.

Se a mesma tag for copiada para projeto/paginas/sobre.html, ela procurara:
projeto/paginas/images/logo.png, que pode nao existir.

Para subir uma pasta:

<img src="../images/logo.png" alt="Marca">

O ponto duplo significa pasta pai. Em paginas/sobre.html, ele retorna a
projeto e depois entra em images.

Caminho raiz relativo:

<img src="/images/logo.png" alt="Marca">

A barra inicial parte da raiz do dominio publicado. E estavel entre paginas
do mesmo dominio, mas precisa corresponder ao local real de publicacao. Se o
projeto estiver publicado em /Projeto/images, usar apenas /images falhara.

URL absoluta:

<img src="https://cdn.example.com/images/logo.png" alt="Marca">

Informa protocolo, dominio e caminho completo. Serve para recurso externo,
mas cria dependencia de outro servidor.

Ponto simples:

<a href="./contato.html">Contato</a>

./ significa a pasta atual. Frequentemente pode ser omitido.

Ao escolher caminhos, considere onde o arquivo sera hospedado, nao somente
como ele abre localmente.

===============================================================================
15 LISTAS ORDENADAS
===============================================================================

Uma lista ordenada comunica sequencia, prioridade ou classificacao:

<ol>
    <li>Criar o arquivo HTML</li>
    <li>Adicionar a estrutura basica</li>
    <li>Validar o documento</li>
</ol>

ol significa ordered list. li significa list item. O navegador fornece a
numeracao e a ajusta caso itens sejam acrescentados ou removidos.

Listas ordenadas podem iniciar em outro numero:

<ol start="4">
    <li>Adicionar formularios</li>
    <li>Revisar acessibilidade</li>
</ol>

O atributo reversed apresenta contagem descendente:

<ol reversed>
    <li>Terceiro colocado</li>
    <li>Segundo colocado</li>
    <li>Primeiro colocado</li>
</ol>

value em um item altera sua numeracao:

<ol>
    <li>Inicio</li>
    <li value="10">Item numerado como dez</li>
</ol>

Use ol quando trocar a ordem mudar o significado, como passos de configuracao,
resultado de ranking ou roteiro cronologico.

===============================================================================
16 LISTAS NAO ORDENADAS
===============================================================================

Uma lista nao ordenada representa um conjunto em que a ordem nao e essencial:

<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>

ul significa unordered list. Por padrao, o navegador desenha marcadores, que
podem ser personalizados por CSS sem mudar o significado.

Menus sao normalmente listas nao ordenadas de links:

<nav aria-label="Menu principal">
    <ul>
        <li><a href="index.html">Inicio</a></li>
        <li><a href="aulas.html">Aulas</a></li>
        <li><a href="contato.html">Contato</a></li>
    </ul>
</nav>

A lista comunica que os links pertencem ao mesmo conjunto de navegacao.

Tambem e adequada para:

beneficios de um produto;
ingredientes sem ordem;
requisitos de um curso;
categorias;
recursos incluidos.

Nao crie marcadores manualmente escrevendo hifens em paragrafos. Uma ul
comunica a estrutura a leitores de tela e pode ser estilizada corretamente.

===============================================================================
17 LISTAS ANINHADAS
===============================================================================

Uma lista pode conter sublistas quando um item possui subdivisoes:

<ul>
    <li>
        Estrutura
        <ul>
            <li>Head</li>
            <li>Body</li>
        </ul>
    </li>
    <li>
        Formularios
        <ul>
            <li>Input</li>
            <li>Textarea</li>
            <li>Button</li>
        </ul>
    </li>
</ul>

A sublista fica dentro do li ao qual pertence. Escrever a segunda ul fora do
li quebraria a relacao semantica entre a categoria e os itens.

Listas ordenadas e nao ordenadas podem ser combinadas:

<ol>
    <li>
        Prepare o documento:
        <ul>
            <li>Crie index.html</li>
            <li>Defina UTF-8</li>
        </ul>
    </li>
    <li>Escreva o conteudo.</li>
</ol>

Evite aninhar niveis em excesso: uma estrutura profundamente hierarquica fica
dificil de compreender e navegar. Em conteudo longo, talvez seja melhor criar
secoes com titulos.

===============================================================================
18 TABELAS BASICAS
===============================================================================

Tabela representa dados relacionados por linhas e colunas. Ela nao deve ser
usada apenas para posicionar partes de uma pagina.

<table>
    <tr>
        <th>Modulo</th>
        <th>Duracao</th>
        <th>Nivel</th>
    </tr>
    <tr>
        <td>Introducao ao HTML</td>
        <td>30 minutos</td>
        <td>Inicial</td>
    </tr>
    <tr>
        <td>Formularios</td>
        <td>60 minutos</td>
        <td>Intermediario</td>
    </tr>
</table>

table envolve a tabela inteira.
tr significa table row e cria uma linha.
th significa table header e identifica uma celula de cabecalho.
td significa table data e contem dado comum.

Os cabecalhos permitem interpretar a celula "60 minutos": ela pertence a
linha Formularios e coluna Duracao.

Uma tabela e adequada para:

horarios;
comparacoes de planos;
relatorios;
resultados;
precos relacionados a recursos.

Uma serie de cards independentes geralmente nao e tabela, mesmo que apareca
em colunas visualmente.

===============================================================================
19 TABELAS SEMANTICAS
===============================================================================

Uma tabela completa inclui titulo e grupos estruturais:

<table>
    <caption>Conteudos concluidos por estudante</caption>
    <thead>
        <tr>
            <th scope="col">Estudante</th>
            <th scope="col">Modulos concluidos</th>
            <th scope="col">Percentual</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">Ana</th>
            <td>25</td>
            <td>50%</td>
        </tr>
        <tr>
            <th scope="row">Lucas</th>
            <td>50</td>
            <td>100%</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <th scope="row">Media</th>
            <td>37,5</td>
            <td>75%</td>
        </tr>
    </tfoot>
</table>

caption nomeia a tabela e explica do que os dados tratam.
thead agrupa a cabeca da tabela.
tbody agrupa os registros principais.
tfoot agrupa resumo, total ou conclusao.
scope="col" informa que o th rotula uma coluna.
scope="row" informa que o th rotula uma linha.

Celulas que ocupam mais espaco:

<td colspan="3">Nenhum resultado encontrado.</td>

colspan faz uma celula ocupar varias colunas.
rowspan faz uma celula ocupar varias linhas.

Em tabelas complexas, associacao correta entre cabecalhos e dados e
fundamental para usuarios de leitor de tela. Se o dado pode ser apresentado
como lista simples, evite complexidade desnecessaria.

===============================================================================
20 FORMULARIOS BASICOS
===============================================================================

Formulario e uma regiao interativa para coletar dados. Ele pode conter
campos, selecoes, escolhas, mensagens e botoes.

<form action="/cadastros" method="POST">
    <label for="nome">Nome</label>
    <input id="nome" name="nome" type="text">

    <button type="submit">Cadastrar</button>
</form>

<form>

Define os limites do conjunto de dados. Campos fora dele nao participam do
envio daquele formulario, salvo configuracoes especificas mais avancadas.

action="/cadastros"

Indica o endereco que recebera os dados quando o envio ocorrer. Se action
apontar para # ou estiver sem um sistema preparado para responder, o HTML
apenas tenta navegar; nao cria salvamento, email ou banco de dados.

method="POST"

Define como os dados sao transportados.

GET acrescenta dados na URL, por exemplo:

/buscar?termo=html&nivel=iniciante

E adequado para pesquisas, filtros e paginas que podem ser compartilhadas ou
recarregadas sem alterar dados.

POST envia os dados no corpo da requisicao. E usual para cadastro, contato,
login e alteracoes. POST sozinho nao torna informacao segura; a comunicacao
precisa usar HTTPS e o servidor precisa tratar os dados corretamente.

Como os dados ganham nome:

<input name="email" value="aluno@example.com">

No envio, o par e email=aluno@example.com. Um campo sem name geralmente nao e
incluido nos dados enviados, mesmo que a pessoa tenha digitado nele.

Outros atributos do form:

autocomplete="off" pode solicitar que o navegador nao sugira dados, embora
nao deva ser usado sem motivo em campos comuns.

enctype="multipart/form-data" e necessario quando um formulario envia arquivo
por input do tipo file.

novalidate desliga a validacao nativa na tentativa de envio; deve ser usado
apenas quando uma solucao de validacao acessivel a substitui.

===============================================================================
21 INPUTS DE TEXTO
===============================================================================

<input> e um elemento vazio que recebe diferentes tipos de valor dependendo de
seu atributo type. O tipo text coleta uma linha de texto comum.

<label for="nome-completo">Nome completo</label>
<input
    id="nome-completo"
    name="nome"
    type="text"
    autocomplete="name"
    minlength="3"
    maxlength="100"
    placeholder="Ex.: Maria da Silva"
    required
>

id="nome-completo" identifica o elemento na pagina. O label usa exatamente
esse id no atributo for. O id nao e necessariamente o nome enviado.

name="nome" e a chave dos dados no envio. Um servidor receberia nome junto ao
valor digitado.

type="text" cria entrada textual de uma linha. Quebras de linha nao sao
apropriadas aqui; para texto longo usa-se textarea.

autocomplete="name" informa ao navegador qual dado humano esta sendo
solicitado. Valores especificos como name, given-name, family-name, username,
organization e address-line1 melhoram preenchimento automatico.

minlength e maxlength limitam quantidade de caracteres. minlength interfere
na validade quando um valor e fornecido; required e o que obriga que nao
fique vazio.

placeholder e uma dica breve sobre formato, nao um rotulo. Some quando o
usuario escreve, geralmente possui contraste mais fraco e nao e substituto de
label.

value define um valor inicial:

<input type="text" name="pais" value="Brasil">

readonly permite ler e enviar um valor, mas impede edicao.
disabled impede interacao e normalmente exclui o valor do envio.

===============================================================================
22 INPUTS DE EMAIL, SENHA E NUMERO
===============================================================================

Os tipos de input comunicam a natureza esperada da resposta. Isso permite
validacao nativa e teclados mais apropriados em dispositivos moveis.

Email:

<label for="email">Email</label>
<input
    id="email"
    name="email"
    type="email"
    autocomplete="email"
    required
>

type="email" testa uma estrutura basica compatível com endereco de email. Nao
confirma que a caixa existe nem que pertence ao usuario; para isso, sistemas
reais enviam mensagem de verificacao.

Senha:

<label for="senha">Senha</label>
<input
    id="senha"
    name="senha"
    type="password"
    autocomplete="new-password"
    minlength="12"
    required
>

type="password" mascara visualmente a digitacao. Ele nao criptografa a senha
nem substitui HTTPS, armazenamento seguro e regras do servidor.

Numero:

<label for="quantidade">Quantidade de vagas</label>
<input
    id="quantidade"
    name="quantidade"
    type="number"
    min="1"
    max="10"
    step="1"
    required
>

min e max estabelecem limites aceitos.
step informa incremento valido; step="0.01" pode servir a decimal.

Nem todo dado composto de algarismos e numero matematico. CPF, CEP, numero de
telefone e cartao nao devem usar type="number", pois podem ter zeros iniciais,
formatacao e nenhuma operacao aritmetica. Para telefone use type="tel".

===============================================================================
23 CHECKBOX E RADIO
===============================================================================

Checkbox representa escolhas independentes. A pessoa pode selecionar nenhuma,
uma ou varias opcoes.

<fieldset>
    <legend>Assuntos de interesse</legend>

    <label>
        <input type="checkbox" name="interesses" value="semantica">
        Semantica
    </label>

    <label>
        <input type="checkbox" name="interesses" value="formularios">
        Formularios
    </label>
</fieldset>

Quando selecionados, os campos podem enviar o mesmo name com valores
diferentes. Se nao selecionado, um checkbox normalmente nao envia valor.

Radio representa uma escolha exclusiva dentro de um grupo:

<fieldset>
    <legend>Nivel de conhecimento</legend>
    <label>
        <input type="radio" name="nivel" value="iniciante" required>
        Iniciante
    </label>
    <label>
        <input type="radio" name="nivel" value="intermediario">
        Intermediario
    </label>
    <label>
        <input type="radio" name="nivel" value="avancado">
        Avancado
    </label>
</fieldset>

Todos compartilham name="nivel". Isso cria o grupo: selecionar um desmarca os
outros. O value distingue qual opcao foi escolhida.

O atributo checked deixa uma opcao inicialmente marcada. Use com cuidado para
nao induzir consentimentos ou decisoes que deveriam ser deliberadas.

===============================================================================
24 SELECT E OPTIONS
===============================================================================

<select> oferece opcoes predefinidas. E apropriado quando a resposta precisa
ser uma escolha controlada, como estado, categoria ou modulo.

<label for="trilha">Trilha desejada</label>
<select id="trilha" name="trilha" required>
    <option value="" selected disabled>Escolha uma trilha</option>
    <option value="html">HTML completo</option>
    <option value="css">CSS completo</option>
    <option value="frontend">Front-end completo</option>
</select>

O texto interno da option e mostrado ao usuario.
O atributo value e enviado ao servidor.
Uma primeira option com value vazio e disabled funciona como instrucao sem
servir como escolha valida para um select required.

Opcoes agrupadas:

<select id="aula" name="aula">
    <optgroup label="Fundamentos">
        <option value="estrutura">Estrutura HTML</option>
        <option value="textos">Textos</option>
    </optgroup>
    <optgroup label="Interacao">
        <option value="forms">Formularios</option>
    </optgroup>
</select>

Selecao multipla:

<select id="topicos" name="topicos" multiple>
    <option value="links">Links</option>
    <option value="imagens">Imagens</option>
    <option value="tabelas">Tabelas</option>
</select>

multiple permite selecionar mais de uma opcao. Como a interacao varia e pode
nao ser evidente para todos os usuarios, checkboxes podem ser mais claros
quando ha poucas opcoes.

===============================================================================
25 TEXTAREA
===============================================================================

Textarea recebe texto com varias linhas:

<label for="objetivo">Conte seu objetivo de estudo</label>
<textarea
    id="objetivo"
    name="objetivo"
    rows="6"
    cols="50"
    minlength="30"
    maxlength="1000"
    placeholder="Explique o que pretende criar com HTML."
    required
></textarea>

Ao contrario de input, textarea tem fechamento. Um valor inicial fica entre
as tags:

<textarea name="mensagem">Texto inicial editavel</textarea>

Espacos e linhas colocados acidentalmente entre abertura e fechamento tambem
podem virar valor inicial, portanto uma textarea que deve iniciar vazia e
frequentemente escrita com as tags juntas.

rows indica quantidade inicial aproximada de linhas visiveis.
cols indica largura aproximada por caracteres; layouts atuais normalmente
tambem controlam dimensao com CSS.
maxlength evita mensagens maiores do que o limite declarado.

Textarea e adequada para mensagem de contato, descricao de projeto,
biografia, comentario e resposta discursiva. Nao use textarea para senha,
email ou opcoes pequenas que tenham tipo mais preciso.

===============================================================================
26 BOTOES NO HTML
===============================================================================

O elemento button representa uma acao:

<button type="submit">Enviar inscricao</button>
<button type="reset">Restaurar campos</button>
<button type="button">Mostrar resposta</button>

type="submit" dentro de um form aciona validacao nativa e, se valido,
solicita envio para o action usando o method.

type="reset" devolve campos aos seus valores iniciais. Em formularios longos
e perigoso porque um clique acidental pode apagar trabalho; deve ser usado
com criterio.

type="button" nao possui acao padrao de formulario. E adequado a
comportamentos que serao implementados com JavaScript.

Um button pode conter texto e imagem:

<button type="submit">
    <img src="icons/enviar.svg" alt="">
    Enviar resposta
</button>

Como o texto ja nomeia o botao, a imagem decorativa possui alt vazio.

Diferenca entre link e button:

<a href="aula-02.html">Proxima aula</a>

Navega a outro recurso; semanticamente e link.

<button type="submit">Salvar resposta</button>

Realiza uma acao; semanticamente e botao.

Mesmo que CSS os deixe com a mesma cor, escolher elemento correto preserva
navegacao por teclado, anuncios acessiveis e expectativas do usuario.

===============================================================================
27 LABELS EM FORMULARIOS
===============================================================================

Label da nome a um controle. Sem label claro, a pessoa pode enxergar uma caixa
em branco sem saber qual dado fornecer, e leitor de tela pode anunciar somente
"campo de edicao".

Associacao explicita:

<label for="usuario">Nome de usuario</label>
<input id="usuario" name="usuario" type="text">

O valor de for deve coincidir exatamente com o id. Clicar no label foca o
input, aumentando a area de interacao.

Associacao envolvendo o controle:

<label>
    <input type="checkbox" name="noticias" value="sim">
    Quero receber novidades
</label>

Essa forma e comum para checkbox e radio, pois texto e controle formam uma
unidade clicavel.

Instrucoes adicionais:

<label for="senha">Senha</label>
<p id="ajuda-senha">Use no minimo 12 caracteres.</p>
<input
    id="senha"
    name="senha"
    type="password"
    aria-describedby="ajuda-senha"
    minlength="12"
    required
>

aria-describedby conecta a instrucao complementar ao campo para tecnologia
assistiva. Ele complementa, nao substitui, a semantica nativa.

Nao dependa de placeholder como label, pois a instrucao desaparece durante a
digitacao e pode dificultar revisao e acessibilidade.

===============================================================================
28 FIELDSET E LEGEND
===============================================================================

fieldset agrupa controles relacionados. legend nomeia o grupo. Esse contexto
e essencial quando opcoes so fazem sentido como resposta a uma pergunta.

<fieldset>
    <legend>Formato preferido de aula</legend>

    <label>
        <input type="radio" name="formato" value="texto" required>
        Texto
    </label>

    <label>
        <input type="radio" name="formato" value="video">
        Video
    </label>

    <label>
        <input type="radio" name="formato" value="audio">
        Audio
    </label>
</fieldset>

Ao navegar nos radios, uma pessoa precisa ouvir tanto "Video" quanto a
pergunta "Formato preferido de aula". Legend oferece esse contexto.

Outro exemplo:

<fieldset>
    <legend>Dados para contato</legend>
    <label for="nome">Nome</label>
    <input id="nome" name="nome" type="text">
    <label for="email">Email</label>
    <input id="email" name="email" type="email">
</fieldset>

Fieldset nao serve somente para borda visual. Mesmo que a borda seja removida
por CSS, sua funcao de agrupamento permanece.

Nao crie fieldsets demais sem necessidade; eles devem reunir campos que
realmente pertencem a uma mesma pergunta ou parte logica.

===============================================================================
29 VALIDACAO NATIVA DE FORMULARIOS
===============================================================================

HTML oferece restricoes que o navegador pode verificar antes do envio:

<form action="/inscricao" method="POST">
    <label for="email-aluno">Email</label>
    <input id="email-aluno" name="email" type="email" required>

    <label for="usuario-aluno">Usuario</label>
    <input
        id="usuario-aluno"
        name="usuario"
        type="text"
        minlength="3"
        maxlength="20"
        pattern="[A-Za-z0-9_]+"
        required
    >

    <label for="idade-aluno">Idade</label>
    <input id="idade-aluno" name="idade" type="number" min="13" max="120">

    <button type="submit">Inscrever</button>
</form>

required rejeita vazio.
type="email" exige estrutura basica de email.
minlength e maxlength limitam tamanho textual.
min e max limitam valores numericos ou datas, conforme o tipo.
pattern exige que o valor corresponda a uma expressao regular.

Pattern precisa ser pensado cuidadosamente. No exemplo, o nome de usuario
aceita letras sem acento, numeros e sublinhado. Para orientar a pessoa, a
regra precisa ser explicada em texto:

<p id="regra-usuario">Use letras, numeros ou sublinhado, entre 3 e 20 caracteres.</p>

Validacao nativa funciona sem JavaScript, impede muitos envios acidentais
incompletos e comunica estados ao navegador. Seus limites tambem importam:
mensagens variam entre navegadores, um usuario malicioso pode contornar
validacao local e ela nao confirma verdade ou seguranca dos dados.

Regra indispensavel: uma aplicacao que recebe dados deve valida-los novamente
no servidor. HTML melhora a experiencia, mas nao e barreira de seguranca.

===============================================================================
30 TAGS SEMANTICAS
===============================================================================

Semantica e a relacao entre elemento e significado. HTML semantico escolhe a
tag que descreve a funcao do conteudo, mesmo antes de qualquer estilo.

Estrutura sem significado explicito:

<div class="topo">...</div>
<div class="menu">...</div>
<div class="conteudo">...</div>
<div class="rodape">...</div>

Estrutura com significado:

<header>...</header>
<nav>...</nav>
<main>...</main>
<footer>...</footer>

Div nao e errada. Ela e adequada quando o grupo existe para organizacao ou
estilo e nao ha elemento mais especifico. O problema e ignorar elementos que
comunicariam melhor o documento.

Elementos semanticos frequentes:

header introducao de pagina ou secao;
nav grupo principal de caminhos navegaveis;
main conteudo central exclusivo da pagina;
section grupo tematico normalmente identificado por titulo;
article unidade independente, como aula, noticia ou postagem;
aside conteudo complementar;
footer encerramento de pagina ou secao;
figure midia autocontida com possivel legenda;
time data ou horario legivel por maquinas;
address informacoes de contato do autor ou organizacao relacionada.

Exemplos adicionais:

<time datetime="2026-05-25">25 de maio de 2026</time>

datetime oferece valor padronizado para ferramentas enquanto o texto fica
natural para leitura.

<address>
    Contato: <a href="mailto:contato@example.com">contato@example.com</a>
</address>

Semantica melhora manutencao e acessibilidade, mas nao substitui conteudo
claro, hierarquia correta nem testes com navegacao real.

===============================================================================
31 HEADER, MAIN E FOOTER
===============================================================================

header introduz um documento ou uma parte dele. Pode conter marca, titulo,
subtitulo, informacoes iniciais e navegacao.

<header>
    <p>Escola de Codigo</p>
    <h1>Trilha de HTML</h1>
    <nav aria-label="Menu principal">
        <a href="index.html">Inicio</a>
        <a href="aulas.html">Aulas</a>
    </nav>
</header>

Uma pagina pode possuir header geral e headers dentro de articles:

<article>
    <header>
        <h2>Formularios HTML</h2>
        <p>Publicado em <time datetime="2026-05-25">25 de maio</time></p>
    </header>
    <p>Conteudo da aula...</p>
</article>

main representa o conteudo dominante daquele documento. Deve haver apenas um
main visivel principal na pagina.

<main>
    <h1>Curso de HTML</h1>
    <section>...</section>
</main>

footer encerra a pagina ou uma secao. Pode conter autoria, direitos, links de
apoio e contato:

<footer>
    <p>&copy; 2026 Escola de Codigo</p>
    <a href="contato.html">Contato</a>
</footer>

Header nao significa obrigatoriamente parte fixa no topo visual. Footer nao
significa obrigatoriamente preso ao final da tela. Eles descrevem funcao, e o
CSS decide apresentacao.

===============================================================================
32 SECTION E ARTICLE
===============================================================================

section representa um grupo tematico dentro de um documento. Em geral deve
ser identificavel por titulo.

<section aria-labelledby="titulo-formularios">
    <h2 id="titulo-formularios">Formularios</h2>
    <p>Campos permitem receber dados.</p>
</section>

Quando o titulo visivel ja existe, aria-labelledby pode explicitar o nome
acessivel da regiao em contextos onde isso e util.

article representa conteudo autocontido, que ainda faria sentido se lido
separadamente ou distribuido em outra lista:

<section>
    <h2>Aulas recentes</h2>

    <article>
        <h3>Como usar imagens</h3>
        <p>Entenda src e alt.</p>
        <a href="imagens.html">Ler aula</a>
    </article>

    <article>
        <h3>Como usar tabelas</h3>
        <p>Organize dados em linhas.</p>
        <a href="tabelas.html">Ler aula</a>
    </article>
</section>

Uma section pode conter articles. Um article tambem pode conter sections para
dividir seu proprio texto.

Nao transforme cada pequena div de estilo em section. Uma section deve
representar assunto, nao apenas necessidade de uma caixa para layout.

===============================================================================
33 NAV E ASIDE
===============================================================================

nav representa uma secao cujo proposito principal e navegar. Nem todo conjunto
de links precisa ser nav: links casuais dentro de um paragrafo nao sao um menu.

<nav aria-label="Conteudos da aula">
    <ul>
        <li><a href="#definicao">Definicao</a></li>
        <li><a href="#exemplo">Exemplo</a></li>
        <li><a href="#referencias">Referencias</a></li>
    </ul>
</nav>

aria-label diferencia navegacoes quando ha varias:

<nav aria-label="Menu principal">...</nav>
<nav aria-label="Sumario desta aula">...</nav>
<nav aria-label="Paginas seguintes">...</nav>

aside representa conteudo relacionado, mas secundario ao fluxo principal:

<article>
    <h1>Imagens Acessiveis</h1>
    <p>Explicacao principal...</p>

    <aside>
        <h2>Vocabulário</h2>
        <p>Alt significa texto alternativo.</p>
    </aside>
</article>

Possiveis asides: glossario complementar, nota lateral, biografia do autor
relacionada ao artigo, links relacionados e advertencia adicional.

Um conteudo indispensavel para entender a aula nao deve ser tratado como
aside apenas por aparecer visualmente em uma caixa lateral.

===============================================================================
34 DIV E SPAN
===============================================================================

Div e span sao elementos genericos. Nao afirmam que o conteudo e menu,
artigo, secao ou aviso. Sao apropriados quando e necessario agrupar para estilo
ou script sem alterar significado.

Div normalmente participa como bloco:

<div class="grupo-de-botoes">
    <a href="anterior.html">Anterior</a>
    <a href="proxima.html">Proxima</a>
</div>

A navegacao poderia merecer nav se esse grupo for uma navegacao importante.
Se ja estiver dentro de nav e servir apenas para layout, div e aceitavel.

Span marca trecho dentro do fluxo textual:

<h1>Aprenda <span class="cor-destaque">HTML</span> com exemplos</h1>

<p>Seu progresso: <span class="percentual">80%</span>.</p>

Span nao cria importancia semanticamente. Para importancia use strong; para
enfase use em; para codigo use code. Use span quando a necessidade e agrupar
um trecho sem um significado HTML mais apropriado.

Classes em div e span conectam o HTML ao CSS:

<div class="alerta">
    <strong>Atencao:</strong>
    <span class="mensagem">Preencha o email.</span>
</div>

Um documento composto quase inteiramente por divs e spans pode ate ser
estilizado, mas perde informacoes importantes para leitura e manutencao.

===============================================================================
35 HTML SEMANTICO NA PRATICA
===============================================================================

Considere um documento de aula completo:

<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Imagens Acessiveis | Curso de HTML</title>
        <meta name="description" content="Entenda imagens e texto alternativo.">
    </head>
    <body>
        <header>
            <a href="index.html">Curso de HTML</a>
            <nav aria-label="Menu principal">
                <a href="aulas.html">Aulas</a>
                <a href="referencias.html">Referencias</a>
            </nav>
        </header>

        <main>
            <article>
                <header>
                    <p>Modulo 13</p>
                    <h1>Texto Alternativo em Imagens</h1>
                </header>

                <nav aria-label="Sumario da aula">
                    <a href="#conceito">Conceito</a>
                    <a href="#casos">Casos de uso</a>
                </nav>

                <section id="conceito">
                    <h2>Conceito</h2>
                    <p>O atributo alt substitui a funcao da imagem.</p>
                </section>

                <section id="casos">
                    <h2>Casos de uso</h2>
                    <figure>
                        <img src="grafico.png" alt="Descricao informativa">
                        <figcaption>Exemplo de grafico acessivel.</figcaption>
                    </figure>
                </section>
            </article>

            <aside>
                <h2>Leitura complementar</h2>
                <a href="formularios.html">Acessibilidade em formularios</a>
            </aside>
        </main>

        <footer>
            <p>&copy; 2026 Curso de HTML</p>
        </footer>
    </body>
</html>

Por que essa composicao e forte:

o title descreve especificamente o documento;
o h1 apresenta o assunto da aula;
header geral nao se confunde com header do artigo;
navs sao nomeadas conforme suas funcoes;
section divide temas;
figure relaciona imagem e legenda;
aside fica complementar;
footer conclui a pagina.

Semantica nao exige encher o HTML com tags diferentes. Exige reconhecer a
funcao real do conteudo e usar o elemento mais adequado quando ele existe.

===============================================================================
36 AUDIO NO HTML
===============================================================================

O elemento audio incorpora som em um documento. Pode apresentar uma
explicacao narrada, pronunciacao, entrevista, musica autorizada ou aviso
sonoro, desde que seu uso nao exclua quem nao pode ouvir.

<audio controls preload="metadata">
    <source src="audio/aula-estrutura.mp3" type="audio/mpeg">
    <source src="audio/aula-estrutura.ogg" type="audio/ogg">
    <p>
        Seu navegador nao reproduz audio.
        <a href="audio/aula-estrutura.mp3">Baixe a gravacao</a>.
    </p>
</audio>

audio envolve as alternativas de arquivo e conteudo de fallback.
controls exibe controles nativos como reproduzir, pausar e volume.
source declara uma fonte. O navegador escolhe a primeira que consegue tocar.
src e o caminho do arquivo.
type informa o formato MIME, evitando tentativas desnecessarias.

preload controla sugestao de carregamento:

preload="none" pede para nao antecipar download.
preload="metadata" busca informacoes como duracao, sem carregar tudo.
preload="auto" permite antecipar mais conteudo.

loop reinicia ao terminar.
muted inicia sem som.
autoplay pede reproducao automatica.

Autoplay de audio costuma ser bloqueado por navegadores e e uma experiencia
ruim quando surpreende o usuario. O controle deve permanecer com a pessoa.

Acessibilidade de audio:

Audio com informacao educacional precisa de alternativa textual equivalente.
Uma transcricao deve incluir a explicacao necessaria, identificacao de
falantes quando relevante e sons significativos.

<section>
    <h2>Explicacao em audio</h2>
    <audio controls>
        <source src="audio/tags.mp3" type="audio/mpeg">
    </audio>
    <details>
        <summary>Ler transcricao</summary>
        <p>Nesta aula, uma tag indica o significado de um conteudo...</p>
    </details>
</section>

details e summary permitem oferecer conteudo expansivel, mas a transcricao
ainda faz parte do documento e deve ser completa.

===============================================================================
37 VIDEO NO HTML
===============================================================================

Video incorpora imagem em movimento, geralmente acompanhada de audio:

<video
    controls
    width="800"
    height="450"
    poster="images/capa-formularios.jpg"
    preload="metadata"
>
    <source src="videos/formularios.mp4" type="video/mp4">
    <source src="videos/formularios.webm" type="video/webm">
    <track
        kind="captions"
        src="legendas/formularios-pt-br.vtt"
        srclang="pt-br"
        label="Portugues"
        default
    >
    <p>
        Video indisponivel neste navegador.
        <a href="videos/formularios.mp4">Baixar video</a>
    </p>
</video>

controls entrega controles nativos.
poster define a imagem exibida antes do inicio.
width e height reservam area e reduzem alteracoes bruscas de layout.
source permite oferecer formatos alternativos.

track associa faixas temporizadas. Seus atributos:

kind="captions" representa legendas incluindo falas e sons relevantes para
quem nao escuta o audio.
kind="subtitles" e mais voltado a traducao das falas.
src indica arquivo no formato WebVTT, normalmente extensao .vtt.
srclang informa idioma.
label fornece nome mostrado no menu de faixas.
default sugere a faixa inicialmente ativa.

Video educacional acessivel pode precisar de legendas sincronizadas,
transcricao textual completa, audiodescricao quando informacao visual nao e
dita em audio, controles acessiveis por teclado e ausencia de flashes
perigosos.

autoplay, especialmente com som, deve ser evitado. loop pode ser adequado a
pequena demonstracao silenciosa, mas nao a uma explicacao que reinicia sem
solicitacao.

===============================================================================
38 IFRAME
===============================================================================

Iframe incorpora outro documento dentro do documento atual. Ele pode exibir
um video hospedado em servico externo, mapa, visualizacao de arquivo ou
demonstracao isolada.

<iframe
    src="https://www.example.com/embed/aula"
    title="Video: estrutura basica de um documento HTML"
    width="800"
    height="450"
    loading="lazy"
    allow="fullscreen"
></iframe>

src indica o documento incorporado.
title e indispensavel para que uma pessoa que navega com tecnologia assistiva
entenda o conteudo da moldura sem precisar abri-la.
width e height reservam espaco.
loading="lazy" pede carregamento apenas quando a area se aproxima da tela,
reduzindo custo inicial para incorporacoes abaixo do conteudo inicial.
allow informa permissoes especificas concedidas ao conteudo incorporado.

Incorporacao de video costuma ter atributos fornecidos pelo servico:

<iframe
    src="https://www.youtube.com/embed/IDENTIFICADOR"
    title="Aula sobre links HTML"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
    allowfullscreen
></iframe>

Cuidados:

um iframe carrega outro documento e pode pesar na pagina;
o conteudo externo pode usar cookies e envolver privacidade;
o site de origem pode impedir incorporacao por seguranca;
o documento incorporado nao substitui texto acessivel no seu proprio conteudo;
title generico como "iframe" nao explica nada.

Para mostrar exemplo de HTML executavel, um iframe pode isolar uma pagina de
demonstracao, mas a fonte e a explicacao devem continuar disponiveis em texto.

===============================================================================
39 SEO BASICO COM HTML
===============================================================================

SEO, Search Engine Optimization, e o conjunto de praticas que facilita que
buscadores descubram, compreendam e apresentem uma pagina relevante. HTML
correto e conteudo util sao a base; nao existe tag magica que substitua
qualidade.

Titulo documental:

<title>Formularios HTML: Inputs, Labels e Validacao | Curso HTML</title>

Um title bom e especifico, descreve a pagina e inclui identidade do site sem
repeticao exagerada. Cada pagina importante deve ter seu proprio title.

Descricao:

<meta
    name="description"
    content="Aprenda a criar formularios HTML acessiveis com labels, tipos de input e validacao nativa."
>

Ela pode ser usada como trecho apresentado no resultado de busca. Deve resumir
com honestidade o que a pessoa encontrara.

Conteudo:

<main>
    <h1>Formularios HTML Acessiveis</h1>
    <p>Entenda como receber dados com clareza e validacao.</p>
    <section>
        <h2>Labels e campos</h2>
        ...
    </section>
</main>

Um h1 claro, subsecoes organizadas, texto original e links descritivos ajudam
tanto leitores quanto indexadores.

Links:

Fraco:
<a href="formularios.html">Clique aqui</a>

Descritivo:
<a href="formularios.html">Aprender formularios HTML</a>

Imagem:

<img src="estrutura-formulario.svg" alt="Formulario com label ligado ao input por id">

O alt adequado melhora acesso ao conteudo, nao deve ser recheado de palavras
repetidas para manipular buscas.

SEO tambem depende de fatores alem do HTML: desempenho, experiencia movel,
enderecos consistentes, publicacao, autoridade e acessibilidade.

===============================================================================
40 META TAGS IMPORTANTES
===============================================================================

Metadados vivem normalmente dentro de head e descrevem o documento:

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Curso de HTML do Zero ao Semantico</title>
    <meta
        name="description"
        content="Estude estrutura, links, imagens, formularios, semantica e acessibilidade em HTML."
    >
    <meta name="author" content="Vinicius Prati">

    <link rel="canonical" href="https://example.com/cursos/html">
    <link rel="icon" href="/favicon.ico">
</head>

charset configura decodificacao do texto.
viewport permite escala apropriada em telas pequenas.
description resume o documento.
author informa autoria, sem garantir efeito em ranking.
canonical sugere qual URL e a versao principal quando conteudo semelhante
pode ser acessado por mais de um endereco.
icon relaciona o icone da aba.

Metadados de compartilhamento Open Graph:

<meta property="og:title" content="Curso Completo de HTML">
<meta property="og:description" content="Aprenda HTML com exemplos detalhados.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://example.com/cursos/html">
<meta property="og:image" content="https://example.com/images/capa-html.png">
<meta property="og:image:alt" content="Titulo Curso de HTML sobre fundo azul">

Plataformas sociais podem usar esses valores para criar uma previa do link.
Os enderecos og:url e og:image publicados devem ser reais e acessiveis.

Configuracao de indexacao, quando necessaria:

<meta name="robots" content="noindex, nofollow">

Essa instrucao pede que buscadores nao indexem nem sigam links da pagina.
Nao deve ser colocada por acidente em conteudo que precisa aparecer em busca.
Tambem nao e mecanismo de privacidade: uma pagina sensivel deve ser protegida
por acesso adequado, nao apenas ocultada de busca.

===============================================================================
41 ACESSIBILIDADE BASICA NO HTML
===============================================================================

Acessibilidade significa remover barreiras para que pessoas com diferentes
formas de perceber e interagir possam utilizar o conteudo. HTML semantico
fornece uma base forte antes mesmo de estilos e scripts.

Idioma:

<html lang="pt-br">

Permite pronuncia correta e identificacao do idioma.

Regioes e titulos:

<header>...</header>
<main>
    <h1>Assunto principal</h1>
    <h2>Secao coerente</h2>
</main>
<footer>...</footer>

Oferecem pontos de navegacao e um sumario logico.

Imagens:

<img src="diagrama.png" alt="Label aponta para o input usando o atributo for">
<img src="decoracao.svg" alt="">

Texto alternativo depende da funcao.

Formulario:

<label for="email-contato">Email para retorno</label>
<input
    id="email-contato"
    name="email"
    type="email"
    aria-describedby="email-ajuda"
    required
>
<p id="email-ajuda">Usaremos este endereco apenas para responder.</p>

Labels e instrucoes permitem compreender a entrada.

Links:

<a href="validacao.html">Ler aula de validacao de formularios</a>

Um texto descritivo comunica destino fora do contexto.

Midia:

Audio precisa de transcricao.
Video precisa de legendas e pode precisar de audiodescricao.
Iframe precisa de title.

Teclado:

Elementos nativos como a, button, input e select ja possuem comportamento de
teclado bem estabelecido. Fazer uma div agir como botao com cliques de script
exige reconstruir foco, teclado e papel acessivel; prefira button.

ARIA:

ARIA acrescenta informacoes de acessibilidade quando HTML nativo nao basta.
Nao deve substituir elementos adequados:

Melhor:
<button type="button">Abrir ajuda</button>

Evitar quando button resolveria:
<div role="button">Abrir ajuda</div>

Testes basicos:

navegar usando apenas Tab, Shift+Tab, Enter e espaco;
verificar que o foco aparece claramente com CSS;
ler titulos em ordem;
confirmar labels e mensagens;
testar contraste e zoom;
usar leitor de tela quando possivel.

===============================================================================
42 BOAS PRATICAS DE CODIGO HTML
===============================================================================

Um HTML profissional e legivel, significativo, consistente e verificavel.

Declarar estrutura completa:

Use doctype, idioma, charset, viewport e title adequado.

Indentar aninhamento:

<section>
    <h2>Conteudo</h2>
    <article>
        <h3>Aula</h3>
    </article>
</section>

A indentacao mostra imediatamente que article pertence a section.

Escolher semantica antes de estilo:

Use nav para navegacao importante, main para assunto central, button para
acao e a para navegacao. Nao escolha elemento porque sua aparencia padrao
parece conveniente.

Nomear arquivos e atributos de forma previsivel:

contato.html
images/logo-curso.svg
id="formulario-inscricao"
class="card-aula"

Nomes minusculos, sem espacos e descritivos evitam caminhos dificeis.

Evitar ids repetidos e atributos incompletos:

Cada id identifica uma unica peca. Toda imagem que participa do conteudo deve
ter decisao consciente de alt. Todo controle precisa de nome acessivel.

Manter links e caminhos testaveis:

Verifique navegacao partindo de paginas em subpastas. Diferencie caminho
relativo, raiz relativo e URL externa.

Separar responsabilidades:

HTML descreve conteudo.
CSS descreve visual.
JavaScript descreve comportamento dinamico.

Pequenas classes sao normais para CSS, mas excesso de estilo inline no HTML
dificulta manutencao:

Evitar:
<p style="color: blue; margin: 20px;">Texto</p>

Preferir:
<p class="aviso">Texto</p>

Validar e revisar:

Confira fechamentos, aninhamento, heading hierarchy, links, imagens,
formularios e uso por teclado antes de considerar uma pagina concluida.

===============================================================================
43 ERROS COMUNS EM HTML
===============================================================================

Fechamento fora da ordem:

Incorreto:
<section><p>Texto</section></p>

Correto:
<section><p>Texto</p></section>

A ultima caixa aberta deve ser a primeira a fechar.

Colocar conteudo visivel no head:

Incorreto:
<head><h1>Meu site</h1></head>

Correto:
<head><title>Meu site</title></head>
<body><h1>Meu site</h1></body>

Confundir title com h1:

Title nomeia documento na aba. H1 apresenta assunto dentro do corpo. Em geral
uma pagina significativa precisa dos dois.

Pular hierarquia por aparencia:

Inadequado:
<h1>Curso</h1>
<h5>Formularios</h5>

Se Formularios e secao direta de Curso, use h2 e ajuste tamanho com CSS.

Usar links sem destino real:

<a href="#">Saber mais</a>

Pode ser provisoriamente usado durante desenvolvimento, mas em conteudo final
leva ao topo sem entregar informacao. Aponte para uma pagina ou secao real.

Imagem sem alt:

<img src="curso.png">

Sempre decida se o alt deve descrever funcao ou ficar vazio por decoracao.

Label desconectado:

<label for="email">Email</label>
<input id="contato" type="email">

for e id nao coincidem. O label nao identifica corretamente o controle.

Campo sem name:

<input id="email" type="email">

Pode ser preenchido, mas normalmente nao participa do envio do form.

Radio com names diferentes:

<input type="radio" name="basico" value="sim">
<input type="radio" name="avancado" value="sim">

Nao sao exclusivos. Para uma pergunta unica, ambos precisam do mesmo name e
values diferentes.

Tabela usada para diagramacao:

Criar tabelas para posicionar cabecalho e colunas confunde significado. Para
layout, use CSS. Para dados por linha e coluna, use table.

Confiar apenas na validacao do navegador:

Required e pattern ajudam pessoas honestas e previnem omissoes, mas dados
recebidos precisam ser validados no servidor.

===============================================================================
44 PROJETO: PAGINA DE PERFIL
===============================================================================

Uma pagina de perfil exercita documento, conteudo textual, imagem, links,
listas e semantica basica. Seu objetivo e apresentar uma pessoa de maneira
clara, nao apenas juntar tags.

Conteudos necessarios:

title descritivo, como "Perfil de Ana Souza | Desenvolvedora Front-end".
meta description resumindo a apresentacao.
header com identificacao ou navegacao.
main contendo um h1 unico.
imagem de perfil com alt adequado.
paragrafos de biografia.
lista de habilidades ou interesses.
links de contato ou trabalhos.
footer com autoria ou atualizacao.

Exemplo estrutural:

<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Perfil de Ana Souza | Desenvolvedora Front-end</title>
        <meta name="description" content="Conheca Ana Souza, estudante de desenvolvimento web.">
    </head>
    <body>
        <header>
            <nav aria-label="Menu principal">
                <a href="#sobre">Sobre</a>
                <a href="#habilidades">Habilidades</a>
                <a href="#contato">Contato</a>
            </nav>
        </header>

        <main>
            <section id="sobre">
                <h1>Ana Souza</h1>
                <figure>
                    <img src="images/ana.jpg" alt="Ana Souza sorrindo em frente ao computador">
                    <figcaption>Estudante de desenvolvimento web.</figcaption>
                </figure>
                <p>Estou aprendendo HTML para criar paginas acessiveis.</p>
            </section>

            <section id="habilidades">
                <h2>Habilidades</h2>
                <ul>
                    <li>Estrutura semantica HTML</li>
                    <li>Formularios acessiveis</li>
                </ul>
            </section>

            <section id="contato">
                <h2>Contato</h2>
                <a href="mailto:ana@example.com">Enviar email para Ana</a>
            </section>
        </main>

        <footer>
            <p>&copy; 2026 Ana Souza</p>
        </footer>
    </body>
</html>

Pontos de avaliacao:

o alt da foto acrescenta informacao apropriada;
os links por ancora coincidem com ids existentes;
a lista expressa um conjunto;
os titulos seguem h1, h2;
o texto do link explica sua acao.

===============================================================================
45 PROJETO: LANDING PAGE SIMPLES
===============================================================================

Landing page e uma pagina com objetivo central: apresentar uma oferta e
conduzir a uma acao, como entrar em contato ou realizar inscricao. No HTML, o
desafio e organizar argumentacao e navegacao com sentido.

Conteudo comum:

identificacao clara no header;
headline principal no h1;
paragrafo que explica valor;
link de acao apontando para formulario ou pagina real;
secoes de beneficios;
informacao de confianca, quando verdadeira;
secao final de contato;
footer.

Exemplo:

<header>
    <a href="index.html">Curso HTML Claro</a>
    <nav aria-label="Menu principal">
        <a href="#conteudo">Conteudo</a>
        <a href="#inscricao">Inscricao</a>
    </nav>
</header>

<main>
    <section id="apresentacao">
        <h1>Aprenda HTML criando paginas corretas e acessiveis</h1>
        <p>Estude estrutura, formularios e semantica com exemplos.</p>
        <a href="#inscricao">Solicitar informacoes do curso</a>
    </section>

    <section id="conteudo">
        <h2>O que sera estudado</h2>
        <article>
            <h3>Estrutura</h3>
            <p>Monte documentos completos com titulos bem ordenados.</p>
        </article>
        <article>
            <h3>Formularios</h3>
            <p>Receba dados com labels e validacao.</p>
        </article>
    </section>

    <section id="inscricao">
        <h2>Receba mais informacoes</h2>
        <form action="/interesse" method="POST">
            <label for="email-interesse">Email</label>
            <input id="email-interesse" type="email" name="email" required>
            <button type="submit">Enviar interesse</button>
        </form>
    </section>
</main>

Nao invente depoimentos ou dados de resultados para preencher uma landing
page. A semantica correta organiza conteudo; a confianca depende de informacao
honesta.

===============================================================================
46 PROJETO: FORMULARIO COMPLETO
===============================================================================

Um formulario completo deve coletar somente dados necessarios, explicar por
que sao solicitados, utilizar tipos corretos e permitir envio compreensivel.

Exemplo de inscricao:

<main>
    <h1>Inscricao no Curso de HTML</h1>

    <form action="/inscricoes" method="POST">
        <fieldset>
            <legend>Dados pessoais</legend>

            <label for="cad-nome">Nome completo</label>
            <input id="cad-nome" name="nome" type="text" autocomplete="name" required>

            <label for="cad-email">Email</label>
            <input id="cad-email" name="email" type="email" autocomplete="email" required>

            <label for="cad-idade">Idade</label>
            <input id="cad-idade" name="idade" type="number" min="13" max="120">
        </fieldset>

        <fieldset>
            <legend>Experiencia atual</legend>
            <label>
                <input type="radio" name="nivel" value="iniciante" required>
                Nunca escrevi HTML
            </label>
            <label>
                <input type="radio" name="nivel" value="basico">
                Ja criei paginas basicas
            </label>
        </fieldset>

        <fieldset>
            <legend>Assuntos de interesse</legend>
            <label>
                <input type="checkbox" name="interesses" value="semantica">
                Semantica
            </label>
            <label>
                <input type="checkbox" name="interesses" value="acessibilidade">
                Acessibilidade
            </label>
        </fieldset>

        <label for="cad-objetivo">Qual e seu objetivo?</label>
        <textarea id="cad-objetivo" name="objetivo" minlength="20" maxlength="800" required></textarea>

        <input id="cad-consentimento" name="consentimento" type="checkbox" value="aceito" required>
        <label for="cad-consentimento">Autorizo contato sobre esta inscricao.</label>

        <button type="submit">Enviar inscricao</button>
    </form>
</main>

Analise:

ids sao unicos para evitar conflito entre campos;
labels identificam entradas;
fieldset e legend dao contexto aos grupos;
radio usa o mesmo name para resposta exclusiva;
checkbox usa values que identificam interesses;
textarea aceita explicacao extensa;
consentimento nao aparece pre-marcado;
required e limites fornecem validacao inicial.

Em uso real ainda sao necessarios destino de envio, politica de privacidade,
tratamento seguro dos dados e mensagens de sucesso e erro acessiveis.

===============================================================================
47 PROJETO: PAGINA INSTITUCIONAL
===============================================================================

Uma pagina institucional apresenta uma organizacao, servico ou projeto de
forma confiavel. Quando ha varias paginas, a consistencia da navegacao e dos
caminhos torna-se parte do HTML correto.

Documentos possiveis:

index.html apresenta identidade e conteudo principal.
sobre.html explica historia, equipe ou finalidade.
servicos.html detalha ofertas.
contato.html oferece meios de contato e formulario.

Em cada documento:

title deve ser especifico:
<title>Sobre a Escola | Curso HTML Claro</title>

meta description deve refletir o conteudo daquela pagina:
<meta name="description" content="Conheca a proposta educacional da Escola HTML Claro.">

menu deve oferecer rotulos previsiveis:

<nav aria-label="Menu principal">
    <a href="../index.html">Inicio</a>
    <a href="sobre.html" aria-current="page">Sobre</a>
    <a href="servicos.html">Cursos</a>
    <a href="contato.html">Contato</a>
</nav>

aria-current="page" informa qual destino corresponde ao documento atual.

Conteudo institucional semantico:

<main>
    <h1>Sobre a Escola HTML Claro</h1>
    <section>
        <h2>Objetivo</h2>
        <p>...</p>
    </section>
    <section>
        <h2>Principios</h2>
        <ul>
            <li>Conteudo acessivel</li>
            <li>Exemplos praticos</li>
        </ul>
    </section>
</main>

Questao central de multiplas paginas: os caminhos dependem do arquivo atual.
Uma pagina em subpasta pode usar ../ para retornar ao nivel anterior, ou o
site publicado pode padronizar caminhos iniciados na raiz.

===============================================================================
48 PROJETO FINAL DE HTML
===============================================================================

O projeto final deve comprovar dominio do significado e do relacionamento das
tags, nao apenas quantidade de elementos utilizados. Um bom tema pode ser um
site de curso, portfolio, evento, pequena empresa ou biblioteca de conteudos.

Requisitos documentais:

doctype e idioma declarados;
charset e viewport;
title e description especificos por documento;
conteudo principal com h1 apropriado;
hierarquia de h2 e h3 coerente.

Requisitos de navegacao:

menu semantico com nav;
links internos funcionando;
ao menos uma navegacao por ancora em pagina longa;
textos de link descritivos;
indicacao da pagina atual quando houver menu repetido.

Requisitos de conteudo:

paragrafos bem separados;
listas escolhidas conforme ordem ou conjunto;
imagem informativa com alt bem escrito;
figure e figcaption quando houver legenda visivel;
tabela apenas se houver dados realmente tabulares, com caption e cabecalhos.

Requisitos de formulario:

form com action planejado e method adequado;
labels corretamente associados;
tipos de input apropriados;
fieldset e legend para grupos;
validacao nativa util;
texto explicando coleta ou consentimento quando necessario.

Requisitos semanticos e acessiveis:

header, main e footer usados com criterio;
section e article conforme funcao;
nav identificado se houver varias navegacoes;
midia com alternativas quando usada;
navegacao compreensivel sem depender de cor ou imagem;
elementos nativos usados para links e botoes.

Processo de revisao:

ler apenas a sequencia de titulos e verificar se conta a historia da pagina;
navegar por todos os links;
desabilitar visualmente imagens e conferir se alt preserva sentido;
percorrer formularios verificando labels e instrucoes;
checar aninhamento e fechamento;
confirmar que o conteudo continua compreensivel antes do CSS.

O projeto HTML e considerado forte quando sua estrutura explica o documento
mesmo que nenhuma decoracao visual tenha sido adicionada.

===============================================================================
49 REVISAO GERAL DA TRILHA
===============================================================================

Fundamento:

HTML marca significado. CSS apresenta. JavaScript acrescenta comportamento.
O navegador recebe documentos e recursos por enderecos, interpreta tags e
forma uma arvore de elementos.

Documento:

doctype ativa interpretacao moderna.
html envolve tudo e lang informa idioma.
head contem configuracoes e metadados.
body contem a experiencia documental.
title e nome externo da pagina; h1 e seu titulo principal visivel.

Texto:

p organiza ideias em paragrafos.
strong indica importancia.
em indica enfase.
h1 a h6 criam hierarquia, e nao sao selecao de tamanho visual.
code e pre ajudam a representar codigo quando esse for o conteudo real.

Identificacao:

atributos configuram elementos.
id e unico e serve a referencia especifica.
class e reutilizavel e classifica elementos.
atributos booleanos atuam quando presentes.

Navegacao e recursos:

a com href cria link.
URL absoluta aponta a endereco completo.
caminho relativo depende do documento atual.
#fragmento encontra um id.
img usa src para arquivo e alt para alternativa significativa.

Colecoes:

ol e lista com ordem relevante.
ul e conjunto sem ordem obrigatoria.
lista aninhada fica dentro do li pai.
table apresenta relacoes por linhas e colunas.
caption, thead, tbody, tfoot e th com scope melhoram tabela.

Formulario:

form delimita dados e define action e method.
name determina qual chave e enviada.
label identifica o controle pelo id.
input varia conforme type.
checkbox permite escolhas independentes.
radio representa resposta exclusiva pelo mesmo name.
select oferece valores controlados.
textarea recebe texto longo.
button executa acao.
fieldset e legend contextualizam grupos.
validacao nativa ajuda, mas servidor precisa validar novamente.

Semantica:

header introduz.
nav navega.
main identifica conteudo central.
section agrupa tema.
article forma unidade independente.
aside complementa.
footer encerra.
div e span agrupam quando nao existe significado especifico melhor.

Midia, descoberta e inclusao:

audio exige alternativa textual quando comunica conteudo.
video deve incluir legenda e possivelmente transcricao e audiodescricao.
iframe precisa de title e uso cuidadoso.
SEO inicia com title, description, h1, conteudo honesto e links claros.
Acessibilidade depende de idioma, semantica, teclado, textos alternativos,
labels, alternativas de midia e clareza.

===============================================================================
50 CHECKLIST DE CONCLUSAO DA TRILHA
===============================================================================

DOCUMENTO

[ ] O arquivo comeca com declaracao HTML5.
[ ] O elemento html informa o idioma predominante.
[ ] Head contem charset UTF-8 e viewport.
[ ] Cada pagina possui title especifico.
[ ] Descricao resume corretamente a pagina quando apropriado.
[ ] Conteudo visivel esta dentro de body.

CONTEUDO E HIERARQUIA

[ ] Existe um assunto principal claramente expresso por h1.
[ ] H2 e h3 seguem a estrutura do assunto sem pular por aparencia.
[ ] Paragrafos agrupam ideias completas.
[ ] Strong e em sao usados por significado, nao apenas por estilo.
[ ] Comentarios nao guardam informacoes privadas nem poluem o codigo.

LINKS, IMAGENS E CAMINHOS

[ ] Links dizem para onde levam.
[ ] Links externos em nova aba recebem cuidados de rel quando aplicavel.
[ ] Links internos foram testados em todas as paginas.
[ ] Ancoras apontam para ids unicos existentes.
[ ] Caminhos de arquivos correspondem as pastas de publicacao.
[ ] Cada imagem possui alt adequado a sua funcao, inclusive alt vazio quando decorativa.
[ ] Imagens com legenda usam estrutura coerente quando necessario.

LISTAS E TABELAS

[ ] Ol e usada quando a ordem importa.
[ ] Ul e usada para conjuntos sem sequencia obrigatoria.
[ ] Sublistas pertencem ao li correspondente.
[ ] Table e usada somente para dados tabulares.
[ ] Tabelas possuem cabecalhos associados aos dados.
[ ] Tabelas relevantes possuem caption.

FORMULARIOS

[ ] Form informa destino e metodo coerentes quando sera funcional.
[ ] Todo campo enviado possui name apropriado.
[ ] Todo controle possui label ou nome acessivel equivalente.
[ ] Ids usados por labels sao unicos e correspondentes.
[ ] Tipos email, password, tel, number e outros foram escolhidos corretamente.
[ ] Checkbox e radio representam o tipo certo de decisao.
[ ] Radios do mesmo grupo compartilham name.
[ ] Select usa values compreensiveis para processamento.
[ ] Textarea e reservada para texto longo.
[ ] Button possui tipo explicito.
[ ] Fieldset e legend agrupam perguntas relacionadas.
[ ] Required, limites e formatos ajudam a prevenir erro.
[ ] Sabe-se que validacao do servidor ainda e necessaria em uso real.

SEMANTICA E ACESSIBILIDADE

[ ] Header, main e footer descrevem regioes corretas.
[ ] Nav e usado para conjuntos importantes de links.
[ ] Section tem assunto identificavel.
[ ] Article e usado quando o bloco tem sentido independente.
[ ] Aside contem apenas informacao complementar.
[ ] Div e span nao substituem elementos mais significativos sem motivo.
[ ] Conteudo pode ser navegado usando teclado.
[ ] Audio e video oferecem alternativas acessiveis.
[ ] Iframe possui title descritivo.
[ ] Informacoes nao dependem somente de cor, som ou imagem.

MATURIDADE HTML

Concluir HTML nao significa decorar todas as tags existentes. Significa saber
olhar para uma informacao e decidir:

isto e um titulo ou apenas texto?
isto navega ou executa uma acao?
isto e uma lista ou dados tabulares?
esta imagem acrescenta informacao ou somente decora?
este campo e compreensivel e enviara o dado certo?
esta regiao tem um significado semantico especifico?
uma pessoa usando teclado ou leitor de tela conseguira compreender?

Quando essas perguntas passam a orientar o codigo, HTML deixa de ser uma
colecao de sinais e se torna a estrutura correta de um documento para a web.
`

const HTML_TITLE_OVERRIDES = [
  'Introducao ao HTML',
  'Como a Web Funciona',
  'Estrutura Basica de um Documento HTML',
  'Tags Principais do HTML',
  'Textos e Paragrafos',
  'Titulos e Hierarquia de Conteudo',
  'Comentarios no HTML',
  'Atributos HTML',
  'Links Externos',
  'Links Internos',
  'Ancoras na Pagina',
  'Imagens no HTML',
  'Texto Alternativo e Acessibilidade em Imagens',
  'Caminhos Relativos e Absolutos',
  'Listas Ordenadas',
  'Listas Nao Ordenadas',
  'Listas Aninhadas',
  'Tabelas Basicas',
  'Tabelas Semanticas',
  'Formularios Basicos',
  'Inputs de Texto',
  'Inputs de Email, Senha e Numero',
  'Checkbox e Radio',
  'Select e Options',
  'Textarea',
  'Botoes no HTML',
  'Labels em Formularios',
  'Fieldset e Legend',
  'Validacao Nativa de Formularios',
  'Tags Semanticas',
  'Header, Main e Footer',
  'Section e Article',
  'Nav e Aside',
  'Div e Span',
  'HTML Semantico na Pratica',
  'Audio no HTML',
  'Video no HTML',
  'Iframe',
  'SEO Basico com HTML',
  'Meta Tags Importantes',
  'Acessibilidade Basica no HTML',
  'Boas Praticas de Codigo HTML',
  'Erros Comuns em HTML',
  'Projeto: Pagina de Perfil',
  'Projeto: Landing Page Simples',
  'Projeto: Formulario Completo',
  'Projeto: Pagina Institucional',
  'Projeto Final de HTML',
  'Revisao Geral da Trilha',
  'Checklist de Conclusao da Trilha'
]

function parseHtmlLessons(source) {
  const normalized = source.replace(/\r\n/g, '\n').trim()
  const headingPattern = /^={79}\n(\d{2}) ([^\n]+)\n={79}$/gm
  const headings = [...normalized.matchAll(headingPattern)]
  const preface = normalized.slice(0, headings[0]?.index || 0).trim()

  return headings.map((heading, itemIndex) => {
    const number = Number(heading[1])
    const start = heading.index + heading[0].length
    const end = headings[itemIndex + 1]?.index ?? normalized.length
    const body = normalized.slice(start, end).trim()
    const lesson = itemIndex === 0 && preface ? `${preface}\n\n${body}` : body
    const firstParagraph = lesson
      .split(/\n{2,}/)
      .find((paragraph) => !/^(<|[A-Z ]+$|\[ \])/.test(paragraph.trim()))
      ?.replace(/\s+/g, ' ')
      .trim()

    return {
      number,
      title: HTML_TITLE_OVERRIDES[itemIndex] || heading[2],
      lesson,
      description: firstParagraph || `Conteudo completo do modulo ${number} da apostila de HTML.`
    }
  })
}

export const htmlLessons = parseHtmlLessons(HTML_COURSE_SOURCE)
