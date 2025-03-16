export interface FeatureInfo {
  featureText: string;
  available: boolean;
}
export interface PlanInfo {
  title: string;
  subtitle: string;
  pricePerMonth: number;
  pricePerYear: number;
  features: FeatureInfo[];
}
