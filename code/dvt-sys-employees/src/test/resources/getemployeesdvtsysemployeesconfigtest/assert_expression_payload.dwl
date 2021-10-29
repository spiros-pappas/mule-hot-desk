%dw 2.0
import * from dw::test::Asserts
---
payload must equalTo({
  "id": 1,
  "employeeNumber": "dvt-1234",
  "company": "Devoteam",
  "firstName": "Christopher",
  "lastName": "Peters",
  "displayFullName": "Christopher Peters",
  "workEmail": "christopher.peters@devoteam.com",
  "personalEmail": "christopher.peters@xyz.com",
  "mobilePhoneNumber": "07433456789",
  "employments": [
    1,
    2
  ],
  "homeLocation": 7451,
  "workLocation": 1238,
  "manager": null,
  "team": 1,
  "gender": "MALE",
  "ethnicity": "",
  "maritalStatus": "MARRIED",
  "dateOfBirth": "1985-07-21T00:00:00",
  "hireDate": "2014-02-15T00:00:00",
  "startDate": "2014-02-22T00:00:00",
  "employmentStatus": "ACTIVE",
  "terminationDate": null,
  "avatar": ""
})