-- 1. Combine Two Tables
SELECT  p.firstname,p.lastname,a.city,a.state FROM Person AS p LEFT JOIN Address AS a ON p.personId = a.personId
-- 2. Second Highest Salary
SELECT MAX(salary) AS SecondHighestSalary FROM Employee WHERE salary < (SELECT MAX(salary) FROM Employee)
-- 3. Nth Highest Salary
CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
  declare M INT;
  set M=N-1;
  RETURN (
      # Write your MySQL query statement below.
      SELECT DISTINCT salary FROM Employee ORDER BY salary DESC LIMIT 1 offset M
  );
END
-- 4. Rank Scores
-- 5. Consecutive Numbers
-- 6. Employees Earning More Than Their Managers
SELECT t1.name AS Employee FROM Employee t1 WHERE t1.salary>(SELECT salary From Employee AS t2 where t1.managerId=t2.id)
-- 7. Duplicate Emails
SELECT DISTINCT p1.email AS Email From Person AS p1 WHERE 1<(SELECT COUNT(email) FROM Person WHERE email=p1.email) 
-- 8. Customers Who Never Order
SELECT name AS Customers FROM Customers WHERE id <> ALL (SELECT customerId FROM Orders)
-- 9. Department Highest Salary
SELECT d.name as Department, e.name AS Employee,e.salary AS Salary FROM Department AS d,Employee AS e
WHERE d.id=e.departmentId AND e.salary = (SELECT MAX(salary) FROM Employee WHERE departmentId = e.departmentId )
-- 10. Department Top Three Salaries
-- 11. Delete Duplicate Emails
-- 12. Rising Temperature
-- 13. Trips and Users
-- 14. Find Customer Referee
SELECT name FROM Customer WHERE referee_id <> 2 OR referee_id IS NULL
-- 15. Customer Placing the Largest Number of Orders
-- 16. Big Countries
SELECT name, population,area FROM World WHERE area>=3000000 OR population >=25000000
-- 17. Classes More Than 5 Students
SELECT class FROM Courses GROUP BY class HAVING COUNT(class)>=5
-- 18. Human Traffic of Stadium
-- 19. Sales Person
SELECT s.name FROM SalesPerson AS s WHERE  s.sales_id NOT IN (
  SELECT o.sales_id FROM Orders AS o LEFT JOIN Company AS c
  ON 
  c.com_id=o.com_id WHERE
   c.name="RED"
  ) 
-- 20. Tree Node
SELECT id,
CASE WHEN p_id IS NULL THEN "Root"
WHEN id in (SELECT DISTINCT t1.p_id FROM Tree AS t1 ) THEN "Inner"
ELSE "Leaf"
END AS type
FROM Tree
-- 21. Not Boring Movies
SELECT * FROM Cinema WHERE id%2=1 AND description<>"boring" ORDER BY rating DESC
-- 22. Exchange Seats
-- 23. Swap Salary
UPDATE Salary SET sex=
CASE WHEN sex="m" THEN "f"
ELSE "m"
END
-- 24. Actors and Directors Who Cooperated At Least Three Times
SELECT actor_id,director_id FROM ActorDirector GROUP BY actor_id,director_id HAVING COUNT(*)>2
-- 25. Sales Analysis III
-- 26. Game Play Analysis I
-- 27. User Activity for the Past 30 Days I
SELECT activity_date AS day, COUNT( DISTINCT user_id) as active_users FROM Activity GROUP BY activity_date 
HAVING activity_date <='2019-07-27' AND activity_date >='2019-06-28'
-- 28. Article Views I
SELECT DISTINCT author_id AS id FROM Views WHERE author_id=viewer_id ORDER BY author_id
-- 29. Market Analysis I
-- 30. Reformat Department Table
-- 31. Capital Gain/Loss
-- 32. Top Travellers
SELECT u.name,
CASE WHEN (SELECT SUM(distance) FROM Rides WHERE user_id=u.id) IS NULL THEN 0
ELSE (SELECT SUM(distance) FROM Rides WHERE user_id=u.id)
END AS travelled_distance FROM Users AS u ORDER BY travelled_distance DESC, name
-- 33. Group Sold Products By The Date
-- 34. Patients With a Condition
-- 35. Customer Who Visited but Did Not Make Any Transactions
-- 36. Bank Account Summary II
-- 37. Fix Names in a Table
-- 38. Daily Leads and Partners
-- 39. Find Followers Count
-- 40. Find Total Time Spent by Each Employee
-- 41. Recyclable and Low Fat Products
-- 42. Rearrange Products Table
-- 43. Calculate Special Bonus
-- 44. The Latest Login in 2020
-- 45. Employees With Missing Information