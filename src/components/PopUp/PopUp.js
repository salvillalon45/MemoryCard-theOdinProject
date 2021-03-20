// -----------------------------------------------
//
// Components -> PopUp.js
// Desc: PopUp to show game status
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import React from 'react';

// Bootstrap
import Button from 'react-bootstrap/Button';
// -----------------------------------------------

function PopUp(props) {
	const { text, nextStepText, step } = props;

	function nextStep() {
		props.handleReset(step);
		props.handleGameCheck(false);
	}

	function generatePopUpContent() {
		return (
			<>
				<p className='whiteText xxxLarge'>Game Over!</p>
				<p className='whiteText xxxLarge'>{text}</p>

				<div className='buttonContainer'>
					<Button className='xLarge' onClick={() => nextStep()}>
						{nextStepText}
					</Button>
				</div>
			</>
		);
	}

	return (
		<div className='popup-container'>
			<div className='popup'>{generatePopUpContent()}</div>
		</div>
	);
}

export default PopUp;
