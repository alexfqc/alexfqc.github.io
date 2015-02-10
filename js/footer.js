window.onload = function(){
    
    var footer = document.getElementById('footer');
    var footerArrow = document.getElementById('footer-arrow');
    var footerArrow_size = footerArrow.clientHeight;
    var footerC = document.getElementById('footer-container');
    var footer_size = footer.clientHeight;
    var footerC_size = footerC.clientHeight + 5;
    var faceLogo = document.getElementById('facebook-logo');
    var twitterLogo = document.getElementById('twitter-logo');
    var linkedinLogo = document.getElementById('linkedin-logo');
    var open = false;
    var window_height = window.innerHeight; 
    var expanded_size = footerC_size + footerArrow_size;

    footer.onclick = function(){
        if(window.innerWidth < 768){
            if(open === false){
                                                       
                if(window.innerHeight < 550 && window.innerWidth >= 360 && window.innerWidth <= 480){
                    faceLogo.style.backgroundPositionX = '-80px';
                    twitterLogo.style.backgroundPositionY = '-80px';
                    linkedinLogo.style.backgroundPositionX = '80px';
                    faceLogo.style.opacity = '0';
                    twitterLogo.style.opacity = '0';
                    linkedinLogo.style.opacity = '0';
                }
                openMenu();  
            }
            else {
                
                
                if(window.innerHeight < 550 && window.innerWidth >= 360 && window.innerWidth <= 480){
                    faceLogo.style.backgroundPositionX = '0px';
                    twitterLogo.style.backgroundPositionY = '0px';
                    linkedinLogo.style.backgroundPositionX = '0px';
                    faceLogo.style.opacity = '1';
                    twitterLogo.style.opacity = '1';
                    linkedinLogo.style.opacity = '1';
                }
                closeMenu();
                
            }
        }
        
    }
    
    window.onresize = function(){
        
        if(window.innerWidth >= 768){
            footer.style.height = 'auto';    
        }
        
        else{
            closeMenu();
        }        
        
    }
    
    function openMenu(){
        footer.style.height = '171px';
        footerArrow.classList.remove('arrow-up');                                                
        footerArrow.classList.add('arrow-down');   
        open = true;

    }

    function closeMenu(){
        footerArrow.classList.remove('arrow-down');                                                
        footerArrow.classList.add('arrow-up'); 
        footer.style.height = '36px'; 
        open = false;
    }
    
};
