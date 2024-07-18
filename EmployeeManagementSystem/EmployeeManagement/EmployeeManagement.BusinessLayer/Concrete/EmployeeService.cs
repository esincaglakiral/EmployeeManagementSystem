using EmployeeManagement.BusinessLayer.Abstract;
using EmployeeManagement.DataAccessLayer.Abstract;
using EmployeeManagement.DataAccessLayer.Concrete;
using EmployeeManagement.EntityLayer.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EmployeeManagement.BusinessLayer.Concrete
{
    public class EmployeeService : IEmployeeService
    {
        private readonly IEmployeeRepository _employeeRepository;

        public EmployeeService(IEmployeeRepository employeeRepository)
        {
            _employeeRepository = employeeRepository;
        }

        public void AddEmployee(Employee employee)
        {
            _employeeRepository.Add(employee);
        }

        public void DeleteEmployee(int id)
        {
            _employeeRepository.Delete(id);
        }

        public IEnumerable<Employee> GetAllEmployees()
        {
            return _employeeRepository.GetAll();
        }

        public Employee GetEmployeeById(int id)
        {
            return _employeeRepository.GetById(id);
        }

        public void UpdateEmployee(Employee employee)
        {
            _employeeRepository.Update(employee);
        }
    }
}
