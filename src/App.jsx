import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import HelloWorld from './components/HelloWorld/HelloWorld'
import Crud from './components/HelloWorld/Crud'

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				{/* <Route exact path='/' component={HelloWorld} /> */}
				<Route exact path='/' component={Crud} />
			</Switch>
		</BrowserRouter>
	)
}

export default App
