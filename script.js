const display = document.getElementById("display");

const buttons = document.querySelectorAll(".btn");

let expression = "";

buttons.forEach(button=>{

button.addEventListener("click",()=>{

const value = button.dataset.value;

if(value==="AC"){

expression="";

display.innerText="0";

return;

}

if(value==="C"){

expression=expression.slice(0,-1);

display.innerText=expression||"0";

return;

}

if(value==="="){

try{

expression=eval(expression).toString();

display.innerText=expression;

}catch{

display.innerText="Error";

expression="";

}

return;

}

expression+=value;

display.innerText=expression;

});

});
