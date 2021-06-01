import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./component/Footer";
import BookingSlot from './component/BookingSlot'
import Header from "./component/Header";
import { Container } from "@material-ui/core";
import LandingPage from "./pages/LandingPage";
import InstructorsPage from "./pages/InstructorsPage";
import ProfilePage from "./pages/ProfilePage";
import ConfrimSlotPage from "./pages/ConfrimSlotPage";
import BookingProcess from "./component/BookingProcess";

function App() {
  return (
    <Container>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/instructors" component={InstructorsPage} />
          <Route exact path="/booking" component={BookingSlot} />
          <Route exact path="/confirmslot" component={ConfrimSlotPage} />
          <Route exact path="/datepicker" component={BookingProcess} />
          <Route exact path="/:profileId" component={ProfilePage} />

        </Switch>
        <Footer />
      </Router>
    </Container>
  );
}

export default App;
