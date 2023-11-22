import { Controller, Get, Query } from "@nestjs/common";
import { ApiOperation, ApiTags, ApiResponse } from "@nestjs/swagger";
import { ScraperRequestDto } from "./dto/scraper-request.dto";
import { ScraperService } from "./scraper.service";
import { ScraperResponseDto } from "./dto/scraper-response.dto";

@Controller("scraper")
@ApiTags("scraper")
export class ScraperController {
  constructor(private readonly scraperService: ScraperService) {}

  @ApiOperation({
    summary: "Initiate a new scraping process for the provided URL",
  })
  @ApiResponse({
    status: 200,
    description: "Successful response with ScraperResponseDto",
    type: ScraperResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: "Bad Request: Invalid input data",
  })
  @ApiResponse({
    status: 401,
    description: "Unauthorized: User authentication failed",
  })
  @ApiResponse({
    status: 403,
    description: "Forbidden: Insufficient permissions to access the resource",
  })
  @ApiResponse({
    status: 404,
    description: "Not Found: Resource not found",
  })
  @ApiResponse({
    status: 500,
    description:
      "Internal Server Error: An unexpected error occurred on the server",
  })

  // TODO: Complete the Swagger response documentation. Ensure the following:
  //  1. Document the 200 OK response, utilizing the ScraperResponseDto. This includes a detailed description and potential example values for the fields.
  //  2. Outline common error responses, such as 400 Bad Request or 404 Not Found, including what circumstances might trigger these errors.
  @Get("scrape")
  scrapeRequest(
    @Query() scrapeRequestDto: ScraperRequestDto
  ): Promise<ScraperResponseDto> {
    return this.scraperService.scrape(scrapeRequestDto.url);
  }
}
