import React from 'react';

const AboutUs = () => {
  return (
    <section className="about-us">
      <h2>About Us</h2>
      <p>
        We are a passionate team dedicated to empowering individuals on their fitness journeys. Our innovative app provides a comprehensive array of tools and resources to help you achieve your fitness goals, whether you're a beginner or a seasoned athlete.
      </p>
      <h2>Meet the Team</h2>
      <div className="team">
        <article className="team-member">
          {/* <img src="images/team-member-1.jpeg" alt="John Doe" /> */}
          <h3>John Doe</h3>
          <p>Fitness Expert</p>
          <p>
            John brings over 10 years of experience in the fitness industry. He's passionate about helping people reach their full potential and enjoys incorporating a holistic approach to fitness.
          </p>
        </article>
        <article className="team-member">
          {/* <img src="images/team-member-1.jepg" alt="John Doe" /> */}
          <h3>John Doe</h3>
          <p>Fitness Expert</p>
          <p>
            John brings over 10 years of experience in the fitness industry. He's passionate about helping people reach their full potential and enjoys incorporating a holistic approach to fitness.
          </p>
        </article>
        
        {/* Repeat the team-member structure for each team member */}

        
      </div>
    </section>
  );
};

export default AboutUs;
