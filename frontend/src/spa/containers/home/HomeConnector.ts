import { connect } from "react-redux";
import Home from "./Home";

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps, {
  dispatchEvent,
})(Home);
