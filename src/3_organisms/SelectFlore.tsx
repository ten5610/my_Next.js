type Props = {
	data: string[]
}

export const SelectFlore = ({ data }: Props) => {
	return <select>
		{data.map((it, idx) =>
			<option key={idx}>
				{it}
			</option>)}
	</select>
}
