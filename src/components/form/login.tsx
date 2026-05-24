import React from "react";
import { supabase } from '@/services/supabase-client';
import classes from './login.module.css'

export const AuthForm:React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) alert(error.message);
    else alert('¡Check your email to confirm!');
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) alert(error.message);
  };

  const handleSignOut = async (e: React.FormEvent)=>{
    e.preventDefault();
    supabase.auth.signOut()
  };

  return (
    <form action="" className={classes.loginForm}>
      <h2>Sign in</h2>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />

      <label htmlFor="password">Password</label>
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />

      <hr></hr>
      <div className={classes.buttons}>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleSignOut}>Sign out</button>
      </div>
      {<button onClick={handleSignUp}>Sign up</button>}
    </form>
  );
};
