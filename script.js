function show_toggle_menu(){
  const buttonNavBar = document.getElementById('button-navbar-toggler');
  const navBarContent = document.getElementById('navbarContent');
  if (buttonNavBar.classList.contains('collapsed')) {
    buttonNavBar.classList.remove('collapsed')
    navBarContent.classList.add('show')
  } else {
    buttonNavBar.classList.add('collapsed')
    navBarContent.classList.remove('show')
  }
}

function submitForm() {
  alert('Inscrição realizada com sucesso')

  window.location.replace('index.html')
}
