create table users(
    id Serial PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
);
create table wallets (
    id Serial PRIMARY KEY,
    category VARCHAR(100) NOT NULL,
    description VARCHAR(200) NOT NULL,
    price real NOT NULL,
    created_at VARCHAR(50) NOT NULL,
    time TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    user_id integer NOT NULL references users(id) on delete cascade
);
insert into wallets (
        category,
        description,
        price,
        created_at,
        user_id
    )
values (
        'Sonstiges',
        'test description',
        200,
        '2020-10-10',
        1
    );