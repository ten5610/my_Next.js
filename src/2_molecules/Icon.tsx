import Image from 'next/image'
import { styled } from 'goober'
import { MouseEventHandler, useState } from 'react'

const Span = styled('span')`
	width : 50px;
	height : 50px;
	position : absolute;
	left : ${(props) => props.x}px;
	top : 100px;
	`

type Props = {
	onClick: MouseEventHandler<HTMLImageElement>
}

const IconList = ({ onClick }: Props) => {
	return <>
		<Image
			src='/R6TAC_ALLMAPS/operater/attackers/1sledge.jpg'
			width={50}
			height={50}
			alt='icon'
			onClick={onClick}
		/>
	</>
}

export const Icon = () => {

	const [data, setData] = useState<Array<string>>([])
	return <>
		{data.map((it, idx) => {
			return <Span key={idx} x={100 + idx * 50}>
				<Image
					src={it}
					width={50}
					height={50}
					alt='icon'
				/>
			</Span>
		})}
		<IconList onClick={() => {
			setData((cur) => [...cur, '/R6TAC_ALLMAPS/operater/attackers/1sledge.jpg'])
		}} />
	</>
}

