import React from "react";

interface FooterInfo {
    className?: string;
}

const Footer: React.FC<FooterInfo> = ({className='', ...args}) => {
    return (
        <footer className={`${className} footer`}>
            <div className="footer__logo-container">
                <div className="logo">
                    <a className="logo__link" href="#">
                        <img className="logo__img" src="./images/logo.svg" alt="Логотип" width="217"
                            height="56.38" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;