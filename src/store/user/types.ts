export interface User {
  id: number,
  user_uuid: string,
  username: string,
  email: string,
  first_name: string,
  last_name: string,
  middle_name: string,
  phone: string,
  address: string,
  avatar: string,
  is_active: boolean,
  is_staff: boolean,
  is_superuser: boolean,
  is_legal_person: boolean,
  is_verified: boolean,
  last_login: Date,
  created: Date,
  updated: Date,
  item_removed: boolean
  role: Role
}

export interface Role {
  id: number,
  name: string,
  slug: string,
  description: string,
  created: Date,
  updated: Date,
  item_removed: boolean
}

export interface UserState {
  user: null | User,
  prefetch: boolean
}







