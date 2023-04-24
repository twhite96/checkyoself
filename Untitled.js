class MyComp extends React.Component {
	render() {
		return <div>{this.props.text}</div>
	}
}

const MyFuncComp = (props) => {
	return <div>{props.text}</div>
}

const MyDestructuredFuncComp = ({text}) => <div>{text}</div>

class MyApp extends React.Component {
	render() {
		const someText = ['some', 'text']
		return (
			<div>
				{someText.map(text => <MyComp text={text}/>)}
				{someText.map(text => <MyFuncComp text={text}/>)}
				{someText.map(text => MyDestructuredFuncComp({text}))}{/* another way to call the component */}
			</div>
		)
	}
}
