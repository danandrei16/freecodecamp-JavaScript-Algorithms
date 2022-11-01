function checkCashRegister(price, cash, cid) {
  
  // dollar values ascending
  let values = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
  // final change for each type of bill
  let nrBills = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  
  // change due
  let changeDue = cash - price;
  
  // register total
  let register = 0;
  for(let i in cid)
    register += cid[i][1];
  
  // not enough money in register
  if (changeDue > register)
    return {status: "INSUFFICIENT_FUNDS", change: []};
  
  let changeDueValue = changeDue;
  let change = 0;

  for (let i = 8; i >= 0; i--) {
    // calculating maximum change for each bill descending
    while (changeDue >= values[i] && cid[i][1] !== 0) {
      change += values[i];
      changeDue -= values[i];
      nrBills[i] += values[i];
      cid[i][1] -= values[i];
      
      // aproximating to 2 digits 
      change = Math.round(change*100)/100;
      changeDue = Math.round(changeDue*100)/100;
      nrBills[i] = Math.round(nrBills[i]*100)/100;
      cid[i][1] = Math.round(cid[i][1]*100)/100;
    }
  }

  // creating array with change values for each bill
  let cidToReturn = cid;
  for (let i in cid)
    cidToReturn[i][1] = nrBills[i];
  
  // change equals register total
  if (register == changeDueValue)
    return {status: "CLOSED", change: cidToReturn};
  
  // there's exact change
  if (change == changeDueValue) {
    cidToReturn = cidToReturn.reverse();
    cidToReturn = cidToReturn.filter(value => value[1] !== 0);
    return {status: "OPEN", change: cidToReturn};
  }
  else  // no exact change
    return {status: "INSUFFICIENT_FUNDS", change: []};
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);