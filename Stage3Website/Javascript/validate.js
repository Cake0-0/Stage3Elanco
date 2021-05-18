// Used to make sure if the text of an input field has a value make sure the variable stays above the text
let form = document.querySelector('form');
let inputs = document.querySelectorAll('input');
let notSaved = false;
inputs.forEach(item =>
{
    let label = item.nextElementSibling.querySelector('span');
    
    if(!notSaved){
      // see if the user has saved any data 
      let inputName =  item.getAttribute("name");
      let inputValue = localStorage.getItem(inputName);
      if(inputValue){
        item.value = inputValue;
        addLabelName(label);
      }
 
    } else {
      notSaved = true;
    }
    
    item.addEventListener('change', event =>{
      if((event.target.value.split(' ').join('')).length >= 1){
        addLabelName(label);
      }
      else{
        removeLabelName(label);
      }
    })

  })

 
  // when the form is submitted check if any inputs are empty
  form.addEventListener('submit', event => {

    event.preventDefault();
    // go though each required input field
    let error = false;
    document.querySelectorAll('.required').forEach(input => {
      let value = input.value.split('').join('');  
      if(value.length == 0){
        // show error message to the span 
        input.parentElement.nextElementSibling.classList.add('error');
        error = true;
      }
    })
    if(!error){
      // save all the data 
      inputs.forEach(item => {
        saveData(item);
      });

      let select = document.querySelector('select');
      if(select != null){
        saveData(select); // save the data in the select drop down list
      }

      // go to the next page
      form.submit();
    }
  });

function addLabelName(label){
  // add the class name to stop the label from going to orginal position
  label.classList.add("above");
}

function removeLabelName(label){
  // remove the class name to put the label at its orginal postion as there is no content in input
  label.classList.remove("above");
}

function saveData(item){
  if(item.value){  // some inputs are not required 
    let itemName = item.getAttribute("name"); // key

    localStorage.setItem(itemName, item.value); // save the value
  }
}