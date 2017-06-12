import React from 'react';

//App Components

const CTA = (props) => {
	
	function handleClick(e) {
	    e.preventDefault();
	  }

	  return (
	<div>
		       
	    <div className="container-wide">
	    	
	    	<div className={"single-details big-p" + (props.title === "User Interface" ? 'coral-text' : 'text-white')}>
	    		
	    		<p className={(props.role ? '' : 'hidden')}><strong>Role:</strong> {props.role}</p>
		        
		        <p><strong>Technologies:</strong> {props.technologies}</p>
		        
		        <p className={(props.designTools ? '' : 'hidden')}><strong>Design Tools:</strong> {props.designTools}</p>

		        <p className={(props.projects ? '' : 'hidden')}><strong>Projects using this plugin:</strong><a href={props.projectsLink} rel="noopener noreferrer" target="_blank"> {props.projects}</a></p>

		        <a className={"single-cta coral-text " + (props.ctaUrl ? '' : 'no-effect')} onClick={(props.ctaUrl ? '' : handleClick )} href={(props.ctaUrl ? props.ctaUrl : '')} target={(props.ctaUrl ? '_blank' : '')}>
		        	        	
		        	<div className="cta-content">
			        	
			        	{
			        	(props.title === 'HTML') ?
		       				<div>
			       				<img className="icon" alt="visit-project" src={require('./../img/codepen.png')}/>
			       				<p>Edit on<br/> Codepen</p>
			       			</div>
		       			:

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
	       				(props.title === 'Wordpress Design') ?
	       				<div>
		       				<img className="icon" alt="visit-project" src={require('./../img/arrow.png')}/>
		        			<p>Click on project<br/> to launch site</p>
	       				</div>					
	       				:
	       				(props.title === 'JavaScript') ?
	       				<div>
		       				<img className="icon" alt="visit-project" src={require('./../img/github-logo.png')}/>
		        			<p>Github<br/> View source code</p>
	       				</div>	
	       				:
	       				(props.title === 'Wordpress E-commerce') ?
	       				<div>
		       				<img className="icon" alt="visit-project" src={require('./../img/arrow.png')}/>
		        			<p>Click on project<br/> to launch site</p>
	       				</div>	
	       				:''
		       			}		

			        </div>
		       		
		       		{
		       			(props.ctaUrl) ?
		       				<span className={"line " + (props.title === 'PHP' && 'Wordpress E-commerce'? 'bg-green' : 
		       											props.title === 'React' && 'JavaScript'? 'bg-light-mustard' :
		       											props.title === 'User Interface'? 'bg-grey' :
		       											props.title === "HTML" ? 'bg-blue':
		       											props.title === "Wordpress Design" ? 'bg-salmon':
		       											''
		       											)}></span>
		       				: ''
		       		}

		        </a>

		    </div>
		</div>

			
	</div>
	);
	}


export default CTA;