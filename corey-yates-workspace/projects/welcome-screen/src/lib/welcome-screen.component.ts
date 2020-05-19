import { Component, OnInit, Inject } from '@angular/core';
import { WelcomeScreenService } from './welcome-screen.service';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-welcomeScreen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./scss/welcome-screen.scss']
})
export class WelcomeScreenComponent implements OnInit {
  displayName: string;
  constructor(@Inject('env') private env, @Inject('routeName') private routeName,
    private welcomeScreenService: WelcomeScreenService, private router: Router) { }

  ngOnInit() {
    this.userProfile();
  }

  userProfile() {
    this.welcomeScreenService.getUserProfile().subscribe(res => {
      this.displayName = res.displayName;
      this.welcomeScreenService.currentUserInfo = res;
      this.welcomeScreenService.getUserApplications().subscribe(apps => {
        var newAppList = [];
        this.env.applications.forEach(app => {
          var groupNameIndex = app.adGroupName.findIndex(x => x == "Everyone");
          var groupIdIndex = apps.value.findIndex(x => x == app.groupId);
          var groupdId2Index = apps.value.findIndex(x => x == app.groupdId2);
          if (groupNameIndex != -1 || groupIdIndex != -1 || groupdId2Index != -1) {
            newAppList.push(app);
          }
        });
        this.welcomeScreenService.applicationList = newAppList;
        setTimeout(() => {
          this.router.navigate([this.routeName]);
        }, 2000);
      });
    }, error => {
      console.error(" Http get request to MS Graph failed" + JSON.stringify(error));
    });
  }

}
