/**
 * Least Recently Used (LRU) cache.
 * Key/Value storage with fixed max number of items.
 * Least recently used items are discarded once the limit is reached.
 * Reading and updating the values mark the items as recently used.
 */
class LRUCache {
  /**
   * @param {number} capacity - The max number of items on the cache
   */
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
    this.cache = [];
  }
  /**
   * Get the value associated with the key. Mark keys as recently used.
   * @param {number} key
   * @returns {number} value or if not found -1
   */
  get(key) {
    if (this.map.has(key)) return this.map.get(key);
    return -1;
  }
  /**
   * Upsert key/value pair. Updates mark keys are recently used.
   * @param {number} key
   * @param {number} value
   * @returns {void}
   */
  put(key, value) {
    if (this.map.size() < this.capacity) {
      this.map.set(key, value);
      this.cache.push([key, value]);
    } else {
      let removed = this.cache.shift();
      this.map.delete(removed[0]);
    }
  }
}

const c = new LRUCache(2); // capacity: 2
console.log(c.put(2, 1)) // Cache is [2:1]
console.log(c.put(1, 1)) // Cache is [2:1, 1:1]
console.log(c.put(2, 3)) // Cache is [1:1, 2:3]
console.log(c.put(4, 1)) // Removed 1. Cache is [2:3, 4:1]
console.log(c.get(1)) //Returns -1 (key 1 not found)
console.log(c.get(2)) //Returns 3. Cache is [4:1, 2:3]
console.log(c.put(5, 5)) // Removed key 4. Cache is [2:3, 5:5]
console.log(c.get(4))