export interface User {
  id: number;
  name: string;
  email: string;
  email_verified: string | null;
  role: "admin" | "doctor" | "patient";
  created_at: string;
  update_at: string;
}
