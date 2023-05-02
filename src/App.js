
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

	return (
		<div className="App" 
		onClick={logWhenClicked} 
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
