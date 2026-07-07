# LEARNING JOURNAL

Este documento registra os principais aprendizados obtidos ao longo da especialização.

Cada Sprint deverá adicionar novas entradas.

---

# Sprint 1

## Aprendizados

- Configuração profissional de Git.
- Configuração de múltiplas contas GitHub.
- SSH Keys.
- Organização de documentação.
- Estrutura de uma Knowledge Base.

## Dificuldades

Nenhuma registrada.

## Próximos objetivos

Iniciar Module 1.

---

# Learning Journal

## Session 002

### Main Learnings

Today marked the real beginning of the AI Engineering Specialization.

The focus shifted from learning tools to developing engineering thinking.

Key concepts learned:

- AI did not emerge suddenly in 2022.
- The AI revolution resulted from the convergence of:
  - Data
  - Hardware
  - Algorithms
  - Cloud Computing
  - APIs
- The Transformer architecture represented the major turning point for modern AI.
- AI Engineering is much more than Prompt Engineering.
- Organization is an engineering skill.
- Every technology exists to solve a specific problem.

### Biggest Insight

Think like an engineer.

Do not ask:

"How do I use this technology?"

Ask:

"What problem was this technology created to solve?"

### Reflection

My previous experience with ERP systems, integrations and enterprise architecture is not being replaced.

It becomes the foundation upon which AI Engineering knowledge will be built.

# Session 002

## Date

2026-07-01

## Topics

- Tokenization
- Token IDs
- Embeddings
- Self-Attention
- Transformer Processing
- Next Token Prediction

## Key Learnings

- LLMs do not process text directly.
- Text is converted into tokens before any processing.
- Token IDs are identifiers and do not contain semantic meaning.
- Embeddings represent tokens as vectors.
- Self-Attention contextualizes token meanings.
- Transformer Layers refine contextual representations.
- LLMs generate responses by predicting one token at a time.

## Biggest Insight

Understanding that a Large Language Model does not retrieve ready-made answers from a database. Instead, it repeatedly calculates the probability distribution of the next token using the context and the parameters learned during training.

## Personal Evaluation

The distinction between Token IDs, Embeddings and Self-Attention became much clearer during this session. The internal processing flow of a Large Language Model is now understandable as a sequence of mathematical transformations rather than as a "black box".

## 2026-07-05

### Main Learnings

- The difference between imperative and declarative programming became much clearer through the use of map().
- A Pipeline should orchestrate stages instead of implementing business logic.
- Each Stage should have a single responsibility.
- Chunking is a transformation process applied independently to each document.
- A good architecture simplifies future AI integrations such as Embeddings and Vector Databases.

### Personal Insight

Today I realized that AI Engineering is much closer to Software Engineering than I initially imagined. Building a clean architecture before introducing AI components makes future evolution significantly easier.

## 2026-07-06

### Main Learnings

Today I completed the entire architecture of a Retrieval Augmented Generation (RAG) system before integrating any real AI model.

Key concepts learned:

- Embedding models are independent from LLMs.
- Vector Databases store embeddings instead of raw text.
- Retrieval Pipeline is completely separated from the Indexing Pipeline.
- Cosine Similarity is the foundation of semantic search.
- Good architecture allows replacing the Embedding Model without changing the application flow.

### Biggest Insight

A production RAG application is fundamentally composed of two independent pipelines:

- Indexing Pipeline (offline)
- Retrieval Pipeline (online)

The LLM is only responsible for generating the final response after the relevant context has already been retrieved.
