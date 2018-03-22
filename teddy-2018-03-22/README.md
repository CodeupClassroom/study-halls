# Study Hall

[Example Spreadhsheet](https://docs.google.com/spreadsheets/d/1CMj-lvvorHUBjK5TE4q9dw0LXu41p7ZRA-RQVDuerGY/edit?usp=sharing)

## Subqueryies and joins

- let us collect data together from multiple different tables
- usually involve *foreign keys*, a special type of column that references data
  from another table

## When to use a subquery vs a join?

- Anything you could do with a subquery you could also do with a join.

- In general, use whatever is makes your code easier to read and reason
  about. (for vs while)

- General rule of thumb: use a subquery when you don't care about data from
  another table, you just need to filter by it.

```sql
-- I need a list of names and github usernames for Teddy
SELECT name, github_username FROM users WHERE cohort_id IN (
    SELECT id FROM cohorts WHERE name = 'Teddy'
);
```

## What is a pivot table?

- necessary for a many to many relationship
- a table that (usually) contains two foreign keys i.e. connects two tables
  together
