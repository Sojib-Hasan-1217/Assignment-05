// // heart counter button

function heartcount() {
  const heartCounter = parseInt(document.getElementById('heart-count').innerText)
  const clicker = 1;
  const finalCount = heartCounter + clicker;

  document.getElementById('heart-count').innerText = finalCount;
}
// transaction array 
const transactionData = [];


//  reuseible function
function getInnerText(name) {
  const innterText = document.getElementById(name).innerText;
  return innterText;
}

// parseInt function
function convertToNum(value) {
  const converter = parseInt(value);
  return converter;

}
//  click functionality for card btn -1
document.getElementById('call-btn-1').addEventListener('click', function (event) {
  event.preventDefault();


  const coinField = getInnerText('coin-field');
  const totalCoin = convertToNum(coinField);
  const callPrice = 20;
  const serviceName = getInnerText("service-name-1");
  const serviceNumber = getInnerText("service-number-1")
  const remainingTotalCoin = totalCoin - callPrice;

  if (remainingTotalCoin < 0) {
    alert("You Don't Have Enough Coin! To Make A Call You need Atlest 20 Coin")
    return
  }
  document.getElementById('coin-field').innerText = remainingTotalCoin;

  alert(`Calling ${serviceName} 
          ${serviceNumber}`)

  // for transaction container
  const data = {
    name: serviceName,
    number: serviceNumber
  }
  transactionData.push(data);

  const time = new Date().toLocaleTimeString();
  const historyContainer = document.getElementById('history-container');
  const divElement = document.createElement('div')
  for (const element of transactionData) {
    divElement.innerHTML = `<div class="flex justify-between items-center mx-1 px-1 py-2 mt-4 rounded-lg bg-gray-100">
                          <div class='text-sm '>
                              <h1 class='font-bold'>${data.name}</h1>
                              <p>${data.number}</p>
                          </div>
                          <p>${time}</p>
                      </div>`
  }
  historyContainer.appendChild(divElement)







})
//  click functionality for card btn -2

document.getElementById('call-btn-2').addEventListener('click', function (event) {
  event.preventDefault();


  const coinField = getInnerText('coin-field');
  const totalCoin = convertToNum(coinField);
  const callPrice = 20;
  const serviceName = getInnerText("service-name-2");
  const serviceNumber = getInnerText("service-number-2")
  const remainingTotalCoin = totalCoin - callPrice;

  if (remainingTotalCoin < 0) {
    alert("You Don't Have Enough Coin! To Make A Call You need Atlest 20 Coin")
    return
  }
  document.getElementById('coin-field').innerText = remainingTotalCoin;

  alert(`Calling ${serviceName} 
          ${serviceNumber}`)




  // for transaction container
  const data = {
    name: serviceName,
    number: serviceNumber
  }
  transactionData.push(data);

  const time = new Date().toLocaleTimeString();
  const historyContainer = document.getElementById('history-container');
  const divElement = document.createElement('div')
  for (const element of transactionData) {
    divElement.innerHTML = `<div class="flex justify-between items-center mx-1 p-1 py-2 mt-4 rounded-lg bg-gray-100">
                          <div class='text-sm '>
                              <h1 class='font-bold'>${data.name}</h1>
                              <p>${data.number}</p>
                          </div>
                          <p>${time}</p>
                      </div>`
  }
  historyContainer.appendChild(divElement)
})
//  click functionality for card btn -3

document.getElementById('call-btn-3').addEventListener('click', function (event) {
  event.preventDefault();


  const coinField = getInnerText('coin-field');
  const totalCoin = convertToNum(coinField);
  const callPrice = 20;
  const serviceName = getInnerText("service-name-3");
  const serviceNumber = getInnerText("service-number-3")
  const remainingTotalCoin = totalCoin - callPrice;

  if (remainingTotalCoin < 0) {
    alert("You Don't Have Enough Coin! To Make A Call You need Atlest 20 Coin")
    return
  }
  document.getElementById('coin-field').innerText = remainingTotalCoin;

  alert(`Calling ${serviceName} 
          ${serviceNumber}`)

  // for transaction container
  const data = {
    name: serviceName,
    number: serviceNumber
  }
  transactionData.push(data);

  const time = new Date().toLocaleTimeString();
  const historyContainer = document.getElementById('history-container');
  const divElement = document.createElement('div')
  for (const element of transactionData) {
    divElement.innerHTML = `<div class="flex justify-between items-center mx-1 p-1 py-2 mt-4 rounded-lg bg-gray-100">
                          <div class='text-sm '>
                              <h1 class='font-bold'>${data.name}</h1>
                              <p>${data.number}</p>
                          </div>
                          <p>${time}</p>
                      </div>`
  }
  historyContainer.appendChild(divElement)
})




//  click functionality for card btn -4

document.getElementById('call-btn-4').addEventListener('click', function (event) {
  event.preventDefault();


  const coinField = getInnerText('coin-field');
  const totalCoin = convertToNum(coinField);
  const callPrice = 20;
  const serviceName = getInnerText("service-name-4");
  const serviceNumber = getInnerText("service-number-4")
  const remainingTotalCoin = totalCoin - callPrice;

  if (remainingTotalCoin < 0) {
    alert("You Don't Have Enough Coin! To Make A Call You need Atlest 20 Coin")
    return
  }
  document.getElementById('coin-field').innerText = remainingTotalCoin;

  alert(`Calling ${serviceName} 
          ${serviceNumber}`)
  // for transaction container
  const data = {
    name: serviceName,
    number: serviceNumber
  }
  transactionData.push(data);

  const time = new Date().toLocaleTimeString();
  const historyContainer = document.getElementById('history-container');
  const divElement = document.createElement('div')
  for (const element of transactionData) {
    divElement.innerHTML = `<div class="flex justify-between items-center mx-1 p-1 py-2 mt-4 rounded-lg bg-gray-100">
                          <div class='text-sm '>
                              <h1 class='font-bold'>${data.name}</h1>
                              <p>${data.number}</p>
                          </div>
                          <p>${time}</p>
                      </div>`
  }
  historyContainer.appendChild(divElement)
})




//  click functionality for card btn -5

document.getElementById('call-btn-5').addEventListener('click', function (event) {
  event.preventDefault();


  const coinField = getInnerText('coin-field');
  const totalCoin = convertToNum(coinField);
  const callPrice = 20;
  const serviceName = getInnerText("service-name-5");
  const serviceNumber = getInnerText("service-number-5")
  const remainingTotalCoin = totalCoin - callPrice;

  if (remainingTotalCoin < 0) {
    alert("You Don't Have Enough Coin! To Make A Call You need Atlest 20 Coin")
    return
  }
  document.getElementById('coin-field').innerText = remainingTotalCoin;

  alert(`Calling ${serviceName} 
          ${serviceNumber}`)
  // for transaction container
  const data = {
    name: serviceName,
    number: serviceNumber
  }
  transactionData.push(data);

  const time = new Date().toLocaleTimeString();
  const historyContainer = document.getElementById('history-container');
  const divElement = document.createElement('div')
  for (const element of transactionData) {
    divElement.innerHTML = `<div class="flex justify-between items-center mx-1 p-1 py-2 mt-4 rounded-lg bg-gray-100">
                          <div class='text-sm '>
                              <h1 class='font-bold'>${data.name}</h1>
                              <p>${data.number}</p>
                          </div>
                          <p>${time}</p>
                      </div>`
  }
  historyContainer.appendChild(divElement)
})




//  click functionality for card btn -6

document.getElementById('call-btn-6').addEventListener('click', function (event) {
  event.preventDefault();


  const coinField = getInnerText('coin-field');
  const totalCoin = convertToNum(coinField);
  const callPrice = 20;
  const serviceName = getInnerText("service-name-6");
  const serviceNumber = getInnerText("service-number-6")
  const remainingTotalCoin = totalCoin - callPrice;

  if (remainingTotalCoin < 0) {
    alert("You Don't Have Enough Coin! To Make A Call You need Atlest 20 Coin")
    return
  }
  document.getElementById('coin-field').innerText = remainingTotalCoin;

  alert(`Calling ${serviceName} 
          ${serviceNumber}`)

  // for transaction container
  const data = {
    name: serviceName,
    number: serviceNumber
  }
  transactionData.push(data);

  const time = new Date().toLocaleTimeString();
  const historyContainer = document.getElementById('history-container');
  const divElement = document.createElement('div')
  for (const element of transactionData) {
    divElement.innerHTML = `<div class="flex justify-between items-center mx-1 p-1 py-2 mt-4 rounded-lg bg-gray-100">
                          <div class='text-sm '>
                              <h1 class='font-bold'>${data.name}</h1>
                              <p>${data.number}</p>
                          </div>
                          <p>${time}</p>
                      </div>`
  }
  historyContainer.appendChild(divElement)
})


//  click functionality for card btn -7

document.getElementById('call-btn-7').addEventListener('click', function (event) {
  event.preventDefault();


  const coinField = getInnerText('coin-field');
  const totalCoin = convertToNum(coinField);
  const callPrice = 20;
  const serviceName = getInnerText("service-name-7");
  const serviceNumber = getInnerText("service-number-7")
  const remainingTotalCoin = totalCoin - callPrice;

  if (remainingTotalCoin < 0) {
    alert("You Don't Have Enough Coin! To Make A Call You need Atlest 20 Coin")
    return
  }
  document.getElementById('coin-field').innerText = remainingTotalCoin;

  alert(`Calling ${serviceName} 
          ${serviceNumber}`)

  // for transaction container
  const data = {
    name: serviceName,
    number: serviceNumber
  }
  transactionData.push(data);

  const time = new Date().toLocaleTimeString();
  const historyContainer = document.getElementById('history-container');
  const divElement = document.createElement('div')
  for (const element of transactionData) {
    divElement.innerHTML = `<div class="flex justify-between items-center mx-1 p-1 py-2 mt-4 rounded-lg bg-gray-100">
                          <div class='text-sm'>
                              <h1 class='font-bold'>${data.name}</h1>
                              <p>${data.number}</p>
                          </div>
                          <p>${time}</p>
                      </div>`
  }
  historyContainer.appendChild(divElement)
})


//  click functionality for card btn -8

document.getElementById('call-btn-8').addEventListener('click', function (event) {
  event.preventDefault();


  const coinField = getInnerText('coin-field');
  const totalCoin = convertToNum(coinField);
  const callPrice = 20;
  const serviceName = getInnerText("service-name-8");
  const serviceNumber = getInnerText("service-number-8")
  const remainingTotalCoin = totalCoin - callPrice;

  if (remainingTotalCoin < 0) {
    alert("You Don't Have Enough Coin! To Make A Call You need Atlest 20 Coin")
    return
  }
  document.getElementById('coin-field').innerText = remainingTotalCoin;

  alert(`Calling ${serviceName} 
          ${serviceNumber}`)

  // for transaction container
  const data = {
    name: serviceName,
    number: serviceNumber
  }
  transactionData.push(data);

  const time = new Date().toLocaleTimeString();
  const historyContainer = document.getElementById('history-container');
  const divElement = document.createElement('div')
  for (const element of transactionData) {
    divElement.innerHTML = `<div class="flex justify-between items-center mx-1 p-1 py-2 mt-4 rounded-lg bg-gray-100">
                          <div class='text-sm '>
                              <h1 class='font-bold'>${data.name}</h1>
                              <p>${data.number}</p>
                          </div>
                          <p>${time}</p>
                      </div>`
  }
  historyContainer.appendChild(divElement)
})



//  click functionality for card btn -9

document.getElementById('call-btn-9').addEventListener('click', function (event) {
  event.preventDefault();


  const coinField = getInnerText('coin-field');
  const totalCoin = convertToNum(coinField);
  const callPrice = 20;
  const serviceName = getInnerText("service-name-9");
  const serviceNumber = getInnerText("service-number-9")
  const remainingTotalCoin = totalCoin - callPrice;

  if (remainingTotalCoin < 0) {
    alert("You Don't Have Enough Coin! To Make A Call You need Atlest 20 Coin")
    return
  }
  document.getElementById('coin-field').innerText = remainingTotalCoin;

  alert(`Calling ${serviceName} 
          ${serviceNumber}`)

  // for transaction container
  const data = {
    name: serviceName,
    number: serviceNumber
  }
  transactionData.push(data);

  const time = new Date().toLocaleTimeString();
  const historyContainer = document.getElementById('history-container');
  const divElement = document.createElement('div')
  for (const element of transactionData) {
    divElement.innerHTML = `<div class="flex justify-between items-center mx-1 p-1 py-2 mt-4 rounded-lg bg-gray-100">
                          <div class='text-sm '>
                              <h1 class='font-bold'>${data.name}</h1>
                              <p>${data.number}</p>
                          </div>
                          <p>${time}</p>
                      </div>`
  }
  historyContainer.appendChild(divElement)



})

// history delete btn handler
document.getElementById('history-delete-btn').addEventListener('click', function (event) {
  {
    event.preventDefault();

    document.getElementById('history-container').innerHTML = ''
  }
})


// copy counter function

function copyNumber(id) {
  const copyNumber = parseInt(document.getElementById(id).innerText)
  const copyClick = 1;
  const finalCount = copyNumber + copyClick;
  return finalCount;
}

// copy btn functionality

const copyButtons = document.querySelectorAll('#copy-btn');

for (const btn of copyButtons) {
  btn.addEventListener('click', function (event) {
    event.preventDefault();
    const parent = btn.parentElement;
    const num = parent.parentElement.querySelector(".service-number").innerText;

    alert(`
        Number is copied
          ${num}`)

    navigator.clipboard.writeText(num);

    const copyTimer = copyNumber('copy-number');
    document.getElementById('copy-number').innerText = copyTimer;

  })
}


