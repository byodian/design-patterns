const orgChart = {
  addNewEmployee() {
    // getEmplyeeDetail provides a view that users interact with
    const employeeDetail = this.getEmployeeDetail();

    // when the employee detail is complete, the mediator (the 'orgchart' object)
    // decides what should happen next
    employeeDetail.on('complete', (employee) => {
      // set up additional objects that have additional events, which are used 
      // by the mediator to do additional things
      const managerSelector = this.selectManager(employee);
      managerSelector.on('save', emplyee => {
        employee.manager = emplyee;
      });
    });
  }
}
