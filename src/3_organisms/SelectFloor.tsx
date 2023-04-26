type SelectFloorProps = {
	handleChange: (v: Floor) => void
	activeMapFloor: CurrentDisplay
	floors: Floors[]
}

export const SelectFloor = ({ handleChange, activeMapFloor, floors }: SelectFloorProps) => {
	return <select onChange={(e) => handleChange(e.target.value as Floor)}>
		{floors.map((it, idx) =>
			<option key={idx} value={it.floor} selected={it.floor === activeMapFloor.floor}>
				{it.floor}
			</option>)}
	</select>
}
