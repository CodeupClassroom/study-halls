
-- I want to show a list of employees along with the names of the departments
-- they work in

-- why would we not have a dept_name column on the employees table

SELECT * FROM employees
JOIN dept_emp
    ON employees.emp_no = dept_emp.emp_no
JOIN departments
    ON dept_emp.dept_no = departments.dept_no
LIMIT 5;

