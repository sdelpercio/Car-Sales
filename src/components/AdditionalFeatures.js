import React from 'react';
import { connect } from 'react-redux';

import { addFeature } from '../actions/FeatureActions';
import AdditionalFeature from './AdditionalFeature';

const AdditionalFeatures = props => {
	return (
		<div className='content'>
			<h4>Additional Features</h4>
			{props.additionalFeatures.length ? (
				<ol type='1'>
					{props.additionalFeatures.map(item => (
						<AdditionalFeature
							addFeature={props.addFeature}
							id={item.id}
							key={item.id}
							feature={item}
						/>
					))}
				</ol>
			) : (
				<p>Nice looking car!</p>
			)}
		</div>
	);
};

const mapStateToProps = state => {
	return {
		additionalFeatures: state.additionalFeatures
	};
};

export default connect(mapStateToProps, { addFeature })(AdditionalFeatures);
