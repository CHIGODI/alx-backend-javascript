const getListStudentIds = (objArray) => {
  if (Array.isArray(objArray) && objArray.every((item) => typeof item === 'object')) {
    const arr = objArray.map((obj) => obj.id);
    return arr;
  }
  return [];
};

export default getListStudentIds;
