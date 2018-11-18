import { Injectable } from "@nestjs/common";

const hello = [5,4,2,]

@Injectable()
export class AppService {
  root(): string {
    return 'Hello World!';
  }
}
