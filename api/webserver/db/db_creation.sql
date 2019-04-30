CREATE TABLE IF NOT EXISTS donor (
    donor_id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL UNIQUE,
    activation_date DATETIME NOT NULL,
    last_logged_in DATETIME,
    password VARCHAR(255) NOT NULL,
    lifetime_donation FLOAT,
    fav_causes VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS charity (
    charity_id INTEGER AUTO_INCREMENT PRIMARY KEY,
    char_name VARCHAR(255) NOT NULL UNIQUE,
    char_desc VARCHAR(540) UNIQUE,
    char_image VARCHAR(255) UNIQUE,
    char_address VARCHAR(255) UNIQUE,
    username VARCHAR(255) NOT NULL UNIQUE,
    activation_date DATETIME NOT NULL ,
    last_logged_in DATETIME,
    charity_login VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    active_drives INTEGER,
    causes VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS drive (
    drive_id INTEGER AUTO_INCREMENT PRIMARY KEY,
    charity_id INTEGER REFERENCES charity(char_id),
    name VARCHAR(255) NOT NULL UNIQUE,
    drive_desc VARCHAR(255) UNIQUE,
    drive_image VARCHAR(255) UNIQUE,
    target_amt FLOAT,
    collected_amt FLOAT,
    begin_date DATETIME,
    end_date DATETIME,
    active_drives INTEGER,
    causes VARCHAR(255) NOT NULL,
    activation_date DATETIME NOT NULL
);


CREATE TABLE IF NOT EXISTS drive_update (
    upd_id INTEGER AUTO_INCREMENT PRIMARY KEY,
    drive_id INTEGER REFERENCES drive(drive_id),
    drive_name VARCHAR(255) NOT NULL UNIQUE,
    char_desc VARCHAR(255) UNIQUE,
    char_address VARCHAR(255) UNIQUE,
    username VARCHAR(255) NOT NULL UNIQUE,
    drive_image VARCHAR(255) UNIQUE,
    active_drives INTEGER,
    causes VARCHAR(255) NOT NULL,
    activation_date DATETIME NOT NULL
);


CREATE TABLE IF NOT EXISTS drive_donor (
    drive_id INTEGER REFERENCES drive(drive_id),
    donor_id INTEGER REFERENCES donor(donor_id),
    activation_date DATETIME NOT NULL,
    status BOOLEAN NOT NULL
);
