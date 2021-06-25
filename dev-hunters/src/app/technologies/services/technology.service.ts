import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { TechnologyModel } from '../models/technology.model';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class TechnologyService {

  private readonly API_URL = 'http://localhost:8000/technologies';

  dataChange: BehaviorSubject<TechnologyModel[]> = new BehaviorSubject<TechnologyModel[]>([]);
  dialogData: any;

  constructor(private httpClient: HttpClient) {}

  get data(): TechnologyModel[] {
    return this.dataChange.value;
  }

  getDialogData() {
    return this.dialogData;
  }

  /** CRUD METHODS */
  getAllIssues(): void {
    this.httpClient.get<TechnologyModel[]>(this.API_URL).subscribe(data => {
        this.dataChange.next(data);
      },
      (error: HttpErrorResponse) => {
        console.log (error.name + ' ' + error.message);
      });
  }

  // ADD, POST METHOD
  addIssue(technology: TechnologyModel): void {
    this.httpClient.post(this.API_URL, technology).subscribe(data => {
        this.dialogData = technology;
        // this.toastrService.success('Successfully added', 'Successfully added', {
        //   timeOut: 7000
        // });
      },
      (err: HttpErrorResponse) => {
        // this.toastrService.error('Error occurred. Details: ' + err.name + ' ' + err.message, 'Error occurred. Details: ');
      });
  }

  updateIssue(technology: TechnologyModel): void {
    this.dialogData = technology;
  }

  deleteIssue(id: number): void {
    console.log(id);
  }
}
