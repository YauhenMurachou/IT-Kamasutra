import React from 'react';
import classes from './ProfileInfo.module.css'

const ProfileInfo = () => {
	return <div>
		<div>
			<img className={classes.img} src='https://globe.by/wp-content/uploads/2017/01/Belarus.jpg' />
		</div>
		<div className={classes.item}>
			ava + description
		</div>
	</div>
};

export default ProfileInfo;

