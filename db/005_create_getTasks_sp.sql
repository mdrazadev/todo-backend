DROP PROCEDURE IF EXISTS getTasksByUserId;

CREATE PROCEDURE getTasksByUserId(
    IN p_userId INT
)
BEGIN
    SELECT 
        t.id,
        t.title,
        t.description,
        t.dueDate,
        t.isCompleted,
        t.userId
    FROM tasks t
    WHERE t.userId = p_userId
      AND t.deletedAt IS NULL
    ORDER BY t.id DESC;
END;
