import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// UI
import { Box, Container } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
// Pages
import { AddArticle } from "./pages/AddArticle/AddArticle";
import { HomePage } from "./pages/HomePage/HomePage";
import { Article } from "./pages/Article/Article";
// Components
import { Footer } from "./components/Footer";
import { TopBar } from "./components/TopBar";
// Helpers
import web3 from "./helpers/web3";
// Style
import "./style.css";

const App = () => {
  const [error, setError] = React.useState("");
  const [accounts, setAccounts] = React.useState([]);

  const getAccounst = async () => {
    try {
      const users = await web3.eth.getAccounts();
      setAccounts(users);
    } catch (error) {
      setError("Accounts unvailable: Check if MetaMask is setup correctly.");
      console.warn(error);
    }
  };

  React.useEffect(() => {
    getAccounst();
  }, []);

  return (
    <Router>
      <TopBar accounts={accounts} />
      <Container maxWidth="md">
        <Box my={4}>
          <div className="content">
            {error && <Alert severity="warning">{error}</Alert>}
            <Switch>
              <Route exact strict path="/" component={HomePage} />
            </Switch>
            <Switch>
              <Route exact strict path="/add" component={AddArticle} />
            </Switch>
            <Switch>
              <Route exact strict path="/article/:id" component={Article} />
            </Switch>
          </div>
          <Footer />
        </Box>
      </Container>
    </Router>
  );
};

export default App;
