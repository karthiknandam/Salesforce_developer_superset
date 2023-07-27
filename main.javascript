import { LightningElement, wire } from 'lwc';
import getEmployees from '@salesforce/apex/EmployeeController.getEmployees';

const columns = [
    { label: 'First Name', fieldName: 'First_Name__c' },
    { label: 'Last Name', fieldName: 'Last_Name__c' },
    { label: 'Email', fieldName: 'Email__c' },
    { label: 'Phone', fieldName: 'Phone__c' },
    { label: 'Department', fieldName: 'Department__c' }
];

export default class EmployeeList extends LightningElement {
    columns = columns;
    employeeData = [];

    @wire(getEmployees)
    wiredEmployees({ error, data }) {
        if (data) {
            this.employeeData = data;
        } else if (error) {
            console.error('Error retrieving employees:', error);
        }
    }
  }
  
