import './hero.scss'

export default function Hero() {
    return(
        <section className='hero'>
            <picture>
                <source srcSet='/src/images/hero-image-simple-homepage.png' media='(min-width:768px)'/>
                <img className='hero__image' src="/src/images/hero-image-simple-homepage@2x.png" alt="" />
            </picture>
        </section>
    )
}