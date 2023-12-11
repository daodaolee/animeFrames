import Material from '@/pages/material'
import Player from '@/pages/player'
import Track from '@/pages/track'
import Control from '@/pages/control'
// import { Icon } from '@iconify/react';
import ResizeBlock from '@/components/resizeBlock'


const PlayerControl = () => <>
  <ResizeBlock
    options={{
      height: '100px',
      type: 'horizontal'
    }}
    primary={() => <Player />}
    secondary={() => <Control />}
  />
</>
const PlayerTrack = () => <>
  <ResizeBlock
    options={{
      width: '400px',
      type: 'vertical'
    }}
    primary={() => <PlayerControl />}
    secondary={() => <Track />}
  />
</>

function App() {
  return (
    <>
      <ResizeBlock
        options={{
          height: '100vh',
          type: 'horizontal'
        }}
        primary={() => <Material />}
        secondary={() => <PlayerTrack />}
      />
    </>
  );
}
export default App;
