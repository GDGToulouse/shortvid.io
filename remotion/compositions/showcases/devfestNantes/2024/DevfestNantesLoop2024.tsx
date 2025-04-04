import React from 'react';
import {loadFont} from '@remotion/google-fonts/CrimsonText';
import {
	AbsoluteFill,
	Easing,
	interpolate,
	Sequence,
	staticFile,
	useCurrentFrame,
} from 'remotion';
import {z} from 'zod';

import {BackgroundFiller} from '../../../../design/atoms/BackgroundFiller';
import {ShowcaseDevfestNantes2024Schema} from '../types/types';

import {Details} from './Details';
import {GhostBackground} from './GhostBackground';
import {Logo} from './Logo';
import {Moon} from './Moon';
import {Speakers} from './Speakers';
import {TalkTitle} from './TalkTitle';
import {Trees} from './Trees';

const {fontFamily} = loadFont();
export const DevfestNantesLoop2024 = ({
	title,
	speakers,
	date,
	time,
	location,
	titleFontSize,
}: z.infer<typeof ShowcaseDevfestNantes2024Schema>) => {
	const frame = useCurrentFrame();

	const SlideDown = interpolate(frame, [300, 330], [0, 650], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
		easing: Easing.bezier(0.51, -0.75, 0.99, 0.75),
	});

	return (
		<AbsoluteFill
			style={{
				overflow: 'hidden',
				fontFamily,
				textTransform: 'uppercase',
			}}
		>
			<Sequence>
				<BackgroundFiller
					imageUrl={staticFile(
						'/images/showcases/devfestNantes/2024/background-filler-paysage.png',
					)}
					style={{
						transform: 'scale(1)',
					}}
				/>
			</Sequence>
			<Sequence from={30}>
				<GhostBackground />
			</Sequence>
			<Sequence from={110}>
				<Moon />
			</Sequence>
			<Sequence from={30}>
				<Trees />
			</Sequence>
			<div
				style={{
					height: '100%',
					transform: `translateY(${SlideDown}px)`,
				}}
			>
				<Sequence name="Speakers" from={30}>
					<Speakers speakers={speakers} />
					<TalkTitle
						title={title}
						style={{
							fontSize: titleFontSize ?? 35,
						}}
					/>
				</Sequence>
				<Sequence from={70}>
					<Details date={date} time={time} location={location} />
				</Sequence>
			</div>
			<Sequence>
				<Logo />
			</Sequence>
		</AbsoluteFill>
	);
};
