import search from 'string-hunt'
import { useEffect, useState } from 'preact/hooks'
import FormatJson from './components/jsonFormatter'
import data from './utils/data'

export function App() {
  const [query, setQuery] = useState("")
  const [visible, setVisible] = useState(data)

  useEffect(() => {
    if (query == "") return setVisible(data)
    else setVisible(search(query, data.map(d => JSON.stringify(d))))
  }, [query])

  return (
    <div className='bg-background min-h-screen p-10 font-fira'>
      <div className='text-white py-4 flex items-center justify-between'>
        <h1>📦 string-hunt v0.0.3</h1>
        <div className='flex items-center gap-4'>
          <a href='https://github.com/regisrex/string-hunt' target='_black'>Github</a>
          <a href='https://npmjs.com/package/string-hunt' target='_black'>npm</a>
        </div>
      </div>
      <input type="text" className='bg-white/10 w-full text-lg text-white  p-4  outline-none' placeholder='🔎  Your query here...' onChange={(e) => setQuery(e.target.value.trim())} />
      <div className='grid grid-cols-2'>
        <FormatJson title={"Input"} json={JSON.stringify(data)} />
        <FormatJson title={"Output"} json={visible} />
      </div>

      <div className='flex items-center justify-center'>
        <div className='text-white/60 flex items-center justify-between fixed bottom-0 gap-5' >
          <h1>MIT LICENCE</h1> <span>•</span>
          <h1>Maintained by <a href='https://github.com/pacifiquem' target='_black'>@pacifiquem</a> & <a href='https://github.com/regisrex' target='_black'>@regisrex</a> </h1>
        </div>
      </div>
    </div>
  )
}
