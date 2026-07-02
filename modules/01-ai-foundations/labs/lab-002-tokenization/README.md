minhas
1-Explique o fluxo completo desde o prompt até a geração da resposta.
	a-usuario escreve o prompt 
	b-tokenizer divide as palavras 
	c-token - gera os ids para cada pedaço gerado
	d-embedding - efetua a vetorização dos tokens
	e-self-attention - encontra relação entre as palavras, utilizando o contexto da frase para encontrar relações na vetorização
	f-transformer - faz o paralelismo dos tokens gerados para realizar a probabilidade de busca
	g-escolhe o proximo token "possivel palavra"
	h-acrescenta este token ao texto
	i-repete o processo até finalizar a resposta ao usuário
2-O que é um token?
	é como a IA quebra as palavras em partes e atribui a cada uma destas partes codigos que serão adicionados em vetores para relacionar com sua base de conhecimento
3-Qual a função dos embeddings?
	Efetuar a vetorização dos tokens gerados e gerar relacionamento entre as "palavras" conhecidas
4-O que o Self-Attention resolve que um embedding isolado não resolve?
	ele "presta" atenção a todo o conteúdo da frase e não somente a trechos separados
5-O que significa dizer que um LLM é um "preditor do próximo token"?
	porque ele através de calculos matematicos, prevê a próxima palavra de acordo com o seu conteúdo já adquirido
6-Qual foi o maior insight desta lecture?
	saber como a IA trabalhar por trás dos bastidores
	
após correção
1-a- Usuário escreve o prompt

b- Tokenizer divide o texto em tokens

c- Cada token recebe um Token ID

d- Os Token IDs são transformados em Embeddings (vetores)

e- O Self-Attention calcula a relação entre todos os tokens considerando o contexto

f- As camadas do Transformer refinam essas representações contextuais

g- O modelo calcula a probabilidade do próximo token

h- Um token é escolhido

i- O token é acrescentado ao texto

j- Todo o processo é repetido até o token de fim da resposta

2 - Um token é a menor unidade de texto utilizada pelo modelo. Ele pode representar uma palavra inteira, parte de uma palavra ou até um caractere. Cada token recebe um identificador (Token ID), que posteriormente será convertido em um vetor (embedding) para processamento pelo modelo.

3 - Transformar cada token em um vetor numérico que representa suas características semânticas, permitindo que o modelo realize cálculos matemáticos sobre o texto.

4- O Self-Attention analisa todos os tokens simultaneamente e calcula quanto cada um influencia os demais, permitindo interpretar corretamente o significado de uma palavra dentro do contexto da frase.

5- O modelo calcula, com base no contexto atual, qual é o próximo token com maior probabilidade de aparecer e repete esse processo até concluir a resposta.

6- Descobrir que um LLM não entende texto como um ser humano. Ele transforma o texto em tokens, depois em vetores matemáticos e gera respostas prevendo um token por vez com base em probabilidades calculadas sobre o contexto.


1. Por que o Transformer foi uma revolução?
Antes do Transformer, modelos como RNNs e LSTMs processavam o texto de forma sequencial, dificultando o paralelismo e a captura de relações entre palavras distantes. O Transformer introduziu o mecanismo de Self-Attention, permitindo analisar todos os tokens simultaneamente, aproveitar melhor GPUs e escalar o treinamento para modelos muito maiores.

2. Diferença entre Token ID e Embedding
O Token ID é apenas um identificador numérico atribuído a cada token. O Embedding é a representação vetorial desse token, permitindo que o modelo realize operações matemáticas e compare relações semânticas entre tokens.

3. Por que o LLM calcula a resposta?
Porque o modelo utiliza os parâmetros aprendidos durante o treinamento para calcular a distribuição de probabilidade dos próximos tokens possíveis, escolhe um deles e repete esse processo até concluir a resposta.