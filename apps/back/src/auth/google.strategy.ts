import {
  GoogleCallbackParameters,
  Profile,
  Strategy,
} from 'passport-google-oauth20';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:3333/auth/google/callback',
      scope: ['email', 'profile'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: Profile,
  ): Promise<any> {
    // update도 해줘야 함

    const user = await this.authService.validateUser(
      {
        type: 'oauth',
        provider: 'google',
        providerAccountId: profile.id,
        refreshToken,
        accessToken,
      },
      {
        name: profile.displayName,
        email: profile.emails[0].value,
        imageUrl: profile.photos[0].value,
      },
    );

    if (!user) {
      throw new UnauthorizedException();
    }

    return {
      name: profile.displayName,
      email: profile.emails[0].value,
      imageUrl: profile.photos[0].value,
    };
  }
}
