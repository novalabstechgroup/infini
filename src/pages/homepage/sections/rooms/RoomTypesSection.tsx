import React, { useState, useRef, useEffect } from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Location, LocationImage } from '../properties/locations';
import styles from './RoomTypesSection.module.css';

interface RoomTypesSectionProps {
  activeLocation: Location | null;
  activePropertyId: string | null;
}

const RoomTypesSection: React.FC<RoomTypesSectionProps> = ({ activeLocation, activePropertyId }) => {
  const [currentPair, setCurrentPair] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  // Handle responsive layout
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const activeProperty = activeLocation?.images.find(img => img.id === activePropertyId);
  const rooms = activeProperty?.rooms || [];
  
  // Reset currentPair when activePropertyId changes
  useEffect(() => {
    setCurrentPair(0);
  }, [activePropertyId]);

  const itemsPerView = isMobile ? 1 : Math.min(4, Math.floor(window.innerWidth / 300));
  const totalSlides = Math.ceil(rooms.length / itemsPerView);
  const slideWidth = 100 / itemsPerView;

  const handleNextSlide = () => setCurrentPair((prev) => Math.min(prev + 1, totalSlides - 1));
  const handlePrevSlide = () => setCurrentPair((prev) => Math.max(prev - 1, 0));

  const getCurrentSlides = () => {
    
    const startIndex = currentPair * itemsPerView;
    console.log(rooms.slice(startIndex, startIndex + itemsPerView));
    return rooms.slice(startIndex, startIndex + itemsPerView);
  };

  // Update the sliderTrack style calculations
  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > 50) { // Minimum swipe distance
      if (diff > 0) {
        handleNextSlide();
      } else {
        handlePrevSlide();
      }
    }
    setTouchStart(null);
  };

  return (
    <Box className={styles.roomTypesSection}>
      <Container maxWidth="lg" sx={{ px: isMobile ? 2 : 3 }}>
        <Typography variant="h2" className={styles.sectionTitle} sx={{
          fontSize: isMobile ? '1.75rem' : '2.5rem',
          mb: isMobile ? 1 : 2
        }}>
          AVAILABLE ROOM TYPES
        </Typography>
        <Typography variant="subtitle1" className={styles.sectionSubtitle}>
          {activeProperty?.propertyName || 'Select a property to view rooms'}
        </Typography>

        {activeProperty ? (
          rooms.length > 0 ? (
            <Box className={styles.sliderContainer}>
              {!isMobile && (
                <Button 
                  className={`${styles.navButton} ${styles.prevButton}`}
                  onClick={handlePrevSlide}
                >
                  <NavigateBeforeIcon />
                </Button>
              )}

              <Box 
                className={styles.slider} 
                ref={sliderRef}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <Box 
                  className={styles.sliderTrack}
                  style={{
                    transform: `translateX(0%)`,
                    width: `${100}%`,
                    display: 'grid',
                    gridTemplateColumns: `repeat(${rooms.length}, minmax(${100 / itemsPerView}%, 1fr))`,
                    gap: isMobile ? '8px' : '16px',
                    transition: 'transform 0.3s ease-in-out'
                  }}
                >
                  {getCurrentSlides().map((room) => (
                    <Box key={room.id} className={styles.roomCard}>
                      <Box 
                        className={styles.roomImage}
                        style={{ backgroundImage: `url(${room.imageUrl})` }}
                      >
                        <Box className={styles.priceTag}>
                          {room.price}
                        </Box>
                      </Box>
                      <Box className={styles.roomInfo}>
                        <Typography variant="h6" className={styles.roomName}>
                          {room.name}
                        </Typography>
                        <Typography variant="body2" className={styles.roomDescription}>
                          {room.description}
                        </Typography>
                        <Box className={styles.roomDetails}>
                          <Typography variant="body2">
                            {room.beds} • {room.bathrooms}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>

              {!isMobile && (
                <Button 
                  className={`${styles.navButton} ${styles.nextButton}`}
                  onClick={handleNextSlide}
                >
                  <NavigateNextIcon />
                </Button>
              )}
            </Box>
          ) : (
            <Box className={styles.noRoomsContainer}>
              <Typography variant="h6" className={styles.noRoomsText}>
                No rooms available for this property
              </Typography>
            </Box>
          )
        ) : (
          <Box className={styles.noRoomsContainer}>
            <Typography variant="h6" className={styles.noRoomsText}>
              Please select a property to view available rooms
            </Typography>
          </Box>
        )}

        {/* Improved dots for mobile */}
        {rooms.length > 0 && totalSlides > 1 && (
          <Box className={styles.dots} sx={{ mt: isMobile ? 2 : 3 }}>
            {[...Array(totalSlides)].map((_, index) => (
              <span
                key={index}
                className={`${styles.dot} ${currentPair === index ? styles.activeDot : ''}`}
                onClick={() => setCurrentPair(index)}
                style={{
                  width: isMobile ? '8px' : '10px',
                  height: isMobile ? '8px' : '10px',
                  margin: isMobile ? '0 4px' : '0 6px'
                }}
              />
            ))}
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default RoomTypesSection;