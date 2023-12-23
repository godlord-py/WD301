/* eslint-disable @typescript-eslint/no-unused-vars */
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
const Layout = () => {

  return (
    <>
      <Header />
      <main>
        <Outlet/>
      </main>
    </>
  )
}
export default Layout;