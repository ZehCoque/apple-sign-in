export interface SignInWithApplePlugin {
    authorize(options?: SignInWithAppleOptions): Promise<SignInWithAppleResponse>;
    getState(params: {
        userId: string;
    }): Promise<{
        state: string;
    }>;
}
export interface SignInWithAppleOptions {
    clientId: string;
    redirectURI: string;
    scopes?: string;
    state?: string;
    nonce?: string;
}
export interface SignInWithAppleResponse {
    response: {
        user: string | null;
        email: string | null;
        givenName: string | null;
        familyName: string | null;
        identityToken: string;
        authorizationCode: string;
    };
}
