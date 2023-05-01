import Image from 'next/image'
import { styled } from 'goober'
import { OperatorIcon } from '@/1_atoms/OperatorIcon'
import { useOperator } from '@/hooks/useOperator'
import { useState } from 'react'

const Span = styled('span') <{ left: number, top: number }>`
  position: absolute;
  left: ${props => props.left - 30}px;
  top: ${props => props.top - 25}px;
	.dragging {
		cursor: grabbing;
	}
	:hover {
		cursor: grab;
	}
`

type props = {
	activeOperators: Operator[]
}

export const IconPalette = ({ activeOperators }: props) => {
	const { addIcon } = useOperator()

	return <>
		<div>
			{activeOperators.map((op) =>
				<OperatorIcon key={op.id} imgPath={op.imgPath} onClick={() => addIcon(op.id)} />
			)}
		</div>
	</>
}

type Props33 = {
	pos: IconPosition
	imgPath: string
	name: string
	handleMove: (_x: number, _y: number) => void
}

export const PieceOnMap = ({ imgPath, name, pos, handleMove }: Props33) => {

	const [dragging, setDragging] = useState(false)

	return <Span left={pos.left} top={pos.top} className={dragging ? 'dragging' : ''}
		onDragStart={() => setDragging(true)}
		onMouseDown={() => setDragging(true)}
		onDragEnd={(e) => {
			handleMove(e.clientX, e.clientY)
			setDragging(false)
		}}
		onMouseUp={() => setDragging(false)}
	>
		<Image
			src={imgPath}
			width={50}
			height={50}
			alt={`${name}icon`}
		/>
	</Span>
}

export const IconList = () => {
	const { operatorPositions, changePosition } = useOperator()

	return <>
		{operatorPositions.map((pos, idx) =>
			<PieceOnMap
				key={idx}
				imgPath={pos.imgPath}
				name={pos.name}
				pos={pos}
				handleMove={(x: number, y: number) => changePosition(idx, x, y)}
			/>
		)}
	</>
}
