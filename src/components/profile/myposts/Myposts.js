import React from 'react';

import classes from './Myposts.module.css';

import Post from './post/Post.js';

const Myposts = (props) => {

	let newPostElement = React.createRef();

	let addPostButton = () => {
		props.addPostButton()
	}

	let onPostChange = () => {
		let text = newPostElement.current.value

		props.onPostChange(text)
	}

	let posts = props.postsData.map(post => <Post message={post.message} likesCount={post.likesCount} id={post.id} />)

	return <div>
		<h3 className={classes.item}>My posts</h3>
		<div className={classes.item}>
			<div>
				<textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} />
			</div>
			<div>
				<button className={classes.addButton} onClick={addPostButton}>
					Add post
				</button>

				<button>
					Remove post
				</button>
			</div>
		</div>
		<div className={classes.item}>
			{posts}
		</div>
	</div>
};

export default Myposts;


