/* @flow */

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import HelloWorld from "./HelloWorld";
import { setName } from "~/reducers/name";

function mapStateToProps (state: any): Object {
  return {
    name: state.name
  };
}

function mapDispatchToProps (dispatch: any): Object {
  return bindActionCreators (
    {
      setName
    },
    dispatch
  );
}

export default connect (mapStateToProps, mapDispatchToProps) (HelloWorld);
