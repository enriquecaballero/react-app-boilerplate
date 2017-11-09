import { connect } from "react-redux";
import StoreRenderer from "./StoreRenderer";

function mapStateToProps (state): Object {
  return {
    state
  };
}

export default connect (mapStateToProps) (StoreRenderer);
