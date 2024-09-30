import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { AppLoggerService } from './logger/logger.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly logger: AppLoggerService,

  ) { }

  @Get()
  getHello(): string {
    this.logger.log('debugging the log trace from ELK...', 'AppController -> getHello');
    this.logger.warn('debugging the log trace from ELK...', 'AppController -> getHello');
    this.logger.error('debugging the log trace from ELK...', 'AppController -> getHello');

    return this.appService.getHello();
  }
}
