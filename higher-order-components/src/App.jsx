import React, {Component} from 'react';
import Counter from './components/Counter.jsx';

class App extends Component{
	constructor(props){
		super(props);
		this.state = { count: 0 };
	}

	render(){
		const { count } = this.state;
		return(
			<div className="wrap">
				<Counter counter={count} countUp={() => this.setState({ count: count + 1 })} countDown={() => this.setState({ count: count - 1 })} />
			</div>
		)
	}
}

export default App;