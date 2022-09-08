// COMPONENT
import { Color } from './components/Color'

// STYLE
import './ColorRenderer.css'

export default function ColorRenderer() {
	const colors = [{
		hex: '#91a6ff',
		name: 'cornflower blue'
	},
	{
		hex: '#ff88dc',
		name: 'persian pink'
	},
	{
		hex: '#80ff72',
		name: 'scremin green'
	},
	{
		hex: '#ff5154',
		name: 'tart orange'
	}]

	return (
		<main className="ColorRenderer">
			<h2 className="ColorRenderer-title">Color Renderer</h2>
			
			<section className="ColorRenderer-colors">
				{
					colors.map( ({hex, name }) => <Color key={hex} hex={hex} name={name} />)
				}
			</section>
		</main>
	)
}