var intialPrice = document.querySelector("#intial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var submit = document.querySelector("#submit");
var output = document.querySelector("#output");


//button  function 
// submit.addEventListener('click', checkInput); //event trigger

// function checkInput() {
//     if ((intialPrice.value == '') || (stocksQuantity.value == '') || (currentPrice.value == '')) {
//         alert('Inputs can not be left blank');
//     }
//     else {
//         submitHandler();
//     }
// }

// //convert string to number
// function submitHandler() {
//     var ip = Number(intialPrice.value);
//     var qty = Number(stocksQuantity.value);
//     var curr = Number(currentPrice.value);
//     check(ip, qty, curr)
// }

// //check for validation
// function check(ip, qty, curr){
//     if(ip > 0 && qty > 0 && curr >0){
//         calculation(ip, qty, curr)
//     }
//     else{
//         output.style.color = "red";
//         output.innerHTML ="Please input values correct"
//     }
// }






// //logic building
// function calculation(i,q,c)
//  {
//     if (i > c) {
//         var loss = (i - c)* q;
//         var lossPercentage =(loss/i)*100;
//         output.style.color = 'red';
//         output.innerText = `You are in Loss! The loss is ${loss} and loss percentage ${lossPercentage}%. 😕`;
    
//     }else if( c>i) {
//           var profit = (c - i)*q;
//           var profitPercentage = (profit/i)*100;
//           output.style.color = 'green';
//         output.innerText = `You are in Profit! The Profit is ${profit} and profit percentage is ${profitPercentage}%.🎉`;
//     }
//     else{
//         output.innerText ="it's all about risk 🚀";
//     }
//  }

// complete logic in one fumction

function checkInput(){
if((intialPrice.value =='') || (stocksQuantity.value =='' )|| (currentPrice.value =='')){
    alert("Fill all value to get correct answer")
}else{
    var ip = Number(intialPrice.value)
    var qty = Number(stocksQuantity.value)
    var curr = Number(currentPrice.value)

    if(ip > 0 && qty > 0 && curr >0){
        

        if (ip > curr) {
                    var loss = (ip - curr)* qty;
                    var lossPercentage =(loss/ip)*100;
                    output.style.color = 'red';
                    output.innerText = `You are in Loss! The loss is ${loss} and loss percentage ${lossPercentage}%. 😕`;
                
                }else if( curr>ip) {
                      var profit = (curr - ip)*qty;
                      var profitPercentage = (profit/ip)*100;
                      output.style.color = 'green';
                    output.innerText = `You are in Profit! The Profit is ${profit} and profit percentage is ${profitPercentage}%.🎉`;
                }
                else{
                    output.innerText ="it's all about risk 🚀";
                }






    }else{
        output.style.color = "red";
        output.innerText = "please input correct value"
    }
    }
}

