
function App() {

    let someFruit = ["apple", "mango", "banana", "orange"];

	function fruitClickLogger(event, fruit) {
        console.log(`You clicked on the ${fruit}. 
		This event was a ${event.type} and occurred in the ${event.target.nodeName} element.`);
    }

	function logWhenClicked(){
		console.log("We clicked a thing!");
	}

/*

{(event variable) => {

	whatever code we wanna run when the event happens 
}}

// TO make the mouse cursor bigger in the browser:
1. Track how much the mouse has moved in the last X seconds 
2. Check if the mouse has moved away from "position from 1 second ago"
3. If mouse has moved a lot AND not moved very far away from old position, make cursor big

*/
	function mousedOverHeading(event){
		console.log("Element we moused over is: \n" + event.target);
		event.target.style.backgroundColor = "red";
		console.log("Moused over the heading");
	}

	function mousedOutOfHeading(event){
		console.log("Stopped mousing over the heading");
		event.target.style.backgroundColor = null;
	}


	// onkeydown 
	function logKeyPress(event){
		switch (event.key) {
			case "ArrowLeft":
			case "ArrowRight":
			case "ArrowUp":
			case "ArrowDown":
				console.log("User pressed: " + event.key)
				break;
			default:
				break;
		}
	}


	// onblur & onfocus 
	function logOnBlur(event){
		console.log("Element lost focus!");
	}

	function logOnFocus(event){
		console.log(`Focus gained! Target was ${event.target.tagName}`);
	}


	// onoffline and ononline
	function logGoneOffline(event){
		// Show a banner telling the user that no new content will load 
		// Queueing API requests to wait until we are online again
		// 
	}

	function logGoneOnline(event){
		// Make an API request to say that User XYZ is now online 
		// Remove any "You are offline" banners 
		// Work through any queued API requests from onoffline 
	}



	// oncontextmenu (it's in Ed)
	// Not shown because it's in Ed

	// ondrag, ondragstart, ondragover, ondrop 
	// Will maybe make it as a DIY challenge, optional challenge

	return (
		<div className="App" 

		onClick={logWhenClicked} 

		tabIndex={0}
		onKeyDown={logKeyPress}

		onBlur={logOnBlur}
		onFocus={logOnFocus}
		

		style={{backgroundColor: "lightgrey", width: "100vw", height: "100vh"}}>

			<h1 onMouseOver={(event) => {mousedOverHeading(event)}} onMouseOut={(event) => {mousedOutOfHeading(event)}}  >Cool Website Name</h1>

			{someFruit.map((fruit) => {
                return <p key={fruit} 
				onClick={(event) => fruitClickLogger(event, fruit)} >
					Super awesome {fruit}
				</p>
            })}

		</div>
	);
}

export default App;
