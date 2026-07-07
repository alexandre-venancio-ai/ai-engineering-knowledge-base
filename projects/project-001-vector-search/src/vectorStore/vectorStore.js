const vectorDatabase = [];

export function saveVector(chunk) {

    vectorDatabase.push(chunk);

}

export function getAllVectors() {

    return vectorDatabase;

}