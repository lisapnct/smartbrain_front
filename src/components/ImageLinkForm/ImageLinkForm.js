import React from 'react';

const ImageLinkForm = ({onInputChange, onSubmit}) => {
	return (
	<div className="">
		<div className='f3 pt1 pb2 white'>
		{'This app will detect faces in your picture. Give it a try.'}
		</div>
		<div className="center">
			<div className="pa3 center">
		        <input style={{width: '700px'}} className="f6 f5-l bn fl black-80 bg-white pa3 w-100 w-75-m w-80-l center br-pill br--left-ns" placeholder="Enter an image url" type="text" onChange={onInputChange}/>
		        <button 
		        	className="f6 f5-l fl tc bn bg-navy white pointer w-100 w-25-m w-20-l br-pill br--right-ns" 
		        	onClick={onSubmit}
		       	>Detect
		       	</button>
			</div>
		</div>
	</div>
	);
}

export default ImageLinkForm;

