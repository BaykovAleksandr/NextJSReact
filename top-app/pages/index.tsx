//import localFont from "next/font/local";
import React from 'react';
import { Htag, Button } from '../components';



export default function Home(): JSX.Element {
  return (
    
      <>
      <Htag tag='h1'>Текст</Htag>
      <Button appearence='primary' arrow='right'>Кнопка</Button>
      <Button appearence='ghost'>Кнопка</Button>
      </>
    
  );
}
