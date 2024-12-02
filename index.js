function showSidebar(){
    const sidebar  = document.querySelector('.block')
    sidebar.style.display ='flex';
     const menuBttnHide =document.getElementById('menuButton');
     menuBttnHide.style.display ='none';
      const buttonMove = document.getElementById('btn3');
     buttonMove.style.marginRight ='-1rem';
     buttonMove.style.opacity ='0.5';
     
  
};

function closeSidebar(){
    const sidebar = document.querySelector('.block')
    sidebar.style.display ='none';
     const buttonMove = document.getElementById('btn3');
     buttonMove.style.marginRight ='16rem';
    const menuBttnHide =document.getElementById('menuButton');
    menuBttnHide.style.display ='flex';


};