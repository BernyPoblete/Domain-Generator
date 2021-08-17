console.log("Hello World");

let pronoun = ['the', 'our', 'my'];
let adj = ['great', 'wonderful', 'fabulous', 'gorgeus'];
let noun = ['dancer', 'catgirl', 'developer',];
let exten = ['.com', '.cl', '.ca', '.ve']

for (let a = 0; a < pronoun.length; a++) {
    for (let b = 0; b < adj.length; b++) {
        for (let c = 0; c < noun.length; c++) {
            for (let d = 0; d < exten.length; d++) {
                newDom = (pronoun[a] + adj[b] + noun[c] + exten[d]);
                console.log(newDom);
            }
        }
    }
}
newDom = (pronoun, adj, noun, exten);
