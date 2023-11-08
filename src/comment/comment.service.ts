import { Injectable } from '@nestjs/common';

@Injectable()
export class CommentService {
  findUserComments(userId: string) {
    return 'this is the comment of the user ' + userId;
  }
}
