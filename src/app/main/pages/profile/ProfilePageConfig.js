import React from 'react';

const ProfilePageConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/pages/profile',
			component: React.lazy(() => import('./ProfilePage'))
		},
		{
			path: '/Editprofile',
			component: React.lazy(() => import('./Editprofile'))
		}
	]
};

export default ProfilePageConfig;
