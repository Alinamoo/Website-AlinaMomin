import React from 'react';

function HomepageImage(){
	const url = 'https://images.immediate.co.uk/production/volatile/sites/4/2018/08/GettyImages-167542404use-2854292.jpg?webp=true&quality=90&crop=6px%2C131px%2C927px%2C399px&resize=927%2C393';
	return(
	  <img src={url} style={{width: 850}} alt='Image of Chamelooon' />
);
}

export default HomepageImage;


// const imgMyimageexample = require('../assets/imageexample.jpg');
// const divStyle = {
// 	width: '88%',
// 	height: '800px',
// 	backgroundImage: `url(${imgMyimageexample})`,
// 	backgroundSize: 'cover'   <---- This is important
// };
//
// export default class Mycomponent extends React.Component {
// 	render() {
// 		return (
// 			<div className="cComponent" style={divStyle} >
// 				<h1 align="center">Some header example</h1>
// 			</div>
// 		);
// 	}
// }