// 
const variant = {
	primary: {
		backgroundColor: '#2196f3',
		color: '#fff',
	},
	success: {
		backgroundColor: '#4caf50',
		color: '#000',
	},
	error: {
		backgroundColor: '#f44336',
		color: '#fff',
	},
	warning: {
		backgroundColor: '#ff9800',
		color: '#000',
	},
	info: {
		backgroundColor: '#80d8ff',
		color: '#000',
	},
};

const ButtonGroup = (props) => {
	const userVariant = variant[props.variant];
	
	return (
		<button
			type={props.type}
			style={{
				padding: '1rem 2rem',
				fontSize: '0.9rem',
				fontWeight: '700',
				textTransform: 'uppercase',
				letterSpacing: '1px',
				border: 'none',
				marginRight: '1rem',
				cursor: 'pointer',
				borderRadius: '0.15rem',
				...userVariant,
			}}
		>
			{props.text}
		</button>
	);
};

export default ButtonGroup;