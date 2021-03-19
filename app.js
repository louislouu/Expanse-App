const form = document.querySelector('.form')
const nameInput = document.querySelector('.name-input');
const dateInput = document.querySelector('.date-input');
const amountInput = document.querySelector('.amount-input');
const expanseTable = document.querySelector('.book-list');
const button = document.querySelector('.btn');

//EVENT LISTENER
button.addEventListener('click', addExpanse);

//FUNCTIONS
function addExpanse(){
  //CREATES A ROW
  const Expanse = document.createElement('tr');
  Expanse.classList.add('new-row');
  //CREATES A CELL 1
  if(nameInput.value === '' || dateInput.value === '' || amountInput.value === ''){
    alert('Fill out all Fields!')
  }
  else{
    //document.querySelector('.placeholder').remove();

    const newExpanse1 = document.createElement('td');
    newExpanse1.innerText = nameInput.value; 
    Expanse.appendChild(newExpanse1);

    const newExpanse2 = document.createElement('td');
    newExpanse2.innerText = dateInput.value;  
    Expanse.appendChild(newExpanse2);

    const newExpanse3 = document.createElement('td');
    newExpanse3.innerText = amountInput.value;  
    Expanse.appendChild(newExpanse3);

    const deleteColumn = document.createElement('td');
    const deleteBtn = document.createElement('button')
    deleteBtn.innerHTML = '<i class="far fa-trash-alt"></i>'
    deleteColumn.appendChild(deleteBtn);
    Expanse.appendChild(deleteColumn);
    deleteBtn.addEventListener('click', testHa);    

  }  

  function testHa(e){
    const cursor = e.target;
    cursor.remove();
  }

  //ADD TO THE TABLE
  expanseTable.appendChild(Expanse);
  //CLEAR THE INPUT
  nameInput.value = '';
  dateInput.value = '';
  amountInput.value = '';   
}
form.addEventListener('submit', (e) => {
  e.preventDefault();
})


