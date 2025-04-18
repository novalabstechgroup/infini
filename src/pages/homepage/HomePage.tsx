import React, { useState, useEffect } from "react";
import { Box, Typography, Stack, Container } from "@mui/material";
import styles from "./HomePage.module.css";
import SearchBar from "../../components/search/SearchBar";
import PropertiesSection from './sections/properties/PropertiesSection';

const HomePage: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const backgroundImages = [
    '/images/room1.jpg',  // Make sure these images exist in your public folder
    '/images/room2.jpg',
    '/images/room3.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
      console.log('Changing image:', currentImageIndex);
    }, 3000); // Changes every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Section 1: Landing Page */}
      <Box 
        className={styles.landingSection}
        style={{
          backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
        }}
      >
        <SearchBar />
      </Box>

      {/* Section 2: Properties Section */}
      <PropertiesSection />

      {/* Section 3: Large Rectangular Info Sections */}
       {/* Section 2: Small Banner with 3 Info Boxes */}
       <Box className={styles.bannerSection}>
        <Container className={styles.bannerGrid}>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={3} width="100%" justifyContent="center">
            <Box className={styles.bannerItem}>
              <Typography variant="h5">Feature 1</Typography>
              <Typography variant="body1">Description of Feature 1</Typography>
            </Box>
            <Box className={styles.bannerItem}>
              <Typography variant="h5">Feature 2</Typography>
              <Typography variant="body1">Description of Feature 2</Typography>
            </Box>
            <Box className={styles.bannerItem}>
              <Typography variant="h5">Feature 3</Typography>
              <Typography variant="body1">Description of Feature 3</Typography>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Section 3: Large Rectangular Info Sections */}
      <Box className={styles.infoSection}>
        <Container>
          <Stack direction={{ xs: "column", md: "row" }} spacing={3} className={styles.infoContainer}>
            <Box className={styles.infoBox}>
              <Typography variant="h4">Service 1</Typography>
              <Typography variant="body1">Detailed information about Service 1.</Typography>
            </Box>
            <Box className={styles.infoBox}>
              <Typography variant="h4">Service 2</Typography>
              <Typography variant="body1">Detailed information about Service 2.</Typography>
            </Box>
            <Box className={styles.infoBox}>
              <Typography variant="h4">Service 3</Typography>
              <Typography variant="body1">Detailed information about Service 3.</Typography>
            </Box>
          </Stack>
        </Container>
      </Box>
      </div>
    );
  };
  
  export default HomePage;