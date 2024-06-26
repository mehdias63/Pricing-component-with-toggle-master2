import React from 'react'

export default function Card({
	text,
	price,
	hard,
	user,
	bandwidth,
	color,
	color2,
	className,
}) {
	return (
		<div
			className={`w-[20.4375rem] h-[28.3125rem] bg-white flex flex-col justify-evenly items-center rounded-xl text-dark-gray ${className} `}
		>
			<p className="text-lg leading-7 font-bold">{text}</p>
			<div className="flex items-center gap-2">
				<span className="text-[2.5rem] font-bold tracking-[-0.075rem]">
					${' '}
				</span>
				<h2 className="text-7xl font-bold leading-[4.4375rem] tracking-[-0.135rem]">
					{price}
				</h2>
			</div>

			<div className="w-[17rem] text-center">
				<p className="bord">{hard} Storage</p>
				<p className="bord">{user} Users Allowed</p>
				<p className="bord bord2">Send up to {bandwidth} GB</p>
			</div>
			<button
				className="py-2 px-20 rounded-md text-[0.8125rem] font-bold tracking-[0.08706rem]"
				style={{ backgroundColor: color, color: color2 }}
			>
				LEARN MORE
			</button>
		</div>
	)
}
