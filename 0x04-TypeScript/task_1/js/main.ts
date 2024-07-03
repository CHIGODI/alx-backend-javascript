interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}


interface Directors extends Teacher{
    numberOfReports: number,
}

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(director1);

const printTeacher = (firstName: string, lastName: string): void => {
    console.log(`${firstName.slice(0, 1)}. ${lastName}`)
};
printTeacher('John', 'Doe')