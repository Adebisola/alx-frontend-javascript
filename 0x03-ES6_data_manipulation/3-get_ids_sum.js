export default function getStudentIdsSum(students) {
  return students.reduce((total, currentValue) => total + currentValue.id, 0);
}
