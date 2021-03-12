import { HttpModuleOptions, HttpModuleOptionsFactory, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class HttpConfigService implements HttpModuleOptionsFactory {

  private example

  constructor(private configService: ConfigService) {
    this.example = this.configService.get('example')
  }

  createHttpOptions(): HttpModuleOptions {
    return {
      baseURL: this.example.host,
      headers: {
        token: this.example.token
      }
    };
  }

}