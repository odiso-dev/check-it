import React from 'react';
import {type Session } from '@/services/supabase-client';

export const AuthContext = React.createContext<{ session: Session | null }>({ session: null });


