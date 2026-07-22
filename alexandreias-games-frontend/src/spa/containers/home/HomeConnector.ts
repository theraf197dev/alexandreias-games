import { connect } from "react-redux";
import Home from "./Home";
import type { GlobalState } from "../../../types/globalTypes/state.types";

const mapStateToProps = (state: GlobalState) => ({
  isDesktop: state.appReducer.isDesktop,
  translations: state.appReducer.translations,
});

export default connect(mapStateToProps, {
  dispatchEvent,
})(Home);
