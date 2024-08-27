import React from "react";

interface HeaderInfo {
    className?: string;
}

const Header: React.FC<HeaderInfo> = ({className='', ...args}) => {
    return (
        <header className={`${className} header`}>
            <div className="header__logo-container">
                <div className="logo">
                    <a className="logo__link" href="#">
                        <img className="logo__img" src="./images/logo.svg" alt="Логотип" width="217"
                            height="56.38" />
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;