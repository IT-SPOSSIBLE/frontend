// types/UserRegistrationData.ts

export type UserRole = '' | 'buyer' | 'seller';


export interface UserRegistrationData {
  email: string;
  password: string;
  phone_number?: string;   // optional
  first_name?: string;     // optional
  middle_name?: string;    // optional
  last_name?: string;      // optional
  role: UserRole;
}
