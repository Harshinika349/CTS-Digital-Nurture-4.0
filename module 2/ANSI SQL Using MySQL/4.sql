SELECT s.event_id, COUNT(*) AS sessions_between_10_12
FROM Sessions s
WHERE TIME(s.start_time) >= '10:00:00' AND TIME(s.end_time) <= '12:00:00'
GROUP BY s.event_id;
