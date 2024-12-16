class MaxHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        this.bubbleUp();
    }

    extractMax() {
        if (this.heap.length === 1) return this.heap.pop();
        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return max;
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] >= this.heap[index]) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    bubbleDown() {
        let index = 0;
        const length = this.heap.length;
        while (true) {
            let left = 2 * index + 1, right = 2 * index + 2, largest = index;
            if (left < length && this.heap[left] > this.heap[largest]) largest = left;
            if (right < length && this.heap[right] > this.heap[largest]) largest = right;
            if (largest === index) break;
            [this.heap[largest], this.heap[index]] = [this.heap[index], this.heap[largest]];
            index = largest;
        }
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}

function calculateTikTokShoppingCost(vouchersCount, prices) {
    const heap = new MaxHeap();
    prices.forEach(price => heap.insert(price));

    for (let i = 0; i < vouchersCount; i++) {
        let maxPrice = Math.floor(heap.extractMax() / 2);
        heap.insert(maxPrice);
    }

    // Correct sum calculation
    let totalCost = 0;
    while (!heap.isEmpty()) {
        totalCost += heap.extractMax();
    }

    return Math.floor(totalCost);
}

// Example Usage
console.log(calculateTikTokShoppingCost(3, [8, 2, 13])); // Expected Output: 24