window.onload = () => {
	const buttonSortSelection = document.getElementById('js-buttonSortSelection');
	const buttonSortBuble = document.getElementById('js-buttonSortBuble');

	buttonSortBuble.onclick = () => {
	    if (document.getElementById('js-numbers').value) {
	    	const userInput = document.getElementById('js-numbers').value.split(',');
	    	for (let i = 0; i < userInput.length; i++) {
	    		userInput[i] = Number(userInput[i]);
	      }
	    	sendSortRequest('sortBubble', userInput);
	    } else {
	    	alert('Oh no! The input is empty 😭');
	    }
    }

	buttonSortSelection.onclick = () => {
		if (document.getElementById('js-numbers').value) {
	    	const userInput = document.getElementById('js-numbers').value.split(',');
	    	for (let i = 0; i < userInput.length; i++) {
	    		userInput[i] = Number(userInput[i]);
	      	}
	    	sendSortRequest('sortSelection', userInput);
	    } else {
	    	alert('Oh no! The input is empty 😭');
	    }
	}

	function sendSortRequest(requestType, userInput) {
    axios.post('http://89.223.26.226:5000/' + requestType, {
        array: userInput
    })
        .then( function(response) {
            console.log(response);
            setResultScore(response.data.resolveTime, response.data.result);
        })
    }

    function setResultScore(score, sortedArray){
    	document.getElementById('js-resultScore').innerText = score + " second";
    	document.getElementById('js-resultSortedArray').innerText = sortedArray;
    	document.getElementById('js-result').classList.add('-visible');
    }

    let bigArray = [];

    for(let i = 0; i < 3000; i++) {
    	bigArray.push(Math.floor(Math.random()*Math.floor(3000)));
    }

    document.getElementById('js-numbers').value = bigArray;
}