import { Injectable } from '@angular/core';
import { CommonService } from 'src/app/shared/services/common.service';

@Injectable({
  providedIn: 'root'
})
export class PermGuardService {

  constructor(
    private commonServiice: CommonService,
  ) { }

  getProfileRolePermission() { }
}
