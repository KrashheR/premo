import {
  StyledFooter,
  StyledFooterContainer,
  StyledFooterTitle,
  StyledFooterAbout,
  StyledFooterAdress,
  StyledFooterPhone,
  StyledFooterPhoneTime,
} from './styled';
import Logo from '../../ui/logo/logo';
import logoImage from '../../../assets/images/logo.svg';
import { Link } from 'react-router-dom';

function Footer() {

  return (
    <StyledFooter>
      <StyledFooterContainer>
        <Link to="/">
          <Logo srcImage={logoImage} alt="Логотип компании" />
        </Link>
        <StyledFooterAbout>
          <StyledFooterTitle>О компании</StyledFooterTitle>
          <StyledFooterAdress>
            105064, г. Москва, ул. Покровка, 50/2
          </StyledFooterAdress>
          <StyledFooterPhone href={'tel:+7123456789'}>
            +7123456789
          </StyledFooterPhone>
          <StyledFooterPhoneTime>
            Ежедневно с 8:00 до 22:00
          </StyledFooterPhoneTime>
        </StyledFooterAbout>
      </StyledFooterContainer>
    </StyledFooter>
  );
}

export default Footer;
