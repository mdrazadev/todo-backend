DROP PROCEDURE IF EXISTS getTaskByIdAndUserId;

CREATE PROCEDURE getTaskByIdAndUserId(
    IN p_taskId INT,
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
    WHERE t.id = p_taskId
      AND t.userId = p_userId
      AND t.deletedAt IS NULL
    LIMIT 1;
END;
