import { Controller, Logger, Post, Request, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from '../guard/local-auth.guard';
import { AuthService } from '../service/auth.service';

@Controller('')
export class AuthController {
  constructor(
    private readonly logger: Logger,
    private authService: AuthService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req: any) {
    this.logger.debug('Login realizado no sistema!');
    return this.authService.login(req.user);
  }
}
