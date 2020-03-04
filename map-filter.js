const student =[
    {id: 21, name: 'Omar sani'},
    {id: 31, name: 'Manna de'},
    {id: 41, name: 'Popi khan'},
    {id: 71, name: 'Nisha sowdagor'}
];

const names = student.map( s => s.name);
const ids = student.map( s => s.id);
const bigger = student.filter( s => s.id > 40);
const bigger1 = student.find( s => s.id);
console.log(bigger1);