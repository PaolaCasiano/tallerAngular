import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../../shared/employee.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar} from '@angular/material/snack-bar';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public service: EmployeeService, private dialog: MatDialog, private snackBar: MatSnackBar) { }

  departments = [
    {id:1, value: "Dep 1"},
    {id:2, value: "Dep 2"},
    {id:3, value: "Dep 3"}
  ];

  ngOnInit(): void {
  }

  onClear(){
    this.service.form.reset();
    this.service.initializeFormGroup();
    
    this.showNotification(1);
  }

  openDialog(): void {
    this.dialog.open(DialogComponent, {
      width: '250px',
      data: {
        title: "Limpiar formulario",
        body: "Quiere limpiar el formulario?",
        btnCancel: "No quiero",
        btnOk: "Limpiar",
        onOK: () => { this.onClear() }
      }
    });
  }

  showNotification(num: number): void{
    let message: string = "";
    let button: string = "OK";

    switch(num){
      case 1:
        message = 'Formulario limpiado correctamente';
        break;
      case 2:
        break;
      case 3:
        message = "Otro genero";
        break;
      case 4:
        break;
    }


    this.snackBar.open(message, button, {
      duration: 3000
    });
  }
}
