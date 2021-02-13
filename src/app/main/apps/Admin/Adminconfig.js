import React from 'react';
import { Redirect } from 'react-router-dom';

const AcademyAppConfig = {
	settings: {
		layout: {}
	},
	routes: [
		{
			path: '/apps/Admin/adduser',
			component: React.lazy(() => import('./Adduser'))
		},
		{
			path: '/apps/Admin/showuser',
			component: React.lazy(() => import('./Showuser'))
		},
		{
			path: '/apps/Admin/editprofile',
			component: React.lazy(() => import('./Editprofile'))
		},
	]
};

export default AcademyAppConfig;