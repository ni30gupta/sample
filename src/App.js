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
import Booking2 from "./component/Booking2";
import PaymentPage from "./pages/PaymentPage";

function App() {
  return (
    <Container>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/instructors" component={InstructorsPage} />
          {/* <Route exact path="/booking" component={BookingSlot} /> */}
          <Route exact path="/confirmslot" component={ConfrimSlotPage} />
          <Route exact path="/payment" component={PaymentPage} />
          <Route exact path="/booking" component={Booking2} />
          <Route exact path="/:profileId/profile" component={ProfilePage} />
          {/* <Route exact path="/booking/:profileId/:classes_type" component={BookingProcess} /> */}

        </Switch>
        <Footer />
      </Router>
    </Container>
  );
}

export default App;
