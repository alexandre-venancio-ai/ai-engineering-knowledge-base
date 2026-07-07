import fs from "fs";
import path from "path";

export function loadDocuments() {
    const docsPath = path.join(process.cwd(), "docs");
    const files = fs.readdirSync(docsPath);

    const documents = files.map((file) => {
        const content = fs.readFileSync(
            path.join(docsPath, file),
            "utf-8"
        );

        return {
            fileName: file,
            content
        };
    });

    return documents;
}