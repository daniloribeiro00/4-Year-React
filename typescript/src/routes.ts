import { Request, Response } from 'express';
import createUser from './service/CreateUser';

export function helloWorld(req: Request, res: Response) {
	const user = createUser({
		nome: 'Danilo',
		email: 'danilo@email.com',
		password: '123456',
		techs: [
			'NodeJS',
			'ReactJS',
			'ReactNative',
			{ title: 'JavaScript', experience: 100 },
		],
	});

	return res.json({ message: 'Hello World' });
}
