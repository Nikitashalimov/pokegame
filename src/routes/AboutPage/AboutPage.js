import { useState } from "react";
import s from "./AboutPage.module.css"

const AboutPage = () => {

	const [state, setState] = useState({
		value1: true,
		value2: 10,
		value3: 'some string'
	})

const [counter, setCounter] = useState(0)

	return (
		<div>
			<h1>Basic React Hooks</h1>
			<div>
				<button onClick={() => setState({ ...state, value1: !state.value1 })}
				>
					Toggle text
				</button>
				<button
					onClick={() => setCounter(counter + 1)}
				>
					increment counter
				</button>
				<p>{state.value1}</p>
				{state.value1 ? (
					<div>
						<h3>{counter}</h3>
						<p>{state.value2}</p>
						<p>{state.value3}</p>
					</div>
				) : ''}
			</div>
			<div>This is About Page !!!</div>
			<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, sunt accusamus? Perferendis accusantium ad nisi nemo maiores similique, sint assumenda doloribus! At ea possimus id hic architecto eligendi excepturi libero?</p>
		</div>
	)
}

export default AboutPage;