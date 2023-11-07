CREATE TABLE todos (
  id SERIAL PRIMARY KEY,
  user_email VARCHAR(200),
  title VARCHAR(30),
  progress INT,
  date VARCHAR(300)
);

CREATE TABLE user_account (
  email VARCHAR(255) PRIMARY KEY,
  hashed_password VARCHAR(255)
);

DROP TABLE todos

INSERT INTO todos(id, user_email, title, progress, date) VALUES('0', 'trananhduc23102000@gmail.com', 'First todo', 10, 'Tuesday, November 7, 2023 10:15:37 PM GMT+07:00')

SELECT * FROM todos
SELECT * FROM user_account

//Thêm một cột mới với kiểu SERIAL:
ALTER TABLE todos
ADD COLUMN new_id SERIAL;

//Sao chép dữ liệu từ cột cũ sang cột mới:
UPDATE todos
SET new_id = id;

//Xóa cột cũ:
ALTER TABLE todos
DROP COLUMN id;

//Đổi tên cột mới thành "id" (tùy chọn):
ALTER TABLE todos
RENAME COLUMN new_id TO id;

SELECT pg_stat_statements_reset();

SELECT usename FROM pg_user;

