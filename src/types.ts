export interface FeatureInfo {
  featureText: string;
  available: boolean;
}
export interface PlanInfo {
  title: string;
  subtitle: string;
  price: number;
  features: FeatureInfo[];
}
