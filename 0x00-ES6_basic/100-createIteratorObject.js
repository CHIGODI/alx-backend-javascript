export default function createIteratorObject(report) {
  let employees = [];
  for (const department of Object.keys(report.allEmployees)) {
    employees = employees.concat(report.allEmployees[department]);
  }
  return employees;
}
