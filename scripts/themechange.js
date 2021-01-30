let changeThemeButton = document.getElementById("changeTheme")
let changeIcon = document.getElementById("changeIcon")
let zoomChangeIcon = document.getElementById("zoomIcon")

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
        zoomChangeIcon.className = 'iconslight'
    } else {
        if (localStorage.getItem('theme') === 'light_theme')
        {
            setTheme('access_theme');
            changeIcon.className = 'iconsaccess'
            zoomChangeIcon.className = 'iconsaccess'
        } else {
            setTheme('dark_theme');
            changeIcon.className = 'iconsdark'
            zoomChangeIcon.className = 'iconsdark'
        }
    }
}

(function () {
    if (localStorage.getItem('theme') === 'access_theme') {
        setTheme('dark_theme');
    } else {
        if (localStorage.getItem('theme') === 'light_theme')
        {
            setTheme('light_theme');
        } else {
            setTheme('access_theme');
        }
    }
})

changeThemeButton.addEventListener("click", toggleTheme)