let inputBox = document.getElementById("inputBox")
let buttons = document.querySelectorAll('button');

let string = ''

buttons.forEach(botton => {
  botton.addEventListener('click', (button)=>{
    if(button.target.innerText == '='){
      string = String(eval(string))
      inputBox.value = string;
    }
    else if(button.target.innerText == "AC"){
      string = ''
      inputBox.value = string;
    }

    else if(button.target.innerText == 'DEL'){
      string = string.substring(0,string.length-1)
      inputBox.value = string;
    }

    else if(button.target.id == "addAndSubtract"){
      string = string(-eval(string))
      inputBox.value = string;
    }


    else {
      string += button.target.innerText
      inputBox.value = string;
    }
  })
})