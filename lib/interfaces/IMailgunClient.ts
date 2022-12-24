/* eslint-disable camelcase */
import DomainClient from '../Classes/Domains/domains';
import EventClient from '../events';
import IpPoolsClient from '../ip-pools';
import IpsClient from '../ips';
import ListsClient from '../Classes/MailingLists/mailingLists';
import MessagesClient from '../messages';
import RoutesClient from '../routes';
import StatsClient from '../stats';
import SuppressionClient from '../Classes/suppressions';
import ValidateClient from '../Classes/Validations/validate';
import WebhookClient from '../webhooks';

export interface IMailgunClient {
    domains: DomainClient;
    webhooks: WebhookClient;
    events: EventClient;
    stats: StatsClient;
    suppressions: SuppressionClient;
    messages: MessagesClient;
    routes: RoutesClient;
    validate: ValidateClient;
    ips: IpsClient;
    ip_pools: IpPoolsClient;
    lists: ListsClient;
}
