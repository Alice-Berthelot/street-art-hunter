create table user (
  id int unsigned primary key auto_increment not null,
  username varchar(80) not null,
  city varchar(80) not null,
  email varchar(255) unique not null,
  hashed_password varchar(255) not null,
  point_number int not null default 0,
  is_admin boolean not null default 0,
  registration_date date not null default (CURRENT_DATE)
);

create table art (
  id int unsigned primary key auto_increment not null,
  title varchar(80),
  information text,
  latitude decimal(8,6) not null,
  longitude decimal(9,6) not null,
  upload_date date not null default (CURRENT_DATE),
  status enum('accepted', 'refused', 'pending') not null default 'pending'
);

create table picture (
  id int unsigned primary key auto_increment not null,
  image varchar(2048) not null,
  user_id int unsigned not null,
  art_id int unsigned not null,
  foreign key(user_id) references user(id),
  foreign key(art_id) references art(id)
);

create table artist (
  id int unsigned primary key auto_increment not null,
  name varchar(80) not null
);

create table art_artist (
  art_id int unsigned not null,
  artist_id int unsigned not null,
  PRIMARY KEY (art_id, artist_id),
  foreign key(art_id) references art(id),
  foreign key(artist_id) references artist(id)
);

INSERT INTO user (username, city, email, hashed_password, point_number, is_Admin, registration_date) VALUES
('Alice Admin', 'Bordeaux', 'aliceberthelot.pro@gmail.com', '$argon2id$v=19$m=19456,t=2,p=1$BV2MSsl8RXsEsC5RMeM81w$BHXHDPpzJxr1T9Dy0NH8Df0KX5cfbS/oRaf76lzfIEg', 0, 1, '2024-07-23');