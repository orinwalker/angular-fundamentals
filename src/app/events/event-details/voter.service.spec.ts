import { TestBed, async } from '@angular/core/testing';
import { VoterService } from './voter.service';
import { ISession } from '../shared';
import { of } from 'rxjs';
// import { Pipe } from '@angular/core';
// import { EventsAppComponent } from './app/events-app.component';
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

  beforeEach(async(() => {
    mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post']);
    voterService = new VoterService(mockHttp);
  }));

  describe('deleteVoter', () => {
    it('should remove the voter from the list of voters', () => {
      const session = { id: 6, voters: ['joe', 'john']};
      mockHttp.delete.and.returnValue(of(false));
      console.log(session);
      voterService.deleteVoter(3, session as ISession, 'joe');
      expect(session.voters.length).toBe(1);
      expect(session.voters[0]).toBe('john');
    });
  });

  describe('addVoter', () => {
    it('should add the voter to the list of voters', () => {
      const session = { id: 6, voters: ['joe', 'john']};
      mockHttp.post.and.returnValue(of(true));
      console.log(session);
      voterService.addVoter(3, session as ISession, 'orin');
      expect(session.voters.length).toBe(3);
      expect(session.voters[2]).toBe('orin');
    });
  });

  // it('VoterService', () => {

  //   expect(true).toBe(true);
  // });
  // it('should be false', () => {
  //   expect(false).toBe(false);
  // });
});
