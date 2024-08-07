const updateStudentGradeByCity = (students, city, newGrades) => {
  if (Array.isArray(students) && typeof city === 'string' && Array.isArray(newGrades)) {
    return students
      .filter((student) => student.location === city)
      .map((student) => {
        const newGrade = newGrades.find((grade) => grade.studentId === student.id);
        return {
          ...student,
          grade: newGrade ? newGrade.grade : 'N/A',
        };
      });
  }

  return [];
};

export default updateStudentGradeByCity;
