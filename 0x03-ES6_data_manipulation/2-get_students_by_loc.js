const getStudentsByLocation = (arrayObj, location) => {
  const students = arrayObj.filter((student) => student.location === location);
  return students;
};

export default getStudentsByLocation;
