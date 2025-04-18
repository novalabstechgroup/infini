import React, { useState, useRef, useEffect } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { Location, locationData } from './locations';
import styles from './PropertiesSection.module.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

// Remove unused getCurrentSlides function
const PropertiesSection: React.FC = () => {
  const [activeLocation, setActiveLocation] = useState<string>(locationData[0].id);
  const [currentPair, setCurrentPair] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Remove incorrect comment since getCurrentSlides is used
  const activeLocationData = locationData.find((loc: Location) => loc.id === activeLocation);
  const itemsPerView = isMobile ? 1 : 2;
  const totalPairs = Math.ceil((activeLocationData?.images?.length || 0) / itemsPerView);

  // Simplify navigation handlers
  const handleNextSlide = () => setCurrentPair((prev) => (prev + 1) % totalPairs);
  const handlePrevSlide = () => setCurrentPair((prev) => prev === 0 ? totalPairs - 1 : prev - 1);

  const handleLocationClick = (locationId: string) => {
    setActiveLocation(locationId);
    setCurrentPair(0);
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  };
<Box className={styles.slider} ref={sliderRef}>
  <Box 
    className={styles.sliderTrack}
    style={{
      transform: `translateX(-${currentPair * 100}%)`,
      display: 'grid',
      gridTemplateColumns: `repeat(${activeLocationData?.images?.length || 0}, ${isMobile ? '100%' : '50%'})`,
      gap: '20px'
    }}
  >
    {activeLocationData?.images?.map((image) => (
      <Box
        key={image.id}
        className={styles.slide}
        style={{ backgroundImage: `url(${image.imageUrl})` }}
      >
        <Box className={styles.propertyInfo}>
          <Typography variant="h6">{image.propertyName}</Typography>
          <Typography variant="body2">{image.description}</Typography>
        </Box>
      </Box>
    ))}
  </Box>
</Box>
  const getCurrentSlides = () => {
    if (!activeLocationData?.images?.length) return [];
    const startIndex = currentPair * itemsPerView;
    return activeLocationData.images.slice(startIndex, startIndex + itemsPerView);
  };

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      const newTotalPairs = Math.ceil((activeLocationData?.images?.length || 0) / (mobile ? 1 : 2));
      if (currentPair >= newTotalPairs) {
        setCurrentPair(0);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeLocationData, currentPair]);

  useEffect(() => {
    // Initialize autoplay on component mount
    autoPlayRef.current = setInterval(() => {
      setCurrentPair(prev => (prev + 1) % totalPairs);
    }, 3000);
    
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [totalPairs]);

  return (
    <Box className={styles.propertiesSection}>
      <Container maxWidth="lg">
        <Typography variant="h2" className={styles.sectionTitle}>
          OUR PROPERTIES
        </Typography>
        <Typography variant="subtitle1" className={styles.sectionSubtitle}>
          Discover properties in various Malaysian states. Your dream home awaits!
        </Typography>

        <Box className={styles.locationButtons}>
          {locationData.map((location) => (
            <Button
              key={location.id}
              onClick={() => handleLocationClick(location.id)}
              className={`${styles.locationButton} ${
                activeLocation === location.id ? styles.active : ''
              }`}
              startIcon={<LocationOnIcon className={styles.locationIcon} />}
            >
              {location.name}
            </Button>
          ))}
        </Box>

        <Box 
          className={styles.sliderContainer}
          onMouseEnter={() => {
            if (autoPlayRef.current) clearInterval(autoPlayRef.current);
            autoPlayRef.current = null;
          }}
          onMouseLeave={() => {
            autoPlayRef.current = setInterval(() => {
              setCurrentPair(prev => (prev + 1) % totalPairs);
            }, 3000);
          }}
        >
          <Button 
            className={`${styles.navButton} ${styles.prevButton}`}
            onClick={handlePrevSlide}
            disabled={false}
          >
            <NavigateBeforeIcon />
          </Button>

          <Box className={styles.slider} ref={sliderRef}>
            <Box 
              className={styles.sliderTrack}
              style={{
                transform: `translateX(-${currentPair * 100}%)`,
                display: 'grid',
                gridTemplateColumns: `repeat(${activeLocationData?.images?.length || 0}, ${isMobile ? '100%' : '50%'})`,
                gap: '20px'
              }}
            >
              {activeLocationData?.images?.map((image) => (
                <Box
                  key={image.id}
                  className={styles.slide}
                  style={{ backgroundImage: `url(${image.imageUrl})` }}
                >
                  <Box className={styles.propertyInfo}>
                    <Typography variant="h6">{image.propertyName}</Typography>
                    <Typography variant="body2">{image.description}</Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>

          <Button 
            className={`${styles.navButton} ${styles.nextButton}`}
            onClick={handleNextSlide}
            disabled={false}
          >
            <NavigateNextIcon />
          </Button>
        </Box>

        <Box className={styles.dots}>
          {[...Array(totalPairs)].map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${currentPair === index ? styles.activeDot : ''}`}
              onClick={() => setCurrentPair(index)}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default PropertiesSection;