import React from 'react';

import Loader from '../../../../loader/Loader';
import ProfileStatus from './profilleStatus/ProfileStatus';

import classes from './ProfileInfo.module.css'

const ProfileInfo = (props) => {

	if (!props.profile) {
		console.log('ProfileInfo inside--', props)
		return <Loader />
	}

	console.log('ProfileInfo', props.profile)

	// let info = Object.entries(props.profile);

	let info = [];

	for (let prop in props.profile) {
		info.push(prop)
	}

	// if (props.profile.aboutMe) {
	// 	let aboutMe = props.profile.aboutMe
	// }	

	return <div>
		<div>
			<img className={classes.img} src='https://globe.by/wp-content/uploads/2017/01/Belarus.jpg' />
		</div>
		{/* 
		<div>
			<img src={props.profile.photos.large} />
		</div> */}
		{/* {props.profile.aboutMe.map(item => <div>{item}</div>)} */}

		<div>
			{info.map(p => {
				return <div> {p} </div>
			})}
		</div>

		<div className={classes.item}>
			{/* <img src={props.profile.photos.large} /> */}
			{/* ava + description */}
			<ProfileStatus status='Hello my friends!!'/>
		</div>
	</div>
};

export default ProfileInfo;


