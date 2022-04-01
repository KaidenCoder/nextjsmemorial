import { COPYRIGHT, YEAR } from '../../constants/symbols';
import { FooterWrapper } from './styled';

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="text-center p-3">
        {COPYRIGHT} Copyright {YEAR}, Beloved members of Dr Ishak Ahmed
      </div>
    </FooterWrapper>
  );
};

export default Footer;
