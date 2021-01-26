// Login button handler
const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function () {
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';
    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = 'block';
});

function spanText(id, depositAmount) {
    const current = parseFloat(document.getElementById(id).innerText);
    totalAmount = depositAmount + current;
    document.getElementById(id).innerText = totalAmount;
}

function getInputNumber(id) {
    const amount = parseFloat(document.getElementById(id).value);
    return amount;
};
//  Deposit button handler
const depositBtn = document.getElementById('addDeposit');
depositBtn.addEventListener('click', function () {
    // const depositAmount = parseFloat(document.getElementById('depositAmount').value);
    const depositAmount = getInputNumber('depositAmount');

    // const currentDeposit = parseFloat(document.getElementById('currentDeposit').innerText);
    // const totalDeposit = depositAmount + currentDeposit;
    // document.getElementById('currentDeposit').innerText = totalDeposit;

    spanText('currentDeposit', depositAmount)
    spanText('currentBalance', depositAmount);

    // const currentBalance = parseFloat(document.getElementById('currentBalance').innerText);
    // totalBalance = depositAmount + currentBalance;
    // document.getElementById('currentBalance').innerText = totalBalance;
    document.getElementById('depositAmount').value = '';
});

// Withdraw event handler
const withdrawBtn = document.getElementById('addWithdraw');
// const withdrawAmount = parseFloat(document.getElementById('withdrawAmount').value);
withdrawBtn.addEventListener('click', function () {
    const withdrawAmount = getInputNumber('withdrawAmount');
    console.log(withdrawAmount);

    spanText('currentWithdraw', withdrawAmount)
    spanText('currentBalance', (-1 * withdrawAmount));
    document.getElementById('withdrawAmount').value = '';
});