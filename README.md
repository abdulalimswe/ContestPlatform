# Contest Platform & Online Judge

This platform is a web-based contest system that allows users to solve coding problems, submit their solutions, and receive feedback on their submissions. The system also supports problem creation, submission history, and more.

## Features

### Core Features
- [x] **Authentication and Authorization**: Secure user login and registration.
- [x] **Submit Your Code**: Users can submit solutions to coding problems.
- [x] **Test Your Code**: Solutions are tested against predefined test cases.
- [ ] **Results**: Time (sec) and Memory (MB) consumption displayed for each submission.
- [ ] **Verdicts**: Results for each submission, including:
  - **Time Limit Exceeded (TLE)** ![](https://www.codechef.com/misc/clock_error.png)
  - **Memory Limit Exceeded (MLE)** ![](https://www.codechef.com/misc/runtime-error.png)
  - **Compilation Error (CE)** ![](https://s3.amazonaws.com/codechef_shared/misc/alert-icon.gif)
  - **Runtime Error (RTE)** ![](https://www.codechef.com/misc/runtime-error.png)
  - **Wrong Answer (WA)** ![](https://www.codechef.com/misc/cross-icon.gif)
  - **Accepted (AC)** ![](https://www.codechef.com/misc/tick-icon.gif)
- [x] **View Your Submissions**: Track previous submissions and their results.
- [ ] **Filter Problems by Tags**: Sort problems based on difficulty or tags.
- [ ] **Search Problems by Name**: Find problems quickly using search functionality.
- [ ] **Dashboard for Statistics**: View stats such as solved problems and accuracy.
- [x] **Create Coding Problems**: Admins can add and manage coding problems.
- [x] **Email Verification**: Users need to verify their email upon registration.
- [x] **Forgot Password**: Password recovery feature via email.
- [ ] **Leaderboard**: Display rankings for ongoing contests.


## Technology Stack

- **Frontend**: ReactJS, Ant Design
- **Backend**: Spring Boot (Java 21)
- **Database**: MySQL
- **Authentication**: JWT (JSON Web Tokens), Spring Security
- **Design Patterns**:Singleton




