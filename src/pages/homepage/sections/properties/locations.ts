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
        description: 'Luxury living in the heart of KL'
      },
      {
        id: 'swiss-kl',
        propertyName: 'Swiss Garden Residence Kuala Lumpur',
        imageUrl: '/images/room1.jpg',
        description: 'Premium urban sanctuary'
      },
      {
        id: 'majestic-premier',
        propertyName: 'Majestic Premier Suite Kuala Lumpur',
        imageUrl: '/images/room2.jpg',
        description: 'Premium urban sanctuary'
      },
      {
        id: 'majestic-premier-1',
        propertyName: 'Majestic Premier Suite Kuala Lumpur',
        imageUrl: '/images/room3.jpg',
        description: 'Premium urban sanctuary'
      },
      {
        id: 'majestic-premier-2',
        propertyName: 'Majestic Premier Suite Kuala Lumpur',
        imageUrl: '/images/room1.jpg',
        description: 'Premium urban sanctuary'
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
        description: 'Luxury living in the heart of KL'
      },
      {
        id: 'swiss-kl',
        propertyName: 'Swiss Garden Residence Kuala Lumpur',
        imageUrl: '/images/room1.jpg',
        description: 'Premium urban sanctuary'
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