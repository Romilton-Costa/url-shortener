import { Injectable } from '@nestjs/common';
import *  as shortid from 'shortid';
@Injectable()
export class UrlService {
    private Urlmap= new Map<string, string>();

    shortenUrl(OriginalUrl: string): string{
        const shortUrl=shortid.generate();
        this.Urlmap.set(shortUrl, OriginalUrl);
        return shortUrl;
    }

    getOriginalUrl(shortUrl:string):string | undefined{
        return this.Urlmap.get(shortUrl);
    }
}
