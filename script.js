const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  speed: 1300,
  centeredSlides: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: { 
  	delay: 5000,
  },
});

function ValidPhone() {
  let re = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
  let myPhone = document.getElementById("Number").value;
  let valid = re.test(myPhone);
  if (valid) output = 'Номер телефона введен правильно!';
  else output = 'Номер телефона введен неправильно!';
  alert(output)
}
function dropMenu() {
    document.getElementById("dropDownNav").classList.toggle("show");
    if (document.getElementById("openNav").innerHTML == '×'){
      document.getElementById("openNav").innerHTML = '☰';
    }
    else {
      document.getElementById("openNav").innerHTML = '×';
    }
}

window.onclick = function(event) {
  if (!event.target.matches('.open_nav')) {
    
    let dropdowns = document.getElementsByClassName("olNav");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
        
      }
    }
}}