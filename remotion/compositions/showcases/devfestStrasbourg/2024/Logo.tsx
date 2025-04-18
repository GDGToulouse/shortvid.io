import React from 'react';
import {
	Img,
	spring,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

export const Logo = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const curtainDrop = spring({
		frame: frame,
		fps,
		from: -200,
		to: 20,
		durationInFrames: 30,
	});

	return (
		<Img
			src={staticFile('/images/showcases/devfestStrasbourg/2024/logo.png')}
			style={{
				position: 'absolute',
				left: '50%',
				transform: 'translateX(-50%)',
				top: curtainDrop,
				width: '180px',
			}}
		/>
	);
};
