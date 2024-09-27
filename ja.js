let btns=document.querySelectorAll(".btn");
let resetbtn=document.querySelector("#reset");
let wins=document.querySelector("#win");
let turn0=true;
const winpattern=
[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],
]

btns.forEach((btn)=>
{
btn.addEventListener("click" ,()=>
{
if(turn0)
{
    btn.innerHTML="0";
    turn0=false;
}
else
{
    btn.innerHTML="X";
    turn0=true;
}
btn.disabled=true;
checkwinpattern();
})
}
)
const checkwinpattern=()=>
{
    for(let pattern of winpattern)
    {
        console.log(pattern[0],pattern[1],pattern[2]);
        console.log(btns[pattern[0]].innerText,btns[pattern[1]].innerText,btns[pattern[2]].innerText);
        let a=btns[pattern[0]].innerText;
        let b=btns[pattern[1]].innerText;
        let c=btns[pattern[2]].innerText;
        if(a!=1, b!=1, c!=1)
        {
            if(a==b&b==c)
                {
                    let f="congrate winner is ";
                    wins.innerHTML=f+a;
                    
                    
                           for(let btn of btns)
                            {
                                btn.disabled=true;
                                    
                            }
                    
                   
        
                }
        }
      
    
    }
   
}



const gameanable=()=>
{
    for(let btn of btns)
    {
        btn.disabled=false;
        innertext="";
    }
}

resetbtn.addEventListener("click",()=>

{
    for(let btn of btns)
        {
            btn.disabled=false;
           btn.innerHTML=1;
           wins.innerHTML="winner";
        }

}
      
)