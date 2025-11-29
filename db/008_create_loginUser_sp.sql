DROP PROCEDURE IF EXISTS loginUser;

CREATE PROCEDURE loginUser(
    IN p_email VARCHAR(50),
    IN p_password VARCHAR(255)
)
login_proc:BEGIN
    DECLARE userCount INT DEFAULT 0;

    -- Check if email exists
    SELECT COUNT(*) INTO userCount 
    FROM users 
    WHERE email = p_email;

    IF userCount = 0 THEN
        SELECT 
            FALSE AS success,
            'Email does not exist' AS message,
            NULL AS data;
        LEAVE login_proc;
    END IF;

    -- Check password (plaintext match for now)
    SELECT 
        id,
        name,
        email,
        img,
        isActive,
        createdAt
    INTO @id, @name, @email, @img, @isActive, @createdAt
    FROM users
    WHERE email = p_email
      AND password = p_password;

    IF @id IS NULL THEN
        SELECT 
            FALSE AS success,
            'Incorrect password' AS message,
            NULL AS data;
    ELSE
        SELECT 
            TRUE AS success,
            'Login successful' AS message,
            JSON_OBJECT(
                'id', @id,
                'name', @name,
                'email', @email,
                'img', @img,
                'isActive', @isActive,
                'createdAt', @createdAt
            ) AS data;
    END IF;

END;
