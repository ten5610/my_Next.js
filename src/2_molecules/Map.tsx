import { Img } from '@/1_atoms/Img'

type Props = {
	pass: string;
};


export const Map = ({ pass }: Props) =>
	<Img pass={pass} width={600} height={400} />
