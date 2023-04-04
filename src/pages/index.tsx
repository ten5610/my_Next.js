import Head from 'next/head'
import { styled } from 'goober'
import { Icon } from '@/2_molecules/Icon'
import { Map } from '@/2_molecules/Map'
import { ChangeEventHandler, useState } from 'react'

const Main = styled('main')`
color:    brown;
font-size:  larger;
margin:     5rem;
text-align: center;
`

const Maps = [
  { value: '/R6TAC_ALLMAPS/maps/bank/bank1f.jpg', label: 'Bank1f', key: 'bank1f' },
  { value: '/R6TAC_ALLMAPS/maps/bank/bank2f.jpg', label: 'Bank2f', key: 'bank2f' }
]

type Props = {
  onChange: ChangeEventHandler<HTMLSelectElement>
}

function SelectMap({ onChange }: Props) {
  return (
    <select onChange={onChange}>
      {Maps.map(it =>
        <option key={it.key} value={it.value}>
          {it.label}
        </option>
      )}
    </select>
  )
}

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
      <Map pass={map} />
    </Main>
    <SelectMap onChange={(e) => { setMapImage(e.target.value) }} />  </>
}
