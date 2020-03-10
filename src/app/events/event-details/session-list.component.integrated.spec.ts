import { SessionListComponent } from './session-list.component';
import { ISession, DurationPipe } from '../shared';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { AuthService } from 'src/app/user/auth.service';
import { VoterService } from './voter.service';
import { UpvoteComponent } from './upvote.component';
import { CollapsibleWellComponent } from 'src/app/common';

describe('SessionListComponent', () => {
  let fixture: ComponentFixture<SessionListComponent>;
  let component: SessionListComponent;
  let element: HTMLElement;
  let debugEl: DebugElement;
  let mockAuthService;
  let mockVoterService;

  beforeEach( async(() => {
    mockAuthService = {
      isAuthenticated: () => true,
      currentUser: { userName: 'Joe'}
    };
    mockVoterService = {
      userHasVoted: () => true
    };

    TestBed.configureTestingModule({
      imports: [],
      declarations: [
        SessionListComponent,
        UpvoteComponent,
        DurationPipe,
        CollapsibleWellComponent
      ],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: VoterService, useValue: mockVoterService }
      ],
      schemas: []
    });
  }));

  beforeEach( () => {
    fixture = TestBed.createComponent(SessionListComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    element = fixture.nativeElement;
  });

  describe('initial display', () => {

    it('should have correct session title', () => {

      component.sessions =  [
        { id: 3, name: 'Session 1', presenter: 'Joe', duration: 1, level: 'beginner', abstract: 'abstract', voters: ['john', 'bob']}
      ] as ISession[];
      component.filterBy = 'all';
      component.sortBy = 'name';
      component.eventId = 4;

      component.ngOnChanges();
      fixture.detectChanges();

      expect(element.querySelector('[well-title]').textContent).toContain('Session 1');
    });
  });
});
