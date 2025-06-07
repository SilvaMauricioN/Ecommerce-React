import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage/LoginPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import ProductListPage from './pages/ProductListPage/ProductListPage'
import ProductInfoPage from './pages/ProductInfoPage/ProductInfoPage'
import Sidebar from './layouts/Sidebar/Sidebar'
import NavBar from './layouts/NavBar/NavBar'
import './App.css'
import ProductFilter from './components/ProductFilter/ProductFilter'

const App = () => {

	return (
		<div className='app-container'>
			<Sidebar></Sidebar>
			<div className='main-content'>
				<NavBar></NavBar>
				<ProductFilter></ProductFilter>
				<Routes>					
					<Route path='/' element={<LoginPage></LoginPage>} />
					<Route path='/registro' element={<RegisterPage></RegisterPage>} />
					<Route path='/Login' element={<LoginPage></LoginPage>} />
					<Route path='/Home' element={<ProductListPage></ProductListPage>} />
					<Route path="/detalle" element={<ProductInfoPage></ProductInfoPage>} />
					<Route path='/detalle/:id' element={<ProductInfoPage></ProductInfoPage>} />
				</Routes>			
			</div>
		</div>
	)
}

export default App
