const getStudentsByLocation = (arrayObj, location) => {
  if (Array.isArray(arrayObj) && arrayObj.every((item) => typeof item === 'object') && typeof location === 'string') {
    const students = arrayObj.filter((student) => student.location === location);
    return students;
  }
  return [];
};

export default getStudentsByLocation;
