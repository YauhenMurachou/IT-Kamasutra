import React from 'react';

import classes from './Message.module.css';

const Message = (props) => {
	return <div className={classes.message}>
		{props.message}
	</div>
}

// const Message = (props) => {

// 	let newMessageElement = React.createRef();

	
// 	return (
// 		<div>
// 			<div className={classes.message}>
// 				{props.message}
// 			</div>

// 			<div>
// 				<textarea ref={newMessageElement}></textarea>
// 			</div>
// 			<button className={classes.addButton} 
// 			// onClick={writeMessage}
// 			>
// 				Write message
// 			</button>
// 		</div>
// 	)

// }




export default Message;