import React from 'react';
import MypostsContainer from './myposts/MypostsContainer';
import ProfileInfo from './myposts/post/profileInfo/ProfileInfo';
import classes from './Profile.module.css'

const Profile = (props) => {
	// console.log('Profile', props.profile)
	return <div className={classes.content}>

		<ProfileInfo profile={props.profile} />
		<MypostsContainer />
	</div>
};

export default Profile;