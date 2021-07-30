import footerStyles from '../styles/Footer.module.css';

const Footer = () => {
    return (
        <div className={footerStyles.container}>
            <h2 className={footerStyles.title}>The Orpheus Show</h2>
            <ul className={footerStyles.social}>
                <li>
                    <a href="https://github.com/Orpheuspod" target="_blank">
                        <img src="/github.svg" className={footerStyles.socialItem} />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Footer