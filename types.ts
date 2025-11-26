export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  content: string;
  image: string;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}