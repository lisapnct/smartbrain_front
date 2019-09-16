import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'
import SignIn from '../SignIn/SignIn';



const Navigation = ({onRouteChange, isSignedIn, name, entries}) => {
		if (isSignedIn) {
			return (
				<nav className='flex justify-between'>
					<p className='white f5 ml3 pa2'>
					{`${name}, your current entry count is `} {entries}
					<FontAwesomeIcon className='fa-fw white pl1' icon={faTrophy} />
					</p>
					<p onClick={() => onRouteChange('signin')} className='f5 tc link hover-white bg-light-red bg-animate hover-bg-red white ba b--light-red pa2 mr3 br2 pointer'> 
						<FontAwesomeIcon className='fa-fw pr1' icon={faTimes} />
						Logout 
					</p>
				</nav>
			);
		} else {
			return (
				<SignIn />
			)			
		}
}

export default Navigation;
