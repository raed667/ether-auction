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
import { getNumberOfArticles, getArticle } from "./data";
// Style
import "./style.css";

const App = () => {
  const [error, setError] = React.useState("");
  const [accounts, setAccounts] = React.useState([]);
  const [articles, setArticles] = React.useState([]);

  const getAccounts = async () => {
    try {
      const users = await web3.eth.getAccounts();
      setAccounts(users);
    } catch (error) {
      setError("Accounts unvailable: Check if MetaMask is setup correctly.");
      console.warn(error);
    }
  };

  const getAllArticles = async () => {
    const result = [];

    const numberOfArticles = await getNumberOfArticles();

    for (let idx = 0; idx < numberOfArticles; idx++) {
      const article = await getArticle(idx);
      if (article) result.push(article);
    }

    setArticles(result);
  };

  React.useEffect(() => {
    getAccounts();
    getAllArticles();
  }, []);

  return (
    <Router>
      <TopBar accounts={accounts} />
      <Container maxWidth="md">
        <Box my={4}>
          <div className="content">
            {error && <Alert severity="warning">{error}</Alert>}
            <Switch>
              <Route
                exact
                strict
                path="/"
                render={props => <HomePage {...props} articles={articles} />}
              />
            </Switch>
            <Switch>
              <Route
                exact
                strict
                path="/article/:id"
                render={props => (
                  <Article
                    {...props}
                    article={articles[props.match.params.id]}
                    accounts={accounts}
                  />
                )}
              />
            </Switch>
            <Switch>
              <Route
                exact
                strict
                path="/add"
                render={props => <AddArticle {...props} accounts={accounts} />}
              />
            </Switch>
          </div>
          <Footer />
        </Box>
      </Container>
    </Router>
  );
};

export default App;
