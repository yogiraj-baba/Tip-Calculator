const calcy= () =>{
    let amount=document.getElementById('bill_amount').value;
    let percentage=document.getElementById('tip_per').value;
    let tip_amt = amount * (percentage/100);
    let total = Number(amount) + tip_amt;
    document.getElementById('tip_amt').value= tip_amt;
    document.getElementById('total_bill').value= total;
}