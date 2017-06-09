import React from 'react';

//App Components

const CTA = (props) => (

	<div>
		       
	    <div className="container-wide">
	    	
	    	<div className={"single-details big-p" + (props.title === "User Interface" ? 'coral-text' : 'text-white')}>
	    		
	    		<p className={(props.role ? '' : 'hidden')}><strong>Role:</strong> {props.role}</p>
		        
		        <p><strong>Technologies:</strong> {props.technologies}</p>
		        
		        <p className={(props.designTools ? '' : 'hidden')}><strong>Design Tools:</strong> {props.designTools}</p>

		        <a className={"single-cta coral-text " + (props.ctaUrl ? '' : 'no-effect')} href={(props.ctaUrl ? props.ctaUrl : '')} target={(props.ctaUrl ? '_blank' : '')}>
		        	        	
		        	<div className="cta-content">
			        	
			        	{
		       			(props.title === 'CSS') ?
		       				<div>
			       				<img className="icon" alt="visit-project" src={require('./../img/arrow.png')}/>
			       				<p>Hover to interact<br/> interact with effects</p>
			       			</div>
		       			:

		       			(props.title === 'PHP') ?
		       				<div>
			       				<img className="icon" alt="visit-project" src={require('./../img/bitbucket.png')}/>
			       				<p>Bitbucket<br/> View source code</p>
		       				</div>
		       			:

		       			(props.title === 'React') ?
		       				<div>
			       				<img className="icon" alt="visit-project" src={require('./../img/github-logo.png')}/>
		        				<p>Github<br/> View source code</p>
		       				</div>					
		       				: 

	       				(props.title === 'User Interface') ?
	       				<div>
		       				<img className="icon" alt="visit-project" src={require('./../img/ex-logo.png')}/>
		        			<p>View Prototype<br/> on Adobe XD</p>
	       				</div>					
	       				:
	       				(props.title === 'Wordpress') ?
	       				<div>
		       				<img className="icon" alt="visit-project" src={require('./../img/arrow.png')}/>
		        			<p>Click on a project<br/> to launch site</p>
	       				</div>					
	       				:
	       				(props.title === 'JavaScript') ?
	       				<div>
		       				<img className="icon" alt="visit-project" src={require('./../img/github-logo.png')}/>
		        			<p>Github<br/> View source code</p>
	       				</div>	
	       				:
	       				(props.title === 'Mongo') ?
	       				<div>
		       				<img className="icon" alt="visit-project" src={require('./../img/arrow.png')}/>
		        			<p>Hover to interact<br/> interact with effects</p>
	       				</div>	
	       				:''
		       			}		

			        </div>
		       		
		       		{
		       			(props.ctaUrl) ?
		       				<span className={"line " + (props.title === 'PHP' ? 'bg-green' : 
		       											props.title === 'React' && 'JavaScript'? 'bg-light-mustard' :
		       											props.title === 'User Interface'? 'bg-grey' :
		       											''
		       											)}></span>
		       				: ''
		       		}

		        </a>

		    </div>
		</div>

			
	</div>
);


export default CTA;