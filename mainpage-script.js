let p=document.querySelector(":root");
let nav=document.querySelector("header");

let logo = document.querySelector(".logo");

let wdt=document.documentElement.clientWidth;
let hgt=window.innerHeight;

window.addEventListener('scroll', ()=> 
    {
        if (window.scrollY>hgt-70)
        {
            nav.style.background="rgba(0,0,0,0.1)";
            logo.style.transition="all 0.1s ease";
        }
        else
        {
            nav.style.background="";
            logo.style.transition="all 0.4s ease";
        }

        if (window.scrollY>50)
        {
            logo.classList.add("calm");
        }
        else
        {
            logo.classList.remove("calm");  
        }
    }
);

