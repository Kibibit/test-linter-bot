import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  root(): string {
    const arr = [4,5,6,];
    return 'Hello World!';
  }
}
