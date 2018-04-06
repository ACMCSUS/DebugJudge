import {Inject, Injectable} from '@angular/core';
import {ApiWebSocketService} from "./api-ws.service";
import {acmcsus} from "./proto/dbgjdg_pb";
import CompetitionState = acmcsus.debugjudge.CompetitionState;
import C2SMessage = acmcsus.debugjudge.C2SMessage;

export interface ApiAdminService {

  changeCompetitionState(state: CompetitionState): void;
}

@Injectable()
export class ApiAdminServiceImpl implements ApiAdminService {

  constructor(@Inject('ApiWebSocketService') private apiWs: ApiWebSocketService) {
  }

  changeCompetitionState(state: CompetitionState) {
    this.apiWs.sendMessage(C2SMessage.create({
      a2sMessage: {
        changeCompetitionStateMessage: {
          state: state,
        },
      },
    }));
  }
}
