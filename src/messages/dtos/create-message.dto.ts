import { IsString } from 'class-validator';

// DTO --> Kind of like a model in express js
// class validator is somewhat like Joi NPM Package

export class CreateMessageDto {
  @IsString() // Checks if the content is a string
  content: string;
}
