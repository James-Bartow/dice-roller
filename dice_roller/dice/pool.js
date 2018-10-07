class Pool {
    constructor(size, die) {
        let pool = new Array(size);
        pool.fill(die);
        this.pool = pool;
    }

    roll() {
        return this.pool.map(d => d.roll()).sort()
    }
    get size() {
        return this.pool.length;
    }
}

module.exports = Pool;