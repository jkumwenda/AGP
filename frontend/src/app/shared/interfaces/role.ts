import { Permission } from './permission';

export class Role {
  pk_roleid: number;
  role: string;
  role_desc: string;
  Permissions:Permission[]
  selected:boolean
}
