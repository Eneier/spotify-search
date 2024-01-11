export interface TokenResponse {
    access_token: string;
    token_type: string;
    expires_in: number;
}

const CLIENT_ID='136215788d144a71bed4481aa8c2f78e';
const CLIENT_SECRET='dcdcd4d4a5c24ef19ca7b5351d4229b1';
const TOKEN_ENDPOINT='https://accounts.spotify.com/api/token';

export const getToken = async (): Promise<TokenResponse | null> => {
    const clientId: string | undefined = CLIENT_ID;
    const clientSecret: string | undefined = CLIENT_SECRET;
    const tokenEndpoint: string | undefined = TOKEN_ENDPOINT;

    if (clientId && clientSecret && tokenEndpoint) {
        const requestBody = new URLSearchParams();
        requestBody.append('grant_type', 'client_credentials');
        requestBody.append('client_id', clientId);
        requestBody.append('client_secret', clientSecret);


        const requestOptions: RequestInit = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: requestBody.toString(),
        };

        try {
            const response = await fetch(tokenEndpoint, requestOptions);
            const data: TokenResponse = await response.json();

            if (data.access_token) {
                localStorage.setItem('access_token', data.access_token);
                localStorage.setItem('token_expiration', String(Date.now() + data.expires_in * 1000));
            }
            return data;

        } catch (error) {
            console.error('Error:', error);
            return null;
        }
    } else {
        console.error('clientId, clientSecret, tokenEndpoint are not defined');
        return null;
    }
}
