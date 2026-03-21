import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

/* 
import { useEffect, useState } from 'react'
import { supabase } from './lib/supabase'

export default function App() {
  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from('nombre_de_tu_tabla').select('*')
      if (!error) setData(data)
    }
    fetchData()
  }, [])

  return (
    <div>
      {data.map((item) => (
        <p key={item.id}>{item.nombre}</p>
      ))}
    </div>
  )
}

*/
