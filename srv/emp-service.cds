using { emp as e } from '../db/schema';

@path : '/sap/opu/odata'

service MyService {

    entity EmpSet as projection on e.Employee;

}
