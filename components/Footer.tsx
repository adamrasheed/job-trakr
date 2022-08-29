import styled from "styled-components";
import { siteInfo } from "../utils/constants";

const currentYear = new Date().getFullYear();

const StyledFooter = styled.footer`
  text-align: color;
  font-size: 0.875rem;
  font-variant-caps: all-small-caps;
  letter-spacing: 0.05em;

  p {
    text-align: center;
  }
`;
const Footer = () => {
  return (
    <StyledFooter>
      <p>
        ©{currentYear} {siteInfo.title}
      </p>
    </StyledFooter>
  );
};

export default Footer;
