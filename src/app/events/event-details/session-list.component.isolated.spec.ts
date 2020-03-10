import { SessionListComponent } from './session-list.component';
import { ISession } from '../shared';

describe('SessionListComponent', () => {
  let component: SessionListComponent;
  const mockAuthService = null;
  const mockVoterService = null;

  beforeEach(() => {
    component = new SessionListComponent(mockAuthService, mockVoterService);
  });

  describe('ngChanges', () => {

    it('should filter the sessions correctly', () => {

      component.sessions = [
        { name: 'session 1', level: 'intermediate' },
        { name: 'session 2', level: 'beginner'} ,
        { name: 'session 3', level: 'intermediate' },
      ] as ISession[];
      component.filterBy = 'all';
      component.sortBy = 'name';
      component.eventId = 3;

      component.ngOnChanges();

      expect(component.visibleSessions[0].name).toBe('session 3');
    });
  });
});
