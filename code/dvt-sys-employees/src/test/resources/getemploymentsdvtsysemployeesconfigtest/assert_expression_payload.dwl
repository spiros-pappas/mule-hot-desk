%dw 2.0
import * from dw::test::Asserts
---
payload must equalTo({
  "id": 1,
  "employeeId": 1,
  "jobTitle": "Manager",
  "payRate": "100000,00",
  "payPeriod": "YEARLY",
  "payFrequency": "MONTHLY",
  "payCurrency": "GBP",
  "flsaStatus": "EXEMPT",
  "effectiveDate": "2012-01-01T00:00:00",
  "employmentType": "FULL TIME"
})