import Image from 'next/image'

type Props = {
	pass: string;
	width: number;
	height: number;
};

export const Img = ({ pass, width, height }: Props) =>
	<Image src={pass} width={width} height={height} alt="a" />
