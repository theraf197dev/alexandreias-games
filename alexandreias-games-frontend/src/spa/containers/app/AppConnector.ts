import { connect } from "react-redux";
import App from "./App";
import { getTranslations } from "../../core/app/actions";

const mapStateToProps = (state) => ({
  translations: state.appReducer.translations,
});

export default connect(mapStateToProps, {
  dispatchEvent,
  getTranslations,
})(App);
