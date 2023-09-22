import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface GymInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  localization?: string;

  user?: UserInterface;
  _count?: {};
}

export interface GymGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
  localization?: string;
}
