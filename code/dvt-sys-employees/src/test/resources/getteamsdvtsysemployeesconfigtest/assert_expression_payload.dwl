%dw 2.0
import * from dw::test::Asserts
---
payload must equalTo([
  {
    "id": 1,
    "name": "General Management",
    "parentTeam": 0
  },
  {
    "id": 2,
    "name": "Marketing",
    "parentTeam": 1
  },
  {
    "id": 3,
    "name": "Operations",
    "parentTeam": 1
  },
  {
    "id": 4,
    "name": "Finance",
    "parentTeam": 1
  },
  {
    "id": 5,
    "name": "Sales",
    "parentTeam": 1
  },
  {
    "id": 6,
    "name": "Human Resource",
    "parentTeam": 1
  },
  {
    "id": 7,
    "name": "Delivery",
    "parentTeam": 1
  },
  {
    "id": 8,
    "name": "DevOps",
    "parentTeam": 1
  },
  {
    "id": 9,
    "name": "Engineering",
    "parentTeam": 1
  }
])