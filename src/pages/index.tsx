import Head from 'next/head'
import { styled } from 'goober'
import { useDisplayMap } from '@/hooks/useMap'
import { SelectMap } from '@/3_organisms/SelectMap'
import { SelectFloor } from '@/3_organisms/SelectFloor'
import { IconList, IconPalette } from '@/2_molecules/IconList'
import { DisplayMap } from '@/2_molecules/DisplayMap'
import { useMemo, useState } from 'react'
import { Switcher } from '@/2_molecules/Switcher'
import { operators } from '@/_data/operators'

const Main = styled('main')`
display: grid;
grid-template-columns: auto 20%;
grid-template-rows: auto 20%;
`

const menuItems = ['attack', 'defense'] // メニューリスト

export default function Home() {
  const [active, setActive] = useState(0)
  const { activeMapFloor, floors, changeMapId, changeMapFloor } = useDisplayMap()

  const attackers = useMemo(() => operators.filter(it => it.role === 'attack'), [])
  const defenders = useMemo(() => operators.filter(it => it.role === 'defense'), [])

  return <>
    <Head>
      <title>R6S Board</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Main>
      <DisplayMap activeMapFloor={activeMapFloor} />
      <SelectMap handleChange={changeMapId} />
      <div>
        <Switcher
          items={menuItems}     // メニューリスト
          active={active}        // 選択番号
          setActive={setActive}     // 選択番号変更セッター
        />
        {active === 0 && <IconPalette activeOperators={attackers} />}
        {active === 1 && <IconPalette activeOperators={defenders} />}
      </div>
      <SelectFloor handleChange={changeMapFloor} activeMapFloor={activeMapFloor} floors={floors} />
      <IconList />
    </Main>
  </>
}
