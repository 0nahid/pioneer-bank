// Login button handler
const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function () {
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';
    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = 'block';
});

//  Deposit button handler
const depositBtn = document.getElementById('addDeposit');
depositBtn.addEventListener('click', function () {
    const depositAmount = parseFloat(document.getElementById('depositAmount').value);

    const currentDeposit = parseFloat(document.getElementById('currentDeposit').innerText);
    const totalDeposit = depositAmount + currentDeposit;
    document.getElementById('currentDeposit').innerText = totalDeposit;


    spanText('currentBalance', depositAmount);
    // const currentBalance = parseFloat(document.getElementById('currentBalance').innerText);
    // totalBalance = depositAmount + currentBalance;
    // document.getElementById('currentBalance').innerText = totalBalance;

    document.getElementById('depositAmount').value = '';
});

function spanText(id, depositAmount) {
    const currentBalance = parseFloat(document.getElementById(id).innerText);
    totalBalance = depositAmount + currentBalance;
    document.getElementById(id).innerText = totalBalance;

}