let changeThemeButton = document.getElementById("changeTheme")
let changeIcon = document.getElementById("changeIcon")
let zoomChangeIcon = document.getElementById("zoomIcon")

localStorage.setItem('theme', 'dark_theme')

function setTheme(themeName)
{
    localStorage.setItem('theme', themeName);

    document.documentElement.className = themeName
}

function toggleTheme() {
    if (localStorage.getItem('theme') === 'dark_theme') {
        setTheme('light_theme');
        changeIcon.className = 'iconslight'
        zoomChangeIcon.className = 'iconslight'
        changeIcon.innerHTML = "accessible"
    } else {
        if (localStorage.getItem('theme') === 'light_theme')
        {
            setTheme('access_theme');
            changeIcon.className = 'iconsaccess'
            zoomChangeIcon.className = 'iconsaccess'
            changeIcon.innerHTML = "brightness_4"
        } else {
            setTheme('dark_theme');
            changeIcon.className = 'iconsdark'
            zoomChangeIcon.className = 'iconsdark'
            changeIcon.innerHTML = "brightness_5"
        }
    }
}

changeThemeButton.addEventListener("click", toggleTheme)
