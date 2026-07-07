import { runIndexingPipeline } from './pipeline/indexingPipeline.js';

const indexedDocuments = runIndexingPipeline();

console.log(indexedDocuments);