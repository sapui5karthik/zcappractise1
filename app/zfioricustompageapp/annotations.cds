using MyService as service from '../../srv/emp-service';

annotate service.EmpSet with @(
    UI.SelectionFields : [
        EMPID,
    ]
);
