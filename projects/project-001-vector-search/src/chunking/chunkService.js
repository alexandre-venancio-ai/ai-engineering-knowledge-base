export function createChunks(text, chunkSize = 200) {

    const chunks = [];
    let i = 0;

    
    while (i < text.length) { 
        const lastSpace = text.slice(i, i + chunkSize).lastIndexOf(" ");
        const chunkEnd = (lastSpace === -1) ? i + chunkSize : i + lastSpace;
        chunks.push(text.slice(i, chunkEnd));

        i = chunkEnd + 1;
    }

    return chunks;
}