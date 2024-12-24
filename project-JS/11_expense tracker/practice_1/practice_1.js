// *****DOM ELEMENTS START HERE*****
	const transactionFromEL = document.getElementById('transactionForm');
	const netAmountEL = document.getElementById('netAmount');
	const transactionsContainerEL = document.querySelector('.transactions');
	const initState = {
		earnings: 0,
		expenses: 0,
		net: 0,
		transaction: []
	}
// *****DOM ELEMENTS END HERE*****


// *****RENDER TRANSACTION START HERE*****
	const renderTransaction = function (){
		transactionsContainerEL.innerHTML = '';
		initState.transaction.forEach((transaction) => {
			const {id, text, amount, type} = transaction;
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
			titleEL.textContext = text;
			leftEL.appendChild(titleEL);

			// Add amount
			const priceEL = document.createElement('p');
			priceEL.textContext = `${isCredit ? '+' : '-'} Rs. ${amount}`;
        	leftEL.appendChild(priceEL);

        	// Add status
        	const statusDiv =document.createElement('div');
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