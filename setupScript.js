const url = 'ws://localhost:PORT';
const connection = new WebSocket(url);

connection.onmessage = ({ data }) => {
	const skipButton = document.querySelector('.tp-ad-skip-button');
	if (skipButton) {
		skipButton.click();
		return;
	}

	console.log('the skip button was not found');
};
