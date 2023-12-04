export interface Offer {
  id: number;
  title: string;
  published_at: string;
  created_at: string;
  careers_apply_url: string;
  status: string;
  remote: boolean;
  max_hours: number | null;
  open_questions: any[]; // Ersetzen Sie any[] durch einen spezifischeren Typ, falls bekannt.
  sharing_image: string | null;
  company_name: string;
  updated_at: string;
  requirements: string;
  close_at: string | null;
  postal_code: string;
  sharing_title: string;
  description: string;
  translations: Translations;
  city: string;
  state_name: string;
  country_code: string;
  guid: string;
  education_code: string;
  department: string;
  position: number;
  mailbox_email: string;
  employment_type_code: string;
  experience_code: string;
  options_cv: string;
  options_cover_letter: string;
  options_phone: string;
  location: string;
  min_hours: number | null;
  careers_url: string;
  salary: Salary;
  category_code: CategoryCode;
  sharing_description: string;
  options_photo: string;
  country: string;
  slug: string;
  state_code: string;
  tags: string[];
}

export enum Category {
  Electronics = 'electronics',
  Jewelery = 'jewelery',
  MenSClothing = "men's clothing",
  WomenSClothing = "women's clothing",
}
