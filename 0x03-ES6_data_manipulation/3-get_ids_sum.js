const getStudentIdsSum = (lstStudents) => {
  if (Array.isArray(lstStudents) && lstStudents.every((item) => typeof item === 'object')) {
    return lstStudents.reduce((acc, curr) => acc + curr.id, 0);
  }
  return 0;
};

export default getStudentIdsSum;
