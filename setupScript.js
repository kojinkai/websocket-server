const url = 'ws://localhost:PORT';
const connection = new WebSocket(url);

connection.onmessage = ({ data }) => {
	const skipButton = document.querySelector('.ytp-ad-skip-button-container button');
	if (skipButton) {
		skipButton.click();
		return;
	}

	console.log('the skip button was not found');
};
