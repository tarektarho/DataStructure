export default class StaffList {
  constructor() {
    this.list = []
    this.maxAge = 20
  }

  add(name, age) {
    if (Number(age) > this.maxAge) {
      if (this.list.find((i) => i.name === name) != 0) {
        this.list.push({ name, age })
      }
    } else {
      throw new Error(`Staff member age must be greater than ${maxAge}`)
    }
  }

  getStaff(name) {
    return this.list.find((i) => i.name === name)
  }

  remove(name) {
    if (this.getStaff()) {
      this.list = this.list.filter((i) => i.name !== name)
      return true
    }
    return false
  }

  getSize() {
    return this.list.length
  }
}
