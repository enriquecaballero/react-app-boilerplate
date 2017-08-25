/* @flow */

import { connect } from "react-redux";
import StoreRenderer from "./StoreRenderer";

function mapStateToProps (state: any): Object {
  return {
    state
  };
}

export default connect (mapStateToProps) (StoreRenderer);
