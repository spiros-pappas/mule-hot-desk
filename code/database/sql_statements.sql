CREATE TABLE `teams` (
  `id` int NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `parent_team` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `employees` (
  `id` int NOT NULL,
  `employee_number` varchar(45) DEFAULT NULL,
  `company` varchar(45) DEFAULT NULL,
  `first_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `display_full_name` varchar(45) DEFAULT NULL,
  `work_email` varchar(45) DEFAULT NULL,
  `personal_email` varchar(45) DEFAULT NULL,
  `mobile_phone_number` varchar(45) DEFAULT NULL,
  `home_location` int DEFAULT NULL,
  `work_location` int DEFAULT NULL,
  `manager` int DEFAULT NULL,
  `team` int DEFAULT NULL,
  `gender` varchar(45) DEFAULT NULL,
  `ethnicity` varchar(45) DEFAULT NULL,
  `marital_status` varchar(45) DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL,
  `hire_date` date DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `employment_status` varchar(45) DEFAULT NULL,
  `termination_date` date DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `employee_number_UNIQUE` (`employee_number`),
  UNIQUE KEY `work_email_UNIQUE` (`work_email`),
  KEY `team_idx` (`team`),
  CONSTRAINT `team` FOREIGN KEY (`team`) REFERENCES `teams` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `employments` (
  `id` int NOT NULL,
  `employee_id` int DEFAULT NULL,
  `job_title` varchar(45) DEFAULT NULL,
  `pay_rate` varchar(45) DEFAULT NULL,
  `pay_period` varchar(45) DEFAULT NULL,
  `pay_frequency` varchar(45) DEFAULT NULL,
  `pay_currency` varchar(45) DEFAULT NULL,
  `flsa_status` varchar(45) DEFAULT NULL,
  `effective_date` date DEFAULT NULL,
  `employment_type` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `employee_id_idx` (`employee_id`),
  CONSTRAINT `employee_id` FOREIGN KEY (`employee_id`) REFERENCES `employees` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
