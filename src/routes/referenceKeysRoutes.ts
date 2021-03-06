import {Request, Response} from 'express';
import {createConnection, Repository} from 'typeorm';
import {ReferenceKeys} from '../entity/ReferenceKeys';

export class ReferenceKeysRoutes {
	public referenceKeyRoutes(app): void {
		createConnection().then((connection) => {
				const repository: Repository<ReferenceKeys> = connection.getRepository(ReferenceKeys);
				app.route('/referenceKeys')
					.get(async (req: Request, res: Response) => {
						const phs = await repository
							.find();
						res.send(phs);
					});
				app.route('/referenceKeys/:id')
					.get(async (req: Request, res: Response) => {
							const phs = await repository
								.createQueryBuilder('referenceKeys')
								.where({
										rk_id: req.params.id
									}
								)
								.getOne();
							if (!phs) {
								res.send('No results found...');
							}
							res.send(phs);
						}
					);
			}
		);
	}
}
