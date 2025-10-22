import './themeswitch.scss'

export default function ThemeSwitch({darkTheme, setDarkTheme}){
    return(
        <button className='theme' onClick={() => setDarkTheme(prev => !prev)}>
            <div className={`theme__background${darkTheme ? "--selected" : ""}`}></div>
                <img className={`theme__icon${darkTheme ? "--selected" : ""}`} src={darkTheme ? "/src/images/Moon_fill.svg" : "/src/images/Moon_fill_light.svg"} alt="" />
                <img className={`theme__icon${darkTheme ? "" : "--selected"}`} src={darkTheme ? "/src/images/Sun_fill_light.svg" : "/src/images/Sun_fill.svg"} alt="" />
        </button>
    )
}