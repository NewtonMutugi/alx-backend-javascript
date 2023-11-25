const fs = require('fs');

const countStudents = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n');
    let count = 0;
    for (const line of lines) {
      if (line) {
        count += 1;
      }
    }
    console.log(`Number of students: ${count}`);
    // Find number of students doing CS and their names
    const csStudents = lines
      .filter((line) => line.includes('CS'))
      .map((student) => student.split(',')[0]);
    console.log(
      `Number of students in CS: ${csStudents.length}. List: ${csStudents.join(
        ', ',
      )}`,
    );

    // Find number of students doing SWE and their names
    const sweStudents = lines
      .filter((line) => line.includes('SWE'))
      .map((student) => student.split(',')[0]);
    console.log(
      `Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(
        ', ',
      )}`,
    );
    return count;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
