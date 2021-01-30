function setTheme(themeName)
{
    localStorage.setItem('theme', themeName);

    document.documentElement.className = themeName
}

function toggleTheme() 
{
    if (localStorage.getItem('theme') === 'access_theme') {
        setTheme('light_theme');
    } else {
        if (localStorage.getItem('theme') === 'light_theme')
        {
            setTheme('dark_theme');
        } else {
            setTheme('access_theme');
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


let changeThemeButton = document.getElementById("changeTheme")
changeThemeButton.addEventListener("click", toggleTheme)