import { loadDocuments } from "../loaders/documentLoader.js";
import { chunkingStage } from "./stages/chunking/chunkingStage.js";
import { saveVector } from "../vectorStore/vectorStore.js";

export function runIndexingPipeline() {

    const documents = loadDocuments();

    const indexedDocuments = chunkingStage(documents);

    indexedDocuments.forEach(document => {

        document.chunks.forEach(chunk => {

            saveVector(chunk);

        });

    });

    return indexedDocuments;

}