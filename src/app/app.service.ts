import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getSomething(): string {
    return 'Something can be agin back';
  }
  getNothing(): string {
    return 'noting  can be agin back';
  }
}
