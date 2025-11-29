DROP PROCEDURE IF EXISTS getDashboardData;

CREATE PROCEDURE getDashboardData(
    IN p_userId INT
)
BEGIN
    -- Total count
    SELECT COUNT(*) AS totalCount
    FROM tasks
    WHERE userId = p_userId
      AND deletedAt IS NULL;

    -- Completed count
    SELECT COUNT(*) AS completedCount
    FROM tasks
    WHERE userId = p_userId
      AND isCompleted = TRUE
      AND deletedAt IS NULL;

    -- Pending count
    SELECT COUNT(*) AS pendingCount
    FROM tasks
    WHERE userId = p_userId
      AND isCompleted = FALSE
      AND deletedAt IS NULL;

    -- Pending tasks list
    SELECT 
        id,
        title,
        description,
        dueDate,
        isCompleted,
        userId
    FROM tasks
    WHERE userId = p_userId
      AND isCompleted = FALSE
      AND deletedAt IS NULL
    ORDER BY id DESC;

    -- Completed tasks list
    SELECT 
        id,
        title,
        description,
        dueDate,
        isCompleted,
        userId
    FROM tasks
    WHERE userId = p_userId
      AND isCompleted = TRUE
      AND deletedAt IS NULL
    ORDER BY id DESC;

END;
