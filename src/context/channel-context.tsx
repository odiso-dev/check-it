import React from 'react';

export const ChannelRealtimeContext = React.createContext({});

/* export const useModal = () => {
  const context = React.useContext(ModalContext);
  if (!context) throw new Error("useModal must be used inside ModalProvider");
  return context;
}; */

/* //////////////////////////////////////////////// */
/* 
import { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from './supabaseClient'; // Tu instancia de supabase

const RealtimeContext = createContext<any>(null);

export const RealtimeProvider = ({ children }: { children: React.ReactNode }) => {
  const [productos, setProductos] = useState<any[]>([]);
  const [categorias, setCategorias] = useState<any[]>([]);

  useEffect(() => {
    // 1. Carga inicial de datos
    const fetchData = async () => {
      const { data: p } = await supabase.from('productos').select('*');
      const { data: c } = await supabase.from('categorias').select('*');
      if (p) setProductos(p);
      if (c) setCategorias(c);
    };
    fetchData();

    // 2. Suscripción única para toda la App
    const channel = supabase
      .channel('global-changes')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'productos' }, (payload) => {
        // Lógica para actualizar el estado de productos (INSERT, UPDATE, DELETE)
        updateState(setProductos, payload);
      })
      .on('postgres_changes', { event: '*', schema: 'public', table: 'categorias' }, (payload) => {
        // Lógica para actualizar el estado de categorías
        updateState(setCategorias, payload);
      })
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, []);

  // Función auxiliar para actualizar el array local sin volver a pedir a la DB
  const updateState = (setter: any, payload: any) => {
    if (payload.eventType === 'INSERT') setter((prev: any) => [...prev, payload.new]);
    if (payload.eventType === 'UPDATE') setter((prev: any) => prev.map((i: any) => i.id === payload.new.id ? payload.new : i));
    if (payload.eventType === 'DELETE') setter((prev: any) => prev.filter((i: any) => i.id !== payload.old.id));
  };

  return (
    <RealtimeContext.Provider value={{ productos, categorias }}>
      {children}
    </RealtimeContext.Provider>
  );
};

export const useRealtime = () => useContext(RealtimeContext);







// En tu Modal de Categorías o cualquier otro sitio
const { categorias } = useRealtime();

return (
  <ul>
    {categorias.map(cat => <li key={cat.id}>{cat.nombre}</li>)}
  </ul>
);

*/
