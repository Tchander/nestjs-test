import { Controller, Get, Post, Patch, Put, Delete, Res, Req, Param, ParseIntPipe } from '@nestjs/common';
import { Response, Request } from 'express';

import { UserService } from './user.service';

@Controller('users')
export class UserController {
	constructor(
		private readonly userService: UserService,
	) { }

	@Get('/')
	async getAllUsers(
		@Req() req: Request,
		@Res() res: Response,
	) {
		
	}


	@Get('/:id')
	async getUser(
		@Param('id', ParseIntPipe) id: number,
		@Res() res: Response,
	) {
		const userData = await this.userService.getUserData(id);

		delete userData.password;

		return res.send({ status: 'ok', data: userData });
	}


	@Post('/')
	async createUser(
		@Req() req: Request,
		@Res() res: Response,
	) {
		await this.userService.createUser(req.body);
		return res.send({ status: 'ok' });
	}


	@Patch('/:id')
	async updateUser(
		@Req() req: Request,
		@Res() res: Response,
	) {

	}


	@Put('/:id')
	async updateUserField(
		@Req() req: Request,
		@Res() res: Response,
	) {

	}


	@Delete('/:id')
	async deleteUser(
		@Req() req: Request,
		@Res() res: Response,
	) {

	}
}
