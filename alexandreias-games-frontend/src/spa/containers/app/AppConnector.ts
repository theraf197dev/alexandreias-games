import { connect } from "react-redux";
import App from "./App";
import { fetchTranslations, updateDeviceResolution } from "../../core/app/actions";

const mapStateToProps = (state) => ({
  isDesktop: state.appReducer.isDesktop,
  translations: state.appReducer.translations,
});

export default connect(mapStateToProps, {
  dispatchEvent,
  fetchTranslations,
  updateDeviceResolution,
})(App);
