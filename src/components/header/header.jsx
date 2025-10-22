import { useState } from 'react'
import './header.scss'
import ThemeSwitch from '../themeswitch/themeswitch'

export default function Header({darkTheme, setDarkTheme}) {
    const [showMenu, setShowMenu] = useState(false)
    let iconSource;

    if (showMenu) {
        if (darkTheme) {
            iconSource = "/src/images/close-button2.svg";
        } else {
            iconSource = "/src/images/close-button.svg";
        }
        } else {
            if (darkTheme) {
                iconSource = "/src/images/hamburger-button2.svg";
            } else {
                iconSource = "/src/images/hamburger-button.svg";
            }
    }

    return(
        <header className='header'>
            <img className='header__logo' src={`${darkTheme ? '/src/images/logo-dark.svg' : '/src/images/logo-light.svg'}`} alt="" />
            <nav className={`header__nav${showMenu ? "--active" : ""}`}>
                <a className='header__nav-link--selected' href="/">About us</a>
                <a className='header__nav-link' href="/">Product</a>
                <a className='header__nav-link' href="/">Resource</a>
                <a className='header__nav-link' href="/">Contact</a>
                <div className='header__nav-theme'>
                    <ThemeSwitch 
                        darkTheme={darkTheme}
                        setDarkTheme={setDarkTheme}
                        theme="theme"
                    />
                </div>
            </nav>
            <div className='header__theme-wrapper'>
                <ThemeSwitch
                    darkTheme={darkTheme}
                    setDarkTheme={setDarkTheme}
                    theme="theme"
                />
            </div>
            <button className='header__button' onClick={() => setShowMenu(prev => !prev)}>
                <img className='header__button-icon' src={iconSource} alt="" />
            </button> 
        </header>
    )
}