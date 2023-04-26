import { tacticalMaps } from '@/_data/maps'
import { useCallback, useMemo } from 'react'
import { atom, useRecoilState } from 'recoil'

const currentDisplayStore = atom<CurrentDisplay>({
	key: 'activeMapStore',
	default: { id: 'm01', floor: 'b1' }
})

export const useDisplayMap = () => {
	const [currentDisplay, setCurrentDisplay] = useRecoilState(currentDisplayStore)

	const pickMap = useMemo(() => tacticalMaps.find(it => it.id === currentDisplay.id), [currentDisplay.id])

	const floors = useMemo(() => pickMap?.floors || [], [pickMap])

	const changeMapId = useCallback((id: string) =>
		setCurrentDisplay({ id, floor: '1f' })
		, [setCurrentDisplay])

	const changeMapFloor = useCallback((floor: Floor) =>
		setCurrentDisplay({ id: currentDisplay.id, floor })
		, [currentDisplay.id, setCurrentDisplay])

	return {
		activeMapFloor: currentDisplay,
		floors,
		changeMapId,
		changeMapFloor
	}
}
