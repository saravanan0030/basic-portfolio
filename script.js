/*---------------------------  toggle icon navbar -------------------*/
let menuIcon =document.querySelector('#menu-icon');
 let navbar= document.querySelector('.navbar');

 menuIcon.onclick =()  =>{
    menuIcon.classList.toggle('fa-xmark')
    navbar.classList.toggle('active')


 }
 /*---------------------------  scroll selection active link-------------------*/
 let selection = document.querySelectorAll('section');
let navlink = document.querySelectorAll('header nav a');

window.onscroll =() => {
    Selection.foreach(sec => {
        let top = window.scrollY;
        let offset = sec. offsettop-150;
        let height = sec. offsetheight;
        let id = sec.getattribute('id');
        

        if(top >= offset && top <offset + height ){
            navlink.forEach.apply(link =>{
                link.classList.remove('active');
                document.querySelector('header nav a[href"-' + id + ']') .claslist.add('action');


            });
        };


    });
    
         /*---------------------------   sticky navbar-------------------*/
         let header= document.querySelector('header');
         header.classList.toggle('sticky',window.scrollY > 100);




           /*---------------------------remove toggle icon and navbar-------------------*/
        menuIcon.classList.remove('fa-xmark');
        navbar.classList.remove('active');


    
};

 /*---------------------------   sticky navbar-----------------------*/
 