<h1 align="center"> 🧑‍🎓 Student Statistic Tracker: Complete Back-End </h1>
<div align="center">
  <p>The student statistic tracker is a complete back-end API built in Node / Express, with a Mongo DB database and Mongoose ODM.</p>
  <p>The project was an assignment for the <a href="https://gist.github.com/djbowen95/2846640d520a16165b9b23db2d9e0926"><strong>University of Birmingham Full-Stack Development Coding Bootcamp</strong></a>. It was built from starter code.</p>

<a href="https://djbowen95.github.io/Student-Stat-Tracker/"><img src="https://img.shields.io/badge/Not%20currently%20deployed%20-e34c02?style=flat-square" alt="deployed link badge"></a>
  <a href="https://github.com/djbowen95/Student-Stat-Tracker/releases/latest"><img src="https://img.shields.io/github/v/release/djbowen95/Student-Stat-Tracker?style=flat-square&color=FDA325" alt="current release tag badge"></a>
  <a href="https://github.com/djbowen95/Student-Stat-Tracker/releases/latest"><img src="https://img.shields.io/github/release-date/djbowen95/Student-Stat-Tracker?style=flat-square&color=FDA325" alt="current release date badge"></a>
  <br/>
  <a href="https://github.com/djbowen95/Student-Stat-Tracker/issues"><img src="https://img.shields.io/github/issues/djbowen95/Student-Stat-Tracker?style=flat-square&color=E5E5E5" alt="badge for total number of issues on this repo"></a>
  <a href="https://github.com/djbowen95/Student-Stat-Tracker/issues?q=is%3Aissue+is%3Aopen+label%3Aenhancement"><img src="https://img.shields.io/github/issues/djbowen95/Student-Stat-Tracker/enhancement?style=flat-square&label=enhancements&color=b8dcff" alt="issues tagged with enhancements"></a>
  <a href="https://github.com/djbowen95/Student-Stat-Tracker/issues?q=is%3Aissue+is%3Aopen+label%3Abug"><img src="https://img.shields.io/github/issues/djbowen95/Student-Stat-Tracker/bug?style=flat-square&label=bugs&color=fedfb1" alt="issues tagged as bugs"></a>
  <a href="https://github.com/djbowen95/Student-Stat-Tracker/issues?q=is%3Aissue+label%3Abug+is%3Aclosed"><img src="https://img.shields.io/github/issues-closed/djbowen95/Student-Stat-Tracker?style=flat-square&color=8E8E8E" alt="closed issues"></a>
  <br/>
  <a href="https://github.com/djbowen95/Student-Stat-Tracker/commits/main"><img src="https://img.shields.io/github/commit-activity/t/djbowen95/Student-Stat-Tracker?style=flat-square&color=1348ba" alt="badge for number of commits"></a>
  <a href="https://github.com/djbowen95/Student-Stat-Tracker/pulse"><img src="https://img.shields.io/github/repo-size/djbowen95/Student-Stat-Tracker?style=flat-square&color=E5E5E5" alt="repo size"></a>
  <a href="https://github.com/djbowen95/Student-Stat-Tracker/blob/main/LICENSE"><img src="https://img.shields.io/github/license/djbowen95/Student-Stat-Tracker?style=flat-square&color=00df54" alt="license badge"></a>
  <a href="#contact"><img src="https://img.shields.io/badge/Contact!%20-1348ba?style=flat-square" alt="link to contact section"></a>
  <br/>
</div>

## Contents
1. [About](#about)
2. [User Guide](#user-guide)
3. [Key Features](#key-features)
4. [Testing](#testing)
5. [Version History](#version-history)
6. [Contact](#contact)

## About
This project was a <strong>classroom assignment</strong> for the <strong>[University of Birmingham Full-Stack Development Coding Bootcamp](https://gist.github.com/djbowen95/2846640d520a16165b9b23db2d9e0926)</strong>: a 24-week intensive coding bootcamp programme that aimed to teach us the full-range of skills required for <strong>front-end</strong>, <strong>back-end</strong> and <strong>React development</strong>. This project was assigned during <strong>Week 18</strong>, which covered <strong>NoSQL Databases with MongoDB</strong>.

You can view the project brief [here](https://github.com/djbowen95/Student-Stat-Tracker/blob/main/docs/BRIEF.md).

## User Guide
This RESTful API is built with a series of queries to a database that contains courses, students, and assignments. <br/>
The following routes can be used to manipulate course data:
 - Read data for all courses, with `GET:` `localhost:3001/api/courses/`
 - Create a record for a new course, with `POST:` `localhost:3001/api/courses/` and `{ "courseName": $yourCourseHere }` body
 - Read a single course by id, with `GET:` `localhost:3001/api/courses/:yourCourseId`
 - Update a course, with `PUT:` `localhost:3001/api/courses/:yourCourseId`
 - Delete a course, with `DELETE:` `localhost:3001/api/courses/:yourCourseId` 
The following routes can be used to manipulate student data:
 - Read data for all students, with `GET:` `localhost:3001/api/students`
 - Create a record for a new student, with `POST:` `localhost:3001/api/students/` and `{ first, last, github }` body 
 - Read data for a single student by id, with `GET:` `localhost:3001/api/students/:yourStudentId`
 - Delete a student record, with `DELETE:` `localhost:3001/api/students/:yourStudentId`
The following routes can be used to manipulate data about assignments:
 - Add an assignment to a student's record, with `POST:` `localhost:3001/api/students/:yourStudentId/assignments/` and optional `{ assignmentName }` body
 - Get record of an individual assignment with `GET:` `localhost:3001/api/students/:yourStudenId/assignments/:yourAssignmentId`
 - Delete record of an assignment, with `DELETE:` `localhost:3001/api/students/:yourStudenId/assignments/:yourAssignmentId`

## Version History
### 0.0.0 Starter Code
This project was built with starter code - I have presented these as a release, so you can see which work is my own.

## Contact
You can contact me at djbowen95@gmail.com, to collaborate or if you are looking to hire.
