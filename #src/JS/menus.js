const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
                isMobile.Android()
                || isMobile.BlackBerry()
                || isMobile.iOS()
                || isMobile.Opera()
                || isMobile.Windows()
                );
    }
};



if(isMobile.any()){
    document.body.classList.add('_mobile');     
    const headerMenu = document.querySelector('.header__list');
    const header_subLinks = document.querySelectorAll('.header__link.sub');
    if(header_subLinks.length>0){
        for (const link of header_subLinks) {
            link.addEventListener('click',function (e) {
                    e.preventDefault();
                   /*const activeMenu = headerMenu.querySelector('.active');
                    if(activeMenu){
                     _slideUp(activeMenu.querySelector('ul'),500);
                     activeMenu.classList.remove('active');
                      
                       if(link.parentElement == activeMenu) return false;

                     
                    }
                        link.parentElement.classList.toggle('active');
                        _slideToggle(link.parentElement.querySelector('ul'),500);
                    */
                   const activeMenu = headerMenu.querySelector('.active');
                   if(activeMenu){
                      activeMenu.classList.remove('active');
                       if(activeMenu === link.parentElement) return false;
                   }


                    link.parentElement.classList.toggle('active');
            });

        }
    }
}else{
   document.body.classList.add('_pc');
}



window.onload = function (){
    document.documentElement.addEventListener('click',function (e) {

        const headerMenu = document.querySelector('.header__list');
        if(!e.target.closest('.header__list>li')){
            const activeMenu = headerMenu.querySelector('.active');
            if(activeMenu){
               activeMenu.classList.remove('active');
            }
        }
       
    
    
    });
    
    const headerBurger = document.querySelector('.header__burger');
    headerBurger.addEventListener('click',function (e) {
        this.classList.toggle('active');
        document.querySelector('.header__menu').classList.toggle('active');
        document.body.classList.toggle('locked');
    })
    
    
    const parralax = document.querySelector('.parallax');
    if(parralax){
        if(document.documentElement.clientWidth > 1200){
            const parrallax_item1 = document.querySelector('.parallax__item.left');
            const parrallax_item2 = document.querySelector('.parallax__item.bottom');
            const parrallax_item3 = document.querySelector('.parallax__item.center');
        
        
        
        
        parralax.addEventListener('mousemove', function(e) {
            let x = e.clientX / document.documentElement.clientWidth;
            let y = e.clientY / document.documentElement.clientHeight;  
            parrallax_item1.style.transform = 'translate(-' + x * 150 + 'px, -' + y * 150 + 'px)';
            parrallax_item2.style.transform = 'translate(+' + x * 150 + 'px, -' + y * 150 + 'px)';
            parrallax_item3.style.transform = 'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)';
        });
        }
       
    
    }
    
    const parralax2 = document.querySelector('.parralax-block');
    if(parralax2){
        if(document.documentElement.clientWidth > 800) {
            const parrallax_item1 = document.querySelector('.parralax-block__item.key');
            const parrallax_item2 = document.querySelector('.parralax-block__item.hand');
            const parrallax_item3 = document.querySelector('.parralax-block__item.smallred');
            const parrallax_item4 = document.querySelector('.parralax-block__item.rupor');
            const parrallax_item5 = document.querySelector('.parralax-block__item.blueball.frstball');
            const parrallax_item6 = document.querySelector('.parralax-block__item.blueball.scndball');
        
        
        
        
        parralax2.addEventListener('mousemove', function(e) {
            let x = e.clientX / document.documentElement.clientWidth;
            let y = e.clientY / document.documentElement.clientHeight;  
            parrallax_item1.style.transform = 'translate(-' + x *70 + 'px, -' + y * 70 + 'px)';
            parrallax_item2.style.transform = 'translate(+' + x * 70 + 'px, -' + y * 70 + 'px)';
            parrallax_item3.style.transform = 'translate(-' + x * 70 + 'px, -' + y * 70 + 'px)';
            parrallax_item4.style.transform = 'translate(-' + x * 70 + 'px, -' + y * 70 + 'px)';
            parrallax_item5.style.transform = 'translate(+' + x * 70 + 'px, -' + y * 70 + 'px)';
            parrallax_item6.style.transform = 'translate(-' + x *70 + 'px, -' + y * 70 + 'px)';
        });
        }
    
       
     
    }



    const footerSpoiler = document.querySelectorAll('.footer__title > span');
    if(footerSpoiler.length > 0 &&  document.documentElement.clientWidth <= 450){
        for (const spoiler of footerSpoiler) {
            spoiler.addEventListener('click',function(event){
               
                _slideToggle(spoiler.parentElement.nextElementSibling,500);
               spoiler.classList.toggle('active');
            });
    
        }
    }
    
}

