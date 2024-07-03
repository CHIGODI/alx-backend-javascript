interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Antony',
    lastName: 'Chigodi',
    age: 24,
    location: 'Mombasa'
}

const student2: Student = {
    firstName: 'Diana',
    lastName: 'Doe',
    age: 26,
    location: 'Nairobi'
}

const studentsList: Student[] = [student1, student2]

const createTable = (students: Student[]): HTMLElement => {
    const table: HTMLTableElement = document.createElement('table');
    const headers: (keyof Student)[] = ['firstName', 'location'];
    const headerRow: HTMLTableRowElement = document.createElement('tr');

    headers.forEach(headerTitle => {
        const th: HTMLTableCellElement = document.createElement('th');
        th.textContent = headerTitle;
        headerRow.appendChild(th);
    });

    table.appendChild(headerRow);

    students.forEach(student => {
        const row: HTMLTableRowElement = document.createElement('tr');

        headers.forEach(header => {
            const cell = document.createElement('td');
            cell.textContent = student[header].toString();
            row.appendChild(cell);
        });

        table.appendChild(row);
    });

    return table;
};

document.body.appendChild(createTable(studentsList));