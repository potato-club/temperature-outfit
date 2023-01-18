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
      callbackURL: 'http://www.example.com/auth/google/callback',
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    params: GoogleCallbackParameters,
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
        expiresAt: params.expires_in,
        tokenType: params.token_type,
        scope: params.scope,
        idToken: params.id_token,
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
