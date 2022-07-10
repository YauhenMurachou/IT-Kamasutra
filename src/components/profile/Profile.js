import React, { memo } from 'react';
import { reduxForm } from 'redux-form';

import MypostsContainer from './myposts/MypostsContainer';
import ProfileInfo from './myposts/post/profileInfo/ProfileInfo';

import classes from './Profile.module.css'

const Profile = React.memo(props => {
	console.log('Profile---', props)

	return <div className={classes.content}>

		<ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
		<MypostsContainer />
	</div>
}
);

export default Profile;