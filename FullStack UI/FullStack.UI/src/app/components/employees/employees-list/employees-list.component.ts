import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employees: Employee [] = [];
/*
  {
    id: '00001425-3256-3652-6985-256314745000',
    nome: 'joao crisiano',
    email: 'c@s.com',
    telefone: 85698547850,
    salario: 1000,
    departamento: 'RH'
  },
  {
    id: '25252525-3256-3652-6985-256314745896',
    nome: 'joao crisiano',
    email: 'c@s.com',
    telefone: 85698547850,
    salario: 1000,
    departamento: 'RH'
  },
  {
    id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    nome: "string",
    email: "string",
    telefone: 0,
    salario: 0,
    departamento: "string"
  },
  {
    id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    nome: "string",
    email: "string",
    telefone: 0,
    salario: 0,
    departamento: "string"
  }
  
  ];
  */

  constructor(private employeesService: EmployeesService) { }

ngOnInit(): void {
    this.employeesService.getAllEmployees()
    .subscribe({
      next: (employees) => {
        this.employees = employees;
        //console.log(employees)
      },
      error: (response) => {
        console.log(response);
    }
  })
}
}