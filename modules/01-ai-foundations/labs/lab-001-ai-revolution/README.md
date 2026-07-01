1 - Por que a IA não se popularizou nos anos 90?
	Até o final dos anos 90, nem a internet ainda havia se popularizado em grande escala, com isso, não haviam muitos dados digitalizados para pesquisas.
	Hardware ainda eram CPU´s de baixa velocidades o que tornaria inviável o aprendizado de maquina.
	Com isso, algoritmos de grande escala não haviam se difundido, o que acabou acontecendo somente em 2017 com o Transformer
	
2 - Quais dos cinco pilares você considera mais importantes? Justifique.
	Dados - sem os dados a IA não tem como ganhar conhecimento.
	Hardware - Só é possível o aprendizado pela IA em modelo de grande escala em nuvem.
	Algoritmos - que façam o deep learning.
	Cloud - Somente a distribuição em nuvem pode potencializar o aprendizado
	API - tudo precisa se conectar
	
3 - Como sua experiência com ERP, integrações e APIs pode acelerar sua transição para AI Engineering?
	Boa parte do aprendizado necessário eu já adquiri ao longo da carreira, agora preciso implementar o modelo do que conheço aplicado para a IA
4 - Qual foi o principal insight desta primeira lecture?
	Podemos ver que até a criação deste artigo, o processo de aprendizado da IA seria extremamente dificil de acontecer, utilizando o método sequencial de leitura.
	Utilizando o paralelismo, foi possível utilizar inclusive toda a capacidade dos novos modelos de GPUs criados.

Fonte resumo da leitura 
O trabalho "Attention Is All You Need", publicado em 2017 por uma equipe de oito pesquisadores do Google Brain, introduziu a arquitetura Transformer e é amplamente considerado o marco inicial da era moderna da Inteligência Artificial
.
Abaixo, detalho o contexto histórico e a importância fundamental desse trabalho para a evolução da IA:
1. O Contexto: As limitações das arquiteturas anteriores
Antes dos Transformers, o processamento de linguagem natural (NLP) dependia principalmente de Redes Neurais Recorrentes (RNNs), como as LSTMs e GRUs
. Essas redes apresentavam dois problemas críticos que retardavam o progresso da IA:
Processamento Sequencial: As RNNs processavam informações uma palavra por vez, em ordem
. Isso impedia a paralelização, o que significa que os modelos não podiam aproveitar totalmente o poder de processamento das GPUs modernas, tornando o treinamento extremamente lento e caro
.
Dependências de Longo Alcance: Esses modelos tinham dificuldade em manter o contexto de palavras muito distantes em uma frase ou documento
. À medida que a sequência crescia, a rede "esquecia" informações cruciais do início, dificultando a compreensão de textos complexos
.
2. A Inovação: "Atenção é Tudo o que Você Precisa"
A grande ruptura proposta pelo artigo foi a eliminação total da recorrência em favor de um mecanismo chamado Self-Attention (Auto-Atenção)
.
Processamento em Paralelo: Ao contrário das RNNs, os Transformers analisam todas as palavras de uma sequência simultaneamente
. Isso reduziu drasticamente o tempo de treinamento (de semanas para horas em alguns casos) e permitiu escalar modelos para conjuntos de dados massivos
.
Mecanismo de Atenção: Essa técnica permite que o modelo determine quais palavras em uma entrada são mais relevantes entre si, independentemente da distância
. Por exemplo, ao processar um pronome, o modelo consegue "prestar atenção" diretamente ao substantivo a que ele se refere, mesmo que estejam em parágrafos diferentes
.
3. Importância para a Inteligência Artificial
O impacto desse trabalho foi revolucionário, transformando o Transformer na base de quase todos os avanços recentes em IA
. Sua importância pode ser resumida em quatro pilares:
Fundação dos Grandes Modelos de Linguagem (LLMs): Arquiteturas consagradas como GPT (OpenAI), BERT (Google), Claude (Anthropic) e Gemini (Google) são todas variantes ou evoluções diretas do Transformer original
. Sem esse artigo, o ChatGPT não seria possível
.
Arquitetura Universal: Embora criado para tradução de textos, o Transformer provou ser uma arquitetura universal, sendo adaptado com sucesso para Visão Computacional (Vision Transformers), áudio (Whisper), robótica, biologia (dobramento de proteínas) e até jogos como xadrez
.
Escalabilidade Extrema: Os Transformers mostraram que, ao aumentar a quantidade de dados e o poder computacional, o desempenho da IA continua a crescer de forma consistente, o que deu origem aos modelos com centenas de bilhões de parâmetros que vemos hoje
.
Revolução Industrial e Corporativa: A tecnologia permitiu avanços práticos em automação de documentos e IA visual
. Empresas agora podem extrair dados de faturas, contratos e formulários complexos com uma precisão que os sistemas tradicionais (como o OCR antigo) não conseguiam alcançar
.
Em suma, o trabalho de Vaswani et al. (2017) deslocou o foco da IA do processamento passo a passo para a compreensão global de relacionamentos e contextos, desbloqueando a velocidade e a inteligência necessárias para a revolução da IA generativa que vivemos atualmente	