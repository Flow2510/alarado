import './about.scss'

export default function About() {
    return(
        <section className='about'>
            <p className='about__subtitle'><img src="/src/images/" alt="" />😎 SIMPLE WAY TO COMMUNICATE</p>
            <h1 className='about__title'>Actions for Accessibility in Design</h1>
            <p className='about__text'>The fastest way to build and deploy websites with resusable components.</p>
            <div className='about__buttons'>
                <button className='about__buttons-button about__buttons-button--primary'>GET STARTED</button>
                <button className='about__buttons-button about__buttons-button--secondary'>Get live demo</button>
            </div>
            <div className='about__info'>
                <p className='about__info-text'><img src="/src/images/Done_ring_round_fill.svg" alt="" />No credit card required</p>
                <p className='about__info-text'><img src="/src/images/Done_ring_round_fill.svg" alt="" />No software to install</p>
            </div>
        </section>
    )
}