
import { StyledHeader, StyledHeaderContainer } from './styled';
import Logo from '../../ui/logo/logo';
import logoImage from '../../../assets/images/logo.svg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <StyledHeader>
      <StyledHeaderContainer>
        <Link to="/">
          <Logo srcImage={logoImage} alt="Логотип компании" />
        </Link>
      </StyledHeaderContainer>
    </StyledHeader>
  );
}

export default Header;
