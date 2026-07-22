import { connect } from "react-redux";
import Home from "./Home";

const mapStateToProps = (state) => ({
  isDesktop: state.appReducer.isDesktop,
  translations: state.appReducer.translations,
});

export default connect(mapStateToProps, {
  dispatchEvent,
})(Home);
