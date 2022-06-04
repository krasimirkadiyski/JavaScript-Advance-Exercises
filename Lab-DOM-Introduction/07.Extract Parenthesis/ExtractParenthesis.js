function extract(content) {
    let result = [];
    let contentElement = document.getElementById(content);
    let pattern = /\(([^(]+)\)/g;
    let matches = contentElement.textContent.matchAll(pattern);
    for (const match of matches) {
        result.push(match[1]);
    }
    return result.join("; ");


}