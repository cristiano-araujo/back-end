import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { Router } from '@angular/router';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  employeeDetails: Employee = {
    id: '',
    nome: '',
    email: '',
    telefone: 0,
    salario: 0,
    departamento: ''
  };
  
  constructor(private route: ActivatedRoute, private employeeService: EmployeesService, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if (id) {
          this.employeeService.getEmployee(id)
          .subscribe({
            next: (response) => {
              this.employeeDetails = response;
            }
          });
        }
      }
    })
  }

  updateEmployee() {
    this.employeeService.updateEmployee(this.employeeDetails.id, this.employeeDetails) 
    .subscribe({
      next: (employee) => {
        this.router.navigate(['employees']);
      }
    });
    ;
  }

  deleteEmployee(id: string) {
    this.employeeService.deleteEmployee(id)
    .subscribe({
      next: (employee) => {
        this.router.navigate(['employees']);
      }
    });
  }

}