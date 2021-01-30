let changeThemeButton = document.getElementById("changeTheme")
let changeIcon = document.getElementById("changeIcon")

function setTheme(themeName)
{
    localStorage.setItem('theme', themeName);

    document.documentElement.className = themeName
}

function toggleTheme() 
{
    if (localStorage.getItem('theme') === 'access_theme') {
        setTheme('light_theme');
        changeIcon.className = 'iconslight'
    } else {
        if (localStorage.getItem('theme') === 'light_theme')
        {
            setTheme('dark_theme');
            changeIcon.className = 'iconsdark'
        } else {
            setTheme('access_theme');
            changeIcon.className = 'iconsaccess'
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