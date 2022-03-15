const requestApi = async () => {
	const result = await fetch('https://api.adviceslip.com/advice', {
		method: 'get',
	});
	const data = await result.json()
	return data;
}

const quote = document.getElementById('quote');
const title = document.getElementById('title');

const button = document.getElementById('advice__icon');
button.addEventListener('click', async () => {
	const advice = await requestApi();

	title.innerText = `Advice #${advice.slip.id}`
	quote.innerText = advice.slip.advice;
})
