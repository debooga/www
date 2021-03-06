const changeThemeButton = document.getElementById("changeTheme")
const changeIcon = document.getElementById("changeIcon")
const zoomChangeIcon = document.getElementById("zoomIcon")

localStorage.setItem('theme', 'dark_theme')

function setTheme(themeName)
{
    localStorage.setItem('theme', themeName);

    document.documentElement.className = themeName
}

function toggleTheme() {
    if (localStorage.getItem('theme') === 'dark_theme') {
        setTheme('light_theme');
        changeIcon.className = 'icons2'
        zoomChangeIcon.className = 'icons2'
        changeIcon.innerHTML = "accessible"
    } else {
        if (localStorage.getItem('theme') === 'light_theme')
        {
            setTheme('access_theme');
            changeIcon.className = 'icons2'
            zoomChangeIcon.className = 'icons2'
            changeIcon.innerHTML = "brightness_4"
        } else {
            setTheme('dark_theme');
            changeIcon.className = 'icons2'
            zoomChangeIcon.className = 'icons2'
            changeIcon.innerHTML = "brightness_5"
        }
    }
}

changeThemeButton.addEventListener("click", toggleTheme)
