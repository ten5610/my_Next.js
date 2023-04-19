import Image from 'next/image'

type Props = {
	pass: string;
};

export const Map = ({ pass }: Props) =>
	<Image src={pass} width={600} height={400} alt='map' />
