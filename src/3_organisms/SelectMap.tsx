import map from '../_data/map.json'

// [X] json からマップデータを持ってくるように

type Map = {
	value: string;
	label: string;
	key: string;
}

type Props = {
	handleChange: (_v: string) => void
}

const Maps: Map[] = map

export function SelectMap({ handleChange }: Props) {
	return (
		<select onChange={(e) => handleChange(e.target.value)}>
			{Maps.map(it =>
				<option key={it.key} value={it.value}>
					{it.label}
				</option>
			)}
		</select>
	)
}
