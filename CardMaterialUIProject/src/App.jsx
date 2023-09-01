import { AppBar, Container, Grid, Toolbar } from "@mui/material";
import "./App.css";
import discordjs from "./images/discordjs.png";
import expressjs from "./images/expressjs.png";
import reactjs from "./images/reactjs.png";
import vuejs from "./images/vuejs.png";
import { CardComponent as Card } from "./components/CardComponent";
function App() {
  return (
    <div>
      <AppBar>
        <Toolbar sx={{ fontSize: 30 }}>Kart Projesi</Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Grid container spacing={2} sx={{ marginTop: 10 }}>
          <Grid item xs={12} md={6} lg={3}>
            <Card
              image={discordjs}
              title="DiscordJs"
              description="  Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, eligendi nobis cumque pariatur quia quasi voluptatum
            dolorem consectetur quo iure cupiditate provident dolorum aperiam
            iste inventore. Possimus quae voluptatibus ipsa."
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Card
              image={expressjs}
              title="ExpressJs"
              description="  Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, eligendi nobis cumque pariatur quia quasi voluptatum
            dolorem consectetur quo iure cupiditate provident dolorum aperiam
            iste inventore. Possimus quae voluptatibus ipsa."
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Card
              image={reactjs}
              title="ReactJs"
              description="  Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, eligendi nobis cumque pariatur quia quasi voluptatum
            dolorem consectetur quo iure cupiditate provident dolorum aperiam
            iste inventore. Possimus quae voluptatibus ipsa."
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Card
              image={vuejs}
              title="VueJs"
              description="  Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, eligendi nobis cumque pariatur quia quasi voluptatum
            dolorem consectetur quo iure cupiditate provident dolorum aperiam
            iste inventore. Possimus quae voluptatibus ipsa."
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
