export interface Advocate {
  id?: number;
  firstName: string;
  lastName: string;
  city: string;
  degree: string;
  specialties: string[];
  yearsOfExperience: number;
  phoneNumber: number;
  createdAt?: Date | null;
}

export interface ApiResponse<T> {
  data: T;
  error?: string;
}

export interface SearchState {
  searchTerm: string;
  isLoading: boolean;
  error: string | null;
}
