// STYLE
import './Box.css'

// UTIL
type BoxProps = {
	id: number
	color: string
	changeColor: (id: number) => void
}

export function Box({ id, color, changeColor }: BoxProps) {

	const handleChangeColor = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => changeColor(id)

	return (
		<div 
			className="Box" 
			style={{backgroundColor: color}}
			onClick={handleChangeColor}
		/>
	)
}