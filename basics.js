const invoices = [
    { clientName: "Rahul", amount: 5000 },
    { clientName: "Priya", amount: 12000 },
    { clientName: "Amit", amount: 3000 }
]

const amounts = invoices.map(function(invoice) {
    return invoice.amount * 1.18
})

console.log(amounts)