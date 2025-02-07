import { INestApplication } from '@nestjs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { SecuritySchemeObject } from '@nestjs/swagger/dist/interfaces/open-api-spec.interface'
import { apiReference } from '@scalar/nestjs-api-reference'


export function SwaggerConfig(app: INestApplication): void
{
    // configs
    const document = new DocumentBuilder()
        .setTitle('microservice-tcp')
        .setDescription('Create a microservice with tcp protocol just for test!')
        .setVersion('v0.0.1')
        .addBearerAuth(swaggerAuthConfig(), 'Authorization')
        .build()

    const SwaggerDocument = SwaggerModule.createDocument(app, document)
    app.use(
        '/docs',
        apiReference({
            theme: 'deepSpace',
            spec: {
                content: SwaggerDocument,
            },
        }),
    )
}

function swaggerAuthConfig(): SecuritySchemeObject
{
    return {
        type: 'http',
        bearerFormat: 'JWT',
        in: 'header',
        scheme: 'bearer',
    }
}
