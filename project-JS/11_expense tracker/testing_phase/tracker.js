// *****DOM ELEMENTS START HERE*****
const transactionFormEL = document.getElementById("transactionForm");
const netAmountEL = document.getElementById('netAmount');
const transactionsContainerEL = document.querySelector(".transactions");
const initState = {
    earnings: 0,
    expenses: 0,
    net: 0,
    transaction: []
};
// *****DOM ELEMENTS END HERE*****


// *****RENDER TRANSACTION START HERE*****
const renderTransaction = function () {
    transactionsContainerEL.innerHTML = "";
    initState.transaction.forEach((transaction) => {
        const { id, text, amount, type } = transaction;
        const isCredit = type === 'credit';

        // Create transaction div
        const transactionEL = document.createElement('div');
        transactionEL.className = 'transaction';
        transactionEL.setAttribute('key', id);

        // Create left div
        const leftEL = document.createElement('div');
        leftEL.className = 'left';

        // Add title
        const titleEL = document.createElement('p');
        titleEL.textContent = text;
        leftEL.appendChild(titleEL);

        // Add amount
        const priceEL = document.createElement('p');
        priceEL.textContent = `${isCredit ? '+' : '-'} Rs. ${amount}`;
        leftEL.appendChild(priceEL);

        // Add status
        const statusDiv = document.createElement('div');
        statusDiv.className = `status ${isCredit ? 'credit' : 'debit'}`;
        statusDiv.textContent = isCredit ? 'C' : 'D';

        // Add Edit and Delete Buttons
        const actionsDiv = document.createElement('div');
        actionsDiv.className = 'actions';

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.className = 'edit-btn';
        editBtn.onclick = () => editTransaction(id);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.onclick = () => deleteTransaction(id);

        actionsDiv.appendChild(editBtn);
        actionsDiv.appendChild(deleteBtn);

        // Append left, status, and actions to transaction
        transactionEL.appendChild(leftEL);
        transactionEL.appendChild(statusDiv);
        transactionEL.appendChild(actionsDiv);

        // Append transaction to container
        transactionsContainerEL.appendChild(transactionEL);
    });
};

// *****RENDER TRANSACTION END HERE*****

// Add editTransaction Function:
const editTransaction = (id) => {
    const transaction = initState.transaction.find((trans) => trans.id === id);

    if (!transaction) return alert('Transaction not found!');

    // Pre-fill the form with the transaction details
    document.getElementById('text').value = transaction.text;
    document.getElementById('amount').value = transaction.amount;

    // Remove the existing transaction temporarily
    initState.transaction = initState.transaction.filter((trans) => trans.id !== id);

    // Recalculate earnings, expenses, and net
    if (transaction.type === 'credit') {
        initState.earnings -= transaction.amount;
    } else {
        initState.expenses -= transaction.amount;
    }
    initState.net = initState.earnings - initState.expenses;

    // Update UI
    netAmountEL.textContent = `रु ${initState.net}`;
    renderTransaction();
};


// Add deleteTransaction Function:
const deleteTransaction = (id) => {
    const transaction = initState.transaction.find((trans) => trans.id === id);

    if (!transaction) return alert('Transaction not found!');

    // Remove the transaction
    initState.transaction = initState.transaction.filter((trans) => trans.id !== id);

    // Update earnings, expenses, and net
    if (transaction.type === 'credit') {
        initState.earnings -= transaction.amount;
    } else {
        initState.expenses -= transaction.amount;
    }
    initState.net = initState.earnings - initState.expenses;

    // Update UI
    netAmountEL.textContent = `रु ${initState.net}`;
    renderTransaction();
};





// *****ADD TRANSACTION START HERE*****
const addTransaction = (e) => {
    e.preventDefault();

    const isEarn = e.submitter.id === 'earnBtn';
    const formData = new FormData(transactionFormEL);

    const title = formData.get('text').trim();
    const amount = formData.get('amount').trim();

    if (!title || !amount) {
        alert("Please fill in all fields!");
        return;
    }

    const transaction = {
        id: Math.floor(Math.random() * 10000),
        text: title,
        amount: +amount,
        type: isEarn ? "credit" : "debit"
    };

    initState.transaction.push(transaction);

    // Update earnings, expenses, and net
    if (isEarn) {
        initState.earnings += +amount;
    } else {
        initState.expenses += +amount;
    }
    initState.net = initState.earnings - initState.expenses;

    // Update UI
    netAmountEL.textContent = `रु ${initState.net}`;
    renderTransaction();

    // Reset form
    transactionFormEL.reset();
};

// *****ADD TRANSACTION END HERE*****


// Event Listener
transactionFormEL.addEventListener("submit", addTransaction);
renderTransaction();
