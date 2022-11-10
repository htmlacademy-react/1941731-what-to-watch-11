import HeaderLogo from '../header-logo/header-logo';
import React, {ReactNode} from 'react';
type HeaderPropsType = {
  additionalClass?: string;
  children?:ReactNode;
}
function Header(props: HeaderPropsType) {

  return(
    <header className={`page-header ${props.additionalClass || ''}`}>
      <HeaderLogo/>
      {props.children}
    </header>
  );
}
export default Header;
