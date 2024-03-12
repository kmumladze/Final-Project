export interface Hotel{
    id: number;
    name: string;
    address: string;
    city: string;
    featuredImage: string;
    rooms: any
}
export interface Rooms{
    id: number;
    name: string;
    hotelId: number;
    pricePerNight: number;
    available: boolean;
    maximumGuests: number;
    roomTypeId: number;
    bookedDates: any;
    source : string
}
