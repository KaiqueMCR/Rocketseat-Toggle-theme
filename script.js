let switchButton = document.getElementById('switch')

function changeTheme() {
  let isDark = document.body.classList.contains('dark')

  if (!isDark) {
    localStorage.setItem('theme', 'dark')
  } else {
    localStorage.setItem('theme', 'light')
  }

  refreshTheme()
}

function refreshTheme() {
  let theme = localStorage.getItem('theme')

  if (theme === 'light') {
    switchButton.setAttribute('checked', 'true')
    document.body.classList.remove('dark')
    document.body.classList.add('light')
  } else {
    document.body.classList.remove('light')
    document.body.classList.add('dark')
  }
}
