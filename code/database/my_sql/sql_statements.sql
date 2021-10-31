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

CREATE TABLE `bookings` (
  `booking_id` int(11) NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `desk_id` int(11) NOT NULL,
  `employee_id` int(11) NOT NULL,
  PRIMARY KEY (`booking_id`),
  UNIQUE KEY `booking_id_UNIQUE` (`booking_id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4;

CREATE TABLE `availability` (
  `availability_id` int(11) NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `location_id` int(11) NOT NULL,
  `total_available_desks` int(11) NOT NULL,
  `current_available_desks` int(11) NOT NULL,
  `room_id` varchar(45) NOT NULL,
  PRIMARY KEY (`availability_id`),
  UNIQUE KEY `availability_id_UNIQUE` (`availability_id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4;

CREATE TABLE `intentions` (
  `intention_id` int(11) NOT NULL AUTO_INCREMENT,
  `employee_id` int(11) NOT NULL,
  `date` date NOT NULL,
  `status` varchar(45) NOT NULL,
  `insert_date_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`intention_id`),
  UNIQUE KEY `intention_id_UNIQUE` (`intention_id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4;
