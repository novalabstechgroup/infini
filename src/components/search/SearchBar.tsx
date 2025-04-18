import React, { useState } from 'react';
import { Box, Button, Typography, TextField, IconButton, Popover, List, ListItem } from '@mui/material';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import SearchIcon from '@mui/icons-material/Search';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import dayjs, { Dayjs } from 'dayjs';
import styles from './SearchBar.module.css';

const SearchBar: React.FC = () => {
  const [dateRange, setDateRange] = useState<[Dayjs | null, Dayjs | null]>([null, null]);
  const [checkIn, setCheckIn] = useState<Dayjs | null>(null);
  const [checkOut, setCheckOut] = useState<Dayjs | null>(null);
  const [guests, setGuests] = useState(1);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [selectedProperty, setSelectedProperty] = useState('');

  const properties = [
    'Luxury Suite - KL City View',
    'Deluxe Room - Twin Towers View',
    'Premium Studio - City Center',
    'Standard Room - Central Park',
    'Budget Studio - Suburbs',
    'Budget Room - Suburbs'
  ];

  const handleTextFieldClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePropertySelect = (property: string) => {
    setSelectedProperty(property);
    setAnchorEl(null);
  };

  const today = dayjs();

  return (
    <div className={styles.searchContainer}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box className={styles.searchBox}>
          <Box className={styles.searchInputContainer}>
            <SearchIcon className={styles.searchIcon} />
            <TextField
              placeholder="Select a property"
              value={selectedProperty}
              className={styles.propertyInput}
              fullWidth
              variant="standard"
              InputProps={{ disableUnderline: true }}
              onClick={handleTextFieldClick}
            />
          </Box>
          
          <Box className={styles.divider} />
          
          <DateRangePicker
            value={dateRange}
            onChange={(newValue) => setDateRange(newValue)}
            calendars={2}
            minDate={today}
            localeText={{ start: 'Start', end: 'End' }}
            slotProps={{
              textField: {
                variant: "standard",
                InputProps: { 
                  disableUnderline: true,
                  style: {
                    textAlign: 'center',
                  }
                },
                inputProps: {
                  style: {
                    textAlign: 'center',
                    paddingLeft: '0',
                    paddingRight: '0',
                  }
                }
              },
              field: {
                sx: {
                  '& .MuiInputBase-root': {
                    width: '120px',
                    display: 'flex',
                    justifyContent: 'center',
                  },
                  '& .MuiInputBase-input': {
                    width: '100%',
                    textAlign: 'center !important',
                  },
                  '& .MuiTypography-root': {
                    display: 'flex',
                    justifyContent: 'center',
                    width: '100%',
                  }
                }
              },
              layout: {
                sx: {
                  '& .MuiPickersLayout-root': {
                    backgroundColor: 'white',
                    borderRadius: '8px',
                  },
                  '& .MuiPickersCalendarHeader-root': {
                    paddingLeft: '12px',
                    paddingRight: '12px',
                    color: '#1a1a1a',
                  },
                  '& .MuiDayCalendar-weekDayLabel': {
                    color: '#666',
                    fontSize: '14px',
                  },
                  '& .MuiPickersDay-root': {
                    fontSize: '14px',
                    margin: '2px',
                    color: '#1a1a1a',
                  },
                  '& .MuiPickersDay-root.Mui-selected': {
                    backgroundColor: '#006758',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: '#006758',
                    }
                  },
                  '& .MuiPickersDay-today': {
                    border: '1px solid #006758',
                    color: '#006758',
                  },
                  '& .MuiPickersDay-dayOutsideMonth': {
                    color: '#999',
                  },
                  '& .MuiDateRangePickerDay-rangeIntervalDayHighlight': {
                    backgroundColor: '#e6f4f2',
                  },
                  '& .MuiDateRangePickerDay-rangeIntervalPreview': {
                    backgroundColor: '#e6f4f2',
                  }
                }
              }
            }}
          />
          
          <Box className={styles.divider} />
          
          <Box className={styles.guestCounter}>
            <Typography>Guests</Typography>
            <IconButton 
              onClick={() => setGuests(Math.max(1, guests - 1))}
              disabled={guests <= 1}
            >
              <RemoveIcon />
            </IconButton>
            <Typography>{guests}</Typography>
            <IconButton 
              onClick={() => setGuests(Math.min(10, guests + 1))}
              disabled={guests >= 10}
            >
              <AddIcon />
            </IconButton>
          </Box>
          
          <Button 
            variant="contained"
            className={styles.searchButton}
            sx={{
              backgroundColor: '#006758 !important',
              '&:hover': {
                backgroundColor: '#005347 !important',
              }
            }}
          >
            Search
          </Button>
        </Box>

        <Popover
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <List className={styles.propertyList}>
            {properties.map((property) => (
              <ListItem 
                key={property}
                onClick={() => handlePropertySelect(property)}
                className={styles.propertyListItem}
              >
                {property}
              </ListItem>
            ))}
          </List>
        </Popover>
      </LocalizationProvider>
    </div>
  );
};

export default SearchBar;