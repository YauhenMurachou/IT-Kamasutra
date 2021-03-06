import React from 'react';
import { connect } from 'react-redux';

import './Header.css';

import Header from './Header';
import { setUserDataActionCreator } from '../../redux/authReducer';
import usersApi from '../../api/api';

class HeaderContainer extends React.Component {

	componentDidMount() {

		usersApi.setLogin().then(data => {

			if (data.resultCode === 0) {
				let { id, email, login } = data.data;
				this.props.setAuthUserData(id, email, login)
			}
		})
	}

	render() {
		return <>
			<Header {...this.props} />
		</>
	}
};

let mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login
})

export default connect(mapStateToProps, { setAuthUserData: setUserDataActionCreator })(HeaderContainer);