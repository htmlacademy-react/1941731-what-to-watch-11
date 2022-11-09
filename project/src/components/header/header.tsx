import HeaderLogo from '../header-logo/header-logo';
import React, {ReactNode} from 'react';
type HeaderPropsType = {
  additionalClass?: string;
  children?:ReactNode;
}
function Header(props: HeaderPropsType) {
  let additionalClass = '';
  props.additionalClass ? additionalClass = props.additionalClass : additionalClass = '';
  return(
    <header className={`page-header ${additionalClass}`}>
      <HeaderLogo/>
      {props.children}
    </header>
  );
}
export default Header;
