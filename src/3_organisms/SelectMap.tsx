import { tacticalMaps } from '../_data/maps'

type SelectMapProps = {
	handleChange: (id: string) => void
}

export const SelectMap = ({ handleChange }: SelectMapProps) => {
	return <select onChange={(e) => handleChange(e.target.value)}>
		{tacticalMaps.map((it, idx) =>
			<option key={idx} value={it.id}>
				{it.label}
			</option>
		)}
	</select>
}
