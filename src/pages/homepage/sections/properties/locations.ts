export interface Location {
  id: string;
  name: string;
  state: string;
  images: LocationImage[];
}

export interface LocationImage {
  id: string;
  propertyName: string;
  imageUrl: string;
  description?: string;
  rooms: RoomType[];
}

export interface RoomType {
  id: string;
  name: string;
  description: string;
  price: string;
  beds: string;
  bathrooms: string;
  imageUrl: string;
}

export const locationData: Location[] = [
  {
    id: 'kl',
    name: 'Kuala Lumpur',
    state: 'Federal Territory',
    images: [
      {
        id: 'rob-kl',
        propertyName: 'The Robertson Kuala Lumpur',
        imageUrl: '/images/room1.jpg',
        description: 'Luxury living in the heart of KL',
        rooms: [
          {
            id: 'rm221',
            name: 'Premier One-Bedroom Suite',
            description: 'Luxurious suite with modern amenities',
            price: 'RM221/night',
            beds: '1 Bed',
            bathrooms: '1 Bathroom',
            imageUrl: '/images/room1.jpg'
          },
          {
            id: 'rm262',
            name: 'Executive One-Bedroom Suite',
            description: 'Spacious suite with city view',
            price: 'RM262/night',
            beds: '2 Beds',
            bathrooms: '1 Bathroom',
            imageUrl: '/images/room1.jpg'
          },
          {
            id: 'rm222',
            name: 'Premier One-Bedroom Suite',
            description: 'Luxurious suite with modern amenities',
            price: 'RM221/night',
            beds: '1 Bed',
            bathrooms: '1 Bathroom',
            imageUrl: '/images/room1.jpg'
          },
          {
            id: 'rm263',
            name: 'Executive One-Bedroom Suite',
            description: 'Spacious suite with city view',
            price: 'RM262/night',
            beds: '2 Beds',
            bathrooms: '1 Bathroom',
            imageUrl: '/images/room1.jpg'
          },
          {
            id: 'rm223',
            name: 'Premier One-Bedroom Suite',
            description: 'Luxurious suite with modern amenities',
            price: 'RM221/night',
            beds: '1 Bed',
            bathrooms: '1 Bathroom',
            imageUrl: '/images/room1.jpg'
          },
        ]
      },
      {
        id: 'swiss-kl',
        propertyName: 'Swiss Garden Residence Kuala Lumpur',
        imageUrl: '/images/room1.jpg',
        description: 'Premium urban sanctuary',
        rooms: [
          {
            id: 'sg-rm198',
            name: 'Garden View Suite',
            description: 'Peaceful suite with garden views',
            price: 'RM198/night',
            beds: '1 Bed',
            bathrooms: '1 Bathroom',
            imageUrl: '/images/room2.jpg'
          },
          {
            id: 'sg-rm245',
            name: 'Premium Garden Suite',
            description: 'Spacious suite with premium amenities',
            price: 'RM245/night',
            beds: '2 Beds',
            bathrooms: '1 Bathroom',
            imageUrl: '/images/room2.jpg'
          }
        ]
      },
      {
        id: 'majestic-premier',
        propertyName: 'Majestic Premier Suite Kuala Lumpur',
        imageUrl: '/images/room2.jpg',
        description: 'Premium urban sanctuary',
        rooms: [
          {
            id:'sg-rm198',
            name: 'Garden View Suite',
            description: 'Peaceful suite with garden views',
            price: 'RM198/night',
            beds: '1 Bed',
            bathrooms: '1 Bathroom',
            imageUrl: '/images/room3.jpg'
          }
        ]
      },
      {
        id: 'majestic-premier-1',
        propertyName: 'Majestic Premier Suite Kuala Lumpur',
        imageUrl: '/images/room3.jpg',
        description: 'Premium urban sanctuary',
        rooms: [
        ]
      },
      {
        id: 'majestic-premier-2',
        propertyName: 'Majestic Premier Suite Kuala Lumpur',
        imageUrl: '/images/room1.jpg',
        description: 'Premium urban sanctuary',
        rooms: [
        ]
      }
    ]
  },
  {
    id: 'genting',
    name: 'Genting Highlands',
    state: 'Pahang',
    images: [
      {
        id: 'rob-kl',
        propertyName: 'The Robertson Kuala Lumpur',
        imageUrl: '/images/room1.jpg',
        description: 'Luxury living in the heart of KL',
        rooms: [
        ]
      },
      {
        id: 'swiss-kl',
        propertyName: 'Swiss Garden Residence Kuala Lumpur',
        imageUrl: '/images/room1.jpg',
        description: 'Premium urban sanctuary',
        rooms: [
        ]
      }
    ]
  },
  {
    id: 'shah-alam',
    name: 'Shah Alam',
    state: 'Selangor',
    images: []
  },
  // Add other locations...
];