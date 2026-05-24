/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ProductItem {
  id: string;
  name: string;
  description: string;
  chemicalFormula?: string;
  standardPackaging: string;
  typicalApplications: string[];
  keySpecifications: string[];
}

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  items: ProductItem[];
}

export interface QuoteRequest {
  id: string;
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  productRequired: string;
  industrialApplication: string;
  estimatedQuantity: string;
  deliveryLocation: string;
  requiredTimeline: string;
  notes?: string;
  submittedAt: string;
  status: 'Pending Review' | 'Technical Sourcing' | 'Commercial Quotation' | 'Completed';
  referenceId: string;
}

export interface IndustrySector {
  id: string;
  title: string;
  description: string;
  applicationDetails?: string;
  processImpact: string;
  imageUrl: string;
}
