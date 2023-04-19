import React, { useState, MouseEvent } from 'react'
import Image from 'next/image'
import { styled } from 'goober'
import { OperatorIcon } from '@/1_atoms/OperatorIcon'

// [x] ドラッグアンドドロップできる新規アイコン

const Span = styled('span') <{ left: number, top: number }>`
  position: absolute;
  left: ${props => props.left}px;
  top: ${props => props.top}px;
`

type OperaterRole = 'atack' | 'defence';

type Operater = {
	name: string;
	imgpath: string;
	role: OperaterRole;
	id: string;
}

const operaters: Operater[] = [
	{
		name: 'sledge',
		imgpath: '/R6TAC_ALLMAPS/operater/attackers/1sledge.jpg',
		role: 'atack',
		id: 'sas01'
	},
	{
		name: 'thatcher',
		imgpath: '/R6TAC_ALLMAPS/operater/attackers/2thatcher.jpg',
		role: 'atack',
		id: 'sas02'
	},
]

type IconPosition = {
	left: number;
	top: number;
	operaterid: string;
}

export const IconList = () => {

	const [data, setData] = useState<IconPosition[]>([])

	const addIcon = (id: string) => {
		setData(prev => [...prev, { left: 100 + prev.length * 50, top: 100, operaterid: id }])
	}

	const changePosition = (idx: number, e: MouseEvent<HTMLHeadingElement>) => {
		setData(cur =>
			cur.map((pos, i) =>
				i === idx ? { ...pos, left: e.clientX, top: e.clientY } : pos
			)
		)
	}


	return <>
		<div>
			{operaters.map((op, idx) =>
				<OperatorIcon key={idx} imgpath={op.imgpath} onClick={() => addIcon(op.id)} />
			)}
		</div>
		{data.map((pos, idx) => {
			const operator = operaters.find(op => op.id === pos.operaterid)
			return <>
				{operator && <Span key={idx} left={pos.left} top={pos.top}>
					<Image
						src={operator.imgpath}
						width={50}
						height={50}
						alt={`${operator.name}icon`}
						onDrag={(e) => { changePosition(idx, e) }}
						onDragEnd={(e) => { changePosition(idx, e) }}
					/>
				</Span>
				}
			</>
		})}
	</>
}
