import "./About.css";

function About({ profileImage, bio, skills }) {
  return (
    <div className="about">
      <img src={profileImage} alt="Profile" />
      <p>{bio}</p>
      <h4>Skills:</h4>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default About;
