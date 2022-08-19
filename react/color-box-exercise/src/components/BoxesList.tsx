// DEPENDENCY
import { useState, useEffect } from 'react'

// COMPONENT
import { Box } from './Box'

// STYLE
import './BoxesList.css'

// UTIL
const allColors: string[] = [
	'#19050d',
	'#330a1a',
	'#4c0f26',
	'#661433',
	'#801a40',
	'#991f4d',
	'#b3245a',
	'#cc2966',
	'#e62e73',
	'#ff3380',
	'#ff3380',
	'#ff478d',
	'#ff5c99',
	'#ff70a6',
	'#ff85b3',
	'#ff99c0',
	'#ffadcc',
	'#ffc2d9',
	'#ffd6e6',
]

type BoxesListProps = {
	numBoxes: number
}

export function BoxesList({ numBoxes }: BoxesListProps) {
	const [ colors, setColors ] = useState<string[]>([])
	
	useEffect(() => {
		setColors(pickColors())
	}, [numBoxes])

	const pickColors = () => {
		let bubbleColors: string[] = []
		for(let i = 0; i < numBoxes; i++) {
			bubbleColors.push(allColors[Math.floor(Math.random() * allColors.length)])
		}
		return bubbleColors
	}


	const changeColor = (id: number) => {

		let newColor: string = ''
		let newColors: string[] = colors

		do {
			newColor = allColors[Math.floor(Math.random() * allColors.length)]
		} while (newColor === colors[id])
		newColors[id] = newColor
		setColors([...newColors])
	}

	return (
		<div className="BoxesList">
		{
			colors.map((color, index) => <Box key={index} id={index} color={color} changeColor={changeColor} />)
		}
		</div>
	)
}