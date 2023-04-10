import Image from 'next/image'
import { MouseEventHandler } from 'react'

// [ ] ドラッグアンドドロップできる新規アイコン
// [ ] カーソルの座標を取得
// [x] アイコンリストの配列(src,name)
// [ ] マップ上のアイコンの配列(src,座標)
// [x] handeClick が event を受け取ること

type Props = {
	name: string;
	src: string;
}

const Icons: Props[] = [
	{ name: 'sledge', src: '/R6TAC_ALLMAPS/operater/attackers/1sledge.jpg' },
	{ name: 'thatcher', src: '/R6TAC_ALLMAPS/operater/attackers/2thatcher.jpg' },
]

const handeClick2: MouseEventHandler<HTMLImageElement> = (e) =>
	console.log(e.currentTarget.alt)

export const IconList = () => {
	return <>
		{Icons.map((it, idx) =>
			<Image
				key={idx}
				src={it.src}
				width={50}
				height={50}
				alt={it.name}
				onClick={handeClick2}
			/>
		)}
	</>
}

