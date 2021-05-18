document.querySelector('select').addEventListener('change', event => {
  let value = event.target.value;
  let code = document.getElementById("code");
  let area = document.getElementById("area");
  let codeError = document.getElementById("codeError");
  let areaError = document.getElementById("areaError");
  
  if(value == "United Kingdom"){
    // change labels to Uk names
    code.innerHTML = "Postcode";
    area.innerHTML = "County";
    codeError.innerHTML = "Postcode is required";
    areaError.innerHTML = "County is required";
  }
  else if(value == "United States"){
    // change lables back to default 
    code.innerHTML = "ZIP Code";
    area.innerHTML = "State";
    codeError.innerHTML = "ZIP Code is required";
    areaError.innerHTML = "State is required";
  }
  else if(value == "Canada"){
    // change labels for Canada names
    code.innerHTML = "Postal Code";
    area.innerHTML = "Province";
    codeError.innerHTML = "Postal Code is required";
    areaError.innerHTML = "Province is required";
  }
  else{
    // standard labels 
    code.innerHTML = "Postcode";
    area.innerHTML = "State/Province/Region";
    codeError.innerHTML = "Postcode is required";
    areaError.innerHTML = "State/Province/Region is required";

  }

});