import React from 'react';
import { connect } from 'react-redux';

import { removeFeature } from '../actions/FeatureActions';
import AddedFeature from './AddedFeature';

const AddedFeatures = props => {
	return (
		<div className='content'>
			<h6>Added features:</h6>
			{props.car.features.length ? (
				<ol type='1'>
					{props.car.features.map(item => (
						<AddedFeature
							removeFeature={props.removeFeature}
							id={item.id}
							key={item.id}
							feature={item}
						/>
					))}
				</ol>
			) : (
				<p>You can purchase items from the store.</p>
			)}
		</div>
	);
};

const mapStateToProps = state => {
	return {
		car: state.car
	};
};

export default connect(mapStateToProps, { removeFeature })(AddedFeatures);
