import { IsString } from 'class-validator';

export class CreateMessageDto {
  @IsString() // Checks if the content is a string
  content: string;
}
