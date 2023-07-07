export default class Dictionary {
  constructor() {
    this.dictionary = {}
  }

  add(key, value) {
    this.dictionary[key] = value
  }

  remove(key) {
    if (this.dictionary.hasOwnProperty(key)) {
      delete this.dictionary[key]
    }
  }

  get(key) {
    return this.dictionary[key]
  }

  contains(key) {
    return this.dictionary.hasOwnProperty(key)
  }

  clear() {
    this.dictionary = {}
  }

  size() {
    return Object.keys(this.dictionary).length
  }

  keys() {
    return Object.keys(this.dictionary)
  }

  values() {
    return Object.values(this.dictionary)
  }
}
