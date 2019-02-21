#### Project Requirements

Build a project that will allow students and teachers to login, and view the homepage
The homepage will differ depending on whether they are a student or teacher
Allow a student to register (and it will send the new student an email)
Technologies
-Angular
-Spring
-Postgres or OracleDB RDS

---Part 1 Implement your DB: 15 Points
Make 2 tables in your db, one for users and one for user_role
    -Add a student and teacher role into the user_role table
    -have a foreign key in users to the primary key for user_role
Add some dummy data

--Part 2 Implement your Model *In Spring*: 15 Points
Create a User JAVABEAN (not just a pojo) that is mapped to your user db table

--Part 3 Implement your Data Layer: 10 Points
Create a user dao/repository
Make/implement 2 methods to persist & retrieve user records
      e.g.
    -getUserByUsername(User user) -will return a User record from the db
    -saveUser(User user) -will add a new User record to the db

--Part 4 Implement your Presentation Layer *Angular*: 25 Points
Create a login component with a form allowing a user to login 
    & the ability to navigate to register component
Create a register component with a form allowing a student to register (teachers already in the system)
Create a home component that will display information related to either a student or teacher
    depending on which has logged in

--Part 5 Implement your Service (or Logic) Layer: 25 Points
Create controller to handle the requests from the client
Create a UserService class that will contain methods needed to complete the tasks
Inside of UserService have method for registering a student
        
--Part 6 Style your view: 10 Points
Use CSS or Bootstrap or another Styling Library to make your html pages pretty
Finally:
Fully review your project code, and explain it from beginning to end by logging in as each user role
