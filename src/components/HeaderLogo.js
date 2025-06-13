import React from 'react';
import styled from '@emotion/styled';
import logo from 'assets/logo.png';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import { Box } from '@mui/material';
import { Image } from '@mui/icons-material';

const HeaderContainer = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 16px 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;

  @media (max-width: 600px) {
    padding: 16px;
  }
`;

const LogoImage = styled.img`
  height: 50px;
  width: auto;
  object-fit: contain;
`;

const LogoText = styled.span`
  font-family: 'Quicksand', sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: #fff;
  margin-left: 12px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;

  a {
    margin-left: 16px;
    color: #fff;
    transition: color 0.3s ease, transform 0.2s ease;

    svg {
      font-size: 28px;
    }

    &:hover svg {
      transform: scale(1.2);
    }

    &.phone:hover {
      color: #1e90ff;
    }

    &.whatsapp:hover {
      color: #25D366;
    }

    &.instagram:hover {
      color: #E1306C;
    }
  }
`;

const HeaderLogo = () => {
  return (
    <HeaderContainer>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <LogoImage sx={{ height: '50px', width: 'auto', objectFit: 'contain' }} src={logo} alt="Sahil Holidays Logo" />
        
      </Box>
      <SocialIcons>
        <a href="tel:+919840491037" className="phone">
          <PhoneIcon />
        </a>
        <a href="https://wa.me/917200492107" target="_blank" rel="noopener noreferrer" className="whatsapp">
          <WhatsAppIcon />
        </a>
        <a href="https://instagram.com/sahilholidays" target="_blank" rel="noopener noreferrer" className="instagram">
          <InstagramIcon />
        </a>
      </SocialIcons>
    </HeaderContainer>
  );
};

export default HeaderLogo;
