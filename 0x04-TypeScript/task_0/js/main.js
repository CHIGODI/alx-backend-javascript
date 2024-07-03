var student1 = {
    firstName: 'Antony',
    lastName: 'Chigodi',
    age: 24,
    location: 'Mombasa'
};
var student2 = {
    firstName: 'Diana',
    lastName: 'Doe',
    age: 26,
    location: 'Nairobi'
};
var studentsList = [student1, student2];
var createTable = function (students) {
    var table = document.createElement('table');
    var headers = ['firstName', 'location'];
    var headerRow = document.createElement('tr');
    headers.forEach(function (headertitle) {
        var th = document.createElement('th');
        th.textContent = headertitle;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);
    students.forEach(function (student) {
        var row = document.createElement('tr');
        Object.values(student).forEach(function (text) {
            var cell = document.createElement('td');
            cell.textContent = text;
            row.appendChild(cell);
        });
        table.appendChild(row);
    });
    return table;
};
document.body.appendChild(createTable(studentsList));
