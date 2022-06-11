let text = ['a','b','c'];
text = text.map((e) => String.fromCharCode(e.charCodeAt(e) + 1));
console.log(text);