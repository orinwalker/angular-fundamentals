import { SessionListComponent } from './session-list.component';
import { ISession } from '../shared';

// tslint:disable: prefer-const
// tslint:disable: no-angle-bracket-type-assertion
describe('SessionListComponent', () => {
  let component: SessionListComponent;
  let mockAuthService;
  let mockVoterService;

  beforeEach(() => {
    component = new SessionListComponent(mockAuthService, mockVoterService);
  });

  describe('ngChanges', () => {

    it('should filter the sessions correctly', () => {

      component.sessions = <ISession[]> [
        { name: 'session 1', level: 'intermediate' },
        { name: 'session 2', level: 'beginner'} ,
        { name: 'session 3', level: 'intermediate' },
      ];
      component.filterBy = 'all';
      component.sortBy = 'name';
      component.eventId = 3;

      component.ngOnChanges();

      expect(component.visibleSessions[0].name).toBe('session 3');
      console.log(component.visibleSessions);
    });
  });
});
