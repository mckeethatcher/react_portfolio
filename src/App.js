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
      <h1>Projects</h1>
    <ul>
      <li>
        <a href="https://underground-artist-front.herokuapp.com" class="project-link">Underground Artist Finder</a>
        <p>Are you tired of hearing the same old mainstream songs on Spotify? Look no further than the Underground Artist Finder app! This app uses advanced algorithms to help you discover new and exciting underground artists from all around the world. With a simple search function, you can easily find artists that match your preferred music genres and start listening to their music right away. The app also features a rating system, allowing you to rate and recommend your favorite underground artists to others. With the Underground Artist Finder, you can broaden your music horizons and discover hidden gems in the world of music.</p>
      </li>
      <li>
        <a href="https://stargazer-front420.onrender.com/" class="project-link">Stargazer</a>
       
		<p>The stargazer app is an all-in-one tool designed to provide users with a comprehensive data and feature set for an optimal stargazing experience. The app includes a weather tracker that keeps users informed about current and upcoming conditions in their area, ensuring that they have clear skies for their stargazing sessions. Additionally, the app provides real-time solar activity data, helping users identify the best times to view various celestial events. To help users navigate the night sky, the app includes interactive star charts that provide detailed information about stars, planets, and other celestial objects visible at any given time. The charts can be customized based on the user's location and time of day, making it easy to identify and track specific objects in the sky. Moreover, the app includes a social component, allowing users to share photos they've taken with their devices and post them to the app's community forum. Users can add location data to their photos, allowing other users to see where they were taken and discover new stargazing spots in their area. Overall, the star-gazing app is a must-have tool for anyone interested in astronomy or looking to enhance their stargazing experience, providing them with all the information and features they could possibly need in one convenient app.</p>
	</li>

      <li>
        <a href="https://climate-change-frontend.onrender.com/" class="project-link">Cli-Mate Change</a>
		<p>This app uses real-time weather data to provide a three-day forecast for any location, and based on that information, it suggests what clothing and accessories you should pack for your trip. By taking the guesswork out of packing, it helps you be prepared for any weather conditions you may encounter on your journey.</p>
      </li>
    </ul>
  

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
