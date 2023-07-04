export default function getStudentIdsSum() {
  return students.reduce((total, currentValue) => total, currentValue.id, 0);
}
