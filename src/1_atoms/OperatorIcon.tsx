import Image from 'next/image'
import { FC, MouseEventHandler } from 'react'

type Props = {
	imgPath: string;
	onClick: MouseEventHandler<HTMLImageElement>
}

export const OperatorIcon: FC<Props> = ({ imgPath, onClick }) => {
	return (
		<Image
			src={imgPath}
			width={50}
			height={50}
			alt='icon'
			onClick={onClick}
		/>
	)
}
