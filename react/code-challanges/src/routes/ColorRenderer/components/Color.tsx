// DEPENDENCY
import { useState } from 'react'

// TYPE
type ColorProps = {
	hex: string
	name: string
}

export const Color = ({ hex, name }: ColorProps) => {
	const [ hover, setHover ] = useState(false)

	const styles = {
		backgroundColor: `${hex}`,
	}

	return <div
		className="Color" 
		style={styles} 
		onMouseEnter={() => setHover(true)} 
		onMouseLeave={() => setHover(false)}
	> 
		{hover ? hex : name} 
	</div>
}