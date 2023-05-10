namespace NodeJS {
  interface ProcessEnv extends NodeJS.ProcessEnv {
    EMAIL_SERVER: string;
    EMAIL_FROM: string;
    APPLE_ID: string;
    APPLE_TEAM_ID: string;
    APPLE_PRIVATE_KEY: string;
    APPLE_KEY_ID: string;
    AUTH0_ID: string;
    AUTH0_SECRET: string;
    AUTH0_DOMAIN: string;
    FACEBOOK_ID: string;
    FACEBOOK_SECRET: string;
    GITHUB_ID: string;
    GITHUB_SECRET: string;
    GOOGLE_ID: string;
    GOOGLE_SECRET: string;
    TWITTER_ID: string;
    TWITTER_SECRET: string;
    DATABASE_URL: string;
    SECRET: string;
    NEXT_PUBLIC_CLIENT_ID: string;
    NEXT_PUBLIC_CLIENT_SECRET: string;
    LOGIN_URL: string;
    token: string;
    account: string;
    user: string;
    accessToken: string;
    refreshToken: string;
    username: string;
  }
}
