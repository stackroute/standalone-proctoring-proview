import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

declare var ProctorClient3: any;

@Component({
  selector: 'app-talview-proctoring',
  templateUrl: './talview-proctoring.component.html',
  styleUrls: ['./talview-proctoring.component.css']
})
export class TalviewProctoringComponent implements OnInit {

  proctoringStatus: string;
  proctoringMsg: string;
  // talviewToken = 'U414299386';
  sessionTitle = 'Proctored Test Assessment by StackRoute';
  // profileId = 'basav-b5602e77-ca7a-4f41-a841-7131f639a086';
  isIDRequired = true;
  // session = '67825a32-8d53-4926-a70b-db42195fdd0b';
  clear = false;
  screen = true;
  skipHardwareTest = false;
  previewStyle = 'position: fixed; bottom: 0px;';
  proctorDetails: FormGroup;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer2: Renderer2,
    private fb: FormBuilder
  ) {
    this.proctorDetails = this.fb.group({
      talviewToken: new FormControl(''),
      profileId: new FormControl(''),
      session: new FormControl(''),
    });
  }

  ngOnInit() {}

  loadJavaScriptAndStartProctoring() {
    console.log('Talview init token', this.proctorDetails.get('talviewToken').value);
    console.log('Profile ID is:: ', this.proctorDetails.get('profileId').value);
    console.log('Session id is', this.proctorDetails.get('session').value);
    const script = this.renderer2.createElement('script');
    script.type = `text/javascript`;
    script.text = `
      (function (i, s, o, g, r, a, m) {
        i['TalviewProctor'] = r; i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date(); a = s.createElement(o),
            m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
      })(window, document, 'script', 'https://cdn.proview.io/v5/init.js', 'tv');
      tv('init', '${this.proctorDetails.get('talviewToken').value}', {
          sessionTitle: '${this.sessionTitle}',
          profileId: '${this.proctorDetails.get('profileId').value}',
          isIDRequired: ${this.isIDRequired},
          session: '${this.proctorDetails.get('session').value}',
          clear: ${this.clear},
          screen: ${this.screen},
          skipHardwareTest: ${this.skipHardwareTest},
          previewStyle: '${this.previewStyle}',
          initCallback: function (err, id, a, v, s) {
              var a = document.createElement('a');
              a.setAttribute('target', '_blank');
              a.innerText = 'Open Session';
              a.setAttribute('href', 'https://appv5.proview.io/embedded/' + id); //embedded link
              document.getElementById('content').prepend(a);
          }
      });`;

    this.renderer2.appendChild(this.document.body, script);
  }

  onProctoringInitialised(error, sessionPlaybackId, isAudioCaptured, isVideoCaptured, isScreenCaptured) {
    this.proctoringMsg = `Proctoring initialised, check here https://appv5.proview.io/embedded/${sessionPlaybackId}`;
  }

  onProctoringStopped() {
    this.proctoringMsg = `Proctoring is now Stopped`;
  }

  onStartProctoring() {
    this.loadJavaScriptAndStartProctoring();
  }

  onStopProctoring() {
    ProctorClient3.stop(() => {
      this.onProctoringStopped();
    });
  }
}
