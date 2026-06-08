/**
 * Auto-generated entity types
 * Contains all CMS collection interfaces in a single file 
 */

/**
 * Collection ID: consultationrequests
 * Interface for ConsultationRequests
 */
export interface ConsultationRequests {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  fullName?: string;
  /** @wixFieldType text */
  email?: string;
  /** @wixFieldType text */
  phoneNumber?: string;
  /** @wixFieldType text */
  propertyAddress?: string;
  /** @wixFieldType text */
  propertyType?: string;
  /** @wixFieldType number */
  numberOfBedrooms?: number;
  /** @wixFieldType text */
  notes?: string;
}


/**
 * Collection ID: services
 * Interface for PropertyManagementServices
 */
export interface PropertyManagementServices {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  serviceName?: string;
  /** @wixFieldType text */
  tagline?: string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType text */
  benefits?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  serviceImage?: string;
  /** @wixFieldType text */
  category?: string;
}
