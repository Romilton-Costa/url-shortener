import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { UrlService } from './url.service';
import { Response } from 'express';
@Controller('url')
export class UrlController {
    constructor(private readonly urlservice: UrlService){

    }
    @Post('shorten')
    shortenUrl(@Body('url') url: string): { shortUrl: string } {
      const shortUrl = this.urlservice.shortenUrl(url);
      return { shortUrl };
    }
    @Get(':shortUrl')
    redirect(@Param('shortUrl') shortUrl: string, @Res() res: Response) {
      const originalUrl = this.urlservice.getOriginalUrl(shortUrl);
      if (originalUrl) {
        return res.redirect(originalUrl);
      }
      return res.status(404).json({ message: 'URL not found' });
    }
}
