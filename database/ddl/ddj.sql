CREATE TABLE Event(
    event_id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
    event_date Date,
    event_title varchar(50),
    event_description  varchar(50),
    event_type varchar(50)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;