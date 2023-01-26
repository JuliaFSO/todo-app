import React from 'react';
import PageHeader from '../template/pageHeader';

 const About = () => (
  <div>
    <PageHeader name='About' />
      <div className="content">
        <div className="col">
          <h2>ToDo-App</h2>
          <p><strong>ToDo-App</strong> is designed to help you stay organized and on top of your daily tasks and responsibilities.
          With a user-friendly interface and a variety of features, this app makes it easy for you to create, manage,
          and track your to-do list. Whether you're a busy professional, a student, or simply someone looking to stay
          organized, this app has something for you.</p>
          <p><strong>ToDo-App Version 1.0 - React with no redux</strong></p>
        </div>
        <div class="col">
          <h2>About me</h2>
          <p>I'm <strong>Julia Fachin</strong>, a <strong>full-stack developer</strong> dedicated to constantly improve my skills. I'm currently enrolled
          in a React + Redux course, where I learned how to build this to-do app. </p>
       </div>
    </div>
  </div>
)

export default About;
