import React from 'react';
import { connect } from 'react-redux';

function SecondApp(props) {
    return <div>{props.comments}</div>;
}
const mapStateToProps = state => state;
export default connect(mapStateToProps, null)(SecondApp);
