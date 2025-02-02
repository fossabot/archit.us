import React from "react";
import PropTypes from "prop-types";

import "./style.scss";
import HeroImage from "assets/begin-hero.inline.svg";

function Begin({ openAddGuild }) {
  return (
    <div className="begin">
      <div>
        <div
          className="begin--hero-img"
          dangerouslySetInnerHTML={{ __html: HeroImage }}
        />
        <h2>Web Dashboard</h2>
        <p>Select a server on the left or add aut-bot to a server to begin</p>
        <button onClick={openAddGuild}>
          Add <strong> aut-bot </strong> to a server
        </button>
      </div>
    </div>
  );
}

export default Begin;

Begin.propTypes = {
  openAddGuild: PropTypes.func
};
