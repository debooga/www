let changeThemeButton = document.getElementById("changeTheme")
let changeIcon = document.getElementById("changeIcon")
let zoomChangeIcon = document.getElementById("zoomIcon")

localStorage.setItem('theme', 'dark_theme')

function setTheme(themeName)
{
    localStorage.setItem('theme', themeName);

    document.documentElement.className = themeName
}

function toggleTheme() 
{
    if (localStorage.getItem('theme') === 'dark_theme') {
        setTheme('light_theme');
        changeIcon.className = 'iconslight'
        changeIcon.innerHTML = 'brightness_5'
        zoomChangeIcon.className = 'iconslight'
    } else {
        if (localStorage.getItem('theme') === 'light_theme')
        {
            setTheme('access_theme');
            changeIcon.className = 'iconsaccess'
            changeIcon.innerHTML = 'accessible'
            zoomChangeIcon.className = 'iconsaccess'
        } else {
            setTheme('dark_theme');
            changeIcon.className = 'iconsdark'
            changeIcon.innerHTML = 'brightness_4'
            zoomChangeIcon.className = 'iconsdark'
        }
    }
}

(function () {
    if (localStorage.getItem('theme') === 'access_theme') {
        setTheme('dark_theme');
        zoomChangeIcon.className = 'iconsdark'
    } else {
        if (localStorage.getItem('theme') === 'light_theme')
        {
            setTheme('light_theme');
            zoomChangeIcon.className = 'iconslight'
        } else {
            setTheme('access_theme');
            zoomChangeIcon.className = 'iconsaccess'
        }
    }
})

changeThemeButton.addEventListener("click", toggleTheme)