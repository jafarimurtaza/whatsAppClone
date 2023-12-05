import Feeds from '../components/Feeds'
import Header from '../components/Header'
import SidebarRight from '../components/SidebarRight'

export default function Home() {
  return (
    <main className='grid w-full min-h-screen grid-cols-2 bg-[#222e35]'>
      <div className='flex flex-col'>
        <Header />
        <Feeds />
      </div>

      <div>
        <SidebarRight />
      </div>
    </main>
  )
}
