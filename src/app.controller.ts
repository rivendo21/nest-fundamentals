import { Controller, Get } from "@nestjs/common";

@Controller("/fundamentals")
export class AppController {
  @Get("/greetings")
  getRootRoute() {
    return "hi there";
  }
  @Get("/later")
  getByeRoute() {
    return "bye";
  }
}
