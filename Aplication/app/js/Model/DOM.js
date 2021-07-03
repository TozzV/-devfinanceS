const DOM = {
    transactionsContainer: document.querySelector('#data-table tbody'),
  
    addTransaction(transaction, index) {
      const tr = document.createElement('tr')
      tr.innerHTML = DOM.innerHTMLTransaction(transaction, index)
      tr.dataset.index = index
      DOM.transactionsContainer.appendChild(tr)
    },
  
    innerHTMLTransaction(transaction, index) {
      const CSSClass = transaction.amount > 0 ? "income" : "expense"
  
      const amount = Utils.formatCurrency(transaction.amount)
  
      const html = `
        <td class="description">${transaction.description}</td>
        <td class="${CSSClass}">${amount}</td>
        <td class="date">${transaction.date}</td>
        <td><img onclick="Transaction.remove(${index})" src="assets/minus.svg" alt="Remover Transação"></td>
      `
  
      return html
    },
  
    updateBalance() {
      document
        .getElementById('incomeDisplay')
        .innerHTML = Utils.formatCurrency(Transaction.incomes())
      document
        .getElementById('expenseDisplay')
        .innerHTML = Utils.formatCurrency(Transaction.expenses())
      document
        .getElementById('totalDisplay')
        .innerHTML = Utils.formatCurrencyTotal(Transaction.total())
    },
  
    clearTransactions() {
      DOM.transactionsContainer.innerHTML = ""
    }
  }
  