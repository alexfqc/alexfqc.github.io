window.onload = function() {

  var footer = document.getElementById('footer');
  var containerPage = document.getElementById('container-page');
  var footerArrow = document.getElementById('footer-arrow');
  var footerArrow_size = footerArrow.clientHeight;
  var footerC = document.getElementById('footer-container');
  var footer_size = footer.clientHeight;
  var footerC_size = footerC.clientHeight + 5;
  var githubLogo = document.getElementById('github-logo');
  var stackLogo = document.getElementById('stack-logo');
  var linkedinLogo = document.getElementById('linkedin-logo');
  var open = false;
  var window_height = window.innerHeight;

  footer.onclick = function() {
    if (window.innerWidth < 768) {
      if (open === false) {

        if ( /*window.innerHeight < 550 &&*/ window.innerWidth >= 320 && window.innerWidth <= 767) {
          githubLogo.style.transform = 'translateX(-90px)';
          stackLogo.style.transform = 'translateY(-90px)';
          linkedinLogo.style.transform = 'translateX(90px)';
          githubLogo.style.opacity = '0';
          stackLogo.style.opacity = '0';
          linkedinLogo.style.opacity = '0';
        }
        openMenu();
      } else {


        if ( /*window.innerHeight < 550 &&*/ window.innerWidth >= 320 && window.innerWidth <= 767) {
          githubLogo.style.transform = 'translateX(0px)';
          stackLogo.style.transform = 'translateY(0px)';
          linkedinLogo.style.transform = 'translateX(0px)';
          githubLogo.style.opacity = '1';
          stackLogo.style.opacity = '1';
          linkedinLogo.style.opacity = '1';
        }
        closeMenu();

      }
    }

  }

  window.onresize = function() {

    if (window.innerWidth >= 768) {
      footer.style.height = 'auto';
    } else {
      closeMenu();
    }

  }

  function openMenu() {
    if (window.innerWidth == 320) {
      footer.style.height = '180px';
    }
    else{
      footer.style.height = '200px';
    }

    footerArrow.classList.remove('arrow-up');
    footerArrow.classList.add('arrow-down');
    open = true;

  }

  function closeMenu() {
    footerArrow.classList.remove('arrow-down');
    footerArrow.classList.add('arrow-up');
    footer.style.height = '36px';
    open = false;
  }

};
