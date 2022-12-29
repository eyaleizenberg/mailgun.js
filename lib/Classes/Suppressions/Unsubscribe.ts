import { SuppressionModels } from '../../Enums';
import { IUnsubscribe } from '../../Interfaces/Suppressions';
import { UnsubscribeData } from '../../Types/Suppressions';

import Suppression from './Suppression';

export default class Unsubscribe extends Suppression implements IUnsubscribe {
    address: string;
    tags: string[];
    /* eslint-disable camelcase */
    created_at: Date;

    constructor(data: UnsubscribeData) {
      super(SuppressionModels.UNSUBSCRIBES);
      this.address = data.address;
      this.tags = data.tags;
      this.created_at = new Date(data.created_at);
    }
}
