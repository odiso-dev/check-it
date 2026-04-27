import React from 'react';
import { supabase } from '@/services/supabase-client';
import {AuthContext} from './auth-context'


export const AuthProvider:React.FC = ({ children }: { children: ReactNode }) => {
  const [session, setSession] = React.useState<Session | null>(null);
  console.log(session)

  React.useEffect(() => {
    // 1. Obtener sesión actual al cargar
    supabase.auth.getSession().then(({ data: { session } }) => setSession(session));

    // 2. Escuchar cambios (login/logout)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ session }}>
      {children}
    </AuthContext.Provider>
  );
};

// export const useAuth = () => useContext(AuthContext);