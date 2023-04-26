import Image from 'next/image'
import { tacticalMaps } from '@/_data/maps'

type DisplayMapProps = {
	activeMapFloor: CurrentDisplay
}

export const DisplayMap = ({ activeMapFloor }: DisplayMapProps) => {
	const activeMapObj = tacticalMaps.find(it => it.id === activeMapFloor.id)
	const activeMapPath = activeMapObj?.floors.find(it => it.floor === activeMapFloor.floor)?.imgPass ?? ''
	return <Image src={activeMapPath} width={600} height={400} alt='map' />
}
