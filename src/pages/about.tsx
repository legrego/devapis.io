import * as React from "react";
import Container from "../components/Layout/Container";

export default () => {
  return (
    <Container>
      <section>
        <h2>
          <i className="fa fa-info circle" />
          About
        </h2>
      </section>
      <section>
        <p>
          This starter was created by @fabien0102.
        </p>
        <p>
          For any question, I'm on <a href="https://discord.gg/2bz8EzW" target="blank">discord #reactiflux/gatsby</a>
        </p>
        <p>
          For any issues, any PR are welcoming
          <a href="https://github.com/fabien0102/gatsby-starter/issues" target="blank"> on this repository</a>
        </p>
      </section>
    </Container>
  );
};
