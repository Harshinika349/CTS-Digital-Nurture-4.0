SELECT u.user_id, u.full_name, e.status, COUNT(e.event_id) AS event_count
FROM Users u
LEFT JOIN Events e ON u.user_id = e.organizer_id
GROUP BY u.user_id, u.full_name, e.status;
