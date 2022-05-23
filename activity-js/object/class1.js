class Launch {
    constructor(name = 'Generic', value = 0) {
        this.name = name
        this.value = value
    }
}

class FinancialCycle {
    constructor(month, year) {
        this.month = month,
            this.year = year,
            this.launches = []
    }

    addLaunches(...launch) {
        launches.forEach(l => this.launches.push(l))
    }

    summary() {
        let valueConsolidated = 0
        this.launches.forEach(l => {
            valueConsolidated += l.value
        })
        return valueConsolidated
    }
}

const salary = new Launch('Salary', 4000)
const electricityBill = new Launch('Electricity', -60)

const bills = new FinancialCycle(4, 2020)
bills.addLaunches(salary, electricityBill)
console.log(bills.summary())
