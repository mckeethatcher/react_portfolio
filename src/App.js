import React from 'react';
import Accordion from './Accordion';
import './App.css';

import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <header>
        <ul>
          <li>
            <a href="web.html">Home</a>
          </li>

          <li>
            <a href="contacts.html">Contact</a>
          </li>
          <li>
            <a href="projects.html">Projects</a>
          </li>
        </ul>
        <h1>McKee Thatcher</h1>
      </header>

      <p className="welcome">
        Check out the projects tab to see what McKee is working on!
      </p>
      <h2>A Thirst to learn </h2>

      <main>
        <Accordion title="About me">
          <p>
            Growing up in Southern California near the famous Coachella music
            festival, music has always been a significant part of McKee's life.
            From a young age, McKee has been surrounded by the sounds of
            different genres and has developed a true passion for music. McKee
            has always been drawn to the art of expression and the way music can
            bring people together. Along with music, McKee has always had a
            fascination with learning new languages. Whether it be through
            classes, language exchange programs, or simply speaking with native
            speakers, McKee has made it a hobby to expand McKee's linguistic
            abilities. This combination of interests has shaped McKee into a
            well-rounded individual who is always seeking new experiences and
            ways to grow.
          </p>
        </Accordion>

        <Accordion title="Background">
          <p>
            Hi, my name is McKee. I have a passion for technology and have
            spent years learning to code in CSS, HTML, and JavaScript. My love
            for coding started when I realized the limitless possibilities it
            offers in designing        and creating beautiful and functional websites. I have honed my
        skills and I am now capable of creating dynamic and responsive
        websites that provide an optimal user experience.
        <br />
        Aside from my technical skills, I have also had a rich and diverse
        professional background. I spent several years living in Japan,
        where I worked as a translator. This experience allowed me to
        immerse myself in the language and culture, and it gave me a deep
        appreciation for the value of clear and effective communication.
        <br />
        More recently, I have worked as a training supervisor for new
        employees at Vivint, a leading provider of smart home technology.
        In this role, I was responsible for ensuring that new employees
        received the training and support they needed to succeed in their
        new positions. I was able to use my communication skills and
        technical expertise to help others, and I found this work to be
        extremely fulfilling.
        <br />
        Overall, I am a well-rounded individual who brings a unique
        combination of technical and interpersonal skills to the table. I am
        eager to use my abilities to contribute to new and exciting projects
        and to continue learning and growing in my career.
      </p>
    </Accordion>

    <Accordion title="Skills">
      <p>
        Meet McKee, a web developer with a strong foundation in CSS,
        JavaScript, and HTML. With a passion for constantly improving and
        expanding his skill set, McKee has set his sights on learning C++ and
        Python. As a creative and motivated individual, He have a desire to
        create dynamic and visually appealing websites that provide an
        exceptional user experience. With a strong work ethic and a
        willingness to continuously learn, McKee is well on their way to
        becoming a top-notch software developer.
      </p>
    </Accordion>
  </main>

  <footer>
    <ul>
      <li>
        <a href="web.html"></a>back to top
      </li>
    </ul>
  </footer>
</div>

);
}

export default App;
