import { ChangeEventHandler } from 'react'

type Map = {
	value: string;
	label: string;
	key: string;
}

const Maps: Map[] = [
	{ value: '/R6TAC_ALLMAPS/maps/bank/bank1f.jpg', label: 'Bank1f', key: 'bank1f' },
	{ value: '/R6TAC_ALLMAPS/maps/bank/bank2f.jpg', label: 'Bank2f', key: 'bank2f' },
	{ value: '/R6TAC_ALLMAPS/maps/border/border1f.jpg', label: 'Border1f', key: 'border1f' },
	{ value: '/R6TAC_ALLMAPS/maps/border/border2f.jpg', label: 'Border2f', key: 'border2f' },
	{ value: '/R6TAC_ALLMAPS/maps/cafe_dostoyevsky/cafe_dostoyevsky1f.jpg', label: 'Cafe_Dostoyevsky1f', key: 'cafe_dostoyevsky1f' },
	{ value: '/R6TAC_ALLMAPS/maps/cafe_dostoyevsky/cafe_dostoyevsky2f.jpg', label: 'Cafe_Dostoyevsky2f', key: 'cafe_dostoyevsky2f' },
	// 他のデータをここに追加してください
]
type Props = {
	onChange: ChangeEventHandler<HTMLSelectElement>
}

export function SelectMap({ onChange }: Props) {
	return (
		<select onChange={onChange}>
			{Maps.map(it =>
				<option key={it.key} value={it.value}>
					{it.label}
				</option>
			)}
		</select>
	)
}
