import * as CRUD from './crud';
var row = {
    firstName: 'Guillaume',
    lastName: 'Salva'
};
var newRowID = CRUD.insertRow(row);
row.age = 23;
var updatedRow = row;
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
//# sourceMappingURL=main.js.map