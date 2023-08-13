import "bulma/css/bulma.css";
import discordjs from "./images/discordjs.png";
import expressjs from "./images/expressjs.png";
import reactjs from "./images/reactjs.png";
import vuejs from "./images/vuejs.png";
import "./App.css";
import Module from "./Module";

function App() {
  return (
    <>
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">Projede kullanılan paketler</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <Module
                image={discordjs}
                title="Discord.js"
                description="discord.js is a powerful Node.js module that allows you to interact with the Discord API very easily. It takes a much more object-oriented approach than most other JS Discord libraries, making your bot's code significantly tidier and easier to comprehend."
              />
            </div>
            <div className="column">
              <Module
                image={expressjs}
                title="Express.js"
                description="Web Applications
Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications."
              />
            </div>
            <div className="column">
              <Module
                image={reactjs}
                title="React.js"
                description="React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes."
              />
            </div>
            <div className="column">
              <Module
                image={vuejs}
                title="Vue.js"
                description="Builds on top of standard HTML, CSS and JavaScript with intuitive API and world-class documentation."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
