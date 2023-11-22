import { ApiProperty } from '@nestjs/swagger';
import { IsUrl } from 'class-validator';

export class ScraperRequestDto {
  @ApiProperty({
    description: 'Website Url',
    required: true,
    example: 'https://uae.voxcinemas.com/showtimes',
  })
  //TODO: Implement validation for the 'url' field to ensure it contains a valid URL format.
  // Ensure to handle edge cases, such as trailing slash consistency, allowed protocols (http, https)
  @IsUrl({}, { message: 'Invalid URL format' })
  url: string;
}
