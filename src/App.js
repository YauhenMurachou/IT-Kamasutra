import React from 'react';
import HeaderContainer from './components/header/HeaderContainer';
import Navbar from './components/navbar/Navbar';
import ProfileContainer from './components/profile/ProfileContainer';
import DialogsContainer from './components/dialogs/DialogsContainer';
import Feed from './components/feed/Feed';
import Photos from './components/photos/Photos';
import Settings from './components/settings/Settings';
import UsersContainer from './components/users/UsersContainer';

import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';


const App = (props) => {

	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<HeaderContainer />
				<Navbar />
				<div className='app-wrapper-content'>

					<Route path='/Dialogs' render={() => <DialogsContainer

					// dialogsData={props.state.dialogsPage.dialogsData}
					// messageData={props.state.dialogsPage.messageData}
					// newMessageText={props.state.dialogsPage.newMessageText}
					// dispatch={props.dispatch}

					// store={props.store}
					/>} />

					<Route path='/Profile/:userId?' render={() => <ProfileContainer

					// postsData={props.state.profilePage.postsData}
					// dispatch={props.dispatch}
					// newPostText={props.state.profilePage.newPostText}

					// store={props.store}
					/>} />


					<Route path='/Feed' component={Feed} />
					<Route path='/Photos' component={Photos} />
					<Route path='/Settings' component={Settings} />
					<Route path='/Users' render={() => <UsersContainer />} />
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
