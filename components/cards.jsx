'use client';

import { contributors } from '@/lib/data';

const FeatureCard = ({ name, role, image, github }) => (
	<div className='transform transition-transform duration-500 hover:scale-105 hover:cursor-pointer'>
		<div
			className='bg-white p-6 h-56 border border-dashed rounded-lg shadow-lg relative overflow-hidden'
			style={{
				backgroundImage: "url('/cardbg.png')",
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)', // Softer shadow with increased depth
			}}
		>
			<div className='absolute inset-0 bg-grid-gray-100 opacity-50'></div>

			<div className='relative flex flex-col justify-between h-full z-10 '>
				<div className='flex justify-between items-start mb-4'>
					<div className='h-10 w-10'>
						<img
							src={image}
							alt={name}
							className='h-10 w-10 rounded-full border-2 border-yellow-400'
						/>
					</div>
				</div>
				<div className=''>
					<h3 className='text-xl font-bold mt-4'>
						<a
							href={github}
							target='_blank'
							rel='noopener noreferrer'
							className='bg-yellow-200 px-2 py-1 rounded hover:bg-yellow-300 transition-colors duration-300'
						>
							{name}
						</a>
					</h3>
					<p className='text-gray-600'>{role}</p>
				</div>
			</div>
		</div>
	</div>
);

export default function Cards() {
	return (
		<section
			id='contributors'
			className='py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-50 to-gray-100'
		>
			<div className='max-w-7xl mx-auto'>
				<h2 className='text-4xl font-extrabold text-center mb-8 text-gray-800'>
					Contributors
				</h2>
				<p className='text-center text-lg text-gray-500 mb-8'>
					Total Contributors: {contributors.length}
				</p>
				<div className='grid md:grid-cols-3 gap-8'>
					{contributors.map((contributor) => (
						<FeatureCard
							key={contributor.name}
							name={contributor.name}
							role={contributor.role}
							image={contributor.image}
							github={contributor.github}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
