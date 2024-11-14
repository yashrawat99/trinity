export interface DemandResponseDTO {
  message: string;
  success: boolean;
  responseTime: number;
  data: Demands;
}

export interface Demands {
  count: number;
  size: null;
  page: null;
  defaultFilter: boolean;
  indents: Indent[];
}

export interface Indent {
  demandId: number;
  consignmentId: null | number;
  consignerName: string | null;
  consignerBillingName: string | null;
  laneName: string | null;
  vehicle: string | null;
  loadingTime: number;
  creationTime: number;
  vehicleNumber: null | string;
  consignerFreight: null | number;
  operatorFreight: null | number;
  timeToClose: null;
  assignedTo: null | string | null;
  status: string | null;
  expiryCategory: null;
  expiryRemark: null;
  advancePct: null | number;
  freightApproved: boolean;
  driverNumber: null;
  assignedToNumber: null;
  subStatus: string;
  fareStatus: string;
  followUpDate: null;
  appResponse: string;
  rfq: boolean;
  estFreight: null;
  triggerBookingFlow: boolean;
  priceSearchManually: boolean;
  systemRate: number | null;
  targetRate: number | null;
  subStatusTimeDifference: number;
  drBookingTimeLeft: null | number;
  specialRequest: boolean;
  consignerType: string;
  ptl: boolean;
  remarks: null | string;
  lowAvailabilityQuote: boolean;
  highConfidenceQuote: boolean;
  biddingActive: boolean;
  viaPointCount?: number | null;
}
