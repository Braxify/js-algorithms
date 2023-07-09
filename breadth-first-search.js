const personIsSeller = name => name[name.length - 1] === "m";

function breadthFirstSearch(graph, name) {
    let searchQueue = [...graph[name]];
    const searchedElements = [];

    while (searchQueue.length) {
        const person = searchQueue.shift();
        if (searchedElements.indexOf(person) === -1) {
            if (personIsSeller(person)) {
                console.log(`${person} is a mango seller.`)
                return true;
            }
            searchQueue = searchQueue.concat(graph[person]);
            searchedElements.push(person);
        }
    }
}

const graph = {};
graph.you = ["alice", "bob", "claire"];
graph.bob = ["anuj", "peggy"];
graph.alice = ["peggy"];
graph.claire = ["thom", "jonny"];
graph.anuj = [];
graph.peggy = [];
graph.thom = [];
graph.jonny = [];

breadthFirstSearch(graph, "you");
