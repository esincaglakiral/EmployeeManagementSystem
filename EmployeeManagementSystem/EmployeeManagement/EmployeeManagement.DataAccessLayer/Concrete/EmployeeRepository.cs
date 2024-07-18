using EmployeeManagement.DataAccessLayer.Abstract;
using EmployeeManagement.EntityLayer.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EmployeeManagement.DataAccessLayer.Concrete
{
    public class EmployeeRepository : IEmployeeRepository
    {
        private readonly List<Employee> _employees;

        public EmployeeRepository()
        {
            _employees = new List<Employee>();
        }

        public void Add(Employee employee)
        {
            employee.ID = _employees.Count > 0 ? _employees.Max(e => e.ID) + 1 : 1;
            _employees.Add(employee);
        }

        public void Delete(int id)
        {
            var employee = GetById(id);
            if (employee != null)
            {
                _employees.Remove(employee);
            }
        }

        public IEnumerable<Employee> GetAll()
        {
            return _employees;
        }

        public Employee GetById(int id)
        {
            return _employees.FirstOrDefault(e => e.ID == id);
        }

        public void Update(Employee employee)
        {
            var existingEmployee = GetById(employee.ID);
            if (existingEmployee != null)
            {
                existingEmployee.Name = employee.Name;
                existingEmployee.Age = employee.Age;
                existingEmployee.Department = employee.Department;
            }
        }
    }
}
