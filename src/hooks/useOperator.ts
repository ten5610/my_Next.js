import { useCallback } from 'react'
import { atom, useRecoilState } from 'recoil'
import { operators } from '@/_data/operators'

const operatorPositionsStore = atom<IconPosition[]>({
	key: 'operatorPositionsStore',
	default: []
})

export const useOperator = () => {

	const [operatorPositions, setOperatorPositions] = useRecoilState<IconPosition[]>(operatorPositionsStore)

	const addIcon = useCallback((operatorId: string) => {
		const operator = operators.find(op => op.id === operatorId)
		if (operator) {
			setOperatorPositions(prev => [...prev, { left: 100 + prev.length * 50, top: 100, operatorId, imgPath: operator.imgPath, name: operator.name }])
		}

	}
		, [setOperatorPositions])

	const changePosition = useCallback((idx: number, left: number, top: number) =>
		setOperatorPositions(cur =>
			cur.map((pos, i) =>
				i === idx ? { ...pos, left, top } : pos
			)
		)
		, [setOperatorPositions])

	return {
		operatorPositions,
		addIcon,
		changePosition,
	}
}
