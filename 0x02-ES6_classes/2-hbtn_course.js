export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(myName) {
    if (typeof myName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = myName;
  }

  get length() {
    return this._length;
  }

  set length(myLength) {
    if (typeof myLength !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = myLength;
  }

  get students() {
    return this._students;
  }

  set students(myStudents) {
    if (!(myStudents instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (myStudents.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = myStudents;
  }
}
