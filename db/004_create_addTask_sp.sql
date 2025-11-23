DROP PROCEDURE IF EXISTS addTask;

CREATE PROCEDURE addTask(
    IN p_title VARCHAR(255),
    IN p_description TEXT,
    IN p_dueDate DATE,
    IN p_isCompleted BOOLEAN,
    IN p_userId INT
)
BEGIN
    DECLARE userExists INT DEFAULT 0;

    -- Check if user exists
    SELECT COUNT(*) INTO userExists
    FROM users
    WHERE id = p_userId;

    IF userExists = 0 THEN
        SELECT 
            FALSE AS success,
            'User does not exist' AS message;
    ELSE
        INSERT INTO tasks (title, description, dueDate, isCompleted, userId)
        VALUES (p_title, p_description, p_dueDate, p_isCompleted, p_userId);

        SELECT 
            TRUE AS success,
            'Task created successfully' AS message,
            LAST_INSERT_ID() AS taskId;
    END IF;
END;
