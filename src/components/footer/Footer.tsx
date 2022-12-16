import { footerLinks, socialIcons} from './FooterData'
import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Kevin Bravo</h1>
                <ul className="footer__list">
                    {footerLinks.map(({ link, name, index}) => {
                        return (
                            <li key={index}>
                                <a href={link} className="footer__link" >{name}</a>
                            </li>
                        )
                    })}
                </ul>
                <div className="footer__socials">
                    {
                        socialIcons.map(({ icon, link, index}) => {
                            return (
                                <a href={link} className="footer__social-link" target="_blank" key={index}>
                                    <i className={icon}></i>
                                </a>
                            )
                        })
                    }
                </div>
                <span className="footer__copy">Kevin Bravo. 2022 &#169; All rigths reserved</span>
            </div>
        </footer>
    )
}

export default Footer