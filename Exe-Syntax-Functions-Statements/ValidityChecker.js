function solve(n1, n2, n3, n4) {
    let third = Math.sqrt(Math.pow((n3 - n1), 2) + Math.pow((n4 - n2), 2));
    let second = Math.sqrt(Math.pow((n3 - n2), 2) + Math.pow((n4 - n3), 2));
    let first = Math.sqrt(Math.pow((n2 - n1), 2) + Math.pow((n3 - n2), 2));
    console.log(third);
    console.log(second);
    console.log(first);
}
solve(2, 1, 1, 1)
