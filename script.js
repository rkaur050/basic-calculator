let input=document.getElementById('display');
let buttons=document.querySelectorAll('.btn');
let string="";
Array.from(buttons).forEach(button=>{
    button.addEventListener('click',(event)=>{
       if(event.target.innerHTML=='=')
       {
          string=eval(string);
          input.innerHTML=string;
       }
       else if(event.target.innerHTML=='C')
       {
          string='';
          input.innerHTML=string;
       }
       else
        {
          string+=event.target.innerHTML;
          input.innerHTML=string;
        }
    })
})