using EmployeeManagement.BusinessLayer.Abstract;
using EmployeeManagement.EntityLayer.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EmployeeManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {
        private readonly IEmployeeService _employeeService;

        public EmployeesController(IEmployeeService employeeService)
        {
            _employeeService = employeeService;
        }


        [HttpGet]
        public ActionResult<IEnumerable<Employee>> GetEmployees()
        {
            return Ok(_employeeService.GetAllEmployees());
        }



        [HttpGet("{id}")]
        public ActionResult<Employee> GetEmployee(int id)
        {
            var employee = _employeeService.GetEmployeeById(id);
            if (employee == null)
            {
                return NotFound();
            }
            return Ok(employee);
        }


        [HttpPost]
        public ActionResult AddEmployee(Employee employee)
        {
            _employeeService.AddEmployee(employee);
            return Ok(employee);
        }


        [HttpPut("{id}")]
        public ActionResult UpdateEmployee(int id, Employee updatedEmployee)
        {
            var employee = _employeeService.GetEmployeeById(id);
            if (employee == null)
            {
                return NotFound();
            }
            updatedEmployee.ID = id;
            _employeeService.UpdateEmployee(updatedEmployee);
            return Ok(updatedEmployee);
        }



        [HttpDelete("{id}")]
        public ActionResult DeleteEmployee(int id)
        {
            var employee = _employeeService.GetEmployeeById(id);
            if (employee == null)
            {
                return NotFound();
            }
            _employeeService.DeleteEmployee(id);
            return NoContent();
        }
    }
}
