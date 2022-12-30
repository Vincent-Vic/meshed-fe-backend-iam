import { CommonItem } from '@/common/models';

export class PermissionItem extends CommonItem {
  parentId!: number;
  name!: number;
  enname: string | undefined;
  access!: string;
  accessMode: string | undefined;
  uri: string | undefined;
  owner: string | undefined;
  description: string | undefined;
  children: PermissionItem[] | undefined;
}
