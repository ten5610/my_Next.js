import Image from 'next/image'
import { FC, MouseEventHandler } from 'react'

type Props = {
	imgpath: string;
	onClick: MouseEventHandler<HTMLImageElement>
}

export const OperatorIcon: FC<Props> = ({ imgpath, onClick }) => {
	return (
		<Image
			src={imgpath}
			width={50}
			height={50}
			alt='icon'
			onClick={onClick}
		/>
	)
}
