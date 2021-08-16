crate table user(
    id Serial PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    googleId VARCHAR(100) NOT NULL,
)