 %dw 2.0
import * from dw::test::Asserts
---
payload must equalTo({
  "errorCode": "NOT_FOUND",
  "errorMessage": "Employee with id 1123 not found."
})