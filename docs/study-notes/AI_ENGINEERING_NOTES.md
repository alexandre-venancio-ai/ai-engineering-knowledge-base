AI Engineering Notes
Resumo das Lectures
Lecture 1 — A Revolução da IA
O que mudou?

Durante muitos anos a Inteligência Artificial evoluiu lentamente por falta de quatro elementos fundamentais:

Dados digitais em grande escala.
Hardware com alto poder de processamento (principalmente GPUs).
Algoritmos eficientes.
Computação em nuvem.

A união desses fatores permitiu o surgimento dos Grandes Modelos de Linguagem (LLMs).

O Transformer

O artigo Attention Is All You Need (2017) mudou completamente a IA.

Antes dele:

processamento sequencial;
treinamento lento;
dificuldade para compreender contexto.

Depois dele:

processamento paralelo;
compreensão do contexto completo;
treinamento em larga escala.

Todos os grandes modelos atuais (GPT, Claude, Gemini, Llama...) descendem dessa arquitetura.

Cinco pilares da IA moderna
Dados
Hardware
Algoritmos
Cloud
APIs

Sem a combinação desses cinco pilares, a IA moderna não existiria.

Principal insight

A IA não evoluiu apenas porque ficou "mais inteligente".

Ela evoluiu porque passou a conseguir aprender em escala utilizando paralelismo.

Lecture 2 — Como um LLM realmente funciona
Fluxo completo
Usuário

↓

Prompt

↓

Tokenizer

↓

Tokens

↓

Token IDs

↓

Embeddings

↓

Self-Attention

↓

Transformer

↓

Predição do próximo Token

↓

Resposta
Tokens

O modelo não lê palavras.

Ele divide o texto em pequenas unidades chamadas Tokens.

Token IDs

Cada Token recebe um identificador numérico.

Esses IDs são utilizados internamente pelo modelo.

Embeddings

Os Tokens são convertidos em vetores matemáticos.

Esses vetores representam significado, não apenas palavras.

Palavras com significados semelhantes ficam próximas no espaço vetorial.

Self-Attention

O modelo analisa todas as palavras simultaneamente.

Ele identifica quais palavras possuem maior relação dentro da frase.

Isso resolve problemas de contexto.

Exemplo:

Banco

Pode significar:

instituição financeira
banco de praça

Quem determina isso é o contexto completo.

Transformer

Permite processar todos os Tokens em paralelo.

Foi o grande responsável pelo salto da IA moderna.

Next Token Prediction

O LLM não "pensa".

Ele calcula probabilidades para prever qual será o próximo Token mais provável.

Repete esse processo até finalizar a resposta.

Principal insight

Um LLM não busca respostas prontas.

Ele prevê, Token por Token, qual sequência possui maior probabilidade de formar uma resposta coerente.

Lecture 3 — Embeddings e Busca Semântica
Embeddings

Embeddings são vetores que representam significado.

Não representam apenas palavras.

Representam relações semânticas.

Espaço Vetorial

Palavras relacionadas ficam próximas.

Exemplo:

gato

↓

cachorro

↓

animal

Enquanto:

avião

fica distante.

Similaridade Vetorial

A busca não acontece por palavras.

Ela acontece comparando vetores.

Quanto mais próximos dois vetores estiverem,

maior a similaridade.

Cosine Similarity

A métrica mais utilizada para comparar embeddings.

Ela compara a direção dos vetores e não apenas a distância.

Isso permite identificar documentos semelhantes mesmo utilizando palavras diferentes.

Busca Semântica

O sistema procura significado.

Não palavras.

Por isso uma busca por:

carro

pode encontrar documentos contendo:

automóvel
Banco Vetorial

Os embeddings ficam armazenados em bancos especializados.

Exemplos:

ChromaDB
Pinecone
Qdrant
Weaviate
Milvus
PostgreSQL + pgvector
RAG (Introdução)

Fluxo:

Documentos

↓

Chunks

↓

Embeddings

↓

Banco Vetorial

↓

Pergunta

↓

Embedding da pergunta

↓

Busca Semântica

↓

Top K documentos

↓

LLM

↓

Resposta

Importante:

O LLM não consulta o banco.

Quem consulta é a aplicação.

Principal insight

Embeddings permitem que computadores encontrem significado, não apenas palavras.

É isso que torna possível o RAG.

Lecture 4 — Prompt Engineering para AI Engineers
Prompt

Um prompt não é apenas uma pergunta.

É uma especificação para um modelo de IA.

Estrutura R-T-C-C-O

Todo bom prompt possui:

Role

Quem o modelo deve ser.

Task

O que deve fazer.

Context

Informações necessárias para executar a tarefa.

Constraints

Regras e limitações.

Output

Formato esperado da resposta.

Engenharia de Prompts

Um prompt deve ser:

claro;
objetivo;
previsível;
reutilizável.
Decomposição de Problemas

Grandes problemas devem ser divididos.

Não peça ao modelo para resolver tudo de uma vez.

Resolva uma etapa por vez.

Mentalidade

Prompt Engineering é muito mais parecido com projetar uma API do que conversar com um chatbot.

Principal insight

Um AI Engineer projeta prompts como quem projeta interfaces de software.

Quanto menor a ambiguidade, maior a qualidade das respostas.

Resumo Geral

Até aqui você aprendeu que:

A IA moderna nasceu com o Transformer.
Um LLM trabalha com Tokens, não com palavras.
Embeddings representam significado em um espaço vetorial.
A busca semântica encontra contexto, não palavras.
O RAG utiliza bancos vetoriais para fornecer contexto ao LLM.
Um bom prompt reduz ambiguidades e funciona como uma interface para o modelo.
Grandes problemas devem ser decompostos em pequenas etapas antes de serem resolvidos.