const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chinese = f => f.pais === 'China'
const women = f => f.genero === 'F'
const lowestSalary = (employee, employeeActual) => {
    return employee.salario < employeeActual.salario ? employee : employeeActual
}

axios.get(url).then(response => {
    const employees = response.data
    // console.log(employees)

    const employee = employees
        .filter(chinese)
        .filter(women)
        .reduce(lowestSalary)

    console.log(employee)
})