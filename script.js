const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')

// define more constants and variables here

btn_toggle.onclick = () => {
  // your code here
  if(toggle.innerHTML == "Show Calculation"){
  let cal = 630610716 + Number(length.value)
  author.innerHTML = cal
  const toggle = document.getElementById('toggle')
  toggle.innerHTML = "Show Author"
  }else if(toggle.innerHTML == "Show Author"){
    author.innerHTML = "630610716 KITPISAN TANNGAN"
    const toggle = document.getElementById('toggle')
    toggle.innerHTML = "Show Calculation"
    }
  
}

const Reset = () =>{
  
}
// more codes for Search and Reset buttons here
