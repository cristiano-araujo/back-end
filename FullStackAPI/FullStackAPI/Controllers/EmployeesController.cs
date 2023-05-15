using FullStack.API.Data;
using FullStackAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FullStackAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeesController : Controller
    {
        private readonly FullStackDbContext _fullStackDbContext;
        public EmployeesController(FullStackDbContext fullStackDbContext)
        {
            _fullStackDbContext = fullStackDbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllEmployees()
        {
            var employees = await _fullStackDbContext.Employees.ToListAsync();
            return Ok(employees);
        }

        [HttpPost]
        public async Task<IActionResult> AddEmployee(Employee employeeRequest)
        {
            employeeRequest.Id = Guid.NewGuid();
            await _fullStackDbContext.Employees.AddAsync(employeeRequest);
            await _fullStackDbContext.SaveChangesAsync();

            return Ok(employeeRequest);
        }

       
        [HttpGet("{id:Guid}")]
        public async Task<IActionResult> GetEmployee(Guid id)
        {
            var employee =
                await _fullStackDbContext.Employees.FirstOrDefaultAsync(x => x.Id == id);

            if (employee == null)
            {
                return NotFound();
            }
            return Ok(employee);
        }

        [HttpPut("{Id:Guid}")]
        public async Task<IActionResult> UpdateEmployee(Guid id, Employee updateEmployeesRequest)
        {
            var employee = await _fullStackDbContext.Employees.FindAsync(id);
            if (employee == null)
            {
                return NotFound();
            }

            employee.Nome = updateEmployeesRequest.Nome;
            employee.Email = updateEmployeesRequest.Email;
            employee.Telefone = updateEmployeesRequest.Telefone;
            employee.Salario = updateEmployeesRequest.Salario;
            employee.Departamento = updateEmployeesRequest.Departamento;

            await _fullStackDbContext.SaveChangesAsync();

            return Ok(employee);
        }

        [HttpGet("teste")]
        public FullStackDbContext Get_fullStackDbContext()
        {
            return _fullStackDbContext;
        }

        [HttpDelete("{id:Guid}")]
        public async Task<IActionResult> DeleteEmployee(Guid id)
        {
            var employee = await _fullStackDbContext.Employees.FindAsync(id);

            if (employee == null)
            {
                return NotFound();
            }

            _fullStackDbContext.Employees.Remove(employee);
            await _fullStackDbContext.SaveChangesAsync();

            return Ok(employee);
        }

    }
}

