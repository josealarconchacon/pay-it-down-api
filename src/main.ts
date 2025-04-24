import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  // Enable CORS with configured origin
  app.enableCors({
    origin: configService.get("CORS_ORIGIN"),
  });

  // Enable validation pipes
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    })
  );

  // Set global prefix from config
  app.setGlobalPrefix(configService.get("API_PREFIX"));

  const port = configService.get("PORT");
  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}`);
}
bootstrap();
