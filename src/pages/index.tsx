import Head from 'next/head'
import { styled } from 'goober'
import { Map } from '@/2_molecules/Map'
import { useState } from 'react'
import { SelectMap } from '@/3_organisms/SelectMap'
import { IconList } from '@/2_molecules/IconList'
import { Icon } from '@/2_molecules/Icon'

const Main = styled('main')`
`

export default function Home() {
  const [map, setMapImage] = useState('/R6TAC_ALLMAPS/maps/bank/bank1f.jpg')
  return <>
    <Head>
      <title>R6S Board</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Main>
      <Icon />
      {/* <Icon2 /> */}
      {/* <IconList /> */}
      <Map pass={map} />
      <SelectMap onChange={(e) => { setMapImage(e.target.value) }} />
    </Main>
  </>
}
