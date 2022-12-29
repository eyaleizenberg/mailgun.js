export type APIWebhook = {
    url?: string;
    urls?: string[];
};
export type WebhookResponseBody = {
    message: string;
    webhook: APIWebhook;
};
export type WebhookResponse = {
    status: number;
    body: WebhookResponseBody;
};
export type WebhookList = {
    [id: string]: {
        urls: string[];
    };
};
export type WebhooksQuery = {
    limit?: number;
    skip?: number;
};
export type ValidationResponse = {
    code: number;
    message: string;
};
