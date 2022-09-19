import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import React from "react";

import { messages as enMessages } from "./locales/en/messages";
import { messages as faMessages } from "./locales/fa/messages";
import About from "./About";

import { Trans } from "@lingui/macro";
import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";

i18n.load({
  en: enMessages,
  fa: faMessages,
});

function App() {
  const [activeLang, setActiveLang] = React.useState("fa");
  const [about, setAbout] = React.useState(false);
  i18n.activate(activeLang); 
  return (
    <I18nProvider i18n={i18n}> 
      <Navbar bg="light" fixed="top">
        <Container>
          <Navbar.Brand href="/">
            <Trans>
              Vazhe
            </Trans>
          </Navbar.Brand>
          <Navbar.Collapse>
            <Nav className="me-auto">
              <Nav.Link onClick={() => setAbout(true)}>
                <Trans>About</Trans>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <About show={about} closeCb={() => setAbout(false)}/>
    </I18nProvider>
  );
}

export default App;
