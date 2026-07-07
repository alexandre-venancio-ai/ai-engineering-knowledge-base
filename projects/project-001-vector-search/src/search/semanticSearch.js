import { generateEmbedding } from "../embeddings/embeddingService.js";
import { getAllVectors } from "../vectorStore/vectorStore.js";
import { cosineSimilarity } from "./cosineSimilarity.js";

export function searchSimilarChunks(question, topK = 3) {

    const questionEmbedding = generateEmbedding(question);

    const vectors = getAllVectors();

    const rankedChunks = vectors.map(chunk => ({

        ...chunk,

        score: cosineSimilarity(
            questionEmbedding,
            chunk.embedding
        )

    }));

    rankedChunks.sort((a, b) => b.score - a.score);

    return rankedChunks.slice(0, topK);

}