export function cosineSimilarity(vectorA, vectorB) {

    const dotProduct = vectorA.reduce(

        (sum, value, index) => sum + value * vectorB[index],

        0

    );

    const magnitudeA = Math.sqrt(

        vectorA.reduce(

            (sum, value) => sum + value ** 2,

            0

        )

    );

    const magnitudeB = Math.sqrt(

        vectorB.reduce(

            (sum, value) => sum + value ** 2,

            0

        )

    );

    return dotProduct / (magnitudeA * magnitudeB);

}