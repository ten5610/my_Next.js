import Head from 'next/head'
import { styled } from 'goober'
import { Img } from '@/1_atoms/Icon'

const Main = styled('main')`
color:    brown;
font-size:  larger;
margin:     5rem;
text-align: center;
`

export default function Home() {
  return <>
    <Head>
      <title>Degino Backlog</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Main>
      <h1>Start Next.js Project</h1>
      <Img />
    </Main>
  </>
}
