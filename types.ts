import { LucideIcon } from 'lucide-react';

export interface NavLink {
  label: string;
  href: string;
}

export interface FeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
  colorClass?: string;
}

export interface StepProps {
  number: number;
  icon: LucideIcon;
  title: string;
  description: string;
  isLast?: boolean;
}

export interface DonationTierProps {
  amount: number;
  label: string;
  selected?: boolean;
}