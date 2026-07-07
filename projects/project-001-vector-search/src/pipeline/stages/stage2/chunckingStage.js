import { createChunks } from "../../../chunking/chunkService.js";
import { generateEmbedding } from "../../../embeddings/embeddingService.js";

export function chunkingStage(documents) {

    const indexedDocuments = documents.map(document => {

        const chunks = createChunks(document.content, 80);

        const chunkObjects = chunks.map(chunk => ({

            text: chunk,

            embedding: generateEmbedding(chunk)

        }));

        return {

            fileName: document.fileName,

            chunks: chunkObjects

        };

    });

    return indexedDocuments;

}