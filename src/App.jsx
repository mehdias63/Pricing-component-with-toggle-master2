import { useState } from 'react'
import Card from './components/Card'

const data = [
	{
		text: 'Basic',
		price: {
			monthly: 19.99,
			annually: 199.99,
		},
		hard: '500 GB',
		user: '2',
		bandwidth: '3',
		color2: '#fff',
		color: '#6D72DE',
	},
	{
		text: 'Professional',
		price: {
			monthly: 24.99,
			annually: 249.99,
		},
		hard: '1 TB',
		user: '5',
		bandwidth: '10',
		className: 'gard',
		color2: '#6D72DE',
		color: '#fff',
	},
	{
		text: 'Master',
		price: {
			monthly: 39.99,
			annually: 399.99,
		},
		hard: '2 TB',
		user: '10',
		bandwidth: '20',
		color2: '#fff',
		color: '#6D72DE',
	},
]
function App() {
	const [toggle, setToggle] = useState(false)
	return (
		<main className="relative px-6 py-16 max-w-[90rem] flex flex-col items-center justify-center mx-auto bg-light-gray font-mont">
			<img
				src="/images/bg-bottom.svg"
				className="absolute bottom-0 left-0 z-0"
			/>
			<img
				src="/images/bg-top.svg"
				className="absolute top-0 right-0 z-0"
			/>
			<div className="md:mb-20 flex flex-col items-center">
				<p className="text-[2rem] font-bold text-dark-gray mb-6">
					Our Pricing
				</p>
				<div className="flex gap-5">
					<p className="lab">Annually</p>
					<div onChange={() => setToggle(prevToggle => !prevToggle)}>
						<label className="switch">
							<input type="checkbox" />
							<span className="slider round"></span>
						</label>
					</div>
					<p className="lab">Monthly</p>
				</div>
			</div>
			<div className="flex flex-col lg:flex-row gap-6 md:gap-0 z-10">
				{data.map(item => (
					<Card
						key={item.text}
						text={item.text}
						hard={item.hard}
						user={item.user}
						color={item.color}
						color2={item.color2}
						bandwidth={item.bandwidth}
						className={item.className}
						price={toggle ? item.price.monthly : item.price.annually}
					/>
				))}
			</div>
		</main>
	)
}

export default App
