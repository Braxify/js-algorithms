const personIsSeller = name => name[name.length - 1] === "m";

function breadthFirstSearch(graph, name) {
    let searchQueue = [...graph[name]];
    const searchedElements = [];

    while (searchQueue.length) {
        const person = searchQueue.shift();
        if (searchedElements.indexOf(person) === -1) {
            if (personIsSeller(person)) {
                console.log(`breadthFirstSearch: ${person} is a mango seller.`)
                return true;
            }
            searchQueue = searchQueue.concat(graph[person]);
            searchedElements.push(person);
        }
    }
}

function breadthFirstSearchTwo(graph, start, end) {
    let queue = []
    queue.push(start)
    while (queue.length > 0) {
        const current = queue.shift()
        if (!graph[current]) {
            graph[current] = []
        }
        if (graph[current].includes(end)) {
            return true
        } else {
            queue = [...queue, ...graph[current]]
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

breadthFirstSearch(graph, "you"); // thom is a mango seller.
breadthFirstSearch(graph, "bob"); // thom is a mango seller.
breadthFirstSearch(graph, "claire"); //
console.log(breadthFirstSearchTwo(graph, "you", "jonny"));
