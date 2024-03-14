import CSUSB from './CSUSB.jpeg';
import './App.css';

function App() {
  return (
    <div classname="App">
  <header classname="App-header">
    <div className="about">
      <hr />
      <h1> About Me:</h1>
      <h2> Hi, I'm Erik Hernandez</h2>
      <h3> Computer Science Major | Software Engineer</h3>
  
      <hr />
    </div>
    <div className="csusbimg"> 
      <img src={CSUSB} alt="CSUSB" width={1250} length /> 
    </div>
    <div className="intro">
      <hr />
      <h2> Personal Info:</h2>
      <hr />
      <p> I am a 24 year old computer science major at CSUSB, I have been going to
        CSUSB now for over 2 years since transferring from Riverside City College.
        I am in my last semester here, I originally had thoughts about going to grad 
        school but have since changed my mind. I am a aspiring software engineer I have 
        been lucky to have some experience in field thanks to a couple of internships
        I've done over the past years. When I graduate I hope to hopefully a land a job so 
        that I can continue to grow and learn new skills because I am very passionate about
        this field. 
      </p>
      <hr /> 
    </div>
    <div className="skills">
      <hr />
      <h2> Skills:</h2>
      <hr />
      <p> As far as skills go the various programming langagues that I have used
        over the years ranging from being most comfortable with to least comfortable with have been:
        Python, C#, C++, and Java. Most of my time programming has been using mainly Python even though
        I started with C++ at first. I have done most of my school related projects using Python and small
        projects doing C++. Some of my biggest projects that I've been apart of and completed include making 
        a remote RC car using a phone app and making my own FPS video game. 
      </p>
      <hr /> 
    </div>
    <div className="hobbies"> 
      <hr />
      <h2> Hobbies &amp; Likes:</h2>
      <hr /> 
      <p> Other than programming, I have quite a lot of hobbies that I like to do on my
        free time. Some of my favorite hobbies include boxing, weight training, hiking,
        and gaming. I like being an active person which is why most of my hobbies include doing 
        intensive stuff like excersing. Since I also enjoy gaming, I also like to make my own
        little video games. As stated earlier, I have made own FPS game before with help of friends
        and have been making little games since I was in 6th grade when I use to have a computer teacher who would
        show me how to do it. 
      </p>
      <hr /> 
    </div>
  </header></div>
  );
}

export default App;
