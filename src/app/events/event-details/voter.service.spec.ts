import { TestBed, async } from '@angular/core/testing';
import { VoterService } from './voter.service';
import { ISession } from '../shared';
import { of } from 'rxjs';
// import { Pipe } from '@angular/core';
// import { EventsAppComponent } from './app/events-app.component';

// tslint:disable: no-inferrable-types
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        // EventsAppComponent,
        // Pipe
      ],
    }).compileComponents();
  }));

  let voterService: VoterService;
  let mockHttp: any;
  let eventId: number;
  let sessionId: number;
  let voterName: string;

  beforeEach(async(() => {
    mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post']);
    voterService = new VoterService(mockHttp);

  }));

  describe('deleteVoter', () => {
    it('should remove the voter from the list of voters', () => {
      eventId = 3; sessionId = 6; voterName = 'joe';
      const session = { id: sessionId, voters: ['joe', 'john']};
      mockHttp.delete.and.returnValue(of(false));
      voterService.deleteVoter(eventId, session as ISession, voterName);
      expect(session.voters.length).toBe(1);
      expect(session.voters[0]).toBe('john');
    });
    it('should call http.delete with the right URL', () => {
      eventId = 3; sessionId = 6; voterName = 'joe';
      const session = { id: sessionId, voters: ['joe', 'john']};
      mockHttp.delete.and.returnValue(of(false));
      voterService.deleteVoter(eventId, session as ISession, voterName);
      const url = `/api/events/${eventId}/sessions/${sessionId}/voters/${voterName}`;
      expect(mockHttp.delete).toHaveBeenCalledWith(url);
    });
  });

  describe('addVoter', () => {
    it('should add the voter to the list of voters', () => {
      eventId = 3; sessionId = 6; voterName = 'orin';
      const session = { id: sessionId, voters: ['joe', 'john']};
      mockHttp.post.and.returnValue(of(true));
      voterService.addVoter(eventId, session as ISession, voterName);
      expect(session.voters.length).toBe(3);
      expect(session.voters[2]).toBe(voterName);
    });
    it('should call http.post with the right URL', () => {
      eventId = 3; sessionId = 6; voterName = 'joe';
      const session = { id: sessionId, voters: ['john']};
      mockHttp.post.and.returnValue(of(true));
      voterService.addVoter(eventId, session as ISession, voterName);
      const url = `/api/events/${eventId}/sessions/${sessionId}/voters/${voterName}`;
      expect(mockHttp.post).toHaveBeenCalledWith(url, {}, jasmine.any(Object));
      expect(session.voters.length).toBe(2);
    });
  });
});
