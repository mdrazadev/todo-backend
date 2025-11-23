DROP PROCEDURE IF EXISTS addUser;

CREATE PROCEDURE addUser(
    IN p_name VARCHAR(50),
    IN p_email VARCHAR(100),
    IN p_password VARCHAR(255),
    IN p_img VARCHAR(255)
)
BEGIN
    DECLARE emailCount INT DEFAULT 0;

    -- Check if email already exists
    SELECT COUNT(*) INTO emailCount
    FROM users
    WHERE email = p_email;

    IF emailCount > 0 THEN
        SELECT 
            FALSE AS success,
            'Email already exists' AS message;
    ELSE
        INSERT INTO users (name, email, password, img)
        VALUES (p_name, p_email, p_password, p_img);

        SELECT 
            TRUE AS success,
            'User created successfully' AS message,
            LAST_INSERT_ID() AS userId;
    END IF;
END;
