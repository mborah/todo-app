import React from "react";
import { connect } from "react-redux";
import { VisibilityFilters } from "../actions";
import { setVisibilityFilter } from "../actions";

const Footer = ({ filters, dispatch }) => {
  //   console.log(filters);
  return (
    <div>
      <span>Show: </span>
      <button
        onClick={() => console.log(dispatch(setVisibilityFilter("SHOW_ALL")))}
      >
        All
      </button>
      <button>Active</button>
      <button>Completed</button>
    </div>
  );
};

const mapStateToProps = state => ({
  filters: state.visibilityFilters
});

export default connect(mapStateToProps)(Footer);
