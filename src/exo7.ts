class Queue<T> {
    constructor(private elements: T[]) {

    }

    enqueue(element: T){
        this.elements.push(element);
        console.log(this.elements);
    }

    dequeue(){
        console.log(this.elements.shift());
    }

    isEmpty(){
        if(this.elements.length === 0){
            console.log("Il n'y a rien la dedans, faudrait vraiment la remplir. Pour cela, veuillez utiliser la fonction enqueue(element).");
        }
        else{
            console.log("Il y a bien des elements a l'interieur de la liste. Si vous voulez voir le nombre d'element a l'interieur, utilisez la commande size() qui vous affichera la longueur de la liste.");
        }
    }

    size(){
        console.log(this.elements.length);
    }
}

let queue = new Queue<string>([]);
queue.enqueue("a");
queue.isEmpty();
queue.size();
queue.dequeue();
queue.isEmpty();
queue.size();

let queue2 = new Queue<number>([]);
queue2.enqueue(42);
queue2.isEmpty();
queue2.size();
queue2.dequeue();
queue2.isEmpty();
queue2.size();