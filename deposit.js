document.getElementById('button-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    

    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    
    const currentDepositTotal = previousDepositTotal + newDepositAmount;

    depositTotalElement.innerText=currentDepositTotal;

    //Balance total
    const balanceTotalElement = document.getElementById("balance-total");
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    //Calculate current total balance
    const currentBalaceTotal = previousBalanceTotal + newDepositAmount;

    //set the balace total
    balanceTotalElement.innerText = currentBalaceTotal;

    depositField.value = '';
})