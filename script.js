let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click',function(e){
 document.querySelector('body').classList.toggle('mobile-nav-active');
 this.classList.toggle('fa-xmark')
})

// typing effect

let typed = new Typed('.auto-type',{
    strings:['Front End Developer','Freelancer','Ui Designer','Youtuber'],
    typespeed:100,
    backspeed:100,
    backdelay:2000,
    loop:true,

}



)