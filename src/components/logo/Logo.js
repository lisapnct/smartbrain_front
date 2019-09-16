import React from 'react';
import { ReactComponent as Find } from './find.svg';

const Logo = () => {
	return (
		
			<div className='center pb3' style={{height: 250, width: 250}}>
			 	<div className="pt5">
			 		<Find width="800px" height="auto" alt='logo'/>
			 	</div>
			</div>
		
	);
}

export default Logo;
