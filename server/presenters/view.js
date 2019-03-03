// @flow
import { View } from '../models';
import { presentUser } from '../presenters';

function present(ctx: Object, view: View) {
  return {
    id: view.id,
    documentId: view.documentId,
    count: view.count,
    firstViewedAt: view.createdAt,
    lastViewedAt: view.updatedAt,
    user: presentUser(ctx, view.user),
  };
}

export default present;