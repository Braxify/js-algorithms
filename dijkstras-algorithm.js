// Хеш-таблица веса рёбер графа
const graph = {};
graph.start = {};
graph.start.a = 6;
graph.start.b = 2;

graph.a = {};
graph.a.fin = 1;

graph.b = {};
graph.b.a = 3;
graph.b.fin = 5;

graph.fin = {};

// Хеш-таблица стоимостей
const costs = {};
costs.a = 6;
costs.b = 2;
costs.fin = Infinity;

// Хеш-таблица родителей
const parents = {};
parents.a = "start";
parents.b = "start";
parents.fin = null;

const processed = [];

function findLowestCostNode(costs) {
    let lowestCost = Infinity;
    let lowestCostNode = null;

    Object.keys(costs).forEach(node => {
        const cost = costs[node];
        if (cost < lowestCost && !processed.includes(node)) {
            lowestCost = cost;
            lowestCostNode = node;
        }
    });

    return lowestCostNode;
}

let node = findLowestCostNode(costs);

while (node !== null) {
    const cost = costs[node];
    const neighbors = graph[node];

    Object.keys(neighbors).forEach(n => {
        const newCost = cost + neighbors[n];

        if (costs[n] > newCost) {
            costs[n] = newCost;
            parents[n] = node;
        }
    });

    processed.push(node);
    node = findLowestCostNode(costs);
}

console.log("costs", costs);





