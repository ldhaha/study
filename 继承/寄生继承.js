const person = {
  running: function () {
    console.log('running')
  }
}

function createStudent(name) {
  const stu = Object.create(person)
  stu.name = name
  return stu
}
