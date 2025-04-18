import React from "react";
import { Box, Typography, Container, Link } from "@mui/material";
import styles from "./Footer.module.css";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <Box component="footer" className={styles.footer}>
      <Container className={styles.footerContainer}>
        {/* Company Info */}
        <Box className={styles.footerSection}>
          <Typography variant="h6">CyberCorp</Typography>
          <Typography variant="body2">
            Leading the future with cyberpunk-inspired technology solutions.
          </Typography>
        </Box>

        {/* Quick Links */}
        <Box className={styles.footerSection}>
          <Typography variant="h6">Quick Links</Typography>
          <Box className={styles.footerLinks}>
            <Link href="#" className={styles.link}>Home</Link>
            <Link href="#" className={styles.link}>Services</Link>
            <Link href="#" className={styles.link}>About Us</Link>
            <Link href="#" className={styles.link}>Contact</Link>
          </Box>
        </Box>

        {/* Social Media Links */}
        <Box className={styles.footerSection}>
          <Typography variant="h6">Follow Us</Typography>
          <Box className={styles.socialIcons}>
            <Link href="#" className={styles.icon}><FaFacebook /></Link>
            <Link href="#" className={styles.icon}><FaTwitter /></Link>
            <Link href="#" className={styles.icon}><FaLinkedin /></Link>
            <Link href="#" className={styles.icon}><FaInstagram /></Link>
          </Box>
        </Box>
      </Container>
      <Typography variant="body2" className={styles.copyright}>
        &copy; {new Date().getFullYear()} CyberCorp. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;