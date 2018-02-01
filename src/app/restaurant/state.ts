export interface IRestaurant {
  cuisines: string;
  deliveryCost: number;
  deliveryStartTime: string;
  drivingDistance: number;
  isCollectNow: boolean;
  isDeliveryNow: boolean;
  isOpen: boolean;
  isSponsored: boolean;
  logoUrl?: string;
  openingTime: string;
  percentOff: number;
  rating: number;
  ratings: number;
  title: string;
}
